import { GetServerSideProps } from "next";
import { Writer } from "@/types";
import { fetchWriterById } from "@/lib/data";

interface PersonProps {
  person: Writer;
  now: string;
}

export default function PersonPage({ person, now }: PersonProps) {
  return (
    <main style={{ maxWidth: 800, margin: '0 auto', padding: 40, background: '#0a0a0a', minHeight: '100vh', color: '#fff' }}>
      <h1 style={{ color: '#00d8ff' }}>{person.fullName}</h1>
      <p style={{ color: '#888' }}>{person.about}</p>
      <p style={{ color: '#444', marginTop: 20 }}>Server time: {now}</p>
    </main>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const person = await fetchWriterById(params?.id as string);
  if (!person) return { notFound: true };
  return {
    props: {
      person,
      now: new Date().toISOString(),
    },
  };
};