import type * as z from "zod";
import { type zodSchemas } from "./validationSchemas";
import { type Service } from "./types";
import { emailjs } from "@/configs/emailjs";
import { env } from "@/env.mjs";

type EmailTemplateParams = z.infer<typeof zodSchemas.emailTemplateParams>;

async function send(templateParams: EmailTemplateParams) {
  try {
    const response = await emailjs.send(
      env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
      templateParams
    );
  } catch (error) {
    throw new Error(
      "Error triggering email sending to EmailJS, error: " + String(error)
    );
  }
}

const email: Service.Email<EmailTemplateParams> = {
  send,
};

export default email;
