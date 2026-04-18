import { useState, useCallback } from "react";
import { WorkerCard } from "./WorkerCard";
import { StatEngine } from "./StatEngine";
import { ActionBtn } from "./ActionBtn";

interface Worker {
  uid: number;
  alias: string;
  contact: string;
}

export function MainHub() {
  const [score, setScore] = useState(0);
  const [worker] = useState<Worker>({ uid: 1, alias: "Sam", contact: "sam@test.com" });
  const [numbers] = useState([10, 20, 30]);

  // useCallback — функция не пересоздаётся
  const addPoint = useCallback(() => setScore((s) => s + 1), []);
  const sayHello = useCallback(() => alert("Hello!"), []);

  return (
    <div style={{
      maxWidth: "600px",
      margin: "40px auto",
      padding: "24px",
      background: "#fffbeb",
      minHeight: "100vh",
      fontFamily: "Georgia, serif"
    }}>
      <h1 style={{ color: "#92400e" }}>Hub (Score: {score})</h1>

      <ActionBtn action={addPoint} text="+1 Point" />
      <ActionBtn action={sayHello} text="Say Hello" />

      <div style={{ marginTop: "24px" }}>
        <WorkerCard data={worker} />
        <StatEngine values={numbers} />
      </div>
    </div>
  );
}