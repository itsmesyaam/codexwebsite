"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight, Check, Calculator, Sparkles } from "lucide-react";
import { estimatorQuestions, type EstimatorQuestion } from "@/content/pricing";
import { FormField, Input, FormStatus, HoneypotField } from "@/components/forms";

export function CostEstimator() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [leadSubmitted, setLeadSubmitted] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  // Lead fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [botcheck, setBotcheck] = useState("");

  const totalSteps = estimatorQuestions.length;
  const isSummaryStep = currentStep === totalSteps;
  const currentQ = estimatorQuestions[currentStep];

  const handleSelect = (questionId: string, optionValue: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: optionValue }));
  };

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleSubmitLead = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setStatusMessage("");

    try {
      const res = await fetch("/api/lead/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "cost_estimator",
          name,
          email,
          company,
          phone,
          estimatorData: answers,
          botcheck,
        }),
      });

      const json = await res.json();
      if (json.ok) {
        setStatus("success");
        setLeadSubmitted(true);
        setStatusMessage(json.message || "Your project architecture breakdown has been prepared.");
      } else {
        setStatus("error");
        setStatusMessage(json.message || "Failed to submit estimate request.");
      }
    } catch (err) {
      setStatus("error");
      setStatusMessage("Network error submitting estimate. Please reach out on WhatsApp.");
    }
  };

  return (
    <div className="rounded-3xl border border-line bg-surface p-6 sm:p-10 shadow-sm max-w-3xl mx-auto">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between text-xs text-muted font-medium mb-2">
          <span>{isSummaryStep ? "Project Specification Summary" : `Question ${currentStep + 1} of ${totalSteps}`}</span>
          <span>{Math.round(((currentStep + 1) / (totalSteps + 1)) * 100)}% Complete</span>
        </div>
        <div className="h-1.5 w-full rounded-full bg-line overflow-hidden">
          <div
            className="h-full bg-accent transition-all duration-300"
            style={{ width: `${((currentStep + (isSummaryStep ? 1 : 0)) / totalSteps) * 100}%` }}
          />
        </div>
      </div>

      {!isSummaryStep ? (
        /* Question View */
        <div className="space-y-6">
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-fg mb-2">
              {currentQ.question}
            </h3>
            {currentQ.description && (
              <p className="text-xs sm:text-sm text-muted">{currentQ.description}</p>
            )}
          </div>

          <div className="space-y-3">
            {currentQ.options.map((option) => {
              const isSelected = answers[currentQ.id] === option.value;
              return (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => handleSelect(currentQ.id, option.value)}
                  className={`w-full text-start rounded-2xl border p-4 sm:p-5 transition-all cursor-pointer flex items-start justify-between gap-4 ${
                    isSelected
                      ? "border-accent bg-accent/5 ring-1 ring-accent"
                      : "border-line bg-surface hover:border-fg/30 hover:bg-fg/[0.01]"
                  }`}
                >
                  <div>
                    <p className={`text-sm font-semibold ${isSelected ? "text-accent" : "text-fg"}`}>
                      {option.label}
                    </p>
                    {option.description && (
                      <p className="mt-1 text-xs text-muted leading-relaxed">
                        {option.description}
                      </p>
                    )}
                  </div>
                  <div
                    className={`size-5 rounded-full border flex items-center justify-center shrink-0 mt-0.5 ${
                      isSelected ? "border-accent bg-accent text-white" : "border-line"
                    }`}
                  >
                    {isSelected && <Check className="size-3" />}
                  </div>
                </button>
              );
            })}
          </div>

          <div className="flex items-center justify-between pt-6 border-t border-line">
            <button
              type="button"
              onClick={handleBack}
              disabled={currentStep === 0}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted hover:text-fg disabled:opacity-30 disabled:pointer-events-none cursor-pointer"
            >
              <ArrowLeft className="size-3.5" />
              <span>Back</span>
            </button>

            <button
              type="button"
              onClick={handleNext}
              disabled={!answers[currentQ.id]}
              className="inline-flex items-center gap-1.5 rounded-full bg-fg text-bg px-5 py-2.5 text-xs font-semibold hover:bg-fg/85 transition-colors disabled:opacity-40 disabled:pointer-events-none cursor-pointer"
            >
              <span>{currentStep === totalSteps - 1 ? "Review Project Summary" : "Next Question"}</span>
              <ArrowRight className="size-3.5" />
            </button>
          </div>
        </div>
      ) : (
        /* Summary & Review View */
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-semibold tracking-tight text-fg mb-2">
              Your Custom Software Specification
            </h3>
            <p className="text-xs sm:text-sm text-muted">
              Here is how your project parameters are structured based on your selections:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 rounded-2xl border border-line bg-bg p-5">
            {estimatorQuestions.map((q) => {
              const selectedOpt = q.options.find((o) => o.value === answers[q.id]);
              return (
                <div key={q.id} className="text-xs space-y-0.5">
                  <span className="text-muted block text-[11px] font-medium">{q.question}</span>
                  <span className="font-semibold text-fg">{selectedOpt?.label || "Not specified"}</span>
                </div>
              );
            })}
          </div>

          {!leadSubmitted ? (
            <form onSubmit={handleSubmitLead} className="space-y-4 pt-4 border-t border-line">
              <HoneypotField />
              <div>
                <p className="text-sm font-semibold text-fg mb-1">
                  Receive your verified planning estimate & sprint roadmap
                </p>
                <p className="text-xs text-muted mb-4">
                  Our engineering team in Kochi will review your parameters and provide a calibrated planning estimate within one business day.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FormField id="est-name" label="Full name" required>
                  <Input
                    id="est-name"
                    required
                    placeholder="Sarah Al-Mansoor"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </FormField>
                <FormField id="est-email" label="Work email" required>
                  <Input
                    id="est-email"
                    type="email"
                    required
                    placeholder="sarah@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </FormField>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FormField id="est-company" label="Company name">
                  <Input
                    id="est-company"
                    placeholder="Al-Mansoor Trading"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                  />
                </FormField>
                <FormField id="est-phone" label="Phone / WhatsApp (optional)">
                  <Input
                    id="est-phone"
                    placeholder="+971 50 123 4567"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </FormField>
              </div>

              <FormStatus status={status} message={statusMessage} />

              <div className="flex items-center justify-between pt-4">
                <button
                  type="button"
                  onClick={handleBack}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted hover:text-fg cursor-pointer"
                >
                  <ArrowLeft className="size-3.5" />
                  <span>Edit responses</span>
                </button>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="inline-flex items-center justify-center rounded-full bg-fg text-bg px-6 py-3 text-xs font-semibold hover:bg-fg/85 transition-colors disabled:opacity-50 cursor-pointer"
                >
                  {status === "loading" ? "Submitting..." : "Get planning estimate"}
                </button>
              </div>
            </form>
          ) : (
            <div className="rounded-2xl border border-line bg-surface p-6 text-center space-y-3">
              <div className="size-10 rounded-full bg-accent/10 text-accent mx-auto flex items-center justify-center">
                <Check className="size-5" />
              </div>
              <h4 className="text-base font-semibold text-fg">Specification received</h4>
              <p className="text-xs text-muted max-w-md mx-auto leading-relaxed">
                Thank you, {name}. Our technical leads will review your platform, workflow, and integration requirements and send a calibrated scope-and-timeline overview to {email}.
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
