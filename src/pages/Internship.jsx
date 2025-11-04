// import React, { useState, useEffect } from "react";
// import {
//   Box,
//   FormControl,
//   InputLabel,
//   MenuItem,
//   Select,
//   TextField,
//   Typography,
//   Button,
//   LinearProgress,
//   CircularProgress,
//   Snackbar,
//   Alert,
// } from "@mui/material";
// import { motion, AnimatePresence } from "framer-motion";
// import { useForm, Controller } from "react-hook-form";
// import { supabase } from "../lib/supabase";

// export default function Internship() {
//   const [uploading, setUploading] = useState(false);
//   const [uploadProgress, setUploadProgress] = useState(0);
//   const [fileName, setFileName] = useState("");
//   const [formSubmitting, setFormSubmitting] = useState(false);
//   const [success, setSuccess] = useState(false);
//   const [theme, setTheme] = useState("light");
//   const [snackbar, setSnackbar] = useState({
//     open: false,
//     message: "",
//     severity: "error",
//   });

//   const {
//     control,
//     handleSubmit,
//     setValue,
//     watch,
//     reset,
//     formState: { errors },
//   } = useForm();

//   const resumePath = watch("resume_path");

//   // 🌗 Auto-detect dark/light theme
//   useEffect(() => {
//     const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
//     setTheme(prefersDark ? "dark" : "light");

//     const listener = (e) => setTheme(e.matches ? "dark" : "light");
//     window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", listener);
//     return () => window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change", listener);
//   }, []);

//   // 🧠 File Upload Config
//   const ALLOWED_TYPES = [
//     "application/pdf",
//     "application/msword",
//     "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
//   ];
//   const MAX_SIZE_MB = 10;

//   // ✅ File Upload
//   const handleFileUpload = async (event) => {
//     try {
//       const file = event.target.files[0];
//       if (!file) return;

//       if (!ALLOWED_TYPES.includes(file.type))
//         throw new Error("Only PDF, DOC, and DOCX files are allowed.");

//       if (file.size / (1024 * 1024) > MAX_SIZE_MB)
//         throw new Error(`File size exceeds ${MAX_SIZE_MB}MB limit.`);

//       setUploading(true);
//       setUploadProgress(0);

//       const filePath = `resumes/${Date.now()}_${file.name}`;
//       const { error } = await supabase.storage
//         .from("resumes")
//         .upload(filePath, file, {
//           cacheControl: "3600",
//           upsert: false,
//           onUploadProgress: (evt) => {
//             if (evt.lengthComputable)
//               setUploadProgress(Math.round((evt.loaded / evt.total) * 100));
//           },
//         });

//       if (error) throw error;

//       setFileName(file.name);
//       setValue("resume_path", filePath);
//       setUploadProgress(100);
//       setTimeout(() => setUploading(false), 700);
//     } catch (err) {
//       console.error("❌ Upload error:", err.message);
//       setSnackbar({
//         open: true,
//         message: err.message || "Upload failed! Please try again.",
//         severity: "error",
//       });
//       setUploading(false);
//     }
//   };

//   // ✅ Submit Form
//   const onSubmit = async (data) => {
//     if (!data.resume_path) {
//       setSnackbar({
//         open: true,
//         message: "Resume is required before submitting.",
//         severity: "error",
//       });
//       return;
//     }

//     try {
//       setFormSubmitting(true);

//       const payload = {
//         first_name: data.firstName,
//         last_name: data.lastName,
//         email: data.email,
//         phone: data.phone,
//         alt_phone: data.altPhone,
//         dob: data.dob,
//         course: data.course,
//         resume_path: data.resume_path,
//       };

//       // console.log("📦 Sending payload:", payload);

//       const res = await fetch(
//         "https://smmorshvappvpgcdmwdv.functions.supabase.co/course-submission",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
//           },
//           body: JSON.stringify(payload),
//         }
//       );

//       const result = await res.json();

//       if (!res.ok || !result.success)
//         throw new Error(result.message || "Submission failed");

//       setSnackbar({
//         open: true,
//         message: "Application submitted successfully 🎉",
//         severity: "success",
//       });

