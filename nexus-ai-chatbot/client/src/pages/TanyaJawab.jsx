import { useState } from "react";

export default function TanyaJawab() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAsk = async () => {
    if (!question.trim()) return;

    setLoading(true);
    setAnswer("");

    try {
      const res = await fetch("http://localhost:3001/ask", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question }),
      });

      const data = await res.json();
      setAnswer(data.answer);
    } catch (err) {
      setAnswer("Terjadi kesalahan.");
    }

    setLoading(false);
  };

  return (
    <div style={{ padding: 20, maxWidth: 700, margin: "auto" }}>
      <h2>🤖 Tanya Jawab AI (OpenAI Asli)</h2>

      <textarea
        rows="4"
        style={{ width: "100%", marginBottom: 10 }}
        placeholder="Tulis pertanyaan kamu..."
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />

      <button onClick={handleAsk} disabled={loading}>
        {loading ? "Menjawab..." : "Tanya"}
      </button>

      {answer && (
        <div style={{ marginTop: 20 }}>
          <strong>Jawaban AI:</strong>
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
}
