import About from "@/components/sections/about";
import Contact from "@/components/sections/contact";
import Portfolio from "@/components/sections/portfolio";
import { env } from "process";

export type Technology = {
  name: string;
  img: string;
  href: string;
};

const TECHNOLOGIES = {
  reactjs: {
    name: "ReactJS",
    img: "/technologies/reactjs-logo.png",
    href: "",
  },
  nextjs: {
    name: "NextJS",
    img: "/technologies/nextjs-logo.png",
    href: "",
  },
  tailwindcss: {
    name: "TailwindCSS",
    img: "/technologies/tailwindcss-logo.png",
    href: "",
  },
  prisma: {
    name: "Prisma ORM",
    img: "/technologies/prisma-logo.png",
    href: "",
  },
  shadcn: {
    name: "ShadCN UI",
    img: "/technologies/shadcn-logo.png",
    href: "",
  },
  socketio: {
    name: "Socket IO",
    img: "/technologies/socketio-logo.png",
    href: "",
  },
};

//TODO: Find icon image for all of those above later

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
    ],
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
    ],
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
    ],
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
