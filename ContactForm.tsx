"use client";

import { FormEvent, useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";

type FormState = {
  name: string;
  email: string;
  phone: string;
  audience: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  audience: "",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function validate(): boolean {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) next.name = "Name is required.";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = "Enter a valid email address.";
    if (!form.message.trim()) next.message = "Please add a short message.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setStatus("submitting");
    // TODO: Wire to your API route (e.g. /api/contact)
    await new Promise((r) => setTimeout(r, 900));
    setStatus("success");
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center rounded-3xl border border-teal-500/20 bg-teal-50 p-10 text-center">
        <CheckCircle2 className="h-12 w-12 text-teal-600" />
        <h3 className="mt-4 font-display text-xl font-semibold text-navy-900">
          Message sent
        </h3>
        <p className="mt-2 max-w-sm text-sm text-ink-500">
          Thanks for reaching out — our team typically responds within one
          business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="label-field" htmlFor="name">Name</label>
          <input id="name" className="input-field" value={form.name}
            onChange={(e) => update("name", e.target.value)} />
          {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
        </div>
        <div>
          <label className="label-field" htmlFor="email">Email</label>
          <input id="email" type="email" className="input-field" value={form.email}
            onChange={(e) => update("email", e.target.value)} />
          {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
        </div>
        <div>
          <label className="label-field" htmlFor="phone">Phone (optional)</label>
          <input id="phone" type="tel" className="input-field" value={form.phone}
            onChange={(e) => update("phone", e.target.value)} />
        </div>
        <div>
          <label className="label-field" htmlFor="audience">I am a...</label>
          <select id="audience" className="input-field" value={form.audience}
            onChange={(e) => update("audience", e.target.value)}>
            <option value="">Select an option</option>
            <option>Attorney / Law Firm</option>
            <option>Patient</option>
            <option>Medical Provider</option>
            <option>Other</option>
          </select>
        </div>
      </div>
      <div>
        <label className="label-field" htmlFor="message">Message</label>
        <textarea id="message" rows={5} className="input-field resize-none" value={form.message}
          onChange={(e) => update("message", e.target.value)} />
        {errors.message && <p className="mt-1 text-xs text-red-600">{errors.message}</p>}
      </div>
      <button type="submit" disabled={status === "submitting"} className="btn-teal w-full sm:w-auto">
        {status === "submitting" && <Loader2 className="h-4 w-4 animate-spin" />}
        Send Message
      </button>
    </form>
  );
}
