// export async function summarizeConversation() {
//   const today = new Date().toLocaleDateString("en-US", {
//     weekday: "long",
//     year: "numeric",
//     month: "long",
//     day: "numeric",
//   });

//   const res = await fetch("https://api.anthropic.com/v1/messages", {
//     method: "POST",
//     headers: {
//       "x-api-key": process.env.ANTHROPIC_SECRET_KEY,
//       "anthropic-version": "2023-06-01",
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       model: "claude-sonnet-4-6",
//       max_tokens: 1024,

//       messages: [
//         {
//           role: "user",
//           content: `Your job is to look through all the messages in the conversation and important details instrutions etc. You are to make a determination of what was agreed upon most recently and where the job currently stands as well as what the job is and what has been done so far. I want you to display dates meet times based on most recent change working with ${today} in mind for reference.`,
//         },
//       ],
//     }),
//   });
// }

// AI suggestion below
export async function summarizeConversation({
  job,
  messages,
  customer,
  previousSummary,
}) {
  const today = new Date().toLocaleDateString("en-US", { dateStyle: "full" });

  const transcript = messages
    .map((m) => {
      const when = new Date(m.created_at).toLocaleString("en-US", {
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "2-digit",
      });
      const who = m.direction === "inbound" ? customer.name : "Installer";
      return `[${when}] ${who}: ${m.body}`;
    })
    .join("\n");

  const prompt = `Today's date: ${today}

You are summarizing an SMS conversation for a basketball hoop installation business. Use the context below to produce a brief, factual summary of where this job stands.

JOB DETAILS:
- Customer: ${customer.name}
- Phone: ${customer.phone}
- Install address: ${job.address}
- Status: ${job.status}
- Hoop ordered: ${job.hoop_ordered ? "yes" : "no"}

${previousSummary ? `PREVIOUS SUMMARY (for continuity):\n${previousSummary}\n` : ""}
CONVERSATION:
${transcript}

Return JSON with these fields:
- summary: 2-3 sentence current state of the job
- next_action: what the installer needs to do next (or null if waiting on customer)
- open_questions: array of unresolved items
- urgency: "high" | "normal" | "low"

Respond with ONLY the JSON object.`;

  const res = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "x-api-key": process.env.ANTHROPIC_SECRET_KEY,
      "anthropic-version": "2023-06-01",
      "content-type": "application/json",
    },
    body: JSON.stringify({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 1024,
      messages: [{ role: "user", content: prompt }],
    }),
  });

  const data = await res.json();
  return JSON.parse(data.content[0].text);
}
