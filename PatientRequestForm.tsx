"use client";

import { FormEvent, useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";

type FormState = {
  name: string;
  email: string;
  phone: string;
  city: string;
  state: string;
  injuryDate: string;
  specialtyNeeded: string;
  details: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  city: "",
  state: "",
  injuryDate: "",
  specialtyNeeded: "",
  details: "",
};

const SPECIALTIES = [
  "Not sure — help me decide",
  "Chiropractic Care",
  "Orthopedic Specialist",
  "Pain Management",
  "Physical Therapy",
  "Neurology",
  "Spine Specialist",
  "MRI / Diagnostic Imaging",
  "Primary Care",
];

export default function PatientRequestForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function validate(): boolean {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) next.name = "Your name is required.";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = "Enter a valid email address.";
    if (!/^[\d\s()+-]{7,}$/.test(form.phone)) next.phone = "Enter a valid phone number.";
    if (!form.city.trim()) next.city = "City is required.";
    if (!form.state.trim()) next.state = "State is required.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setStatus("submitting");
    // TODO: Wire to your API route (e.g. /api/referrals/patient)
    await new Promise((r) => setTimeout(r, 900));
    setStatus("success");
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center rounded-3xl border border-teal-500/20 bg-teal-50 p-10 text-center">
        <CheckCircle2 className="h-12 w-12 text-teal-600" />
        <h3 className="mt-4 font-display text-xl font-semibold text-navy-900">
          We've got your request
        </h3>
        <p className="mt-2 max-w-sm text-sm text-ink-500">
          A patient coordinator will call you shortly to confirm your appointment
          with a trusted provider near you.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="grid gap-5 sm:grid-cols-2">
      <div>
        <label className="label-field" htmlFor="name">Full Name</label>
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
        <label className="label-field" htmlFor="phone">Phone</label>
        <input id="phone" type="tel" className="input-field" value={form.phone}
          onChange={(e) => update("phone", e.target.value)} />
        {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone}</p>}
      </div>
      <div>
        <label className="label-field" htmlFor="injuryDate">Date of Injury (optional)</label>
        <input id="injuryDate" type="date" className="input-field" value={form.injuryDate}
          onChange={(e) => update("injuryDate", e.target.value)} />
      </div>
      <div>
        <label className="label-field" htmlFor="city">City</label>
        <input id="city" className="input-field" value={form.city}
          onChange={(e) => update("city", e.target.value)} />
        {errors.city && <p className="mt-1 text-xs text-red-600">{errors.city}</p>}
      </div>
      <div>
        <label className="label-field" htmlFor="state">State</label>
        <input id="state" className="input-field" value={form.state}
          onChange={(e) => update("state", e.target.value)} />
        {errors.state && <p className="mt-1 text-xs text-red-600">{errors.state}</p>}
      </div>
      <div className="sm:col-span-2">
        <label className="label-field" htmlFor="specialtyNeeded">What kind of care do you need?</label>
        <select id="specialtyNeeded" className="input-field" value={form.specialtyNeeded}
          onChange={(e) => update("specialtyNeeded", e.target.value)}>
          <option value="">Select an option</option>
          {SPECIALTIES.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>
      <div className="sm:col-span-2">
        <label className="label-field" htmlFor="details">Tell us what happened</label>
        <textarea id="details" rows={4} className="input-field resize-none" value={form.details}
          onChange={(e) => update("details", e.target.value)} />
      </div>
      <div className="sm:col-span-2">
        <button type="submit" disabled={status === "submitting"} className="btn-teal w-full sm:w-auto">
          {status === "submitting" && <Loader2 className="h-4 w-4 animate-spin" />}
          Request a Doctor
        </button>
      </div>
    </form>
  );
}
