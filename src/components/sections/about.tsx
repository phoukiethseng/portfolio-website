import { socials } from "@/configs/site";

export default function About() {
  return (
    <div className="relative flex w-full flex-row items-center justify-center gap-8 px-24 pt-[270px]">
      <div className="flex animate-fade-in-and-slide-up flex-col items-start justify-start">
        <h1 className=" font-inter text-6xl font-extrabold">
          Hi I&apos;m{" "}
          <span className="bg-gradient-to-r from-primary to-pink-400 bg-clip-text text-transparent">
            Phou Kiethseng
          </span>
          <br />
          <span className="text-5xl">Software Developer</span>
        </h1>
        <h2 className="mt-4 text-2xl">
          I enjoy building and designing web application
        </h2>
        <ul className="mx-auto mt-9 flex flex-row items-center justify-center gap-3 rounded-md p-2">
          {socials.map((social, index) => (
            <li
              key={index}
              className="h-12 w-12 rounded-md p-2 transition-all duration-200 hover:bg-secondary"
            >
              <a href={social.href}>
                <img
                  src={social.img.src}
                  alt={social.name}
                  className="object-center invert dark:invert-0"
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="absolute top-[40%] z-[-50] mx-auto h-[60%] w-[40%] rounded-full bg-gradient-to-r from-primary to-accent opacity-20 blur-3xl"></div>
    </div>
  );
}
