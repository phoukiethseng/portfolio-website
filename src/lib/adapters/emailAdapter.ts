import { emailjs } from "@/configs/emailjs";
import { emailMessageToEmailjsTemplateParams } from "../mappers";
import { EmailService } from "../services/email";
import { DataMapper, StatusResponse } from "../types";
import { EmailMessage, EmailJsTemplateParams } from "../validationSchemas";
import { env } from "@/env.mjs";

export function useEmailJS(): EmailService<
  EmailMessage,
  Promise<StatusResponse>
> {
  const map: DataMapper<EmailMessage, EmailJsTemplateParams> =
    emailMessageToEmailjsTemplateParams;
  const emailClient = emailjs;
  async function send(emailMessage: EmailMessage): Promise<StatusResponse> {
    try {
      await emailClient.send(
        env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        map(emailMessage)
      );
    } catch (error) {
      return {
        status: "failed",
        reason: String(error),
      };
    }
    return {
      status: "success",
    };
  }
  return {
    send,
  };
}
