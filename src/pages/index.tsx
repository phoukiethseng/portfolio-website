import { headerNavItems, socials } from "@/configs/site";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Phou Kiethseng</title>
        <meta name="description" content="Phou Kiethseng portfolio website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section
        className="min-h-[100vh]"
        id={
          headerNavItems
            .find((v) => v.label.includes("About"))
            ?.href.slice(1) ?? "about"
        }
      >
        <div className="flex w-full animate-fade-in-and-slide-up flex-row items-center justify-center gap-8 px-24 pt-[270px]">
          <div className="flex flex-col items-start justify-start ">
            <h1 className=" text-6xl font-bold">
              Hi I&apos;m{" "}
              <span className="bg-gradient-to-r from-primary to-pink-400 bg-clip-text font-extrabold text-transparent">
                Phou Kiethseng
              </span>
              <br />
              <span className="text-5xl">Software Developer</span>
            </h1>
            <h2 className="mt-4 text-2xl">
              I enjoy building and designing web application
            </h2>
            <ul className="mx-auto mt-9 flex flex-row items-center justify-center gap-3 rounded-md bg-slate-500 p-2 dark:bg-background">
              {socials.map((social, index) => (
                <li
                  key={index}
                  className="h-12 w-12 rounded-md p-2 transition-all duration-200 hover:bg-primary"
                >
                  <a href={social.href}>
                    <img
                      src={social.img.src}
                      alt={social.name}
                      className="object-center"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className="min-h-[100vh] bg-background">hi</section>
    </>
  );
}
