import { GetServerSideProps } from "next";
import { PanelUser, Alert } from "@/types";
import { getActiveUser, getAlerts, getStats } from "@/lib/data";

interface PanelProps {
  account: PanelUser;
  alerts: Alert[];
  stats: { views: number; visits: number; dropOff: string };
  refreshed: string;
}

export default function Panel({ account, alerts, stats, refreshed }: PanelProps) {
  const unseen = alerts.filter(a => !a.seen).length;

  return (
    <div style={{ maxWidth: 900, margin: '40px auto', padding: 30, fontFamily: 'sans-serif', background: '#0f0f23', minHeight: '100vh', color: '#fff' }}>
      <header style={{ marginBottom: 30 }}>
        <h1 style={{ color: '#ff6b6b' }}>Hello, {account.displayName}</h1>
        <p style={{ color: '#888' }}>Role: {account.access}</p>
      </header>

      <section style={{ background: '#1a1a2e', padding: 20, borderRadius: 12, marginBottom: 30 }}>
        <h2 style={{ color: '#ff6b6b' }}>Stats</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
          <div style={{ background: '#16213e', padding: 16, borderRadius: 8, textAlign: 'center' }}>
            <div style={{ fontSize: 24, fontWeight: 'bold', color: '#ff6b6b' }}>{stats.views}</div>
            <div style={{ color: '#888' }}>Views</div>
          </div>
          <div style={{ background: '#16213e', padding: 16, borderRadius: 8, textAlign: 'center' }}>
            <div style={{ fontSize: 24, fontWeight: 'bold', color: '#ff6b6b' }}>{stats.visits}</div>
            <div style={{ color: '#888' }}>Visits</div>
          </div>
          <div style={{ background: '#16213e', padding: 16, borderRadius: 8, textAlign: 'center' }}>
            <div style={{ fontSize: 24, fontWeight: 'bold', color: '#ff6b6b' }}>{stats.dropOff}%</div>
            <div style={{ color: '#888' }}>Drop-off</div>
          </div>
        </div>
      </section>

      <section style={{ background: '#1a1a2e', padding: 20, borderRadius: 12 }}>
        <h2 style={{ color: '#ff6b6b' }}>Alerts ({unseen} new)</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {alerts.map(a => (
            <li key={a.id} style={{ padding: 12, marginBottom: 8, background: a.seen ? '#16213e' : '#4a2c2c', borderRadius: 6, borderLeft: `4px solid ${a.kind === 'success' ? '#28a745' : a.kind === 'warning' ? '#ffc107' : '#17a2b8'}` }}>
              <strong>{a.kind}</strong>: {a.text} <span style={{ color: '#666', fontSize: 12 }}>({a.created})</span>
            </li>
          ))}
        </ul>
      </section>

      <footer style={{ marginTop: 30, color: '#555', fontSize: 14 }}>
        Last update: {refreshed}
      </footer>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const account = getActiveUser();
  const alerts = await getAlerts(account.id);
  const stats = await getStats(account.id);

  return {
    props: {
      account,
      alerts,
      stats,
      refreshed: new Date().toISOString(),
    },
  };
};