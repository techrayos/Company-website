import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

// ✅ Types for incoming request body
interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  recaptcha_token: string;
  honeypot?: string;
  form_timestamp?: number;
}

// ✅ Load secrets from Supabase environment
const SUPABASE_URL = Deno.env.get("PROJECT_URL")!;
const SERVICE_ROLE_KEY = Deno.env.get("SERVICE_ROLE_KEY")!;
// const RECAPTCHA_SECRET = Deno.env.get("RECAPTCHA_SECRET")!; vercel
const RECAPTCHA_SECRET = Deno.env.get("RECAPTCHA_SECRET_LOCAL")!;  //localhost
const SENDGRID_API_KEY = Deno.env.get("SENDGRID_API_KEY")!;
const FROM_EMAIL = Deno.env.get("FROM_EMAIL")!;
const COMPANY_EMAIL = Deno.env.get("COMPANY_EMAIL")!;

const supabase = createClient(SUPABASE_URL, SERVICE_ROLE_KEY);

// ✅ CORS Handling
function getCorsHeaders(req: Request): Record<string, string> {
  const allowedOrigins = [
    "http://localhost:5173",
    "https://techrayos-portfolio.vercel.app",
  ];
  const origin = req.headers.get("origin") || "";
  return {
    "Access-Control-Allow-Origin": allowedOrigins.includes(origin)
      ? origin
      : "https://techrayos-portfolio.vercel.app",
    "Access-Control-Allow-Headers":
      "authorization, x-client-info, apikey, content-type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
  };
}

// 🧠 Verify reCAPTCHA
async function verifyRecaptcha(token: string, remoteip?: string) {
  const params = new URLSearchParams();
  params.append("secret", RECAPTCHA_SECRET);
  params.append("response", token);
  if (remoteip) params.append("remoteip", remoteip);

  const resp = await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    body: params,
  });
  if (!resp.ok) return { success: false };
  return resp.json();
}

// 📩 Send Email with SendGrid
async function sendEmail(name: string, userEmail: string, message: string) {
  try {
    const response = await fetch("https://api.sendgrid.com/v3/mail/send", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${SENDGRID_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        personalizations: [
          {
            to: [{ email: userEmail }],
            bcc: [{ email: COMPANY_EMAIL }],
            subject: `📩 Thank you ${name}, we received your message!`,
          },
        ],
        from: { email: FROM_EMAIL, name: "Techrayos" },
        reply_to: { email: COMPANY_EMAIL },
        content: [
          {
            type: "text/html",
            value: `
              <div style="font-family:'Segoe UI',Tahoma,Verdana,sans-serif;background-color:#f9f9f9;padding:20px;">
                <div style="max-width:600px;background:#fff;border-radius:10px;padding:25px;margin:0 auto;box-shadow:0 4px 12px rgba(0,0,0,0.1);">
                  <h2 style="color:#2563eb;text-align:center;margin-bottom:20px;">
                    ✅ Thank You for Contacting Techrayos!
                  </h2>
                  <p style="font-size:16px;color:#333;">
                    Hi <strong>${name}</strong>,<br/>
                    We’ve successfully received your message. Our team will get back to you shortly.
                  </p>
                  <p style="font-size:16px;color:#333;">
                    <strong>Your Message:</strong><br/>
                    ${message}
                  </p>
                  <hr style="margin:20px 0;"/>
                  <p style="font-size:13px;color:#888;text-align:center;">
                    📩 This is an automated response from Techrayos.<br/>
                    Please do not reply to this email.
                  </p>
                </div>
              </div>`,
          },
        ],
      }),
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error("📩 SendGrid failed:", errText);
    } else {
      console.log(`✅ Email sent to ${userEmail}`);
    }
  } catch (err) {
    console.error("📩 SendGrid error:", err);
  }
}

// 🚀 Main handler
Deno.serve(async (req: Request) => {
  const corsHeaders = getCorsHeaders(req);

  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: corsHeaders,
    });
  }

  try {
    const body: ContactFormData = await req.json();
    const { name, email, phone, message, recaptcha_token, honeypot, form_timestamp } = body;

    // 🧾 Validation
    if (!name || !email || !phone || !message || !recaptcha_token) {
      return new Response(JSON.stringify({ error: "Missing required fields" }), {
        status: 400,
        headers: corsHeaders,
      });
    }

    if (honeypot && honeypot.trim() !== "") {
      console.warn("🚨 Honeypot triggered — bot detected.");
      return new Response(JSON.stringify({ error: "Bot detected" }), {
        status: 400,
        headers: corsHeaders,
      });
    }

    const now = Date.now();
    if (!form_timestamp || now - Number(form_timestamp) < 2000) {
      console.warn("🚨 Suspicious fast submission.");
      return new Response(JSON.stringify({ error: "Suspicious submission" }), {
        status: 400,
        headers: corsHeaders,
      });
    }

    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      req.headers.get("cf-connecting-ip") ||
      "unknown";

    // ✅ Verify reCAPTCHA
    const vr = await verifyRecaptcha(recaptcha_token, ip);
    if (!vr || !vr.success) {
      console.warn("🚨 reCAPTCHA failed:", vr);
      return new Response(
        JSON.stringify({ error: "Bot verification failed" }),
        { status: 400, headers: corsHeaders }
      );
    }

    // 🛡️ Rate limit per IP
    const { count } = await supabase
      .from("contact_submission_logs")
      .select("id", { count: "exact", head: false })
      .eq("ip", ip)
      .gte("created_at", "now() - interval '1 hour'");

    if (count && count >= 5) {
      return new Response(JSON.stringify({ error: "Too many requests" }), {
        status: 429,
        headers: corsHeaders,
      });
    }

    // 💾 Insert to DB
    const { error: insertErr } = await supabase
      .from("contact_submissions")
      .insert([{ name, email, phone, message }]);

    if (insertErr) {
      console.error("Insert error:", insertErr);
      return new Response(JSON.stringify({ error: "Database insert failed" }), {
        status: 500,
        headers: corsHeaders,
      });
    }

    // 📝 Log IP
    await supabase.from("contact_submission_logs").insert([{ ip }]);

    // 📩 Send email
    await sendEmail(name, email, message);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: corsHeaders,
    });
  } catch (err) {
    console.error("Unexpected error:", err);
    return new Response(JSON.stringify({ error: "Unexpected error" }), {
      status: 500,
      headers: corsHeaders,
    });
  }
});
