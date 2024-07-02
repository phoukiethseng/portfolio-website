import React from "react";
import ProjectCard from "@/components/project-card";
import Title from "@/components/title";
import { openSourceProjects, personalProjects } from "@/configs/site";
import { ProjectTypeToProjectCardProps as toProjectCardProps } from "@/lib/mappers";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Portfolio() {
  const carouselItemStyle =
    "basis-1/2 flex flex-row items-start justify-start pl-1 mr-1";
  return (
    <div className="flex w-full flex-col items-center gap-3">
      <Title size={"3xl"} thickness={"bold"}>
        Projects Portfolio{" "}
      </Title>
      <Tabs
        defaultValue="personal"
        className="flex flex-col items-center justify-start gap-6"
      >
        <TabsList>
          <TabsTrigger value="openSource">Open Source</TabsTrigger>
          <TabsTrigger value="personal">Personal</TabsTrigger>
        </TabsList>
        <TabsContent value="openSource">
          <Carousel className="max-w-[920px]">
            <CarouselContent className="-ml-1 mr-1">
              {openSourceProjects.length > 0 &&
                openSourceProjects.map((project, index) => (
                  <CarouselItem key={index} className={carouselItemStyle}>
                    <ProjectCard {...toProjectCardProps(project)} />
                  </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </TabsContent>
        <TabsContent value="personal">
          <Carousel orientation="horizontal" className="max-w-[920px]">
            <CarouselContent className="-ml-1 mr-1">
              {personalProjects.length > 0 &&
                personalProjects.map((project, index) => (
                  <CarouselItem className={carouselItemStyle} key={index}>
                    <ProjectCard {...toProjectCardProps(project)} />
                  </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </TabsContent>
      </Tabs>
    </div>
  );
}
