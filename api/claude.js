export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const geminiKey = process.env.GEMINI_API_KEY;
  const anthropicKey = process.env.ANTHROPIC_API_KEY;
  const { messages, max_tokens = 1500 } = req.body;
  const userPrompt = messages?.[0]?.content || "";

  // ── GEMINI — essaie les 2 formats de clé ──
  if (geminiKey) {
    // Format 1 : clé AIza (classique) — paramètre URL
    // Format 2 : clé AQ. (nouveau) — header Bearer
    const isNewFormat = geminiKey.startsWith("AQ.");

    const geminiBody = JSON.stringify({
      contents: [{ parts: [{ text: userPrompt }] }],
      generationConfig: { maxOutputTokens: max_tokens, temperature: 0.7 },
    });

    // Essaie gemini-2.0-flash puis gemini-1.5-flash
    const models = ["gemini-2.0-flash", "gemini-1.5-flash"];

    for (const model of models) {
      try {
        const url = isNewFormat
          ? `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`
          : `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${geminiKey}`;

        const headers = { "Content-Type": "application/json" };
        if (isNewFormat) headers["x-goog-api-key"] = geminiKey;

        const geminiRes = await fetch(url, { method: "POST", headers, body: geminiBody });
        const data = await geminiRes.json();

        if (data?.error) {
          console.error(`Gemini ${model} error:`, data.error.message);
          continue;
        }

        const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;
        if (text) {
          return res.status(200).json({
            content: [{ type: "text", text }],
            model,
          });
        }
      } catch (e) {
        console.error(`Gemini ${model} exception:`, e.message);
      }
    }
  }

  // ── FALLBACK: CLAUDE HAIKU ──
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
          max_tokens,
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
