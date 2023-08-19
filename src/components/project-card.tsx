import React from "react";

import Link from "next/link";
import { Card, CardContent, CardDescription, CardTitle } from "./ui/card";
import Button from "./button";
import { AspectRatio } from "./ui/aspect-ratio";
import Image from "next/image";

export interface ProjectCardProps {
  title: string;
  description: string;
  viewLiveUrl?: string;
  viewCodesUrl?: string;
  previewImg?: string;
}

const ASPECT_RATIO = 16 / 9;
const BUTTON_SIZE = "sm";

export default function ProjectCard({
  title,
  description,
  viewCodesUrl,
  viewLiveUrl,
  previewImg,
}: ProjectCardProps) {
  return (
    <Card>
      <CardContent className="flex flex-col items-center justify-start gap-4 p-5 ">
        {previewImg && (
          <div className="w-full">
            <AspectRatio ratio={ASPECT_RATIO}>
              <Image
                alt={"Project Preview"}
                src={previewImg}
                className="h-full w-full object-cover"
                width={1000}
                height={1000}
              />
            </AspectRatio>
          </div>
        )}
        <div className="flex flex-col gap-4">
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
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
        </div>
      </CardContent>
    </Card>
  );
}
