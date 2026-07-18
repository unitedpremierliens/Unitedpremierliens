"use client";

import { FormEvent, useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";

type FormState = {
  practiceName: string;
  contactName: string;
  email: string;
  phone: string;
  specialty: string;
  city: string;
  state: string;
  licenseNumber: string;
  notes: string;
};

const initialState: FormState = {
  practiceName: "",
  contactName: "",
  email: "",
  phone: "",
  specialty: "",
  city: "",
  state: "",
  licenseNumber: "",
  notes: "",
};

export default function ProviderApplicationForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function validate(): boolean {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!form.practiceName.trim()) next.practiceName = "Practice name is required.";
    if (!form.contactName.trim()) next.contactName = "Contact name is required.";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = "Enter a valid email address.";
    if (!/^[\d\s()+-]{7,}$/.test(form.phone)) next.phone = "Enter a valid phone number.";
    if (!form.specialty.trim()) next.specialty = "Specialty is required.";
    if (!form.licenseNumber.trim()) next.licenseNumber = "License number is required.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setStatus("submitting");
    // TODO: Wire to your API route (e.g. /api/providers/apply)
    await new Promise((r) => setTimeout(r, 900));
    setStatus("success");
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center rounded-3xl border border-teal-500/20 bg-teal-50 p-10 text-center">
        <CheckCircle2 className="h-12 w-12 text-teal-600" />
        <h3 className="mt-4 font-display text-xl font-semibold text-navy-900">
          Application submitted
        </h3>
        <p className="mt-2 max-w-sm text-sm text-ink-500">
          Our credentialing team will review your practice details and follow up
          within two business days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="grid gap-5 sm:grid-cols-2">
      <div>
        <label className="label-field" htmlFor="practiceName">Practice Name</label>
        <input id="practiceName" className="input-field" value={form.practiceName}
          onChange={(e) => update("practiceName", e.target.value)} />
        {errors.practiceName && <p className="mt-1 text-xs text-red-600">{errors.practiceName}</p>}
      </div>
      <div>
        <label className="label-field" htmlFor="contactName">Contact Name</label>
        <input id="contactName" className="input-field" value={form.contactName}
          onChange={(e) => update("contactName", e.target.value)} />
        {errors.contactName && <p className="mt-1 text-xs text-red-600">{errors.contactName}</p>}
      </div>
      <div>
        <label className="label-field" htmlFor="email">Email</label>
        <input id="email" type="email" className="input-field" value={form.email}
          onChange={(e) => update("email", e.target.value)} />
        {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
      </div>
      <div>
        <label className="label-field" htmlFor="phone">Phone</label>
        <input id="phone" type="tel" className="input-field" value={form.phone}
          onChange={(e) => update("phone", e.target.value)} />
        {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone}</p>}
      </div>
      <div>
        <label className="label-field" htmlFor="specialty">Specialty</label>
        <input id="specialty" className="input-field" placeholder="e.g. Orthopedic Surgery"
          value={form.specialty} onChange={(e) => update("specialty", e.target.value)} />
        {errors.specialty && <p className="mt-1 text-xs text-red-600">{errors.specialty}</p>}
      </div>
      <div>
        <label className="label-field" htmlFor="licenseNumber">License Number</label>
        <input id="licenseNumber" className="input-field" value={form.licenseNumber}
          onChange={(e) => update("licenseNumber", e.target.value)} />
        {errors.licenseNumber && <p className="mt-1 text-xs text-red-600">{errors.licenseNumber}</p>}
      </div>
      <div>
        <label className="label-field" htmlFor="city">City</label>
        <input id="city" className="input-field" value={form.city}
          onChange={(e) => update("city", e.target.value)} />
      </div>
      <div>
        <label className="label-field" htmlFor="state">State</label>
        <input id="state" className="input-field" value={form.state}
          onChange={(e) => update("state", e.target.value)} />
      </div>
      <div className="sm:col-span-2">
        <label className="label-field" htmlFor="notes">Tell us about your practice</label>
        <textarea id="notes" rows={4} className="input-field resize-none" value={form.notes}
          onChange={(e) => update("notes", e.target.value)} />
      </div>
      <div className="sm:col-span-2">
        <button type="submit" disabled={status === "submitting"} className="btn-teal w-full sm:w-auto">
          {status === "submitting" && <Loader2 className="h-4 w-4 animate-spin" />}
          Apply to Join
        </button>
      </div>
    </form>
  );
}
