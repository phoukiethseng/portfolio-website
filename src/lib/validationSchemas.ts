import { z } from "zod";

const ContactFormContentCharLimit = 1000;

const contactFormSchema = z.object({
  name: z.string().nonempty().nonempty().max(50),
  email: z
    .string()
    .nonempty()
    .email({ message: "Invalid Email Address" })
    .max(320),
  message: z.string().max(ContactFormContentCharLimit).nonempty(),
});

export const zodSchemas = {
  contactForm: contactFormSchema,
};
