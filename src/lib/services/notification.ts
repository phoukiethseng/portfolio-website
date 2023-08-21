export interface NotificationService<MessageType, ResponseType> {
  notify(message: MessageType): ResponseType;
}
