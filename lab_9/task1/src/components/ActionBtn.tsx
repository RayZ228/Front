import { memo } from "react";

interface Props {
  action: () => void;
  text: string;
}

export const ActionBtn = memo(function ActionBtn({ action, text }: Props) {
  console.log(`ActionBtn render: ${text}`);
  return (
    <button
      onClick={action}
      style={{
        padding: "12px 24px",
        background: "#f59e0b",
        color: "#fff",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer",
        fontWeight: "bold",
        fontSize: "16px",
        marginRight: "10px"
      }}
    >
      {text}
    </button>
  );
});