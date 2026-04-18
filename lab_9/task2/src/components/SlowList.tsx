import { useMemo } from "react";
import { buildRows } from "../utils/buildRows";

interface Props {
  amount?: number;
}

export function SlowList({ amount = 10000 }: Props) {
  const rows = useMemo(() => buildRows(amount), [amount]);

  return (
    <div style={{ maxWidth: 720, margin: "0 auto", padding: 32 }}>
      <h2 style={{ color: "#b91c1c", fontFamily: "Georgia, serif" }}>Slow List (Regular)</h2>
      <p style={{ color: "#78716c" }}>Rendering every single {rows.length} nodes...</p>
      <div style={{ maxHeight: 500, overflow: "auto", border: "2px solid #fecaca", borderRadius: 12 }}>
        {rows.map((row) => (
          <div key={row.key} style={{ padding: "14px 20px", borderBottom: "1px solid #fef2f2" }}>
            <h4 style={{ margin: 0, color: "#7f1d1d" }}>{row.label}</h4>
            <p style={{ margin: "6px 0", color: "#78716c", fontSize: "14px" }}>{row.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}