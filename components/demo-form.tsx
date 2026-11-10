"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { FormField, Input, Select, Textarea, HoneypotField, FormStatus } from "@/components/forms";

type FormData = {
  name: string;
  email: string;
  company: string;
  role: string;
  location: string;
  beds: string;
  message: string;
  b_site_url_confirm: string;
};

export function DemoBookingForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setStatus("loading");
    setStatusMessage("");

    try {
      const res = await fetch("/api/demo/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          botcheck: data.b_site_url_confirm,
        }),
      });

      const json = await res.json();
      if (json.ok) {
        setStatus("success");
        setStatusMessage(json.message || "Thank you. We will coordinate your 30-minute demo.");
        reset();
      } else {
        setStatus("error");
        setStatusMessage(json.message || "Unable to submit demo request.");
      }
    } catch (err) {
      setStatus("error");
      setStatusMessage("Network error submitting request. Please try again or reach out on WhatsApp.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 rounded-3xl border border-line bg-surface p-7 sm:p-10 shadow-sm">
      <HoneypotField />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <FormField id="name" label="Full name" required error={errors.name?.message}>
          <Input
            id="name"
            placeholder="Dr. Rajesh Menon"
            hasError={Boolean(errors.name)}
            {...register("name", { required: "Name is required" })}
          />
        </FormField>

        <FormField id="email" label="Work email" required error={errors.email?.message}>
          <Input
            id="email"
            type="email"
            placeholder="rmenon@hospital.org"
            hasError={Boolean(errors.email)}
            {...register("email", {
              required: "Work email is required",
              pattern: { value: /\S+@\S+\.\S+/, message: "Valid email required" },
            })}
          />
        </FormField>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <FormField id="company" label="Hospital or facility name" required error={errors.company?.message}>
          <Input
            id="company"
            placeholder="Aster Specialty Hospital"
            hasError={Boolean(errors.company)}
            {...register("company", { required: "Hospital name is required" })}
          />
        </FormField>

        <FormField id="role" label="Your role" required>
          <Select id="role" {...register("role")}>
            <option value="administrator">Hospital Administrator / COO</option>
            <option value="medical_director">Medical Director / Senior Clinician</option>
            <option value="it_manager">IT Director / Systems Lead</option>
            <option value="finance_lead">Finance & Insurance Lead</option>
            <option value="other">Other Healthcare Role</option>
          </Select>
        </FormField>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <FormField id="location" label="Hospital country / location" required>
          <Select id="location" {...register("location")}>
            <option value="India">India</option>
            <option value="UAE">United Arab Emirates (Dubai / Abu Dhabi)</option>
            <option value="Saudi Arabia">Saudi Arabia (Riyadh / Jeddah)</option>
            <option value="Qatar">Qatar</option>
            <option value="Oman">Oman</option>
            <option value="Other">Other Region</option>
          </Select>
        </FormField>

        <FormField id="beds" label="Approximate bed capacity">
          <Select id="beds" {...register("beds")}>
            <option value="under_50">Under 50 beds / Day-care</option>
            <option value="50_200">50 to 200 beds</option>
            <option value="200_plus">200+ beds</option>
            <option value="group">Multi-branch hospital group</option>
          </Select>
        </FormField>
      </div>

      <FormField id="message" label="Specific requirements or systems to connect" hint="Optional">
        <Textarea
          id="message"
          rows={3}
          placeholder="e.g. Current PACS, lab analysers, ABDM/NPHIES timeline..."
          {...register("message")}
        />
      </FormField>

      <FormStatus status={status} message={statusMessage} />

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full inline-flex items-center justify-center rounded-full bg-fg text-bg h-12 px-6 text-sm font-semibold hover:bg-fg/85 transition-colors disabled:opacity-50 cursor-pointer"
      >
        {status === "loading" ? "Scheduling demo..." : "Schedule 30-minute demo"}
      </button>

      <p className="text-[11px] text-muted text-center">
        No sales pressure. A direct walkthrough with our healthcare engineering team.
      </p>
    </form>
  );
}
