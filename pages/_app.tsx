import "@/styles/globals.css";
import { Suspense } from "react";
import { appWithTranslation } from "next-i18next";
import type { AppProps } from "next/app";
import Nav from "@/components/layout/nav";
import nextI18nConfig from "../next-i18next.config";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Suspense fallback="...">
        <Nav />
      </Suspense>
      <Component {...pageProps} />
    </>
  );
};

export default appWithTranslation(App, nextI18nConfig);
