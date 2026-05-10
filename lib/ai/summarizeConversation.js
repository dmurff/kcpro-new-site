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

You are summarizing an SMS conversation for a basketball hoop installation business.

CRITICAL RULES:
- Only state what was explicitly agreed in the conversation. Do not infer or assume.
- If a date or time wasn't discussed, do not include one.
- Use the EXACT day-of-week shown in the timestamps. Do not guess.
- A confirmation requires the customer to explicitly agree. "Yes I'm here" is not a meeting confirmation.

JOB DETAILS:
- Customer: ${customer.name}
- Status: ${job.status}
- Hoop ordered: ${job.hoop_ordered ? "yes" : "no"}

CONVERSATION:
${transcript}

Return JSON with these fields:
- summary: 2-3 sentence factual current state
- next_action: what installer should do next (or null if waiting on customer)
- open_questions: array of unresolved items
- urgency: "high" | "normal" | "low"

Respond with ONLY the JSON object.

keep in mind: This is a basketball hoop installation business. Conversations often include:
- Planning/site-visit meetings (to discuss placement, look at the location)
- The actual anchor install (concrete pour, anchor set in the ground)
- The hoop mount (placing the hoop on the cured anchor, days later)
These are SEPARATE events. Distinguish them carefully.
- "meet to discuss placement" / "site visit" = planning meeting, NOT the install
- "set the anchor" / "pour concrete" = the install itself
- "mount the hoop" = final step, after concrete cures (~5+ days)

Do not conflate planning meetings with the install or the mount.
- Try to decide if the job is finished by the conversation. If they say we completed something. Reason if it's just the current stage of the job or if it is the completion of the whole job. 
With this in mind add what the installer or owner should be doing next to the summary.
`;

  const res = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "x-api-key": process.env.ANTHROPIC_SECRET_KEY,
      "anthropic-version": "2023-06-01",
      "content-type": "application/json",
    },
    body: JSON.stringify({
      model: "claude-sonnet-4-6",
      max_tokens: 1024,
      messages: [{ role: "user", content: prompt }],
    }),
  });

  const data = await res.json();
  const rawText = data.content[0].text;

  // Strip markdown code fences if present
  const cleaned = rawText
    .replace(/^```json\s*/i, "")
    .replace(/^```\s*/i, "")
    .replace(/\s*```\s*$/i, "")
    .trim();

  return JSON.parse(cleaned);
}