//       setSuccess(true);
//       reset();
//       setFileName("");
//       setUploadProgress(0);
//     } catch (err) {
//       console.error("⚠️ Submission error:", err);
//       setSnackbar({
//         open: true,
//         message: err.message || "Something went wrong. Please try again.",
//         severity: "error",
//       });
//     } finally {
//       setFormSubmitting(false);
//     }
//   };

//   const successVariants = {
//     hidden: { opacity: 0, scale: 0.8 },
//     visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
//   };

//   return (
//     <div
//       className={`relative min-h-screen mt-20 py-10 transition-colors duration-500 ${
//         theme === "dark"
//           ? "bg-gradient-to-br from-[#060b1b] via-[#0c0f2e] to-[#14163a] text-gray-100"
//           : "bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-900 border border-blue-500"
//       } overflow-hidden`}
//     >
//       {/* Snackbar */}
//       <Snackbar
//         open={snackbar.open}
//         autoHideDuration={4000}
//         onClose={() => setSnackbar({ ...snackbar, open: false })}
//         anchorOrigin={{ vertical: "top", horizontal: "center" }}
//       >
//         <Alert
//           severity={snackbar.severity}
//           onClose={() => setSnackbar({ ...snackbar, open: false })}
//           sx={{ width: "100%" }}
//         >
//           {snackbar.message}
//         </Alert>
//       </Snackbar>

//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 px-6"
//       >
//         {/* LEFT SIDE */}
//         <div
//           className={`rounded-2xl p-8 border shadow-[0_0_25px_rgba(59,130,246,0.3)] backdrop-blur-lg transition-all ${
//             theme === "dark"
//               ? "bg-gradient-to-br from-gray-800/40 to-gray-900/60 border-blue-500/30"
//               : "bg-white border-gray-200 shadow-blue-200/40"
//           }`}
//         >
//           <Typography
//             variant="h4"
//             className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-6 font-bold text-center"
//           >
//             Explore Our Courses
//           </Typography>
//           <ul className="space-y-4 text-lg font-medium mt-5 md:mt-12">
//             {[
//               "Web Development",
//               "Front-End Engineering",
//               "AI & MERN Stack",
//               "DevOps",
//               "Python Full Stack",
//               "Java Full Stack",
//             ].map((course, i) => (
//               <motion.li
//                 key={course}
//                 initial={{ opacity: 0, x: -30 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ delay: i * 0.1 }}
//                 className={`p-3 rounded-lg border transition-all ${
//                   theme === "dark"
//                     ? "border-blue-500/10 bg-blue-500/5 hover:bg-blue-500/10 hover:border-blue-400/30"
//                     : "border-blue-100 bg-blue-50 hover:bg-blue-100"
//                 }`}
//               >
//                 {course}
//               </motion.li>
//             ))}
//           </ul>
//         </div>

//         {/* RIGHT SIDE FORM */}
//         <div
//           className={`rounded-2xl text-gray-900 p-8 border shadow-[0_0_25px_rgba(59,130,246,0.3)] backdrop-blur-lg transition-all ${
//             theme === "dark"
//               ? "bg-gradient-to-br from-gray-800/40 to-gray-900/60 border-blue-500/30"
//               : "bg-white border-gray-200 shadow-blue-200/40"
//           }`}
//         >
//           <AnimatePresence mode="wait">
//             {!success ? (
//               <motion.div
//                 key="form"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 exit={{ opacity: 0 }}
//               >
//                 <Typography
//                   variant="h4"
//                   className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-8 font-bold text-center"
//                 >
//                   Apply Now
//                 </Typography>

//                 <Box
//                   component="form"
//                   onSubmit={handleSubmit(onSubmit)}
//                   className="space-y-6 mt-5 md:mt-12"
//                 >
//                   {/* Name Fields */}
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                     <Controller
//                       name="firstName"
//                       control={control}
//                       defaultValue=""
//                       rules={{ required: "First name is required" }}
//                       render={({ field }) => (
//                         <TextField
//                           {...field}
//                           label="First Name"
//                           fullWidth
//                           error={!!errors.firstName}
//                           helperText={errors.firstName?.message}
//                         />
//                       )}
//                     />
//                     <Controller
//                       name="lastName"
//                       control={control}
//                       defaultValue=""
//                       rules={{ required: "Last name is required" }}
//                       render={({ field }) => (
//                         <TextField
//                           {...field}
//                           label="Last Name"
//                           fullWidth
//                           error={!!errors.lastName}
//                           helperText={errors.lastName?.message}
//                         />
//                       )}
//                     />
//                   </div>

