import supabase from "../../utils/supabaseServer";

export async function getJobMessages(jobs) {
  const customerIds = jobs.map((j) => j.customer_id);

  const { data: messagesData, error } = await supabase
    .from("messages")
    .select("*")
    .in("customer_id", customerIds); // in takes an array (vs eq)

  const msgList = {};
  // loop one
  for (const msg of messagesData) {
    (msgList[msg.customer_id] ||= []).push(msg);
  }
  //   // loop two
  for (const job of jobs) {
    const messages = msgList[job.customer_id] || [];

    if (messages.length === job.summary_message_count) continue;
  }

  return msgList;
}
