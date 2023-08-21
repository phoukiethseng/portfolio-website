import { contactFormToEmailMessage } from "../mappers";
import { type EmailService } from "../services/email";
import { type NotificationService } from "../services/notification";
import { type DataMapper, type StatusResponse } from "../types";
import { type ContactForm, EmailMessage } from "../validationSchemas";
import { useEmailJS } from "./emailAdapter";
export function useContactFormNotification(): NotificationService<
  ContactForm,
  Promise<StatusResponse>
> {
  const emailService: EmailService<
    EmailMessage,
    Promise<StatusResponse>
  > = useEmailJS();
  const map: DataMapper<ContactForm, EmailMessage> = contactFormToEmailMessage;
  async function notify(contactForm: ContactForm): Promise<StatusResponse> {
    const response = await emailService.send(map(contactForm));
    return {
      status: response.status,
    };
  }
  return {
    notify,
  };
}
