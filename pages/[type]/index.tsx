import { notFound } from "next/navigation";
import Link from "next/link";
import { allPosts, Post } from "contentlayer/generated";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

import type { GetServerSideProps, InferGetServerSidePropsType } from "next";

export default function Blog({
  posts,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const { t, i18n } = useTranslation(["post"]);

  return (
    <div className="flex min-h-screen flex-col items-center p-24">
      {posts.map((post, postIndex) => (
        <span className="mb-2" key={postIndex}>
          {post.title}
        </span>
      ))}
    </div>
  );
}

export const getServerSideProps = (async (context) => {
  const locale = context.locale;
  const type = context.params?.type;
  if (!locale || !type) return notFound();
  const posts = allPosts
    .filter((post) => post.slug.startsWith(`${locale}/${type}`))
    .sort((a, b) => {
      return new Date(a.publishedAt) > new Date(b.publishedAt) ? -1 : 1;
    });
  if (!posts || posts.length === 0) return notFound();
  return {
    props: {
      posts,
      ...(await serverSideTranslations(locale, ["post", "header"])),
    },
  };
}) satisfies GetServerSideProps<{
  posts: Post[];
}>;
