import { homePageSections } from "@/configs/site";
import { toNavigationMenuItem } from "@/lib/mappers";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Phou Kiethseng</title>
        <meta name="description" content="Phou Kiethseng portfolio website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {homePageSections.map((navItem, index) =>
        navItem.component ? (
          <section
            className="min-h-[100vh] pt-20"
            id={toNavigationMenuItem(navItem).id}
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
