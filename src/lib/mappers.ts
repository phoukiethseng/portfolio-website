import { type HomePageSectionType, type ProjectType } from "@/configs/site";
import { dataTransformer } from "./utils";
import { type NavigationMenuItemType } from "@/components/header";
import { type ProjectCardProps } from "@/components/project-card";

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
