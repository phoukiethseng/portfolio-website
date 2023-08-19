import { type AppType } from "next/dist/shared/lib/utils";
import "@/styles/globals.css";
import ContextProviders from "@/components/context-providers";
import Layout from "@/components/layout";
import Script from "next/script";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Script src="/microsoft-clarity.js" />
      <ContextProviders>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ContextProviders>
    </>
  );
};

export default MyApp;
