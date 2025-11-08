import React, { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiPhoneCall } from "react-icons/fi";
import { Helmet } from "react-helmet-async";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false); // main submission state
  const [spinning, setSpinning] = useState(false); // spinner-only animation state
  const [success, setSuccess] = useState(false);

  // 🧠 Load reCAPTCHA safely
  useEffect(() => {
    let isMounted = true;

    const loadRecaptcha = () => {
      return new Promise((resolve, reject) => {
        if (window.grecaptcha) {
          resolve(window.grecaptcha);
          return;
        }

        const script = document.createElement("script");
        script.src = `https://www.google.com/recaptcha/api.js?render=${
          import.meta.env.VITE_RECAPTCHA_SITE_KEY
        }`;
        script.async = true;
        script.onload = () => resolve(window.grecaptcha);
        script.onerror = () => reject(new Error("Failed to load reCAPTCHA"));
        document.body.appendChild(script);
      });
    };

    loadRecaptcha()
      .then((grecaptcha) => {
        if (isMounted)
          grecaptcha.ready(() => console.log("✅ reCAPTCHA ready"));
      })
      .catch(() => toast.error("Failed to load reCAPTCHA. Please refresh."));

    const timestampField = document.getElementById("form_timestamp");
    if (timestampField) timestampField.value = Date.now();

    return () => {
      isMounted = false;
    };
  }, []);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  // 🚀 Form Submit
  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setSpinning(true);

    try {
      const grecaptcha = window.grecaptcha;
      if (!grecaptcha) {
        toast.error("reCAPTCHA not loaded. Please refresh.");
        setLoading(false);
        setSpinning(false);
        return;
      }

      await grecaptcha.ready(async () => {
        const token = await grecaptcha.execute(
          import.meta.env.VITE_RECAPTCHA_SITE_KEY,
          { action: "submit" }
        );

        if (!token) {
          toast.error("reCAPTCHA verification failed. Try again.");
          setLoading(false);
          setSpinning(false);
          return;
        }

        // Small wait for UX polish
        await new Promise((res) => setTimeout(res, 400));

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

        if (res.status === 429) {
          toast.error("⚠️ Too many messages, please try again later.");
        } else if (res.ok && data.success) {
          toast.success("✅ Message sent successfully!");
          setForm({ name: "", email: "", phone: "", message: "" });
          setSuccess(true);

          // Reset success after 2s
          setTimeout(() => setSuccess(false), 2000);
        } else {
          toast.error(`❌ ${data.error || "Failed to send message"}`);
        }
      });
    } catch (err) {
      console.error("🚨 Error:", err);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
      setTimeout(() => setSpinning(false), 800); // stop spinner slightly later for smoothness
    }
  }

  return (
    <>
    <Helmet>
        <title>Contact Us | Techrayos</title>
        <meta
          name="description"
          content="Get in touch with Techrayos for web, app, or digital transformation solutions. Let’s build something amazing together."
        />
        <meta property="og:url" content="https://www.techrayos.com/contact" />
      </Helmet>
    <section
      id="contact"
      className="py-16 bg-white dark:bg-gradient-to-br from-gray-900 to-gray-800 mt-20 transition-all duration-300"
    >
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: "#1e293b",
            color: "#fff",
            borderRadius: "10px",
            padding: "12px 18px",
          },
          success: { style: { background: "#16a34a", color: "#fff" } },
          error: { style: { background: "#dc2626", color: "#fff" } },
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
          {/* RIGHT CONTACT INFO SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center space-y-8 text-gray-900 dark:text-gray-50 bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-3xl p-8 border border-blue-500/20 shadow-[0_0_20px_rgba(59,130,246,0.25)]"
          >
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Get In Touch
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Connect with our team for inquiries, collaborations, or project
              discussions. We're always excited to bring new ideas to life.
            </p>

            {/* Email */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-4 group cursor-pointer"
              onClick={() =>
                (window.location.href = "mailto:info@techrayos.com")
              }
            >
              <motion.div
                whileHover={{
                  rotate: [0, -10, 10, 0],
                  transition: { duration: 0.5 },
                }}
                className="p-3 bg-blue-600/20 rounded-full group-hover:bg-blue-600/30 transition"
              >
                <FiMail className="text-blue-500 text-2xl group-hover:text-blue-400" />
              </motion.div>
              <div>
                <h4 className="font-semibold text-lg">Email Us</h4>
                <p className="text-blue-500 font-medium">
                  info@techrayos.com
                </p>
              </div>
            </motion.div>

            {/* Primary Contact */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-4 group cursor-pointer"
              onClick={() => (window.location.href = "tel:+918903231359")}
            >
              <motion.div
                whileHover={{
                  rotate: [0, -8, 8, 0],
                  transition: { duration: 0.5 },
                }}
                className="p-3 bg-green-600/20 rounded-full group-hover:bg-green-600/30 transition"
              >
                <FiPhone className="text-green-500 text-2xl group-hover:text-green-400" />
              </motion.div>
              <div>
                <h4 className="font-semibold text-lg">Call Us</h4>
                <p className="text-green-500 font-medium">+91 89032 31359</p>
              </div>
            </motion.div>

            {/* Alternate Contact */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-4 group cursor-pointer"
              onClick={() => (window.location.href = "tel:+919092079755")}
            >
              <motion.div
                whileHover={{
                  rotate: [0, -8, 8, 0],
                  transition: { duration: 0.5 },
                }}
                className="p-3 bg-purple-600/20 rounded-full group-hover:bg-purple-600/30 transition"
              >
                <FiPhoneCall className="text-purple-500 text-2xl group-hover:text-purple-400" />
              </motion.div>
              <div>
                <h4 className="font-semibold text-lg">Alternate</h4>
                <p className="text-purple-500 font-medium">+91 90920 79755</p>
              </div>
            </motion.div>

            <div className="pt-6 text-sm text-gray-500 dark:text-gray-400">
              <p>📅 Monday – Saturday</p>
              <p>🕙 10:00 AM – 7:00 PM</p>
            </div>
          </motion.div>

          {/* LEFT FORM SIDE */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="bg-white dark:bg-black rounded-3xl p-6 sm:p-8 shadow-2xl"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-50 mb-6">
              Speak With Our Experts
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              {["name", "email", "phone"].map((field) => (
                <div key={field}>
                  <label className="block text-sm font-medium text-gray-900 dark:text-gray-50 mb-2 capitalize">
                    {field}
                  </label>
                  <input
                    type={field === "email" ? "email" : "text"}
                    name={field}
                    value={form[field]}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 text-gray-700 dark:text-gray-50 border border-gray-300 rounded-xl focus:border-none focus:ring-2 focus:ring-blue-600 outline-none transition-all bg-transparent"
                  />
                </div>
              ))}

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-50 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 text-gray-700 dark:text-gray-50 border border-gray-300 rounded-xl focus:border-none focus:ring-2 focus:ring-blue-600 outline-none resize-none transition-all bg-transparent"
                ></textarea>
              </div>

              <input type="hidden" name="honeypot" value="" />
              <input type="hidden" name="form_timestamp" id="form_timestamp" />

              {/* Animated Submit Button */}
              <motion.button
                type="submit"
                disabled={loading || success}
                whileHover={!loading && !success ? { scale: 1.03 } : {}}
                whileTap={!loading && !success ? { scale: 0.97 } : {}}
                className={`relative w-full cursor-pointer font-medium px-8 py-4 rounded-xl transition-all shadow-lg overflow-hidden
                  ${
                    success
                      ? "bg-green-600 dark:bg-green-500 text-white"
                      : "bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-500 dark:to-blue-600 text-white"
                  } disabled:opacity-70`}
              >
                {/* Spinner */}
                {spinning && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, rotate: 360 }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute left-1/2 top-1/2 w-6 h-6 border-4 border-white/80 border-t-transparent rounded-full -translate-x-1/2 -translate-y-1/2"
                  ></motion.div>
                )}

                {/* Success Animation */}
                {!spinning && success && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="flex justify-center items-center gap-2 text-white"
                  >
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200 }}
                      className="text-2xl"
                    >
                      ✅
                    </motion.span>
                    <span className="font-semibold">Sent!</span>
                  </motion.div>
                )}

                {/* Default Button Text */}
                {!spinning && !success && "Send Message"}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
    </>
  );
}
