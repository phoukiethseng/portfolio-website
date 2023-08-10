import { type AppType } from "next/dist/shared/lib/utils";
import "@/styles/globals.css";
import ContextProviders from "@/components/context-providers";
import Layout from "@/components/layout";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <ContextProviders>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ContextProviders>
    </>
  );
};

export default MyApp;
