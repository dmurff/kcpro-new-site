export default async function matchSmsToJob({
  message,
  jobs,
  customers,
  fromNumber,
}) {
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
You are matching an incoming message to the correct job in our system. If you can't 
figure out which job it is with UUIDs or other data use the incoming phone number as a way to match it.
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
- If the phone number matches a customer in the list then assume that name for the customer.
- If there is no active job but that is an active customer then suggest a follow up based on their message and add relevant details.
- If it appears to be a new customer with no identifiers, sumamrize the message and suggest a follow up. 
- Only use the phone number as an idetifier if there is no other information in the message that can help determine if this is a new or existing customer. 
- If they identify themselves as someone that doesn't line up with the customer linked to the phone number then assume this is a new customer entirely and gather as much relavant info as possible.

User message: ${message}
From Number: ${fromNumber}


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
