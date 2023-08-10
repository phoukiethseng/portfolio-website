import Head from "next/head";
import DarkModeToggle from "@/components/dark-mode-toggle";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-background text-base">
        <div className="container flex flex-col items-center justify-center gap-6 px-4 py-16 text-4xl font-bold">
          <h1 className="text-5xl font-bold">
            This is a <span className=" text-primary">title</span>
          </h1>
          <h2 className="text-2xl font-semibold">--Nobody</h2>
          <p className="text-xl font-normal">
            Wow, this video is one of the most helpful design tools I’ve ever
            come across. I’m not formally trained in design but I’m really
            interested in it and I need to understand it for my work. It’s been
            so hard to comprehend any of the written resources I’ve found. This
            just simplified things in such an accessible way, and gave me a
            place to get started from. I know it’s all pretty rudimentary but it
            feels like the missing link to help me actually begin to come up
            with a workable color scheme for my businesses. Thank you very much!
          </p>
        </div>
        <div className="flex flex-row items-center justify-start gap-3">
          <DarkModeToggle />
        </div>
      </main>
    </>
  );
}
