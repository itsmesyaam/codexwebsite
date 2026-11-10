"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { FormField, Input, FormStatus, HoneypotField } from "@/components/forms";
import type { LeadMagnet } from "@/content/leadMagnets";

type FormData = {
  name: string;
  email: string;
  company: string;
  phone?: string;
  b_site_url_confirm: string;
};

export function LeadCaptureForm({ item }: { item: LeadMagnet }) {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setStatus("loading");
    setStatusMessage("");

    try {
      const res = await fetch("/api/lead/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "lead_magnet",
          name: data.name,
          email: data.email,
          company: data.company,
          phone: data.phone,
          resourceSlug: item.slug,
          botcheck: data.b_site_url_confirm,
        }),
      });

      const json = await res.json();
      if (json.ok) {
        setStatus("success");
        router.push(`/resources/${item.slug}/thank-you/`);
      } else {
        setStatus("error");
        setStatusMessage(json.message || "Unable to process request.");
      }
    } catch (err) {
      setStatus("error");
      setStatusMessage("Network error. Please try again or reach out on WhatsApp.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="rounded-3xl border border-line bg-surface p-7 sm:p-10 shadow-sm space-y-4">
      <HoneypotField />

      <div>
        <h3 className="text-xl font-semibold text-fg mb-1">
          Get Instant Access
        </h3>
        <p className="text-xs text-muted">
          Enter your details below to receive this {item.format.toLowerCase()} directly.
        </p>
      </div>

      <FormField id="lm-name" label="Full name" required error={errors.name?.message}>
        <Input
          id="lm-name"
          placeholder="Khalid Al-Hassan"
          hasError={Boolean(errors.name)}
          {...register("name", { required: "Name is required" })}
        />
      </FormField>

      <FormField id="lm-email" label="Work email" required error={errors.email?.message}>
        <Input
          id="lm-email"
          type="email"
          placeholder="khalid@company.com"
          hasError={Boolean(errors.email)}
          {...register("email", {
            required: "Work email is required",
            pattern: { value: /\S+@\S+\.\S+/, message: "Valid email required" },
          })}
        />
      </FormField>

      <FormField id="lm-company" label="Company name" required error={errors.company?.message}>
        <Input
          id="lm-company"
          placeholder="Company or Organisation"
          hasError={Boolean(errors.company)}
          {...register("company", { required: "Company is required" })}
        />
      </FormField>

      <FormField id="lm-phone" label="Phone / WhatsApp" hint="Optional">
        <Input id="lm-phone" placeholder="+971 50 123 4567" {...register("phone")} />
      </FormField>

      <FormStatus status={status} message={statusMessage} />

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full inline-flex items-center justify-center rounded-full bg-fg text-bg h-12 px-6 text-sm font-semibold hover:bg-fg/85 transition-colors disabled:opacity-50 cursor-pointer"
      >
        {status === "loading" ? "Preparing resource..." : item.downloadLabel}
      </button>

      <p className="text-[11px] text-muted text-center">
        Zero spam. We respect your inbox and send only relevant engineering resources.
      </p>
    </form>
  );
}
