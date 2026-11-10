import { forwardRef, type InputHTMLAttributes, type SelectHTMLAttributes, type TextareaHTMLAttributes, type ReactNode } from "react";
import { AlertCircle, CheckCircle2 } from "lucide-react";
import { cn } from "@/components/ui";

export function FormField({
  id,
  label,
  required,
  error,
  hint,
  children,
  className,
}: {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  hint?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("space-y-1.5", className)}>
      <div className="flex justify-between items-baseline">
        <label htmlFor={id} className="block text-sm font-medium text-fg">
          {label}
          {required && <span className="ms-1 text-danger" aria-hidden>*</span>}
        </label>
        {hint && <span className="text-xs text-muted">{hint}</span>}
      </div>
      {children}
      {error && (
        <p id={`${id}-error`} role="alert" className="text-xs text-danger flex items-center gap-1.5 mt-1">
          <AlertCircle className="size-3.5 shrink-0" aria-hidden />
          <span>{error}</span>
        </p>
      )}
    </div>
  );
}

export const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement> & { hasError?: boolean }>(
  ({ className, hasError, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(
          "w-full rounded-xl border bg-surface px-4 py-3 text-sm text-fg placeholder:text-muted/60 transition-[border-color,box-shadow] focus:outline-none focus:ring-2 focus:ring-accent/20",
          hasError ? "border-danger focus:border-danger" : "border-line focus:border-accent",
          className
        )}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export const Select = forwardRef<HTMLSelectElement, SelectHTMLAttributes<HTMLSelectElement> & { hasError?: boolean }>(
  ({ className, hasError, children, ...props }, ref) => {
    return (
      <div className="relative">
        <select
          ref={ref}
          className={cn(
            "w-full appearance-none rounded-xl border bg-surface px-4 py-3 pe-10 text-sm text-fg transition-[border-color,box-shadow] focus:outline-none focus:ring-2 focus:ring-accent/20",
            hasError ? "border-danger focus:border-danger" : "border-line focus:border-accent",
            className
          )}
          {...props}
        >
          {children}
        </select>
        <div className="pointer-events-none absolute inset-y-0 end-0 flex items-center pe-3 text-muted">
          <svg className="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    );
  }
);
Select.displayName = "Select";

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaHTMLAttributes<HTMLTextAreaElement> & { hasError?: boolean }>(
  ({ className, hasError, rows = 4, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        rows={rows}
        className={cn(
          "w-full rounded-xl border bg-surface px-4 py-3 text-sm text-fg placeholder:text-muted/60 transition-[border-color,box-shadow] focus:outline-none focus:ring-2 focus:ring-accent/20",
          hasError ? "border-danger focus:border-danger" : "border-line focus:border-accent",
          className
        )}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";

export function HoneypotField({ name = "b_site_url_confirm" }: { name?: string }) {
  return (
    <div aria-hidden="true" style={{ position: "absolute", left: "-9999px", opacity: 0, height: 0 }}>
      <label htmlFor={name}>Leave this field blank</label>
      <input type="text" id={name} name={name} tabIndex={-1} autoComplete="off" />
    </div>
  );
}

export function FormStatus({
  status,
  message,
  className,
}: {
  status: "idle" | "loading" | "success" | "error";
  message?: string;
  className?: string;
}) {
  if (status === "idle" || status === "loading" || !message) return null;

  if (status === "success") {
    return (
      <div
        role="status"
        className={cn(
          "flex items-start gap-3 rounded-2xl border border-line bg-surface p-4 text-sm text-fg shadow-sm",
          className
        )}
      >
        <CheckCircle2 className="size-5 shrink-0 text-accent mt-0.5" aria-hidden />
        <div>
          <p className="font-semibold">Message received</p>
          <p className="mt-0.5 text-muted text-xs leading-relaxed">{message}</p>
        </div>
      </div>
    );
  }

  return (
    <div
      role="alert"
      className={cn(
        "flex items-start gap-3 rounded-2xl border border-danger/20 bg-danger/5 p-4 text-sm text-danger",
        className
      )}
    >
      <AlertCircle className="size-5 shrink-0 mt-0.5" aria-hidden />
      <div>
        <p className="font-semibold">Submission failed</p>
        <p className="mt-0.5 text-xs text-danger/80 leading-relaxed">{message}</p>
      </div>
    </div>
  );
}
