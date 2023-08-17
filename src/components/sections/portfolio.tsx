import React from "react";
import ProjectCard, { type ProjectCardProps } from "../project-card";
import Title from "../title";
import {
  type ProjectType,
  openSourceProjects,
  personalProjects,
} from "@/configs/site";
import { dataTransformer } from "@/lib/utils";

const toProjectCardProps = dataTransformer<ProjectType, ProjectCardProps>(
  (project) => ({
    title: project.name,
    description: project.description,
    viewCodesUrl: project?.repoLink,
    viewLiveUrl: project?.liveLink,
    previewImg: project?.previewImg,
  })
);

export default function Portfolio() {
  const articleStyle =
    "flex flex-col items-center gap-6 mx-auto md:m-0 min-w-[330px] max-w-[500px]";
  return (
    <div className="flex flex-col items-center justify-start gap-6 px-4 lg:flex-row lg:items-start lg:justify-center">
      {openSourceProjects.length > 0 && (
        <article className={articleStyle}>
          <Title className="text-center" size={"3xl"} thickness={"bold"}>
            Open Source Contributions
          </Title>
          {openSourceProjects.map((project, index) => (
            <ProjectCard key={index} {...toProjectCardProps(project)} />
          ))}
        </article>
      )}
      {personalProjects.length > 0 && (
        <article className={articleStyle}>
          <Title className="text-center" size={"3xl"} thickness={"bold"}>
            Personal Projects
          </Title>
          {personalProjects.map((project, index) => (
            <ProjectCard key={index} {...toProjectCardProps(project)} />
          ))}
        </article>
      )}
    </div>
  );
}
