import supabase from "../../utils/supabaseServer";

export async function createJob(
  customer_id,
  hoop_id,
  remainder_cents,
  payment_intent_id
) {
  const { data: job, error } = await supabase
    .from("jobs")
    .insert({
      customer_id,
      hoop_id,
      remainder_cents,
      deposit_payment_intent_id: payment_intent_id,
      status: "deposit paid",
    })
    .select()
    .single();

  if (error) {
    console.error("❌ Error upserting job:", error);
    throw new Error("Failed to save job");
  }

  return job;
}
