import { z } from "zod";

export const leadSchema = z.object({
  type: z.enum(["contact", "demo", "lead_magnet", "cost_estimator"]),
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid work email is required"),
  company: z.string().optional(),
  phone: z.string().optional(),
  location: z.string().optional(),
  message: z.string().optional(),
  service: z.string().optional(),
  referral: z.string().optional(),
  resourceSlug: z.string().optional(),
  estimatorData: z.record(z.any()).optional(),
  botcheck: z.string().optional(), // honeypot
});

export type LeadPayload = z.infer<typeof leadSchema>;

export type LeadSubmissionResult =
  | { ok: true; message: string }
  | { ok: false; reason: "bot_detected" | "validation_failed" | "not_configured" | "delivery_error"; message: string };

export async function submitLead(payload: unknown): Promise<LeadSubmissionResult> {
  const parsed = leadSchema.safeParse(payload);
  if (!parsed.success) {
    return {
      ok: false,
      reason: "validation_failed",
      message: parsed.error.errors[0]?.message || "Validation failed. Please verify your details.",
    };
  }

  const data = parsed.data;

  // Honeypot check
  if (data.botcheck && data.botcheck.trim() !== "") {
    return {
      ok: false,
      reason: "bot_detected",
      message: "Spam detected.",
    };
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;

  // In production / preview, if email credentials are not set, return honest status
  if (!resendApiKey || !toEmail) {
    console.warn("[CodXQ Leads] Delivery credentials not configured. Payload received:", data);
    return {
      ok: false,
      reason: "not_configured",
      message:
        "Contact form delivery is not yet connected on this deployment. Please reach out to us directly on WhatsApp or email hello@codxq.com.",
    };
  }

  // Delivery via Resend if credentials are present
  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: process.env.CONTACT_FROM_EMAIL || "leads@codxq.com",
        to: toEmail,
        subject: `New ${data.type.toUpperCase()} Enquiry from ${data.name} (${data.company || "No company"})`,
        text: JSON.stringify(data, null, 2),
      }),
    });

    if (!res.ok) {
      const errText = await res.text();
      console.error("[CodXQ Leads] Resend API error:", errText);
      return {
        ok: false,
        reason: "delivery_error",
        message: "Unable to dispatch message at this time. Please try again or reach out on WhatsApp.",
      };
    }

    return {
      ok: true,
      message: "Thank you. We have received your inquiry and will respond within one business day.",
    };
  } catch (error) {
    console.error("[CodXQ Leads] Error submitting lead:", error);
    return {
      ok: false,
      reason: "delivery_error",
      message: "Network error delivering message. Please reach out via WhatsApp.",
    };
  }
}
