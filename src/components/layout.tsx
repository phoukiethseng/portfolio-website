import React from "react";
import Header from "./header";
import Footer from "./footer";
import { homePageSections } from "@/configs/site";
import { toNavigationMenuItem } from "@/lib/mappers";

type LayoutProps = React.PropsWithChildren;

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header navMenuItems={homePageSections.map(toNavigationMenuItem)} />
      <main>{children}</main>
      <Footer />
    </>
  );
}
