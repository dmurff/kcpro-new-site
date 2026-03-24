import { supabaseServer as supabase } from "../supabase/server";

export async function getJobByPI(pi) {
  console.log(":::::::::::::::::::", pi.length);
  const { data, error } = await supabase
    .from("jobs")
    .select("*")
    .eq("deposit_payment_intent_id", pi);

  if (error) console.log("pi is clean can make new job");

  console.log("Supabase Data:", data?.length);
  console.log("Supabase Data:🔥🔥🔥🔥🔥🔥🔥🔥🔥", data);

  return data?.length >= 0 ? data[0] : data;
}

export async function getJobType() {
  const { data, error } = await supabase.from("job_types").select("*");

  return data;
}
