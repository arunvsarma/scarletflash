"use client";

import { useState } from "react";

const afacad = "var(--font-afacad), sans-serif";
const outfit = "var(--font-outfit), sans-serif";

type Fields = {
  name: string;
  email: string;
  company: string;
  service: string;
  message: string;
};

function FormField({
  label,
  type = "text",
  fullWidth = false,
  textarea = false,
  name,
  value,
  onChange,
  required = false,
  minLength,
}: {
  label: string;
  type?: string;
  fullWidth?: boolean;
  textarea?: boolean;
  name: keyof Fields;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  required?: boolean;
  minLength?: number;
}) {
  const hasValue = value.length > 0;
  return (
    <div
      className={`field-wrap relative bg-[#1a1a1a] ${textarea ? "h-[136px]" : "h-12"} ${fullWidth ? "sm:col-span-2" : ""} ${hasValue ? "has-value" : ""}`}
    >
      <label
        className="field-label absolute left-4 top-4 font-semibold text-xs text-[#777] tracking-[1.82px] uppercase pointer-events-none z-10"
        style={{ fontFamily: afacad }}
      >
        {label}
      </label>
      {textarea ? (
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          minLength={minLength}
          className="absolute inset-0 w-full h-full bg-transparent resize-none px-4 pt-8 pb-3 text-white text-sm outline-none"
          style={{ fontFamily: outfit }}
          aria-label={label}
        />
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          minLength={minLength}
          className="absolute inset-0 w-full h-full bg-transparent px-4 text-white text-sm outline-none"
          style={{ fontFamily: outfit }}
          aria-label={label}
        />
      )}
    </div>
  );
}

const EMPTY: Fields = { name: "", email: "", company: "", service: "", message: "" };

export default function ContactForm() {
  const [fields, setFields] = useState<Fields>(EMPTY);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const body = new URLSearchParams({
        "form-name": "contact",
        ...fields,
      }).toString();

      const res = await fetch("/contact.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body,
      });

      if (res.ok) {
        setStatus("success");
        setFields(EMPTY);
      } else {
        setErrorMsg("Something went wrong. Please try again.");
        setStatus("error");
      }
    } catch {
      setErrorMsg("Network error. Please check your connection and try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col gap-3 py-10">
        <div className="flex items-center gap-3">
          <i className="fa-solid fa-circle-check text-[#c8102e] text-xl" />
          <p
            className="text-white text-sm font-semibold tracking-[1.4px]"
            style={{ fontFamily: afacad }}
          >
            MESSAGE SENT
          </p>
        </div>
        <p className="text-[#777] text-sm leading-[20px]" style={{ fontFamily: outfit }}>
          Thanks for reaching out! We&apos;ll get back to you within one business day.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-4 self-start text-[#c8102e] text-xs tracking-[1.26px] font-semibold hover:text-white transition-colors"
          style={{ fontFamily: afacad }}
        >
          SEND ANOTHER MESSAGE →
        </button>
      </div>
    );
  }

  return (
    <form
      name="contact"
      data-netlify="true"
      className="flex flex-col gap-4"
      onSubmit={handleSubmit}
      noValidate
      aria-label="Contact form"
    >
      <input type="hidden" name="form-name" value="contact" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <FormField
          label="YOUR NAME"
          name="name"
          value={fields.name}
          onChange={handleChange}
          required
          minLength={2}
        />
        <FormField
          label="E-MAIL"
          type="email"
          name="email"
          value={fields.email}
          onChange={handleChange}
          required
        />
      </div>
      <FormField
        label="COMPANY/PROJECT"
        name="company"
        value={fields.company}
        onChange={handleChange}
        fullWidth
      />
      <FormField
        label="SERVICE INTEREST"
        name="service"
        value={fields.service}
        onChange={handleChange}
        fullWidth
      />
      <FormField
        label="TELL US ABOUT THE PROJECT"
        name="message"
        value={fields.message}
        onChange={handleChange}
        fullWidth
        textarea
        required
        minLength={10}
      />

      {status === "error" && (
        <p
          className="text-[#c8102e] text-xs tracking-[1.08px] flex items-center gap-2"
          style={{ fontFamily: outfit }}
          role="alert"
        >
          <i className="fa-solid fa-triangle-exclamation" />
          {errorMsg}
        </p>
      )}

      <div className="flex justify-end mt-2">
        <button
          type="submit"
          disabled={status === "loading"}
          className="relative inline-flex items-center justify-center gap-4 h-10 overflow-hidden bg-[#c8102e] px-6 font-semibold text-base text-white tracking-[2.08px] whitespace-nowrap hover:bg-[#a00d25] transition-colors cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
          style={{ fontFamily: afacad }}
        >
          <span style={{ width: 144 }}>
            {status === "loading" ? "SENDING…" : "SEND A MESSAGE"}
          </span>
          <i className={`fa-solid ${status === "loading" ? "fa-spinner fa-spin" : "fa-arrow-right"} text-base`} />
        </button>
      </div>
    </form>
  );
}
