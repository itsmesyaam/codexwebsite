"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { FormField, Input, Select, Textarea, HoneypotField, FormStatus } from "@/components/forms";
import { services } from "@/content/services";

type FormData = {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  service?: string;
  referral?: string;
  message?: string;
  b_site_url_confirm: string;
};

export function ContactForm() {
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
      const res = await fetch("/api/contact/", {
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
        setStatusMessage(json.message || "Thank you. We have received your message and will respond within one business day.");
        reset();
      } else {
        setStatus("error");
        setStatusMessage(json.message || "Unable to send message at this time.");
      }
    } catch (err) {
      setStatus("error");
      setStatusMessage("Network error delivering message. Please reach out to us directly on WhatsApp.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 rounded-3xl border border-line bg-surface p-7 sm:p-10 shadow-sm">
      <HoneypotField />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <FormField id="c-name" label="Full name" required error={errors.name?.message}>
          <Input
            id="c-name"
            placeholder="Arun Kumar"
            hasError={Boolean(errors.name)}
            {...register("name", { required: "Name is required" })}
          />
        </FormField>

        <FormField id="c-email" label="Work email" required error={errors.email?.message}>
          <Input
            id="c-email"
            type="email"
            placeholder="arun@business.com"
            hasError={Boolean(errors.email)}
            {...register("email", {
              required: "Work email is required",
              pattern: { value: /\S+@\S+\.\S+/, message: "Valid work email is required" },
            })}
          />
        </FormField>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <FormField id="c-company" label="Company name">
          <Input id="c-company" placeholder="Your business or startup" {...register("company")} />
        </FormField>

        <FormField id="c-phone" label="Phone / WhatsApp" hint="Optional">
          <Input id="c-phone" placeholder="+91 98460 00000" {...register("phone")} />
        </FormField>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <FormField id="c-service" label="Service or system of interest">
          <Select id="c-service" {...register("service")}>
            <option value="general">Process Review & Discovery</option>
            <option value="erp-crm">ERP & CRM Development</option>
            <option value="web-app">Web Application Development</option>
            <option value="mobile-app">Mobile App Development</option>
            <option value="api-integration">API & E-Invoicing Integration</option>
            <option value="ai-automation">AI & Document Automation</option>
            <option value="legacy-modernization">Legacy Software Modernization</option>
            <option value="maintenance">Maintenance & Support</option>
            <option value="hospital-hms">Hospital Management System (HMS)</option>
          </Select>
        </FormField>

        <FormField id="c-referral" label="How did you hear about CodXQ?">
          <Select id="c-referral" {...register("referral")}>
            <option value="search">Google search</option>
            <option value="linkedin">LinkedIn</option>
            <option value="client_referral">Referral from a client or partner</option>
            <option value="ai_assistant">AI assistant (Claude / ChatGPT / Gemini)</option>
            <option value="event">Industry conference or event</option>
            <option value="other">Other channel</option>
          </Select>
        </FormField>
      </div>

      <FormField id="c-message" label="Tell us about the workflows you want to build or improve">
        <Textarea
          id="c-message"
          rows={4}
          placeholder="Briefly describe your current setup, users, or bottlenecks..."
          {...register("message")}
        />
      </FormField>

      <FormStatus status={status} message={statusMessage} />

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full inline-flex items-center justify-center rounded-full bg-fg text-bg h-12 px-6 text-sm font-semibold hover:bg-fg/85 transition-colors disabled:opacity-50 cursor-pointer"
      >
        {status === "loading" ? "Submitting request..." : "Book your 45-minute process review"}
      </button>

      <p className="text-[11px] text-muted text-center">
        We sign mutual NDAs before reviewing sensitive business data. We reply within one business day.
      </p>
    </form>
  );
}
