import React from "react";

import Link from "next/link";
import { Card, CardContent, CardDescription, CardTitle } from "./ui/card";
import Button from "./button";
import { AspectRatio } from "./ui/aspect-ratio";
import Image from "next/image";
import { Technology } from "@/configs/site";

export interface ProjectCardProps {
  title: string;
  description: string;
  viewLiveUrl?: string;
  viewCodesUrl?: string;
  previewImg?: string;
  technologies?: Technology[];
}

const ASPECT_RATIO = 16 / 9;
const BUTTON_SIZE = "sm";
const MAX_LOGO_DISPLAY = 3;

export default function ProjectCard({
  title,
  description,
  viewCodesUrl,
  viewLiveUrl,
  previewImg,
  technologies,
}: ProjectCardProps) {
  return (
    <Card className="transition-color duration-150 hover:border-primary">
      <CardContent className="flex flex-col items-center justify-start gap-4 p-5 ">
        {previewImg && (
          <div className="relative w-full">
            <AspectRatio ratio={ASPECT_RATIO}>
              <Image
                alt={"Project Preview"}
                fill
                src={previewImg}
                className="h-full w-full object-cover"
                priority
              />
            </AspectRatio>
          </div>
        )}
        <div className="flex flex-col gap-4">
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
          <div className="flex flex-row items-center justify-center xs:justify-between">
            <div className="flex flex-row items-center justify-start gap-3">
              <Link href={viewLiveUrl ?? ""}>
                <Button
                  disabled={!viewLiveUrl}
                  size={BUTTON_SIZE}
                  className="font-medium"
                >
                  View Live
                </Button>
              </Link>

              <Link href={viewCodesUrl ?? ""}>
                <Button
                  disabled={!viewCodesUrl}
                  size={BUTTON_SIZE}
                  color={"secondary"}
                  border={"secondary"}
                  className="font-medium"
                >
                  View Codes
                </Button>
              </Link>
            </div>
            {technologies && technologies.length > 0 && (
              <Button
                color={"none"}
                border={"default"}
                hoverBorder={"primary"}
                className="group hidden flex-row-reverse items-center justify-start p-2 transition-all duration-150 hover:gap-[2px] xs:flex"
              >
                <TechnologyDisplay type="text">...</TechnologyDisplay>
                {technologies
                  ?.slice(0, MAX_LOGO_DISPLAY)
                  .reverse()
                  .map((technology, index) => (
                    <TechnologyDisplay
                      key={index}
                      type="img"
                      src={technology.img}
                    />
                  ))}
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function TechnologyDisplay({
  type,
  src,
  children,
  ...props
}: {
  type: "img" | "text";
  src?: string;
  children?: React.ReactNode;
}) {
  return (
    <div
      className="relative ml-[-17px] h-9 w-9 rounded-full bg-secondary text-lg drop-shadow-md transition-all duration-300 ease-out last:ml-0 group-hover:ml-0"
      {...props}
    >
      {type === "img" && (
        <Image
          alt="Techology used"
          fill
          className="transition-color rounded-full bg-secondary object-contain p-[5px] duration-300"
          src={src ?? ""}
        />
      )}
      {type === "text" && children}
    </div>
  );
}
