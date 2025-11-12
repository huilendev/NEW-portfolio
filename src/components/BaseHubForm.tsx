// src/components/BaseHubForm.tsx
"use client";

import { useRef, useTransition } from "react";
import { submitForm } from "../app/actions/submitForm";
import { createConfetti } from "../app/utils/confetti";



interface FormField {
  id: string;
  label: string;
  type: string;
  name: string;
  placeholder?: string;
  required?: boolean;
}

interface BaseHubFormProps {
  ingestKey: unknown;
  schema: unknown;
}

export function BaseHubForm({ ingestKey, schema }: BaseHubFormProps) {
  const [isPending, startTransition] = useTransition();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const handleSubmit = async (formData: FormData) => {
    startTransition(async () => {
      try {
        const result = await submitForm(ingestKey, schema, formData);
        if (result.success && canvasRef.current) {
          createConfetti(canvasRef.current);
        } else if (!result.success && result.error) {
          console.error("Form submission error:", result.error);
        }
      } catch (error) {
        console.error("Unexpected error:", error);
      }
    });
  };

  return (
    <div className="relative text-center overflow-hidden max-w-2xl mx-auto">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-30"
      />

      <form
        className="space-y-4 max-w-md mx-auto text-left relative z-20"
        action={handleSubmit}
      >
        {Array.isArray(schema) &&
          (schema as Array<Record<string, unknown>>)?.map((field) => {
            const Input =
              (field as Record<string, unknown>).type === "textarea"
                ? "textarea"
                : "input";
            return (
              <label
                key={(field as Record<string, unknown>).id as string}
                className="flex flex-col gap-y-2"
              >
                <span className="text-slate-300 text-sm">
                  {(field as Record<string, unknown>).label as string}
                </span>
                <Input
                  {...(field as Record<string, unknown>)}
                  rows={
                    (field as Record<string, unknown>).type === "textarea"
                      ? 4
                      : undefined
                  }
                  className="w-full bg-transparent border border-slate-700 text-slate-200 rounded-lg p-3 focus:outline-none focus:ring-2"
                />
              </label>
            );
          })}

        <button
          type="submit"
          disabled={isPending}
          className="w-full border py-3 rounded font-mono text-sm hover:bg-green-400/10 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isPending ? "Enviando..." : "Enviar"}
        </button>
      </form>
    </div>
  );
}
