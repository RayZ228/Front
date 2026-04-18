import { GetStaticPaths, GetStaticProps } from "next";
import { Article, Writer } from "@/types";
import { fetchArticles, fetchArticleById, fetchWriterById } from "@/lib/data";

interface EntryProps {
  entry: Article;
  creator: Writer;
}

export default function EntryPage({ entry, creator }: EntryProps) {
  return (
    <article style={{ maxWidth: 800, margin: '0 auto', padding: 40, background: '#0a0a0a', minHeight: '100vh', color: '#fff' }}>
      <h1 style={{ color: '#00d8ff' }}>{entry.heading}</h1>
      <p style={{ color: '#888' }}>By {creator.fullName} | {entry.minutesRead} min read</p>
      <p style={{ lineHeight: 1.6 }}>{entry.body}</p>
      <div style={{ marginTop: 20 }}>
        {entry.labels.map(tag => (
          <span key={tag} style={{ marginRight: 8, background: '#00d8ff', color: '#000', padding: '4px 12px', borderRadius: 20, fontSize: 14 }}>
            #{tag}
          </span>
        ))}
      </div>
    </article>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const items = await fetchArticles();
  return {
    paths: items.map(item => ({ params: { id: item.id } })),
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const entry = await fetchArticleById(params?.id as string);
  if (!entry) return { notFound: true };
  const creator = await fetchWriterById(entry.creatorId);
  return {
    props: { entry, creator },
    revalidate: 60,
  };
};