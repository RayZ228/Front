import StepCounter from './StepCounter';

export default function CounterApp() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Лабораторная 3.1: Компоненты и Состояние</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <StepCounter initialValue={0} step={1} />
        <StepCounter initialValue={10} step={5} />
      </div>
    </div>
  );
}