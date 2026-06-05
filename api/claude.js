export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  // Try Gemini first (free), fallback to Claude
  const geminiKey = process.env.GEMINI_API_KEY;
  const anthropicKey = process.env.ANTHROPIC_API_KEY;

  const { messages, max_tokens = 1500 } = req.body;
  const userPrompt = messages?.[0]?.content || "";

  // ── GEMINI ──
  if (geminiKey) {
    try {
      const geminiRes = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${geminiKey}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [{ parts: [{ text: userPrompt }] }],
            generationConfig: { maxOutputTokens: max_tokens, temperature: 0.7 },
          }),
        }
      );
      const data = await geminiRes.json();
      const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;
      if (text) {
        return res.status(200).json({
          content: [{ type: "text", text }],
          model: "gemini-2.0-flash",
        });
      }
    } catch (e) {
      console.error("Gemini error:", e.message);
    }
  }

  // ── FALLBACK: CLAUDE ──
  if (anthropicKey) {
    try {
      const response = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": anthropicKey,
          "anthropic-version": "2023-06-01",
        },
        body: JSON.stringify({
          model: "claude-haiku-4-5-20251001",
          max_tokens: max_tokens,
          messages,
        }),
      });
      const data = await response.json();
      return res.status(200).json(data);
    } catch (e) {
      console.error("Claude error:", e.message);
    }
  }

  return res.status(500).json({ error: "No AI provider available" });
}
