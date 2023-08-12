import { socials } from "@/configs/site";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../ui/hover-card";

export default function About() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center gap-2 px-24 pt-[250px] lg:flex-row lg:gap-8">
      <div className="flex animate-fade-in-and-slide-up flex-col items-start justify-start">
        <h1 className=" font-inter text-6xl font-extrabold">
          Hi I&apos;m{" "}
          <span className="bg-gradient-to-r from-primary to-pink-400 bg-clip-text text-transparent">
            Phou Kiethseng
          </span>
          <br />
          <p className="mt-2 text-5xl">Aspiring Developer and Student</p>
        </h1>
        <h2 className="mt-4 text-2xl">
          I enjoy building and designing web application
        </h2>
        <ul className="mx-auto mt-9 flex flex-row items-center justify-center gap-3 rounded-md p-2">
          {socials.map((social, index) => (
            <HoverCard key={index}>
              <HoverCardTrigger>
                <li className="h-12 w-12 rounded-md p-2 transition-all duration-200 hover:bg-secondary">
                  <a href={social.href}>
                    <img
                      src={social.img.src}
                      alt={social.name}
                      className="object-center invert dark:invert-0"
                    />
                  </a>
                </li>
              </HoverCardTrigger>
              <HoverCardContent sideOffset={15} className="mx-2 text-center">
                {social.name}
              </HoverCardContent>
            </HoverCard>
          ))}
        </ul>
      </div>
      <div className="absolute top-[25%] z-[-50] mx-auto h-[600px] w-[600px] rounded-full bg-gradient-to-r from-primary to-accent opacity-20 blur-3xl"></div>
    </div>
  );
}