//                   {/* Email + DOB */}
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                     <Controller
//                       name="email"
//                       control={control}
//                       defaultValue=""
//                       rules={{
//                         required: "Email is required",
//                         pattern: {
//                           value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
//                           message: "Enter a valid email",
//                         },
//                       }}
//                       render={({ field }) => (
//                         <TextField
//                           {...field}
//                           label="Email"
//                           fullWidth
//                           error={!!errors.email}
//                           helperText={errors.email?.message}
//                         />
//                       )}
//                     />
//                     <Controller
//                       name="dob"
//                       control={control}
//                       defaultValue=""
//                       rules={{ required: "Date of Birth is required" }}
//                       render={({ field }) => (
//                         <TextField
//                           {...field}
//                           label="Date of Birth"
//                           type="date"
//                           InputLabelProps={{ shrink: true }}
//                           fullWidth
//                           error={!!errors.dob}
//                           helperText={errors.dob?.message}
//                         />
//                       )}
//                     />
//                   </div>

//                   {/* Phone Fields */}
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                     <Controller
//                       name="phone"
//                       control={control}
//                       defaultValue=""
//                       rules={{
//                         required: "Phone number required",
//                         pattern: {
//                           value: /^[0-9]{10}$/,
//                           message: "Enter a valid 10-digit number",
//                         },
//                       }}
//                       render={({ field }) => (
//                         <TextField
//                           {...field}
//                           label="Phone Number"
//                           fullWidth
//                           error={!!errors.phone}
//                           helperText={errors.phone?.message}
//                         />
//                       )}
//                     />
//                     <Controller
//                       name="altPhone"
//                       control={control}
//                       defaultValue=""
//                       rules={{
//                         required: "Alternate phone is required",
//                         pattern: {
//                           value: /^[0-9]{10}$/,
//                           message: "Enter a valid 10-digit number",
//                         },
//                       }}
//                       render={({ field }) => (
//                         <TextField
//                           {...field}
//                           label="Alternate Phone"
//                           fullWidth
//                           error={!!errors.altPhone}
//                           helperText={errors.altPhone?.message}
//                         />
//                       )}
//                     />
//                   </div>

//                   {/* Course */}
//                   <FormControl fullWidth>
//                     <InputLabel>Course</InputLabel>
//                     <Controller
//                       name="course"
//                       control={control}
//                       defaultValue=""
//                       rules={{ required: "Please select a course" }}
//                       render={({ field }) => (
//                         <Select {...field} label="Course" error={!!errors.course}>
//                           <MenuItem value="">
//                             <em>Select Course</em>
//                           </MenuItem>
//                           {[
//                             "Web Development",
//                             "Front-End Engineering",
//                             "AI & MERN Stack",
//                             "DevOps",
//                             "Python Full Stack",
//                             "Java Full Stack",
//                           ].map((c) => (
//                             <MenuItem key={c} value={c}>
//                               {c}
//                             </MenuItem>
//                           ))}
//                         </Select>
//                       )}
//                     />
//                     {errors.course && (
//                       <Typography variant="caption" color="error">
//                         {errors.course.message}
//                       </Typography>
//                     )}
//                   </FormControl>

//                   {/* Resume Upload */}
//                   <div className="space-y-2 py-3 md:py-5">
//                     <Typography variant="h5" className="text-blue-400">
//                       Resume Upload *
//                     </Typography>
//                     <label
//                       htmlFor="resume-upload"
//                       className="block mt-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-center py-3 rounded-lg cursor-pointer shadow-lg shadow-blue-500/30 transition-all duration-300"
//                     >
//                       {uploading ? (
//                         <>
//                           <CircularProgress size={20} sx={{ color: "white", mr: 1 }} /> Uploading...
//                         </>
//                       ) : fileName ? (
//                         fileName
//                       ) : (
//                         "Click to Upload Resume"
//                       )}
//                     </label>
//                     <input
//                       id="resume-upload"
//                       type="file"
//                       accept=".pdf,.doc,.docx"
//                       className="hidden"
//                       onChange={handleFileUpload}
//                     />
//                     {uploading && (
//                       <LinearProgress variant="determinate" value={uploadProgress} />
//                     )}
//                     {!resumePath && (
//                       <Typography variant="caption" color="error">
//                         Resume is required.
//                       </Typography>
//                     )}
//                   </div>

