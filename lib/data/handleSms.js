import "server-only";
import supabase from "../../utils/supabaseServer";
import sanitizeHtml from "sanitize-html";
import { revalidatePath } from "next/cache";

export async function handleSms(message) {
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

  console.log("Data Has Returned!!", data);

  revalidatePath(`/admin-dashboard/dashboard/jobs/${jobs.id}/sms`);
}
