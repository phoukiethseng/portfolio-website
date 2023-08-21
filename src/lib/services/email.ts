export interface EmailService<EmailMessageType, ResponseType> {
  send(emailMessage: EmailMessageType): ResponseType;
}
