import { GetServerSideProps } from "next";

interface InfoProps {
  built: string;
}

export default function InfoDynamic({ built }: InfoProps) {
  return (
    <main style={{ maxWidth: 800, margin: '0 auto', padding: 40, background: '#0f0f23', minHeight: '100vh', color: '#fff' }}>
      <h1 style={{ color: '#ff6b6b' }}>About (SSR)</h1>
      <p style={{ color: '#888' }}>Rendered fresh on every request.</p>
      <p style={{ color: '#444', marginTop: 20 }}>Time: {built}</p>
    </main>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      built: new Date().toISOString(),
    },
  };
};