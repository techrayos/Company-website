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
const SUPABASE_URL =
  Deno.env.get("PROJECT_URL") ?? "https://smmorshvappvpgcdmwdv.supabase.co";
const SERVICE_ROLE_KEY = Deno.env.get("SERVICE_ROLE_KEY")!;
const SENDGRID_API_KEY = Deno.env.get("SENDGRID_API_KEY")!;
const FROM_EMAIL = Deno.env.get("FROM_EMAIL") ?? "info.techrayos@gmail.com";
const COMPANY_EMAIL =
  Deno.env.get("COMPANY_EMAIL") ?? "info.techrayos@gmail.com";
const ALLOWED_ORIGINS = (
  Deno.env.get("ALLOWED_ORIGINS") ||
  "http://localhost:5173,https://www.techrayos.com"
).split(",");

const supabase = createClient(SUPABASE_URL, SERVICE_ROLE_KEY);

// ---------------------------
// Helpers
// ---------------------------
function getCorsHeaders(origin?: string) {
  const headers: Record<string, string> = {
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers":
      "authorization, x-client-info, apikey, content-type",
  };
  if (origin && ALLOWED_ORIGINS.includes(origin)) {
    headers["Access-Control-Allow-Origin"] = origin;
  } else {
    headers["Access-Control-Allow-Origin"] = "null";
  }
  return headers;
}

function validate(body: CourseFormData) {
  if (!body) throw new Error("Missing body");

  const assert = (cond: boolean, msg: string) => {
    if (!cond) throw new Error(msg);
  };

  assert(
    typeof body.first_name === "string" && body.first_name.trim().length <= 100,
    "Invalid first_name"
  );
  assert(
    typeof body.last_name === "string" && body.last_name.trim().length <= 100,
    "Invalid last_name"
  );
  assert(
    typeof body.email === "string" &&
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email),
    "Invalid email"
  );
  assert(
    typeof body.phone === "string" &&
      body.phone.trim().length >= 7 &&
      body.phone.trim().length <= 20,
    "Invalid phone"
  );
  if (body.alt_phone) {
    assert(
      body.alt_phone.trim().length >= 7 && body.alt_phone.trim().length <= 20,
      "Invalid alt_phone"
    );
  }
  assert(
    typeof body.course === "string" && body.course.trim().length <= 200,
    "Invalid course"
  );
  if (body.resume_path) {
    assert(!body.resume_path.includes(".."), "Invalid resume_path");
    assert(
      body.resume_path.startsWith("resumes/"),
      "resume path must start with 'resumes/'"
    );
  }
  return true;
}

// ---------------------------
// Main Handler
// ---------------------------
Deno.serve(async (req: Request) => {
  const origin = req.headers.get("origin") ?? undefined;
  const corsHeaders = getCorsHeaders(origin);

  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    console.log("🚀 Function triggered from:", origin);

    const body: CourseFormData = await req.json();
    validate(body);

    // Prepare insert payload
    const insertPayload: Record<string, any> = {
      first_name: body.first_name?.trim(),
      last_name: body.last_name?.trim(),
      email: body.email?.toLowerCase().trim(),
      phone: body.phone?.trim(),
      alt_phone: body.alt_phone ? body.alt_phone.trim() : null,
      dob: body.dob || null,
      course: body.course?.trim(),
      resume_path: body.resume_path || null,
    };

    // Replace undefined values with null
    Object.keys(insertPayload).forEach((k) => {
      if (insertPayload[k] === undefined) insertPayload[k] = null;
    });

    console.log("🧠 Inserting data:", insertPayload);

    const { data, error } = await supabase
      .from("course_submissions")
      .insert([insertPayload])
      .select("id, created_at");

    if (error) {
      console.error("❌ Database insert failed:", error);
      throw new Error("DB insert failed: " + error.message);
    }

    console.log("✅ DB insert success:", data);

    // Generate signed URL (if resume uploaded)
    let resumeSignedUrl = null;
    if (body.resume_path) {
      const storagePath = body.resume_path.replace(/^resumes\//, "");
      const signedResp = await supabase.storage
        .from("resumes")
        .createSignedUrl(storagePath, 60 * 15);

      if (signedResp.error) {
        console.warn("⚠️ Signed URL failed:", signedResp.error);
      } else {
        resumeSignedUrl = signedResp.signedUrl;
      }
    }

    // Email content
    const applicantFullName = `${insertPayload.first_name} ${insertPayload.last_name}`;
    const emailSubject = `📩 New Course Submission — ${applicantFullName}`;
    const resumeButtonHtml = resumeSignedUrl
      ? `<a href="${resumeSignedUrl}" target="_blank" style="display:inline-block;padding:10px 16px;border-radius:8px;text-decoration:none;border:1px solid #2563eb;">View Resume</a>`
      : `<span style="color:#6b7280">No resume uploaded</span>`;

    const emailHtml = `
      <div style="font-family:Inter, system-ui, -apple-system; background:#f3f4f6;padding:24px;">
        <div style="max-width:680px;margin:0 auto;background:#fff;border-radius:12px;padding:22px;box-shadow:0 6px 18px rgba(15,23,42,0.06);">
          <h2>📥 New Course Submission</h2>
          <p>A new applicant has submitted the course form.</p>
          <table style="width:100%;border-collapse:collapse;">
            <tr><td><b>Name</b></td><td>${applicantFullName}</td></tr>
            <tr><td><b>Email</b></td><td>${insertPayload.email}</td></tr>
            <tr><td><b>Phone</b></td><td>${insertPayload.phone}</td></tr>
            <tr><td><b>Alt Phone</b></td><td>${
              insertPayload.alt_phone ?? "N/A"
            }</td></tr>
            <tr><td><b>Course</b></td><td>${insertPayload.course}</td></tr>
            <tr><td><b>DOB</b></td><td>${insertPayload.dob ?? "N/A"}</td></tr>
            <tr><td><b>Resume</b></td><td>${resumeButtonHtml}</td></tr>
          </table>
          <p style="font-size:12px;color:#999">Record ID: ${
            data?.[0]?.id ?? "—"
          } • ${data?.[0]?.created_at}</p>
        </div>
      </div>
    `;

    const emailPlain = `
New Course Submission

Name: ${applicantFullName}
Email: ${insertPayload.email}
Phone: ${insertPayload.phone}
Alt Phone: ${insertPayload.alt_phone ?? "N/A"}
Course: ${insertPayload.course}
DOB: ${insertPayload.dob ?? "N/A"}
Resume: ${resumeSignedUrl ?? "No resume uploaded"}
`;

    // Send email via SendGrid
    const sendgridRes = await fetch("https://api.sendgrid.com/v3/mail/send", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${SENDGRID_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        personalizations: [
          { to: [{ email: COMPANY_EMAIL }], subject: emailSubject },
        ],
        from: { email: FROM_EMAIL, name: "Techrayos" },
        content: [
          { type: "text/plain", value: emailPlain },
          { type: "text/html", value: emailHtml },
        ],
      }),
    });

    if (!sendgridRes.ok) {
      const text = await sendgridRes.text();
      console.error("📨 SendGrid error:", text);
      throw new Error("Email delivery failed");
    }

    console.log("📨 Email sent successfully.");

    // ✅ Final success response
    return new Response(JSON.stringify({ success: true }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("❌ submission error details:", err);
    return new Response(
      JSON.stringify({
        error: err?.message || "Internal server error",
        stack: err?.stack || null,
      }),
      { status: 500, headers: corsHeaders }
    );
  }
});
