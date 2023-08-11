import { headerNavItems } from "@/configs/site";
import Head from "next/head";
export default function Home() {
  return (
    <>
      <Head>
        <title>Phou Kiethseng</title>
        <meta name="description" content="Phou Kiethseng portfolio website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {headerNavItems.map((navItem, index) =>
        navItem.component ? (
          <section
            className="min-h-[100vh] w-full"
            id={navItem.href.slice(1)}
            key={index}
          >
            <navItem.component />
          </section>
        ) : (
          <section key={index}></section>
        )
      )}
    </>
  );
}
