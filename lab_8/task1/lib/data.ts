import { Article, Writer } from "@/types";

const writers: Writer[] = [
  { id: "1", fullName: "Alex Code", about: "Frontend lover", image: "/avatars/alex.jpg" },
  { id: "2", fullName: "Sarah Dev", about: "React ninja", image: "/avatars/sarah.jpg" },
];

const articles: Article[] = [
  {
    id: "1",
    heading: "Hello Next.js",
    body: "Next.js is awesome framework for React...",
    creatorId: "1",
    published: "2026-04-10",
    labels: ["nextjs", "react"],
    minutesRead: 5,
  },
  {
    id: "2",
    heading: "SSR vs SSG",
    body: "Understanding rendering patterns...",
    creatorId: "2",
    published: "2026-04-15",
    labels: ["ssr", "ssg"],
    minutesRead: 8,
  },
];

export async function fetchArticles(): Promise<Article[]> {
  return articles;
}

export async function fetchArticleById(id: string): Promise<Article | undefined> {
  return articles.find(a => a.id === id);
}

export async function fetchWriterById(id: string): Promise<Writer | undefined> {
  return writers.find(w => w.id === id);
}