//                   {/* Submit */}
//                   <Button
//                     type="submit"
//                     variant="contained"
//                     disabled={formSubmitting}
//                     fullWidth
//                     className="!bg-gradient-to-r !from-blue-600 !to-purple-600 hover:!from-purple-600 hover:!to-blue-600 !text-white !py-3 !rounded-xl !font-semibold shadow-lg shadow-blue-500/20 hover:shadow-purple-500/20 transition-all"
//                   >
//                     {formSubmitting ? (
//                       <CircularProgress size={24} sx={{ color: "white" }} />
//                     ) : (
//                       "Submit Application"
//                     )}
//                   </Button>
//                 </Box>
//               </motion.div>
//             ) : (
//               <motion.div
//                 key="success"
//                 variants={successVariants}
//                 initial="hidden"
//                 animate="visible"
//                 exit="hidden"
//                 className="flex flex-col justify-center items-center text-center py-20"
//               >
//                 <motion.div
//                   initial={{ scale: 0 }}
//                   animate={{ scale: 1 }}
//                   transition={{ type: "spring", stiffness: 120 }}
//                   className="bg-green-500/20 border-4 border-green-500 rounded-full p-6 mb-6"
//                 >
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-16 w-16 text-green-500"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                     strokeWidth={2}
//                   >
//                     <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
//                   </svg>
//                 </motion.div>
//                 <h2 className="text-2xl md:text-4xl font-bold text-green-400 mb-2">
//                   Application Submitted!
//                 </h2>
//                 <p className="text-gray-400 mb-8">
//                   Thank you for applying. Our team will contact you soon.
//                 </p>
//                 <Button
//                   onClick={() => setSuccess(false)}
//                   variant="outlined"
//                   className="!border-blue-400 !text-blue-400 hover:!bg-blue-500 hover:!text-white"
//                 >
//                   Submit Another Application
//                 </Button>
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </div>
//       </motion.div>
//     </div>
//   );
// }

import React, { useState, useEffect } from "react";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  Button,
  LinearProgress,
  CircularProgress,
  Snackbar,
  Alert,
} from "@mui/material";
import { motion } from "framer-motion";
import { useForm, Controller } from "react-hook-form";
import { supabase } from "../lib/supabase";

