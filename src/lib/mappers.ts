import { HomePageSectionType, ProjectType } from "@/configs/site";
import { dataTransformer } from "./utils";
import { NavigationMenuItemType } from "@/components/header";
import { ProjectCardProps } from "@/components/project-card";

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
