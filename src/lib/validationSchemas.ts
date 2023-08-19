import { z } from "zod";
import { ContactFormContentCharLimit } from "@/configs/site";

const contactFormSchema = z.object({
  name: z.string().nonempty().max(50),
  email: z
    .string()
    .nonempty()
    .email({ message: "Invalid Email Address" })
    .max(320),
  content: z.string().max(ContactFormContentCharLimit),
});

export const zodSchemas = {
  contactForm: contactFormSchema,
};
