import { useState } from "react"

function TanyaJawab() {
  const [pertanyaan, setPertanyaan] = useState("")
  const [chat, setChat] = useState([])

  const kirimPertanyaan = () => {
    if (!pertanyaan) return

    setChat([
      ...chat,
      { role: "user", text: pertanyaan },
      { role: "bot", text: "Ini jawaban sementara 🤖" }
    ])

    setPertanyaan("")
  }

  return (
    <div style={{ padding: 20 }}>
      <h2>Halaman Tanya Jawab</h2>

      <div
        style={{
          border: "1px solid #ccc",
          padding: 10,
          height: 300,
          overflowY: "auto",
          marginBottom: 10
        }}
      >
        {chat.map((item, index) => (
          <p key={index}>
            <b>{item.role === "user" ? "Kamu" : "Bot"}:</b> {item.text}
          </p>
        ))}
      </div>

      <input
        type="text"
        value={pertanyaan}
        onChange={(e) => setPertanyaan(e.target.value)}
        placeholder="Tulis pertanyaan..."
        style={{ width: "70%", marginRight: 10 }}
      />
      <button onClick={kirimPertanyaan}>Kirim</button>
    </div>
  )
}

export default TanyaJawab