export default function Internship() {
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [fileName, setFileName] = useState("");
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [theme, setTheme] = useState("light");
  const [isTyping, setIsTyping] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "error",
  });

  const {
    control,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const resumePath = watch("resume_path");

  useEffect(() => {
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setTheme(prefersDark ? "dark" : "light");
    const listener = (e) => setTheme(e.matches ? "dark" : "light");
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", listener);
    return () =>
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .removeEventListener("change", listener);
  }, []);

  const handleFileUpload = async (event) => {
    try {
      const file = event.target.files[0];
      if (!file) return;
      const filePath = `resumes/${Date.now()}_${file.name}`;
      setUploading(true);
      const { error } = await supabase.storage
        .from("resumes")
        .upload(filePath, file);
      if (error) throw error;
      setFileName(file.name);
      setValue("resume_path", filePath);
      setUploading(false);
    } catch (err) {
      setSnackbar({
        open: true,
        message: err.message || "Upload failed!",
        severity: "error",
      });
      setUploading(false);
    }
  };

  const onSubmit = async (data) => {
    try {
      setFormSubmitting(true);
      const payload = {
        first_name: data.firstName,
        last_name: data.lastName,
        email: data.email,
        phone: data.phone,
        alt_phone: data.altPhone,
        dob: data.dob,
        course: data.course,
        resume_path: data.resume_path,
      };
      const res = await fetch(
        "https://smmorshvappvpgcdmwdv.functions.supabase.co/course-submission",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
          },
          body: JSON.stringify(payload),
        }
      );
      const result = await res.json();
      if (!res.ok) throw new Error(result.message || "Submission failed");
      setSnackbar({
        open: true,
        message: "Application submitted successfully!",
        severity: "success",
      });
      setSuccess(true);
      reset();
      setFileName("");
    } catch (err) {
      setSnackbar({
        open: true,
        message: err.message || "Error occurred",
        severity: "error",
      });
    } finally {
      setFormSubmitting(false);
    }
  };

  const textFieldStyles = {
    "& .MuiOutlinedInput-root": {
      borderRadius: "0.75rem",
      backgroundColor: theme === "dark" ? "#0f172a" : "#ffffff",
      color: theme === "dark" ? "#f1f5f9" : "#0f172a",
      border: theme === "dark" ? "1px solid #334155" : "1px solid #cbd5e1",
      transition: "all 0.3s ease",
      "&:hover fieldset": {
        borderColor: theme === "dark" ? "#60a5fa" : "#3b82f6",
      },
      "&.Mui-focused fieldset": {
        borderColor: theme === "dark" ? "#60a5fa" : "#2563eb",
        boxShadow:
          theme === "dark"
            ? "0 0 6px rgba(96,165,250,0.5)"
            : "0 0 6px rgba(37,99,235,0.4)",
      },
    },
    "& input": { background: "transparent" },
    "& .MuiInputLabel-root": {
      color: theme === "dark" ? "#cbd5e1" : "#475569",
    },
  };

  return (
    <div
      className={`min-h-screen mt-20 py-10 ${
        theme === "dark"
          ? "bg-gradient-to-br from-[#060b1b] via-[#0c0f2e] to-[#14163a] text-gray-100"
          : "bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-900"
      }`}
    >
      <Snackbar
        open={snackbar.open}
        autoHideDuration={4000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
      >
        <Alert severity={snackbar.severity}>{snackbar.message}</Alert>
      </Snackbar>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 px-6">
        {/* Left - Courses */}
        <div
          className={`rounded-2xl p-8 border ${
            theme === "dark"
              ? "bg-gradient-to-br from-gray-800/40 to-gray-900/60 border-blue-500/30"
              : "bg-white border-gray-200 shadow-blue-200/40"
          }`}
        >
          <Typography
            variant="h4"
            className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 font-bold text-center"
          >
            Explore Our Courses
          </Typography>
          <ul className="space-y-4 text-lg font-medium mt-5">
            {[
              "Web Development",
              "Front-End Engineering",
              "AI & MERN Stack",
              "DevOps",
              "Python Full Stack",
              "Java Full Stack",
            ].map((course) => (
              <li
                key={course}
                className={`p-3 rounded-lg border ${
                  theme === "dark"
                    ? "border-blue-500/10 bg-blue-500/5"
                    : "border-blue-100 bg-blue-50"
                }`}
              >
                {course}
              </li>
            ))}
          </ul>
        </div>

        {/* Right - Apply Form */}
        <motion.div
          className={`rounded-2xl p-8 border relative overflow-hidden transition-all duration-500 ${
            theme === "dark"
              ? "bg-gradient-to-br from-gray-800/60 to-gray-900/70 border-blue-500/30"
              : "bg-white border-gray-200 shadow-blue-200/40"
          }`}
          animate={
            isTyping || formSubmitting || uploading
              ? {
                  boxShadow:
                    theme === "dark"
                      ? "0 0 15px rgba(59,130,246,0.6), 0 0 25px rgba(147,51,234,0.5)"
                      : "0 0 15px rgba(37,99,235,0.4), 0 0 25px rgba(168,85,247,0.3)",
                  borderColor: theme === "dark" ? "#60a5fa" : "#3b82f6",
                }
              : {
                  boxShadow: "none",
                  borderColor: theme === "dark" ? "#334155" : "#cbd5e1",
                }
          }
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          {!success ? (
            <Box
              component="form"
              onSubmit={handleSubmit(onSubmit)}
              onFocus={() => setIsTyping(true)}
              onBlur={() => setIsTyping(false)}
              className="space-y-6 mt-5"
            >
              <Typography
                variant="h4"
                className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 font-bold text-center mb-6"
              >
                Apply Now
              </Typography>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Controller
                  name="firstName"
                  control={control}
                  rules={{ required: "First name is required" }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="First Name"
                      fullWidth
                      error={!!errors.firstName}
                      helperText={errors.firstName?.message}
                      sx={textFieldStyles}
                    />
                  )}
                />
                <Controller
                  name="lastName"
                  control={control}
                  rules={{ required: "Last name is required" }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Last Name"
                      fullWidth
                      error={!!errors.lastName}
                      helperText={errors.lastName?.message}
                      sx={textFieldStyles}
                    />
                  )}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Controller
                  name="email"
                  control={control}
                  rules={{ required: "Email is required" }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Email"
                      fullWidth
                      error={!!errors.email}
                      helperText={errors.email?.message}
                      sx={textFieldStyles}
                    />
                  )}
                />
                <Controller
                  name="dob"
                  control={control}
                  rules={{ required: "Date of Birth is required" }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Date of Birth"
                      type="date"
                      fullWidth
                      InputLabelProps={{
                        shrink: true,
                        style: {
                          color: theme === "dark" ? "#cbd5e1" : "#475569",
                        },
                      }}
                      error={!!errors.dob}
                      helperText={errors.dob?.message}
                      sx={textFieldStyles}
                    />
                  )}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Controller
                  name="phone"
                  control={control}
                  rules={{ required: "Phone number required" }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Phone Number"
                      fullWidth
                      error={!!errors.phone}
                      helperText={errors.phone?.message}
                      sx={textFieldStyles}
                    />
                  )}
                />
                <Controller
                  name="altPhone"
                  control={control}
                  rules={{ required: "Alternate phone required" }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Alternate Phone"
                      fullWidth
                      error={!!errors.altPhone}
                      helperText={errors.altPhone?.message}
                      sx={textFieldStyles}
                    />
                  )}
                />
              </div>

              <Controller
                name="course"
                control={control}
                defaultValue=""
                rules={{ required: "Select a course" }}
                render={({ field }) => (
                  <FormControl fullWidth>
                    <InputLabel
                      sx={{ color: theme === "dark" ? "#cbd5e1" : "#475569" }}
                    >
                      Course
                    </InputLabel>
                    <Select
                      {...field}
                      label="Course"
                      error={!!errors.course}
                      sx={{
                        borderRadius: "0.75rem",
                        backgroundColor:
                          theme === "dark" ? "#0f172a" : "#f9fafb",
                        color: theme === "dark" ? "#f1f5f9" : "#0f172a",
                      }}
                    >
                      {[
                        "Web Development",
                        "Front-End Engineering",
                        "AI & MERN Stack",
                        "DevOps",
                        "Python Full Stack",
                        "Java Full Stack",
                      ].map((c) => (
                        <MenuItem key={c} value={c}>
                          {c}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                )}
              />

              <div className="space-y-2 py-3">
                <Typography variant="h6" className="text-blue-400">
                  Resume Upload *
                </Typography>
                <label
                  htmlFor="resume-upload"
                  className="block mt-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center py-3 rounded-lg cursor-pointer"
                >
                  {uploading ? (
                    <CircularProgress size={20} sx={{ color: "white" }} />
                  ) : fileName ? (
                    fileName
                  ) : (
                    "Click to Upload Resume"
                  )}
                </label>
                <input
                  id="resume-upload"
                  type="file"
                  accept=".pdf,.doc,.docx"
                  className="hidden"
                  onChange={handleFileUpload}
                />
                {uploading && (
                  <LinearProgress
                    variant="determinate"
                    value={uploadProgress}
                  />
                )}
              </div>

              <Button
                type="submit"
                variant="contained"
                disabled={formSubmitting}
                fullWidth
                className="!bg-gradient-to-r !from-blue-600 !to-purple-600 !text-white !py-3 !rounded-xl"
              >
                {formSubmitting ? (
                  <CircularProgress size={24} sx={{ color: "white" }} />
                ) : (
                  "Submit Application"
                )}
              </Button>
            </Box>
          ) : (
            <div className="text-center py-20">
              <h2 className="text-2xl font-bold text-green-400 mb-4">
                Application Submitted!
              </h2>
              <Button
                onClick={() => setSuccess(false)}
                variant="outlined"
                className="!border-blue-400 !text-blue-400"
              >
                Submit Another Application
              </Button>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
