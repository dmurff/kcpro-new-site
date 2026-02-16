import "server-only";
import { supabaseServer as supabase } from "../supabase/server.js";

export default async function getCheckoutSession(pi) {
  const { data, error } = await supabase
    .from("checkout_sessions")
    .select("checkout_total")
    .eq("payment_intent_id", pi)
    .maybeSingle();

  console.log("llalalalaaallaallaaalalala", data);

  return data;
}
