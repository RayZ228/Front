import { useMemo } from "react";

interface Props {
  values: number[];
}

// Имитация сложных вычислений
function slowSum(arr: number[]): number {
  console.log("StatEngine: heavy compute...");
  let total = 0;
  for (let i = 0; i < 3000000; i++) total += Math.sqrt(i);
  return total + arr.reduce((a, b) => a + b, 0);
}

export function StatEngine({ values }: Props) {
  const result = useMemo(() => slowSum(values), [values]);

  return (
    <div style={{
      background: "#fef3c7",
      border: "2px solid #f59e0b",
      padding: "20px",
      borderRadius: "12px",
      marginBottom: "12px"
    }}>
      <h4 style={{ margin: 0, color: "#92400e" }}>Heavy Stats</h4>
      <p style={{ color: "#b45309", fontWeight: "bold", fontSize: "18px" }}>
        Result: {Math.floor(result)}
      </p>
    </div>
  );
}