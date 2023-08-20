import type * as z from "zod";
import { type HomePageSectionType, type ProjectType } from "@/configs/site";
import { dataTransformer } from "./utils";
import { type NavigationMenuItemType } from "@/components/header";
import { type ProjectCardProps } from "@/components/project-card";
import { type zodSchemas } from "./validationSchemas";

export const toNavigationMenuItem = dataTransformer<
  HomePageSectionType,
  NavigationMenuItemType
>((section) => ({
  label: section.label,
  id: toHTMLTagId(section.label),
}));

export const toProjectCardProps = dataTransformer<
  ProjectType,
  ProjectCardProps
>((project) => ({
  title: project.name,
  description: project.description,
  viewCodesUrl: project?.repoLink,
  viewLiveUrl: project?.liveLink,
  previewImg: project?.previewImg,
}));

export const toHTMLTagId = dataTransformer<string, HTMLElement["id"]>((label) =>
  label.toLowerCase()
);

export const toEmailTemplateParams = dataTransformer<
  z.infer<typeof zodSchemas.contactForm>,
  z.infer<typeof zodSchemas.emailTemplateParams>
>((contactForm) => ({
  from_name: contactForm.name,
  sender_email: contactForm.email,
  message: contactForm.message,
}));
