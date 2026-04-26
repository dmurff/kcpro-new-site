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

  try {
    const cleanBody = sanitizeHtml(message.Body, {
      allowedTags: [],
      allowedAttributes: {},
    });

    const { data: caller, error: callerError } = await supabase
      .from("customers")
      .select("phone")
      .eq("phone", message.From)
      .single();

    const { data, error } = await supabase
      .from("messages")
      .insert({
        from_number: message.From,
        to_number: message.To,
        customer_id: caller,
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

    console.log(
      "The Guess::::::",
      jobGuess.extracted_details,
      jobGuess.reasoning,
    );

    console.log("Data Has Returned!!", data);

    if (jobGuess.job_id) {
      const { error: noteError } = await supabase.from("notes").insert({
        content: cleanBody,
        job_id: jobGuess.job_id,
      });

      if (noteError) console.error("Note insert failed:", noteError);
    }
  } catch (err) {
    if (err) console.log("ERROR:", err, err.message);
  }
}
