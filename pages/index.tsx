import Link from "next/link";
import { Inter } from "next/font/google";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

import type { GetStaticProps, InferGetStaticPropsType } from "next";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { t, i18n } = useTranslation("common");
  return (
    <main
      className={`flex min-h-screen flex-col items-center p-24 ${inter.className}`}
    >
      <Link
        href={`${i18n.language === "zh" ? "/zh/legal" : "/legal"}`}
        className="mb-4 underline"
      >
        {t("link")}
      </Link>
      <Link
        href={`${i18n.language === "zh" ? "/zh/about" : "/about"}`}
        className="underline"
      >
        {t("about")}
      </Link>
    </main>
  );
}

export const getStaticProps: GetStaticProps<{}> = async ({
  locale = "en",
}) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "header"])),
  },
});
