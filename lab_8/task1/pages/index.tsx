import { GetStaticProps } from "next";
import Link from "next/link";
import { Article } from "@/types";
import { fetchArticles } from "@/lib/data";

interface StartProps {
  items: Article[];
}

export default function StartPage({ items }: StartProps) {
  return (
    <main style={{ maxWidth: 800, margin: '0 auto', padding: 40, background: '#0a0a0a', minHeight: '100vh', color: '#fff' }}>
      <h1 style={{ color: '#00d8ff' }}>My Space</h1>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {items.map(item => (
          <li key={item.id} style={{ marginBottom: 24, borderBottom: '1px solid #333', paddingBottom: 16 }}>
            <Link href={`/posts/${item.id}`} style={{ textDecoration: 'none', color: '#00d8ff' }}>
              <h2>{item.heading}</h2>
            </Link>
            <p style={{ color: '#888' }}>{item.minutesRead} min read | {item.published}</p>
            <div>
              {item.labels.map(tag => (
                <span key={tag} style={{ marginRight: 8, background: '#1a1a1a', padding: '4px 8px', borderRadius: 4, fontSize: 12, color: '#aaa' }}>
                  #{tag}
                </span>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const items = await fetchArticles();
  return {
    props: { items },
    revalidate: 60,
  };
};