import { socials } from "@/configs/site";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../ui/hover-card";
import Image from "next/image";

export default function About() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center gap-2 px-4 pt-[80px] md:px-24 md:pt-[150px] lg:flex-row lg:gap-8">
      <div className="animate-fade-in-and-slide-up flex flex-col items-center justify-start text-center sm:max-w-[500px] md:max-w-[700px]">
        <h1 className="font-inter text-center text-4xl font-extrabold sm:text-start md:text-6xl">
          Hi I&apos;m{" "}
          <span className="bg-gradient-to-r from-primary to-pink-400 bg-clip-text text-transparent">
            Phou Kiethseng
          </span>
        </h1>
        <p className="mt-2 text-center text-2xl font-extrabold sm:text-start md:text-4xl">
          Aspiring Developer and Student
        </p>
        <span className="mt-6 text-6xl">👋🏻</span>
        <p className="md:text-md text-md mx-auto mt-6 sm:text-start md:mx-0">
          I am curious about web development and eager to gain more hands-on
          experience in this field. I am always looking for new challenges and
          opportunities to grow as a developer and a learner.
        </p>
        <ul className="mx-auto mt-9 flex flex-row items-center justify-center gap-3 rounded-md p-2">
          {socials.map((social, index) => (
            <HoverCard key={index}>
              <HoverCardTrigger asChild>
                <li className="h-12 w-12 rounded-md p-2 transition-all duration-200 hover:bg-secondary">
                  <a href={social.href}>
                    <Image
                      src={social.img.src}
                      alt={social.name}
                      className="object-center invert dark:invert-0"
                      width={1000}
                      height={1000}
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
