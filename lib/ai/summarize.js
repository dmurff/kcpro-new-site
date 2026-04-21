import supabase from "../../utils/supabaseServer";
import matchSmsToJob from "./matchSmsToJob";

export async function summarizeTranscript(transcript, fromNumber) {
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const { data: jobData, error: jobDataErr } = await supabase
    .from("jobs")
    .select("customer_id, id, address");

  const { data: customerData, error: customerDataErr } = await supabase
    .from("customers")
    .select("phone, address, name, id");

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
          content: `You are a note-taking assistant. Extract information from this phone call transcript and return ONLY a valid JSON object with exactly these fields, no other text, no markdown, no backticks, no comments:

         


{
  "customerName": "",
  "address": "",
  "dateOfService": "use exact date if stated, otherwise calculate a specific date from ${today} based on any relative timeframe mentioned",
  "timeWindow": "",
  "jobDescription": "",
  "customerType": "new or existing",
  "followUpNeeded": true or false,
  "additionalNotes": "note here if date is an estimate"
}

If a field is unknown use null. Transcript: ${transcript}


`,
        },
      ],
    }),
  });

  const note = await res.json();
  const rawText = note.content[0].text;
  const cleaned = rawText.replace(/```json\n?|\n?```/g, "").trim();

  let parsed;
  try {
    parsed = JSON.parse(cleaned);
  } catch (err) {
    console.error("Failed to parse AI response:", rawText);
    return null;
  }

  // const jobId = parsed.jobId;
  const content = JSON.stringify(parsed);

  const jobMatch = await matchSmsToJob({
    jobs: jobData,
    customers: customerData,
    message: content,
    fromNumber,
  });

  console.log(jobMatch);

  const { data, error } = await supabase
    .from("notes")
    .insert({ content, job_id: jobMatch.job_id })
    .select();

  console.log("data:", data, "error:", error);
  return content;
}
