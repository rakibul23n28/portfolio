"use client";

import React, { useState } from "react";
import { z } from "zod";
import { Loader2, SendHorizontal, AlertCircle, CheckCircle2 } from "lucide-react";

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
    <form onSubmit={handleSubmit} className="flex w-full flex-col gap-5">
      <div className="flex flex-col gap-2">
        <label className="text-[11px] font-medium uppercase tracking-[0.18em] text-[var(--muted)]">
          Full name
        </label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="John Doe"
          disabled={isSending}
          className={`block w-full rounded-2xl border bg-[var(--surface)] px-4 py-3.5 text-sm text-[var(--text)] placeholder:text-[var(--muted)] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[color-mix(in_srgb,var(--accent)_18%,transparent)] ${
            errors.name ? "border-red-400/80" : "border-[var(--line)] focus:border-[var(--accent)]"
          }`}
        />
        {errors.name && (
          <div className="flex items-center gap-1.5 text-red-400">
            <AlertCircle className="h-4 w-4" />
            <span className="text-xs">{errors.name}</span>
          </div>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-[11px] font-medium uppercase tracking-[0.18em] text-[var(--muted)]">
          Email address
        </label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="example@mail.com"
          disabled={isSending}
          className={`block w-full rounded-2xl border bg-[var(--surface)] px-4 py-3.5 text-sm text-[var(--text)] placeholder:text-[var(--muted)] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[color-mix(in_srgb,var(--accent)_18%,transparent)] ${
            errors.email ? "border-red-400/80" : "border-[var(--line)] focus:border-[var(--accent)]"
          }`}
        />
        {errors.email && (
          <div className="flex items-center gap-1.5 text-red-400">
            <AlertCircle className="h-4 w-4" />
            <span className="text-xs">{errors.email}</span>
          </div>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-[11px] font-medium uppercase tracking-[0.18em] text-[var(--muted)]">
          Message
        </label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Tell me about your project..."
          rows={5}
          disabled={isSending}
          className={`block w-full resize-none rounded-2xl border bg-[var(--surface)] px-4 py-3.5 text-sm text-[var(--text)] placeholder:text-[var(--muted)] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[color-mix(in_srgb,var(--accent)_18%,transparent)] ${
            errors.message ? "border-red-400/80" : "border-[var(--line)] focus:border-[var(--accent)]"
          }`}
        />
        {errors.message && (
          <div className="flex items-center gap-1.5 text-red-400">
            <AlertCircle className="h-4 w-4" />
            <span className="text-xs">{errors.message}</span>
          </div>
        )}
      </div>

      <div className="pt-2">
        <button
          type="submit"
          disabled={isSending}
          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[linear-gradient(135deg,var(--accent-strong),var(--accent))] px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.14em] text-[var(--accent-ink)] shadow-[0_20px_40px_color-mix(in_srgb,var(--accent)_25%,transparent)] transition-transform duration-200 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isSending ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Verifying & Sending...
            </>
          ) : (
            <>
              <SendHorizontal className="h-4 w-4" />
              Send Message
            </>
          )}
        </button>

        {status && (
          <div
            className={`mt-4 flex items-center gap-2 rounded-2xl border px-3 py-3 text-sm ${
              status.toLowerCase().includes("successfully")
                ? "border-[rgba(61,220,151,0.3)] bg-[rgba(61,220,151,0.08)] text-[var(--ok)]"
                : "border-red-400/40 bg-[rgba(255,0,0,0.04)] text-red-300"
            }`}
          >
            {status.toLowerCase().includes("successfully") ? (
              <CheckCircle2 className="h-4 w-4" />
            ) : (
              <AlertCircle className="h-4 w-4" />
            )}
            <span>{status}</span>
          </div>
        )}
      </div>
    </form>
  );
};

export default ContactForm;
