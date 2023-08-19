import { z } from "zod";

const ContactFormContentCharLimit = 1000;

const contactFormSchema = z.object({
  name: z.string().nonempty().min(1).max(50),
  email: z.string().min(1).email({ message: "Invalid Email Address" }).max(320),
  message: z.string().max(ContactFormContentCharLimit),
});

export const zodSchemas = {
  contactForm: contactFormSchema,
};
