import About from "@/components/sections/about";

export const headerNavItems = [
  {
    label: "About",
    href: "#about",
    component: About,
  },
  {
    label: "Portfolio",
    href: "#portfolio",
  },
  {
    label: "Contact",
    href: "#contact",
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
