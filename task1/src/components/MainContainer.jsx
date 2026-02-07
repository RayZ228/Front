import ValueBox from './ValueBox';

export default function MainContainer() {
  return (
    <div style={{
      backgroundColor: '#0f0f1e',
      minHeight: '100vh',
      padding: '40px 20px',
      fontFamily: 'Segoe UI, sans-serif'
    }}>
      <h1 style={{
        color: '#e94560',
        textAlign: 'center',
        marginBottom: '40px',
        fontSize: '2.5rem'
      }}>
        Лабораторная 3.1
      </h1>

      <div style={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: '20px',
        maxWidth: '1000px',
        margin: '0 auto'
      }}>
        <ValueBox startValue={0} stepValue={1} />
        <ValueBox startValue={100} stepValue={10} />
      </div>
    </div>
  );
}