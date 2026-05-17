import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  company: z.string().min(1, "Company name is required").max(100),
  phone: z
    .string()
    .regex(/^[+]?[\d\s\-()]{10,15}$/, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email address"),
  service: z.string().min(1, "Please select a service"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(2000),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
