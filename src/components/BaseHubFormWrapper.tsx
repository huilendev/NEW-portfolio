// src/components/BaseHubFormWrapper.tsx
import { Pump } from "basehub/react-pump";
import { BaseHubForm } from "./BaseHubForm";


interface ContactFormData {
  form: {
    ingestKey: unknown;
    schema: unknown;
  };
}

export function BaseHubFormWrapper() {
  return (
    <Pump
      queries={[
        {
          contactForm: {
            form: {
              ingestKey: true,
              schema: true,
            },
          },
        },
      ]}
    >
      {async ([{ contactForm }]: [{ contactForm: ContactFormData }]) => {
        "use server";

        return (
          <BaseHubForm
            ingestKey={contactForm.form.ingestKey}
            schema={contactForm.form.schema}
          />
        );
      }}
    </Pump>
  );
}
