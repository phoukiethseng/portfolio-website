import About from "@/components/sections/about";
import Contact from "@/components/sections/contact";
import Portfolio from "@/components/sections/portfolio";
import { env } from "process";
import nextJsLogo from "@/resources/images/nextjs-logo.png";
import reactJsLogo from "@/resources/images/reactjs-logo.png";
import tailwindcssLogo from "@/resources/images/tailwindcss-logo.png";
import prismaLogo from "@/resources/images/tailwindcss-logo.png";
import shadcnLogo from "@/resources/images/shadcn-logo.png";
import socketioLogo from "@/resources/images/socketio-logo.png";
import { type StaticImageData } from "next/image";

export type Technology = {
  name: string;
  img: StaticImageData;
  href: string;
};

const TECHNOLOGIES = {
  reactjs: {
    name: "ReactJS",
    img: nextJsLogo,
    href: "",
  },
  nextjs: {
    name: "NextJS",
    img: reactJsLogo,
    href: "",
  },
  tailwindcss: {
    name: "TailwindCSS",
    img: tailwindcssLogo,
    href: "",
  },
  prisma: {
    name: "Prisma ORM",
    img: prismaLogo,
    href: "",
  },
  shadcn: {
    name: "ShadCN UI",
    img: shadcnLogo,
    href: "",
  },
  socketio: {
    name: "Socket IO",
    img: socketioLogo,
    href: "",
  },
} as Record<string, Technology>;

export type ProjectType = {
  name: string;
  description: string;
  liveLink?: string;
  repoLink?: string;
  previewImg?: string;
  technologies: Array<Technology>;
};

export const contactEmail = env.NEXT_PUBLIC_CONTACT_EMAIL ?? "";

export type HomePageSectionType = (typeof homePageSections)[number];

export const homePageSections = [
  {
    label: "About",
    component: About,
  },
  {
    label: "Portfolio",
    component: Portfolio,
  },
  {
    label: "Contact",
    component: Contact,
  },
];

export const personalProjects: ProjectType[] = [
  {
    name: "Portfolio Website",
    description:
      "This website itself. After my first contribution to open source community project, I decided to work on this website. By apply what I learned from community project, this project is closely following best practice and clean code architecture.",
    previewImg: "/project-previews/portfolio-website.png",
    repoLink: "https://github.com/phoukiethseng/portfolio-website",
    technologies: [
      TECHNOLOGIES.nextjs,
      TECHNOLOGIES.tailwindcss,
      TECHNOLOGIES.reactjs,
      TECHNOLOGIES.shadcn,
    ] as Array<Technology>,
  },
  {
    name: "Todo Web App",
    description:
      "Simple todo app. This is my very first personal project. This project teach me alot about modern web development technology. Since this is my first beginner project, the code is obviously messy.",
    liveLink: "https://todo-web-app-murex.vercel.app/",
    repoLink: "https://github.com/phoukiethseng/todo-web-app",
    previewImg: "/project-previews/todo-web-app.png",
    technologies: [
      TECHNOLOGIES.nextjs,
      TECHNOLOGIES.prisma,
      TECHNOLOGIES.tailwindcss,
      TECHNOLOGIES.reactjs,
    ] as Array<Technology>,
  },
  {
    name: "Mailixer",
    description:
      "Email Newsletter platform. Each user will be provided with an auto generated newsletter subscribe page.",
    technologies: [
      TECHNOLOGIES.tailwindcss,
      TECHNOLOGIES.reactjs,
    ] as Array<Technology>,
  },
];
export const openSourceProjects: ProjectType[] = [
  {
    name: "Code Racer",
    description:
      "My first contribution to open source community project. It was started by youtuber Web Dev Cody. This project teach me alot about collaborating with other people.",
    liveLink: "https://code-racer-eight.vercel.app/",
    repoLink: "https://github.com/webdevcody/code-racer",
    previewImg: "/project-previews/code-racer.png",
    technologies: [
      TECHNOLOGIES.nextjs,
      TECHNOLOGIES.socketio,
      TECHNOLOGIES.shadcn,
      TECHNOLOGIES.prisma,
      TECHNOLOGIES.tailwindcss,
      TECHNOLOGIES.reactjs,
    ] as Array<Technology>,
  },
];

export const socials = [
  {
    name: "GitHub",
    href: "https://github.com/phoukiethseng",
    img: {
      src: "/socials/github-logo.png",
    },
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/phou-kiethseng/",
    img: {
      src: "/socials/linkedin-logo.png",
    },
  },
  {
    name: "Twitter",
    href: "https://twitter.com/PhouKiethseng",
    img: {
      src: "/socials/twitter-logo.png", // Got it from: https://developer.twitter.com/en/docs/twitter-for-websites/web-intents/image-resources
    },
  },
  {
    name: "Telegram",
    href: "https://t.me/phoukiethseng",
    img: {
      src: "/socials/telegram-logo.png",
    },
  },
];
