import React, { useState } from "react";
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
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { useForm, Controller } from "react-hook-form";
import { supabase } from "../lib/supabase";

export default function Internship() {
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [fileName, setFileName] = useState("");
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const {
    control,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm();

  // Allowed MIME types
  const ALLOWED_TYPES = [
    "application/pdf",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  ];
  const MAX_SIZE_MB = 10;

  // ✅ File upload with validation + progress
  const handleFileUpload = async (event) => {
    try {
      const file = event.target.files[0];
      if (!file) return;

      // Validate file type
      if (!ALLOWED_TYPES.includes(file.type)) {
        alert("Only PDF, DOC, and DOCX files are allowed.");
        return;
      }

      // Validate file size
      if (file.size / (1024 * 1024) > MAX_SIZE_MB) {
        alert(`File size exceeds ${MAX_SIZE_MB}MB limit.`);
        return;
      }

      setUploading(true);
      setUploadProgress(0);

      const filePath = `resumes/${Date.now()}_${file.name}`;
      const { data, error } = await supabase.storage
        .from("resumes")
        .upload(filePath, file, {
          cacheControl: "3600",
          upsert: false,
          onUploadProgress: (progressEvent) => {
            // if running in browsers that support progress
            const percent = Math.round(
              (progressEvent.loaded * 100) / progressEvent.total
            );
            setUploadProgress(percent);
          },
        });

      if (error) throw error;

      setFileName(file.name);
      setValue("resume", filePath);
      setUploadProgress(100);
      setTimeout(() => setUploading(false), 700);
    } catch (err) {
      console.error("Upload error:", err.message);
      alert("Upload failed! Please try again.");
      setUploading(false);
    }
  };

  // ✅ Submit form
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
        resume_path: data.resume,
      };

      console.log("📦 Sending payload:", payload);

      const res = await fetch(
        "https://smmorshvappvpgcdmwdv.functions.supabase.co/course-submission",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`, // ✅ important
          },
          body: JSON.stringify(payload),
        }
      );

      if (!res.ok) {
        const text = await res.text();
        console.error("❌ Server response:", text);
        throw new Error(`Request failed (${res.status})`);
      }

      const result = await res.json();
      console.log("✅ Function result:", result);

      if (result.success) {
        setSuccess(true);
        reset();
        setFileName("");
      } else {
        alert(result.error || "Submission failed!");
      }
    } catch (err) {
      console.error("⚠️ Form submit error:", err);
      alert(`Something went wrong: ${err.message}`);
    } finally {
      setFormSubmitting(false);
    }
  };

  const successVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  };

  return (
    <div className="relative min-h-screen mt-20 py-10 bg-gradient-to-br from-[#060b1b] via-[#0c0f2e] to-[#14163a] text-gray-100 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 px-6"
      >
        {/* LEFT SIDE */}
        <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/60 backdrop-blur-lg rounded-2xl p-8 border border-blue-500/30 shadow-[0_0_25px_rgba(59,130,246,0.3)]">
          <Typography
            variant="h4"
            className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-6 font-bold text-center"
          >
            Explore Our Courses
          </Typography>
          <ul className="space-y-4 text-lg font-medium text-gray-300 mt-5 md:mt-12">
            {[
              "Web Development",
              "AI & MERN Stack",
              "DevOps",
              "Python Full Stack",
              "Java Full Stack",
              "Front-End Engineering",
            ].map((course, i) => (
              <motion.li
                key={course}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="p-3 rounded-lg border border-blue-500/10 bg-blue-500/5 hover:bg-blue-500/10 hover:border-blue-400/30 transition-all"
              >
                {course}
              </motion.li>
            ))}
          </ul>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/60 backdrop-blur-lg rounded-2xl p-8 border border-blue-500/30 shadow-[0_0_25px_rgba(59,130,246,0.3)]">
          <AnimatePresence mode="wait">
            {!success ? (
              <motion.div
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <Typography
                  variant="h4"
                  className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-8 font-bold text-center"
                >
                  Apply Now
                </Typography>

                <Box
                  component="form"
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-6 mt-5 md:mt-12"
                >
                  {/* Name fields */}
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
                        />
                      )}
                    />
                  </div>

                  {/* Email + DOB */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Controller
                      name="email"
                      control={control}
                      rules={{
                        required: "Email is required",
                        pattern: {
                          value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
                          message: "Enter a valid email",
                        },
                      }}
                      render={({ field }) => (
                        <TextField
                          {...field}
                          label="Email"
                          fullWidth
                          error={!!errors.email}
                          helperText={errors.email?.message}
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
                          InputLabelProps={{ shrink: true }}
                          fullWidth
                          error={!!errors.dob}
                          helperText={errors.dob?.message}
                        />
                      )}
                    />
                  </div>

                  {/* Phone */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Controller
                      name="phone"
                      control={control}
                      rules={{
                        required: "Phone number required",
                        pattern: {
                          value: /^[0-9]{10}$/,
                          message: "Enter a valid 10-digit number",
                        },
                      }}
                      render={({ field }) => (
                        <TextField
                          {...field}
                          label="Phone Number"
                          fullWidth
                          error={!!errors.phone}
                          helperText={errors.phone?.message}
                        />
                      )}
                    />
                    <Controller
                      name="altPhone"
                      control={control}
                      render={({ field }) => (
                        <TextField
                          {...field}
                          label="Alternate Phone"
                          fullWidth
                        />
                      )}
                    />
                  </div>

                  {/* Course */}
                  <FormControl fullWidth>
                    <InputLabel>Course</InputLabel>
                    <Controller
                      name="course"
                      control={control}
                      defaultValue=""
                      rules={{ required: "Please select a course" }}
                      render={({ field }) => (
                        <Select
                          {...field}
                          label="Course"
                          error={!!errors.course}
                        >
                          <MenuItem value="">
                            <em>Select Course</em>
                          </MenuItem>
                          <MenuItem value="Web Development">
                            Web Development
                          </MenuItem>
                          <MenuItem value="Front-End Development">
                            Front-End Development
                          </MenuItem>
                          <MenuItem value="AI & MERN Stack">
                            AI & MERN Stack
                          </MenuItem>
                          <MenuItem value="AI & MERN Stack">
                            Devops
                          </MenuItem>
                          <MenuItem value="AI & MERN Stack">
                            Python Full Stack
                          </MenuItem>
                          <MenuItem value="AI & MERN Stack">
                            Java Full Stack
                          </MenuItem>
                        </Select>
                      )}
                    />

                    {errors.course && (
                      <Typography
                        variant="caption"
                        color="error"
                        className="pl-2 mt-1"
                      >
                        {errors.course.message}
                      </Typography>
                    )}
                  </FormControl>

                  {/* Resume Upload */}
                  <div className="space-y-2 py-3 md:py-5">
                    <Typography variant="h5" className="text-blue-400">
                      Resume Upload
                    </Typography>

                    <label
                      htmlFor="resume-upload"
                      className="block mt-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-center py-3 rounded-lg cursor-pointer shadow-lg shadow-blue-500/30 transition-all duration-300"
                    >
                      {uploading ? (
                        <>
                          <CircularProgress
                            size={20}
                            sx={{ color: "white", mr: 1 }}
                          />
                          Uploading...
                        </>
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

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    variant="contained"
                    disabled={formSubmitting}
                    fullWidth
                    className="!bg-gradient-to-r !from-blue-600 !to-purple-600 hover:!from-purple-600 hover:!to-blue-600 !text-white !py-3 !rounded-xl !font-semibold shadow-lg shadow-blue-500/20 hover:shadow-purple-500/20 transition-all"
                  >
                    {formSubmitting ? (
                      <CircularProgress size={24} sx={{ color: "white" }} />
                    ) : (
                      "Submit Application"
                    )}
                  </Button>
                </Box>
              </motion.div>
            ) : (
              <motion.div
                key="success"
                variants={successVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="flex flex-col justify-center items-center text-center py-20"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 120 }}
                  className="bg-green-500/20 border-4 border-green-500 rounded-full p-6 mb-6"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-16 w-16 text-green-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </motion.div>
                <h2 className="text-2xl md:text-4xl font-bold text-green-400 mb-2">
                  Application Submitted!
                </h2>
                <p className="text-gray-400 mb-8">
                  Thank you for applying. Our team will contact you soon.
                </p>
                <Button
                  onClick={() => setSuccess(false)}
                  variant="outlined"
                  className="!border-blue-400 !text-blue-400 hover:!bg-blue-500 hover:!text-white"
                >
                  Submit Another Application
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}
