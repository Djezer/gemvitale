export default async function handler(req, res) {
  const geminiKey = process.env.GEMINI_API_KEY;
  const anthropicKey = process.env.ANTHROPIC_API_KEY;
  
  const results = {
    gemini_key_present: !!geminiKey,
    gemini_key_prefix: geminiKey ? geminiKey.substring(0, 8) + "..." : "ABSENT",
    anthropic_key_present: !!anthropicKey,
    anthropic_key_prefix: anthropicKey ? anthropicKey.substring(0, 8) + "..." : "ABSENT",
    gemini_test: null,
    anthropic_test: null,
  };

  // Test Gemini
  if (geminiKey) {
    try {
      const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent`;
      const r = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json", "x-goog-api-key": geminiKey },
        body: JSON.stringify({ contents: [{ parts: [{ text: "Réponds juste: OK" }] }] }),
      });
      const d = await r.json();
      if (d?.error) results.gemini_test = "ERREUR: " + d.error.message;
      else results.gemini_test = "OK: " + (d?.candidates?.[0]?.content?.parts?.[0]?.text || "réponse vide");
    } catch(e) {
      results.gemini_test = "EXCEPTION: " + e.message;
    }
  }

  // Test Anthropic
  if (anthropicKey) {
    try {
      const r = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type":"application/json","x-api-key":anthropicKey,"anthropic-version":"2023-06-01" },
        body: JSON.stringify({ model:"claude-haiku-4-5-20251001", max_tokens:20, messages:[{role:"user",content:"Réponds juste: OK"}] }),
      });
      const d = await r.json();
      if (d?.error) results.anthropic_test = "ERREUR: " + d.error.message;
      else results.anthropic_test = "OK: " + (d?.content?.[0]?.text || "réponse vide");
    } catch(e) {
      results.anthropic_test = "EXCEPTION: " + e.message;
    }
  }

  res.status(200).json(results);
}
