import "server-only";
import { supabaseServer as supabase } from "../supabase/server.js";

export async function createCheckoutSession(checkoutData) {
  console.log("CHECKOUTdATA", checkoutData);
  const { data, error } = await supabase
    .from("checkout_sessions")
    .insert({ checkoutData })
    .select()
    .single();

  if (error) {
    console.error("❌ Error adding checkout_session:", error);
    throw new Error("Failed to save customer");
  }

  return data;
}
