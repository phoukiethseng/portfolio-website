import { type AppType } from "next/dist/shared/lib/utils";
import "@/styles/globals.css";
import ContextProviders from "@/components/context-providers";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <ContextProviders>
        <Component {...pageProps} />
      </ContextProviders>
    </>
  );
};

export default MyApp;
