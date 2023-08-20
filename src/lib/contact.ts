import type * as z from "zod";
import { type zodSchemas } from "./validationSchemas";
import emailService from "@/lib/email";
import { toEmailTemplateParams } from "./mappers";
import { type Service, type Context, type DataMapper } from "./types";

type ContactForm = z.infer<typeof zodSchemas.contactForm>;
type EmailTemplateParams = z.infer<typeof zodSchemas.emailTemplateParams>;

type NotifyContextType = Context<{
  notificationService: Service.NotificationProvider<EmailTemplateParams>;
  mapToEmailTemplateParams: DataMapper<ContactForm, EmailTemplateParams>;
}>;

const defaultContext: NotifyContextType = {
  notificationService:
    emailService satisfies Service.Email<EmailTemplateParams>, // Use Email as NotificationProvider
  mapToEmailTemplateParams: toEmailTemplateParams,
};

async function notify(
  contactForm: ContactForm,
  context: NotifyContextType = defaultContext
) {
  const { notificationService, mapToEmailTemplateParams } = context;
  try {
    await notificationService.send(mapToEmailTemplateParams(contactForm));
  } catch (error) {
    throw new Error(
      "Failed to nofity, reason: " + (String(error) ?? "unknown")
    );
  }
}

const contact: Service.Contact<ContactForm> = {
  notify,
};
export default contact;
