import React from "react";
import ProjectCard from "../project-card";
import Title from "../title";
import { openSourceProjects, personalProjects } from "@/configs/site";

export default function Portfolio() {
  const articleStyle =
    "flex flex-col items-center gap-6 mx-auto md:m-0 min-w-[330px] max-w-[500px]";
  return (
    <div className="item-center flex flex-col justify-start gap-6 px-4 md:flex-row md:justify-center">
      {openSourceProjects.length > 0 && (
        <article className={articleStyle}>
          <Title className="text-center" size={"3xl"} thickness={"bold"}>
            Open Source Contributions
          </Title>
          {openSourceProjects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              viewCodesUrl={project.viewCodesUrl}
              viewLiveUrl={project.viewLiveUrl}
              previewImg={project.previewImg}
            />
          ))}
        </article>
      )}
      {personalProjects.length > 0 && (
        <article className={articleStyle}>
          {personalProjects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              viewCodesUrl={project.viewCodesUrl}
              viewLiveUrl={project.viewLiveUrl}
              previewImg={project.previewImg}
            />
          ))}
        </article>
      )}
    </div>
  );
}
