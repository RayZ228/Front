import { memo } from "react";

interface Worker {
  uid: number;
  alias: string;
  contact: string;
}

interface Props {
  data: Worker;
}

// memo — перерисовываем только если проп поменялся
export const WorkerCard = memo(function WorkerCard({ data }: Props) {
  console.log("WorkerCard render:", data.alias);
  return (
    <div style={{
      background: "#fef3c7",
      border: "2px solid #f59e0b",
      padding: "20px",
      borderRadius: "12px",
      marginBottom: "12px"
    }}>
      <h3 style={{ margin: 0, color: "#92400e" }}>{data.alias}</h3>
      <p style={{ margin: "8px 0 0", color: "#b45309", fontSize: "14px" }}>{data.contact}</p>
    </div>
  );
});