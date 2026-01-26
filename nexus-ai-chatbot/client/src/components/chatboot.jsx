import { useState } from "react"

function Chatbot() {
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState("")

  const sendMessage = () => {
    if (!input) return

    setMessages([
      ...messages,
      { sender: "user", text: input },
      { sender: "bot", text: "Halo! Saya chatbot 🤖" }
    ])

    setInput("")
  }

  return (
    <div>
      <div style={{ border: "1px solid #ccc", padding: 10, height: 300 }}>
        {messages.map((msg, i) => (
          <p key={i}>
            <b>{msg.sender}:</b> {msg.text}
          </p>
        ))}
      </div>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Ketik pesan..."
      />
      <button onClick={sendMessage}>Kirim</button>
    </div>
  )
}

export default Chatbot
