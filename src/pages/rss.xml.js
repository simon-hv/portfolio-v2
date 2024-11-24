import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
  const blogPosts = (await getCollection("blog")).sort(
    (a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime(),
  );

  return rss({
    title: "Blog - Simon Haïoun-Viet",
    description:
      "Frontend dev sharing insights on web development, UI/UX, and software engineering",
    site: context.site,
    items: blogPosts.map((post) => ({
      link: `/blog/${post.slug}`,
      title: post.data.title,
      pubDate: new Date(post.data.date),
      ...post.data,
    })),
  });
}
