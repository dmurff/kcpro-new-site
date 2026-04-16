export default async function matchSmsToJob({ message, jobs, customers }) {
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const res = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "x-api-key": process.env.ANTHROPIC_SECRET_KEY,
      "anthropic-version": "2023-06-01",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "claude-sonnet-4-6",
      max_tokens: 1024,
      messages: [
        {
          role: "user",
          content: `System/instructions:
You are matching an incoming message to the correct job in our system. 
You will be given the message and a list of active jobs and customer information.
Return JSON only, no other text, in this format:
{
  "job_id": "the matched job id or null",
  "confidence": 0.0 to 1.0,
  "reasoning": "one sentence explaining your match",
  "extracted_details": {
    "customer_name_mentioned": "name if found in message, else null",
    "address_mentioned": "address if found, else null",
    "work_type_mentioned": "type of work if mentioned, else null",
    "time_of_message": "date/time of the message"
  }
}

Rules:
- If no job is a plausible match, return null for job_id
- If confidence is below 0.5, return null for job_id
- Do not guess. Prefer null over a bad match.

User message: ${message}


Here are the active jobs:${JSON.stringify(jobs, null, 2)} Here are the customers: ${JSON.stringify(customers, null, 2)} Use the current date to attach a time to the message ${today}`,
        },
      ],
    }),
  });

  const jobGuess = await res.json();
  //   const noteText = note.content[0].text;

  const rawText = jobGuess.content[0].text;

  // Strip markdown fences if the AI added them despite instructions
  const cleaned = rawText.replace(/```json\n?|\n?```/g, "").trim();

  let parsed;
  parsed = JSON.parse(cleaned);

  console.log("NEW NOTE:::::::", parsed);
  // return note.content[0].text;

  return parsed;
}
