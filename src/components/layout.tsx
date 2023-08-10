import React from "react";
import Header from "./header";
import Footer from "./footer";

type LayoutProps = React.PropsWithChildren;

export default function Layout({ children }: LayoutProps) {
  return (
    <main className="bg-background">
      <Header />
      {children}
      <Footer />
    </main>
  );
}
