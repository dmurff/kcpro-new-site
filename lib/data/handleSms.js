import "server-only";
import supabase from "../../utils/supabaseServer";
import sanitizeHtml from "sanitize-html";
import matchSmsToJob from "../ai/matchSmsToJob";

export async function handleSms(message) {
  const { data: jobs, error: jobsError } = await supabase
    .from("jobs")
    .select("*");
  const { data: customers, error: customerError } = await supabase
    .from("customers")
    .select("*");

  console.log(jobs);

  try {
    console.log("This is running::::::::");
    const cleanBody = sanitizeHtml(message.Body, {
      allowedTags: [],
      allowedAttributes: {},
    });

    const { data, error } = await supabase
      .from("messages")
      .insert({
        from_number: message.From,
        to_number: message.To,
        body: cleanBody,
        direction: "inbound",
        twilio_sid: message.MessageSid,
      })
      .select();

    if (error) {
      console.log("Error:::::", error, error.message);
    }

    const jobGuess = await matchSmsToJob({
      fromNumber: message.From,
      message: cleanBody,
      jobs,
      customers,
    });

    console.log("The Guess::::::", jobGuess);

    console.log("Data Has Returned!!", data);
  } catch (err) {
    if (err) console.log("ERROR:", err, err.message);
  }
}
