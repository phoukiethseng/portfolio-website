import { z } from "zod";

export const ContactFormContentCharLimit = 1000;
export const EmailMessageCharLimit = ContactFormContentCharLimit;

const contactFormSchema = z.object({
  name: z.string().nonempty().nonempty().max(50),
  email: z
    .string()
    .nonempty()
    .email({ message: "Invalid Email Address" })
    .max(320),
  message: z.string().max(ContactFormContentCharLimit).nonempty(),
});

const emailTemplateParamsSchema = z.object({
  from_name: z.string().nonempty(),
  sender_email: z.string().email().nonempty(),
  message: z.string(),
  reply_to: z.string().optional(),
});

export const zodSchemas = {
  contactForm: contactFormSchema,
  emailTemplateParams: emailTemplateParamsSchema,
};
