"use client";

import { FormEvent, useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";

type FormState = {
  firmName: string;
  attorneyName: string;
  email: string;
  phone: string;
  clientName: string;
  injuryType: string;
  city: string;
  state: string;
  notes: string;
};

const initialState: FormState = {
  firmName: "",
  attorneyName: "",
  email: "",
  phone: "",
  clientName: "",
  injuryType: "",
  city: "",
  state: "",
  notes: "",
};

export default function AttorneyReferralForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function validate(): boolean {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!form.firmName.trim()) next.firmName = "Firm name is required.";
    if (!form.attorneyName.trim()) next.attorneyName = "Attorney name is required.";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = "Enter a valid email address.";
    if (!/^[\d\s()+-]{7,}$/.test(form.phone)) next.phone = "Enter a valid phone number.";
    if (!form.injuryType.trim()) next.injuryType = "Injury type is required.";
    if (!form.city.trim()) next.city = "City is required.";
    if (!form.state.trim()) next.state = "State is required.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setStatus("submitting");
    // TODO: Wire to your CRM / API route (e.g. /api/referrals/attorney)
    await new Promise((r) => setTimeout(r, 900));
    setStatus("success");
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center rounded-3xl border border-teal-500/20 bg-teal-50 p-10 text-center">
        <CheckCircle2 className="h-12 w-12 text-teal-600" />
        <h3 className="mt-4 font-display text-xl font-semibold text-navy-900">
          Referral received
        </h3>
        <p className="mt-2 max-w-sm text-sm text-ink-500">
          A dedicated coordinator will reach out within one business hour to confirm
          placement details for your client.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="grid gap-5 sm:grid-cols-2">
      <div>
        <label className="label-field" htmlFor="firmName">Law Firm Name</label>
        <input id="firmName" className="input-field" value={form.firmName}
          onChange={(e) => update("firmName", e.target.value)} />
        {errors.firmName && <p className="mt-1 text-xs text-red-600">{errors.firmName}</p>}
      </div>
      <div>
        <label className="label-field" htmlFor="attorneyName">Attorney Name</label>
        <input id="attorneyName" className="input-field" value={form.attorneyName}
          onChange={(e) => update("attorneyName", e.target.value)} />
        {errors.attorneyName && <p className="mt-1 text-xs text-red-600">{errors.attorneyName}</p>}
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
        <label className="label-field" htmlFor="clientName">Client Name (optional)</label>
        <input id="clientName" className="input-field" value={form.clientName}
          onChange={(e) => update("clientName", e.target.value)} />
      </div>
      <div>
        <label className="label-field" htmlFor="injuryType">Injury Type</label>
        <input id="injuryType" className="input-field" placeholder="e.g. whiplash, back injury"
          value={form.injuryType} onChange={(e) => update("injuryType", e.target.value)} />
        {errors.injuryType && <p className="mt-1 text-xs text-red-600">{errors.injuryType}</p>}
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
        <label className="label-field" htmlFor="notes">Case Notes</label>
        <textarea id="notes" rows={4} className="input-field resize-none" value={form.notes}
          onChange={(e) => update("notes", e.target.value)} />
      </div>
      <div className="sm:col-span-2">
        <button type="submit" disabled={status === "submitting"} className="btn-teal w-full sm:w-auto">
          {status === "submitting" && <Loader2 className="h-4 w-4 animate-spin" />}
          Submit Referral
        </button>
      </div>
    </form>
  );
}
