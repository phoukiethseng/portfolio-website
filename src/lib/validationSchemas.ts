import { z } from "zod";

export const ContactFormContentCharLimit = 1000;
export const EmailMessageCharLimit = ContactFormContentCharLimit;

export type ContactForm = z.infer<typeof contactFormSchema>;
export type EmailJsTemplateParams = z.infer<typeof emailJsTemplateParamsSchema>;
export type EmailMessage = z.infer<typeof emailMessageSchema>;

const contactFormSchema = z.object({
  name: z.string().nonempty().nonempty().max(50),
  email: z
    .string()
    .nonempty()
    .email({ message: "Invalid Email Address" })
    .max(320),
  message: z.string().max(ContactFormContentCharLimit).nonempty(),
});

// EmailJS specific message message schema
const emailJsTemplateParamsSchema = z.object({
  from_name: z.string().nonempty(),
  sender_email: z.string().email().nonempty(),
  message: z.string(),
  reply_to: z.string().optional(),
});

// Generic email message schema
const emailMessageSchema = z.object({
  to: z.object({
    email: z.string().email().nonempty(),
    name: z.string().min(1).optional(),
  }),
  from: z.object({
    email: z.string().email().nonempty(),
    name: z.string().min(1).optional(),
  }),
  reply_to: z.string().optional(),
  cc: z.string().optional(),
  bcc: z.string().optional(),
  message: z.string(),
});

export const zodSchemas = {
  contactForm: contactFormSchema,
  emailTemplateParams: emailJsTemplateParamsSchema,
};
