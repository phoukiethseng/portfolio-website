import type * as z from "zod";
import {
  contactEmail,
  type HomePageSectionType,
  type ProjectType,
} from "@/configs/site";
import { dataTransformer } from "./utils";
import { type NavigationMenuItemType } from "@/components/header";
import { type ProjectCardProps } from "@/components/project-card";
import {
  ContactForm,
  EmailJsTemplateParams,
  EmailMessage,
  type zodSchemas,
} from "./validationSchemas";

export const toNavigationMenuItem = dataTransformer<
  HomePageSectionType,
  NavigationMenuItemType
>((section) => ({
  label: section.label,
  id: StringToHTMLTagId(section.label),
}));

export const ProjectTypeToProjectCardProps = dataTransformer<
  ProjectType,
  ProjectCardProps
>((project) => ({
  title: project.name,
  description: project.description,
  viewCodesUrl: project?.repoLink,
  viewLiveUrl: project?.liveLink,
  previewImg: project?.previewImg,
}));

export const StringToHTMLTagId = dataTransformer<string, HTMLElement["id"]>(
  (label) => label.toLowerCase()
);

export const emailMessageToEmailjsTemplateParams = dataTransformer<
  EmailMessage,
  EmailJsTemplateParams
>((emailMessage) => ({
  from_name: emailMessage.from.name ?? "unknown",
  sender_email: emailMessage.from.email,
  message: emailMessage.message,
  reply_to: emailMessage.reply_to,
}));

export const contactFormToEmailMessage = dataTransformer<
  ContactForm,
  EmailMessage
>((contactForm) => ({
  to: {
    email: contactEmail,
  },
  from: {
    email: contactForm.email,
    name: contactForm.name,
  },
  message: contactForm.message,
}));
