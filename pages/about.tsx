import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

import type { GetStaticProps, InferGetStaticPropsType } from "next";

export default function About() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      About
    </div>
  );
}

export const getStaticProps: GetStaticProps<{}> = async ({
  locale = "en",
}) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "header"])),
  },
});
