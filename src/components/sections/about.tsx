import { socials } from "@/configs/site";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../ui/hover-card";

export default function About() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center gap-2 px-4 pt-[100px] md:px-24 md:pt-[250px] lg:flex-row lg:gap-8">
      <div className="animate-fade-in-and-slide-up flex flex-col items-start justify-start text-center sm:text-start">
        <h1 className=" font-inter text-center text-4xl font-extrabold sm:text-start md:text-5xl">
          Hi I&apos;m{" "}
          <span className="bg-gradient-to-r from-primary to-pink-400 bg-clip-text text-transparent">
            Phou Kiethseng
          </span>
          <br />
          <p className="mt-2 text-center text-3xl sm:text-start md:text-4xl">
            Aspiring Developer and Student
          </p>
        </h1>
        <p className="mx-auto mt-4 text-lg sm:text-start md:mx-0 md:text-xl">
          I enjoy building and designing web application
        </p>
        <ul className="mx-auto mt-9 flex flex-row items-center justify-center gap-3 rounded-md p-2">
          {socials.map((social, index) => (
            <HoverCard key={index}>
              <HoverCardTrigger asChild>
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
    </div>
  );
}
