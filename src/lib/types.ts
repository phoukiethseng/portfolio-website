export type Context<D extends object> = D;

export declare namespace Service {
  interface NotificationProvider<MessageType> {
    send: (message: MessageType) => Promise<unknown>;
  }
  type Email<EmailContentType> = Service.NotificationProvider<EmailContentType>;
  interface Contact<ContactMessageType> {
    notify: (i: ContactMessageType) => Promise<unknown>;
  }
}

export type DataMapper<InputType, OutputType> = (i: InputType) => OutputType;
