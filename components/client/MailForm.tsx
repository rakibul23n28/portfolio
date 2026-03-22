"use client";

import React, { useState } from "react";
import { z } from "zod";
import {
  Loader2,
  SendHorizontal,
  AlertCircle,
  CheckCircle2,
} from "lucide-react";

const ContactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(1, "Message is required"),
});

type ContactFormValues = z.infer<typeof ContactSchema>;

const ContactForm = () => {
  const [form, setForm] = useState<ContactFormValues>({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<Partial<ContactFormValues>>({});
  const [status, setStatus] = useState("");
  const [isSending, setIsSending] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    const result = ContactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors = result.error.errors.reduce(
        (acc, curr) => ({
          ...acc,
          [curr.path[0]]: curr.message,
        }),
        {} as Partial<ContactFormValues>,
      );
      setErrors(fieldErrors);
      setStatus("");
      setIsSending(false);
      return;
    }

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (response.ok) {
        setForm({ name: "", email: "", message: "" });
        setStatus(data.message || "Message sent successfully!");
        setErrors({});
      } else {
        setStatus(data.message || "Failed to send email");
        setErrors({
          name: data.errors?.name,
          email: data.errors?.email,
          message: data.errors?.message,
        });
      }
    } catch {
      setStatus("An unexpected error occurred. Please try again later.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-5 w-full">
      {/* 👤 Name Field */}
      <div className="flex flex-col gap-1.5">
        <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">
          Full name
        </label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="John Doe"
          disabled={isSending}
          className={`block w-full px-4 py-3 rounded-xl border bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm shadow-sm transition-all duration-300 focus:outline-none focus:ring-4 ${
            errors.name
              ? "border-red-400 focus:ring-red-500/10 focus:border-red-500"
              : "border-gray-200 dark:border-gray-700 focus:ring-rose-500/10 focus:border-rose-500 hover:border-rose-300 dark:hover:border-rose-500"
          }`}
        />
        {errors.name && (
          <div className="flex items-center gap-1.5 mt-1 text-red-500">
            <AlertCircle size={14} />
            <span className="text-xs font-medium">{errors.name}</span>
          </div>
        )}
      </div>

      {/* ✉️ Email Field */}
      <div className="flex flex-col gap-1.5">
        <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">
          Email address
        </label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="example@mail.com"
          disabled={isSending}
          className={`block w-full px-4 py-3 rounded-xl border bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm shadow-sm transition-all duration-300 focus:outline-none focus:ring-4 ${
            errors.email
              ? "border-red-400 focus:ring-red-500/10 focus:border-red-500"
              : "border-gray-200 dark:border-gray-700 focus:ring-rose-500/10 focus:border-rose-500 hover:border-rose-300 dark:hover:border-rose-500"
          }`}
        />
        {errors.email && (
          <div className="flex items-center gap-1.5 mt-1 text-red-500">
            <AlertCircle size={14} />
            <span className="text-xs font-medium">{errors.email}</span>
          </div>
        )}
      </div>

      {/* 💬 Message Field */}
      <div className="flex flex-col gap-1.5">
        <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">
          Message
        </label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Tell me about your project..."
          rows={4}
          disabled={isSending}
          className={`block w-full px-4 py-3 rounded-xl border bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm shadow-sm transition-all duration-300 resize-none focus:outline-none focus:ring-4 ${
            errors.message
              ? "border-red-400 focus:ring-red-500/10 focus:border-red-500"
              : "border-gray-200 dark:border-gray-700 focus:ring-rose-500/10 focus:border-rose-500 hover:border-rose-300 dark:hover:border-rose-500"
          }`}
        />
        {errors.message && (
          <div className="flex items-center gap-1.5 mt-1 text-red-500">
            <AlertCircle size={14} />
            <span className="text-xs font-medium">{errors.message}</span>
          </div>
        )}
      </div>

      {/* 🚀 Submit Button Area */}
      <div className="flex flex-col gap-3 pt-2">
        <button
          type="submit"
          disabled={isSending}
          className="relative flex items-center justify-center gap-2 w-full px-6 py-3.5 text-sm font-bold tracking-wide text-white bg-rose-500 hover:bg-rose-600 active:bg-rose-700 rounded-xl shadow-lg shadow-rose-500/20 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed hover:-translate-y-0.5 active:translate-y-0"
        >
          {isSending ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Verifying & Sending...
            </>
          ) : (
            <>
              <SendHorizontal className="w-5 h-5" />
              Send Message
            </>
          )}
        </button>

        {/* 📬 Status Message Banner */}
        {status && (
          <div
            className={`flex items-center gap-2 p-3.5 rounded-xl border text-sm font-medium transition-all duration-500 ${
              status.toLowerCase().includes("successfully")
                ? "bg-green-50 dark:bg-green-500/10 border-green-200 dark:border-green-800 text-green-700 dark:text-green-400"
                : "bg-red-50 dark:bg-red-500/10 border-red-200 dark:border-red-800 text-red-700 dark:text-red-400"
            }`}
          >
            {status.toLowerCase().includes("successfully") ? (
              <CheckCircle2 size={18} className="flex-shrink-0" />
            ) : (
              <AlertCircle size={18} className="flex-shrink-0" />
            )}
            <p>{status}</p>
          </div>
        )}
      </div>
    </form>
  );
};

export default ContactForm;
