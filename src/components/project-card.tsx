import React from "react";

import Link from "next/link";
import { Card, CardContent, CardDescription, CardTitle } from "./ui/card";
import Button from "./button";

export interface ProjectCardProps {
  title: string;
  description: string;
  viewLiveUrl?: string;
  viewCodesUrl?: string;
  previewImg?: string;
}

export default function ProjectCard({
  title,
  description,
  viewCodesUrl,
  viewLiveUrl,
}: ProjectCardProps) {
  return (
    <Card className="max-w-[450px]">
      <CardContent className="flex flex-col gap-4 p-5">
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <div className="flex flex-row items-center justify-start gap-3">
          {viewLiveUrl && (
            <Link href={viewLiveUrl}>
              <Button size={"sm"} className="font-medium">
                View Live
              </Button>
            </Link>
          )}
          {viewCodesUrl && (
            <Link href={viewCodesUrl}>
              <Button size={"sm"} className="font-medium">
                View Codes
              </Button>
            </Link>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
