// src/app/actions/submitForm.ts
'use server';

import { parseFormData, sendEvent } from "basehub/events";

export interface FormSubmissionResult {
  success: boolean;
  error?: string;
}

// Usamos unknown para evitar conflictos de tipos con BaseHub
export async function submitForm(
  ingestKey: unknown,
  schema: unknown,
  formData: FormData
): Promise<FormSubmissionResult> {
  try {
    // Cast a los tipos que BaseHub espera internamente
    const parsedSubmission = parseFormData(
      ingestKey as Parameters<typeof parseFormData>[0],
      schema as Parameters<typeof parseFormData>[1],
      formData
    );
    
    if (!parsedSubmission.success) {
      return {
        success: false,
        error: JSON.stringify(parsedSubmission.errors)
      };
    }
    
    await sendEvent(
      ingestKey as Parameters<typeof sendEvent>[0], 
      parsedSubmission.data
    );
    
    return {
      success: true
    };
  } catch (error) {
    console.error('Form submission error:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error occurred'
    };
  }
}