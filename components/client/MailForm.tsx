"use client";

import React, { useState } from "react";
import emailjs from "emailjs-com";
import { z } from "zod";

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
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined });
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true); // <-- Start sending

    // Validate form data
    const result = ContactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors = result.error.errors.reduce(
        (acc, curr) => ({
          ...acc,
          [curr.path[0]]: curr.message,
        }),
        {} as Partial<ContactFormValues>
      );
      setErrors(fieldErrors);
      setStatus("");
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
        setForm({
          name: "",
          email: "",
          message: "",
        });
        setStatus(data.message);
        setErrors({});
      } else {
        setStatus(data.message || "Failed to send email");
        setErrors({
          name: data.errors?.name,
          email: data.errors?.email,
          message: data.errors?.message,
        });
      }
    } catch (error) {
      setStatus("An unexpected error occurred.");
    } finally {
      setIsSending(false); // <-- Stop sending regardless of outcome
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col py-6 space-y-6 md:py-0 w-full flex-4"
    >
      <label className="block">
        <span className="mb-1">Full name</span>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Name"
          className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 ring p-2"
        />
        {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
      </label>

      <label className="block">
        <span className="mb-1">Email address</span>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Your email address"
          className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 ring p-2"
        />
        {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
      </label>

      <label className="block">
        <span className="mb-1">Message</span>
        <div className="w-full flex flex-col gap-2">
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Write your message here..."
            rows={3}
            className="block w-full rounded-md focus:ring focus:ring-opacity-75 ring p-2"
          ></textarea>
          {errors.message && (
            <p className="text-sm text-red-500">{errors.message}</p>
          )}

          <button
            type="submit"
            disabled={isSending}
            className="px-8 py-2 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 ring-rose-500 bg-rose-500 text-white hover:bg-rose-600 transition-colors duration-200"
          >
            {isSending ? "Sending..." : "Submit"}
          </button>

          {status && (
            <p
              className={`text-sm mt-2 ${
                status.includes("successfully")
                  ? "text-green-500"
                  : "text-red-500"
              }`}
            >
              {status}
            </p>
          )}
        </div>
      </label>
    </form>
  );
};

export default ContactForm;
