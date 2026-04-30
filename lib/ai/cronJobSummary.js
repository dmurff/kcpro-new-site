import supabase from "../../utils/supabaseServer";
import { summarizeConversation } from "../ai/summarizeConversation";
export async function cronJobSummary() {
  const { data: jobs, error: jobError } = await supabase
    .from("jobs")
    .select(
      `
    id,
    customer_id,
    status,
    address,
    hoop_ordered,
    hoop_required,
    summary_message_count,
    summary,
    customers ( name, phone, address, city, state )
  `,
    )
    .eq("status", "active");

  const customerIds = jobs.map((j) => j.customer_id);

  if (!jobs?.length) {
    return;
  }

  const { data: messagesData, error } = await supabase
    .from("messages")
    .select("*")
    .in("customer_id", customerIds)
    .order("created_at", { ascending: true }); // in takes an array (vs eq)

  const msgList = {};
  // loop one
  for (const msg of messagesData) {
    (msgList[msg.customer_id] ||= []).push(msg);
  }
  //   // loop two
  for (const job of jobs) {
    const messages = msgList[job.customer_id] || [];

    if (messages.length === job.summary_message_count) continue;

    const result = await summarizeConversation({
      job,
      messages,
      customer: job.customers,
      previousSummary: job.summary,
    });

    const { data: summary, error } = await supabase
      .from("jobs")
      .update({
        summary: result.summary,
        summary_message_count: messages.length,
        summary_updated_at: new Date().toISOString(),
      })
      .eq("id", job.id);

    console.log("MESSAGES FOR SUMMARY:", messages);
  }

  return;
}
