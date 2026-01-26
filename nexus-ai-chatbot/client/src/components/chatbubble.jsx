export default function ChatBubble({ role, text }) {
  const isUser = role === "user";

  return (
    <div
      style={{
        display: "flex",
        justifyContent: isUser ? "flex-end" : "flex-start",
        marginBottom: 10,
      }}
    >
      <div
        style={{
          background: isUser ? "#2563eb" : "#e5e7eb",
          color: isUser ? "#fff" : "#000",
          padding: "10px 14px",
          borderRadius: 12,
          maxWidth: "70%",
        }}
      >
        {text}
      </div>
    </div>
  );
}
