import { supabaseServer as supabase } from "../supabase/server.js";
// import NextResponse from "next/server";
export async function fetchCheckoutSession(paymentIntentId) {
  const { data, error } = await supabase
    .from("checkout_sessions")
    .select("*")
    .eq("payment_intent_id", paymentIntentId)
    .single();

  if (error) throw new Error("Couldn't fetch checkout session.");

  const formattedData = {
    ...data,
    postalCode: data.postal_code,
    paymentIntentId: data.payment_intent_id,
    totalCents: data.total_cents,
    depositCents: data.deposit_cents,
    remainder: data.remainder_cents,
    selectedServiceIds: data.selected_service_ids,
    hoopId: data.hoop_id,
    checkoutTotal: data.checkout_total,
  };
  return data;
}
