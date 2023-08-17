import React from "react";
import ProjectCard from "../project-card";
import Title from "../title";

export default function Portfolio() {
  return (
    <div className="item-center flex flex-col justify-center gap-6 px-4 md:flex-row">
      <article className="flex flex-col items-center gap-6">
        <Title size={"xxl"} thickness={"bold"}>
          Open Source Contributions
        </Title>
        <ProjectCard
          title="Code-Racer"
          description="My first contribution to open source community project. This project teach me alot about collaborating with other people."
          viewLiveUrl="https://code-racer-eight.vercel.app/"
          viewCodesUrl="https://github.com/webdevcody/code-racer"
        />
      </article>
      <article className="flex flex-col items-center gap-6">
        <p className="text-center text-2xl font-bold ">My Projects</p>
      </article>
    </div>
  );
}
