import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

// ---------------------------
// Types
// ---------------------------
interface CourseFormData {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  alt_phone?: string;
  dob?: string;
  course: string;
  resume_path?: string; // e.g. "resumes/john_doe_cv.pdf"
}

// ---------------------------
// Environment Variables
// ---------------------------
const SUPABASE_URL = Deno.env.get("PROJECT_URL")!;
const SERVICE_ROLE_KEY = Deno.env.get("SERVICE_ROLE_KEY")!;
const SENDGRID_API_KEY = Deno.env.get("SENDGRID_API_KEY")!;
const FROM_EMAIL = Deno.env.get("FROM_EMAIL") ?? "info.techrayos@gmail.com";
const COMPANY_EMAIL = Deno.env.get("COMPANY_EMAIL") ?? "info.techrayos@gmail.com";
const ALLOWED_ORIGINS = (
  Deno.env.get("ALLOWED_ORIGINS") ||
  "http://localhost:5173,https://www.techrayos.com,https://techrayos.com,https://techrayos.vercel.app"
).split(",");

const supabase = createClient(SUPABASE_URL, SERVICE_ROLE_KEY);

// ---------------------------
// Helpers
// ---------------------------
function getCorsHeaders(origin?: string) {
  return {
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
    "Access-Control-Allow-Origin": origin ?? "https://techrayos.com",
  };
}

// ---------------------------
// Validation Function
// ---------------------------
function validate(body: CourseFormData) {
  if (!body) throw new Error("Missing body");

  const assert = (cond: boolean, msg: string) => {
    if (!cond) throw new Error(msg);
  };

  assert(body.first_name?.trim()?.length > 0, "Invalid first_name");
  assert(body.last_name?.trim()?.length > 0, "Invalid last_name");
  assert(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email), "Invalid email");
  assert(body.phone?.trim()?.length >= 7, "Invalid phone");

  // ✅ fix alt_phone optional check
  if (body.alt_phone && body.alt_phone.trim() !== "")
    assert(body.alt_phone.trim().length >= 7, "Invalid alt_phone");

  assert(body.course?.trim()?.length > 0, "Invalid course");

  if (body.resume_path) {
    assert(!body.resume_path.includes(".."), "Invalid resume_path");
    assert(body.resume_path.startsWith("resumes/"), "Invalid resume path");
  }

  return true;
}

// ---------------------------
// Main Handler
// ---------------------------
Deno.serve(async (req: Request) => {
  const origin = req.headers.get("origin") ?? undefined;
  const corsHeaders = getCorsHeaders(origin);

  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  // Reject disallowed origins
  if (!origin || !ALLOWED_ORIGINS.includes(origin)) {
    console.warn("❌ Forbidden origin:", origin);
    return new Response("Forbidden", { status: 403, headers: corsHeaders });
  }

  try {
    console.info("🚀 Submission received from:", origin);

    const body: CourseFormData = await req.json();
    console.log("📩 Received payload:", body);

    validate(body);

    const insertPayload = {
      first_name: body.first_name.trim(),
      last_name: body.last_name.trim(),
      email: body.email.toLowerCase().trim(),
      phone: body.phone.trim(),
      alt_phone: body.alt_phone?.trim() || null,
      dob: body.dob || null,
      course: body.course.trim(),
      resume_path: body.resume_path || null,
    };

    console.info("🧠 Inserting data:", insertPayload);

    const { data, error } = await supabase
      .from("course_submissions")
      .insert([insertPayload])
      .select("id, created_at");

    if (error) {
      console.error("❌ DB insert failed:", error);
      throw new Error("DB insert failed: " + error.message);
    }

    console.info("✅ DB insert success:", data);

    // Generate signed resume URL (if exists)
    let resumeSignedUrl: string | null = null;
    if (body.resume_path) {
      const storagePath = body.resume_path.replace(/^resumes\//, "");
      const signedResp = await supabase.storage
        .from("resumes")
        .createSignedUrl(storagePath, 60 * 15);
      if (!signedResp.error) resumeSignedUrl = signedResp.signedUrl;
    }

    // Prepare email
    const applicantName = `${insertPayload.first_name} ${insertPayload.last_name}`;
    const subject = `📩 New Internship Submission — ${applicantName}`;
    const resumeLink = resumeSignedUrl
      ? `<a href="${resumeSignedUrl}" target="_blank">View Resume</a>`
      : "No resume uploaded";

    const html = `
      <div style="font-family:Inter, system-ui; background:#f3f4f6;padding:24px;">
        <div style="max-width:680px;margin:0 auto;background:#fff;border-radius:12px;padding:22px;box-shadow:0 6px 18px rgba(15,23,42,0.06);">
          <h2>📥 New Internship Application</h2>
          <p><strong>Name:</strong> ${applicantName}</p>
          <p><strong>Email:</strong> ${insertPayload.email}</p>
          <p><strong>Phone:</strong> ${insertPayload.phone}</p>
          <p><strong>Alt Phone:</strong> ${insertPayload.alt_phone ?? "N/A"}</p>
          <p><strong>Course:</strong> ${insertPayload.course}</p>
          <p><strong>DOB:</strong> ${insertPayload.dob ?? "N/A"}</p>
          <p><strong>Resume:</strong> ${resumeLink}</p>
          <hr style="margin:20px 0;"/>
          <p style="font-size:12px;color:#999">Record ID: ${
            data?.[0]?.id ?? "—"
          } • ${data?.[0]?.created_at}</p>
        </div>
      </div>
    `;

    // Send email via SendGrid
    const res = await fetch("https://api.sendgrid.com/v3/mail/send", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${SENDGRID_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        personalizations: [
          { to: [{ email: COMPANY_EMAIL }], subject },
        ],
        from: { email: FROM_EMAIL, name: "Techrayos" },
        content: [
          { type: "text/html", value: html },
        ],
      }),
    });

    if (!res.ok) {
      console.error("📨 SendGrid error:", await res.text());
    } else {
      console.log("📨 Email sent successfully");
    }

    // ✅ Return success
    return new Response(
      JSON.stringify({
        success: true,
        id: data?.[0]?.id,
        created_at: data?.[0]?.created_at,
      }),
      {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  } catch (err) {
    console.error("❌ Submission error:", err);
    return new Response(
      JSON.stringify({ success: false, message: err.message }),
      { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
