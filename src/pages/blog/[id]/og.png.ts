import OgImage from "@/components/og";
import { toPng } from "@/lib/createImage";
import type { APIRoute, InferGetStaticPropsType } from "astro";
import { getCollection } from "astro:content";

export async function getStaticPaths() {
  const blogPosts = await getCollection("blog");

  return blogPosts.map((post) => {
    return {
      params: {
        id: post.id,
      },
      props: {
        title: post.data.title,
      },
    };
  });
}

type Props = InferGetStaticPropsType<typeof getStaticPaths>;

export const GET: APIRoute = async function get({ props }) {
  const { title } = props as Props;

  const png = await toPng(OgImage(title));
  return new Response(png, {
    headers: {
      "Content-Type": "image/png",
    },
  });
};
