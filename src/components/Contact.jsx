import React, { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [theme, setTheme] = useState("light");

  // 🌗 Detect system theme
  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    setTheme(media.matches ? "dark" : "light");
    const listener = (e) => setTheme(e.matches ? "dark" : "light");
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, []);

  // 🧠 Load reCAPTCHA script
  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://www.google.com/recaptcha/api.js?render=${import.meta.env.VITE_RECAPTCHA_SITE_KEY}`;
    script.async = true;
    document.body.appendChild(script);

    const timestampField = document.getElementById("form_timestamp");
    if (timestampField) timestampField.value = Date.now();

    return () => {
      // cleanup to avoid duplicate script loads
      document.body.removeChild(script);
    };
  }, []);

  // ✍️ Input handler
  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  // 🚀 Form submit
  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    try {
      if (!window.grecaptcha) {
        toast.error("reCAPTCHA failed to load. Please refresh the page.");
        setLoading(false);
        return;
      }

      // ✅ Get reCAPTCHA token
      const token = await window.grecaptcha.execute(
        import.meta.env.VITE_RECAPTCHA_SITE_KEY,
        { action: "submit" }
      );

      if (!token) {
        toast.error("reCAPTCHA verification failed. Try again.");
        setLoading(false);
        return;
      }

      console.log("✅ reCAPTCHA token:", token);

      // 📩 Send data to Supabase Edge Function
      const res = await fetch(
        "https://smmorshvappvpgcdmwdv.supabase.co/functions/v1/submit-contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
          },
          body: JSON.stringify({
            ...form,
            recaptcha_token: token,
            honeypot: "",
            form_timestamp: Date.now(),
          }),
        }
      );

      const data = await res.json();
      if (res.ok) {
        toast.success("✅ Message sent successfully!");
        setForm({ name: "", email: "", phone: "", message: "" });
      } else {
        toast.error(`❌ ${data.error || "Failed to send message"}`);
      }
    } catch (err) {
      console.error("🚨 Error:", err);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section
      id="contact"
      className="py-16 sm:py-35 bg-white dark:bg-gradient-to-br from-gray-900 to-gray-800"
    >
      <Toaster position="top-center" reverseOrder={false} />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* 🧭 Left Info */}
          <div className="text-gray-900 dark:text-gray-50">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Partner with tech catalysts who
              <br className="hidden sm:block" /> transform ideas into impact.
            </h2>
            <p className="text-lg text-gray-500 dark:text-gray-300 mb-8 leading-relaxed">
              Ready to transform your ideas into powerful digital solutions?
              Let's discuss your next project and create something extraordinary
              together.
            </p>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              <p className="font-semibold text-white mb-2">Let's Talk!</p>
              <p>
                We're here to answer any questions and discuss your project
                needs.
              </p>
            </div>
          </div>

          {/* ✍️ Form */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Speak With Our Experts
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border text-gray-700 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-600 outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border text-gray-700 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-600 outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border text-gray-700 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-600 outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border text-gray-700 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-600 outline-none resize-none transition-all"
                ></textarea>
              </div>

              {/* honeypot & timestamp */}
              <input type="hidden" name="honeypot" value="" />
              <input type="hidden" name="form_timestamp" id="form_timestamp" />

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg hover:shadow-xl font-medium disabled:opacity-50"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
