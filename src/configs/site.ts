import { ProjectCardProps } from "@/components/project-card";
import About from "@/components/sections/about";
import Portfolio from "@/components/sections/portfolio";

export const headerNavItems = [
  {
    label: "About",
    href: "#about",
    component: About,
  },
  {
    label: "Portfolio",
    href: "#portfolio",
    component: Portfolio,
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

export const personalProjects: ProjectCardProps[] = [];
export const openSourceProjects: ProjectCardProps[] = [
  {
    title: "Code-Racer",
    description:
      "My first contribution to open source community project. This project teach me alot about collaborating with other people.",
    viewLiveUrl: "https://code-racer-eight.vercel.app/",
    viewCodesUrl: "https://github.com/webdevcody/code-racer",
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
