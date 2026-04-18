import { FastList } from "./components/FastList";
import { SlowList } from "./components/SlowList";

export default function App() {
  return (
    <div style={{ background: "#fff7ed", minHeight: "100vh", padding: "20px 0" }}>
      <FastList />
      <div style={{ borderTop: "4px dashed #fed7aa", margin: "40px auto", maxWidth: 720 }} />
      <SlowList />
    </div>
  );
}