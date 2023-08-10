import Head from "next/head";
import DarkModeToggle from "@/components/dark-mode-toggle";
import Header from "@/components/header";

export default function Home() {
  return (
    <>
      <Head>
        <title>Phou Kiethseng</title>
        <meta name="description" content="Phou Kiethseng portfolio website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container min-h-[100vh]">
        <div className="mt-[200px] flex w-full flex-row justify-between px-14">
          <section className="flex flex-col items-center justify-start">
            <h1 className="text-4xl font-bold">
              Hi I&apos;m{" "}
              <span className="bg-gradient-to-r from-primary to-pink-400 bg-clip-text font-extrabold text-transparent">
                Phou Kiethseng
              </span>
              <br />
              <p>Software Developer</p>
            </h1>
          </section>
        </div>
      </div>
    </>
  );
}
