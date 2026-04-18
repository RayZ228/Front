import { useState, useMemo, useCallback } from "react";
import { FixedSizeList as List } from "react-window";
import { buildRows, RowItem } from "../utils/buildRows";

interface Props {
  amount?: number;
  height?: number;
}

export function FastList({ amount = 10000, height = 500 }: Props) {
  const [filterText, setFilterText] = useState("");

  const source = useMemo(() => buildRows(amount), [amount]);
  const visible = useMemo(() => {
    if (!filterText) return source;
    const q = filterText.toLowerCase();
    return source.filter((r) => r.label.toLowerCase().includes(q) || r.group.toLowerCase().includes(q));
  }, [source, filterText]);

  const onType = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterText(e.target.value);
  }, []);

  const Line = ({ index, style }: { index: number; style: React.CSSProperties }) => {
    const row = visible[index];
    return (
      <div style={{ ...style, padding: "0 20px" }}>
        <div style={{ borderBottom: "1px solid #fed7aa", padding: "14px 0" }}>
          <h4 style={{ margin: 0, color: "#9a3412" }}>{row.label}</h4>
          <p style={{ margin: "6px 0", color: "#78716c", fontSize: "14px" }}>{row.desc}</p>
          <span style={{
            fontSize: "12px",
            background: "#ffedd5",
            color: "#c2410c",
            padding: "3px 10px",
            borderRadius: "20px"
          }}>
            {row.group}
          </span>
        </div>
      </div>
    );
  };

  return (
    <div style={{ maxWidth: 720, margin: "0 auto", padding: 32 }}>
      <h2 style={{ color: "#c2410c", fontFamily: "Georgia, serif" }}>Fast List (Virtual)</h2>
      <input
        type="text"
        placeholder="Search rows..."
        value={filterText}
        onChange={onType}
        style={{
          width: "100%",
          padding: 12,
          marginBottom: 12,
          borderRadius: 8,
          border: "2px solid #fdba74",
          fontSize: "16px"
        }}
      />
      <p style={{ color: "#78716c" }}>Displaying {visible.length} of {source.length} total</p>
      <List height={height} itemCount={visible.length} itemSize={110} width="100%">
        {Line}
      </List>
    </div>
  );
}