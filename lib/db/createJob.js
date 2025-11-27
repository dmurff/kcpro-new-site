import supabase from "../../utils/supabaseServer";

export async function createJob(
  customer_id,
  hoop_id,
  full_address,
  job_type_id,
  remainder_cents,
  payment_intent_id
) {
  const { data: existingJob } = await supabase
    .from("jobs")
    .select("id")
    .eq("deposit_payment_intent_id", payment_intent_id)
    .maybeSingle();

  if (existingJob) {
    // Job already exists
    return {
      message: "✅ Your order has already been added to our queue!",
      job: existingJob,
    };
  }

  // Otherwise insert new job
  const { data: job, error } = await supabase
    .from("jobs")
    .insert({
      customer_id,
      hoop_id,
      full_address,
      job_type_id,
      remainder_cents,
      deposit_payment_intent_id: payment_intent_id,
      status: "deposit paid",
    })
    .select()
    .single();

  if (error) {
    console.error("❌ Error upserting job:", error.message);
    throw new Error("Failed to save job");
  }

  return { message: "Your order was successfully made!", job };
}
