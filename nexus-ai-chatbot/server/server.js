import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

app.post("/ask", async (req, res) => {
  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "Kamu adalah asisten AI." },
        { role: "user", content: req.body.question }
      ]
    });

    res.json({
      answer: completion.choices[0].message.content
    });
  } catch (err) {
    res.status(500).json({ error: "OpenAI error" });
  }
});

app.get("/", (req, res) => {
  res.send("Server AI berjalan 🚀");
});


app.listen(3001, () => {
  console.log("Server AI berjalan di http://localhost:3001");
});
