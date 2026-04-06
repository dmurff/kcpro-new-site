import "server-only";
import { supabaseServer as supabase } from "../supabase/server.js";

export default async function getCheckoutSession(pi) {
  const { data, error } = await supabase
    .from("checkout_sessions")
    .select("*")
    .eq("payment_intent_id", pi)
    .maybeSingle();

  return data;
}
