import Stripe from "stripe";
// import supabase from "./../../utils/supabaseServer";

export async function getPIMetadata(pi) {
  const piId = pi;

  const res = await Stripe.retrieve();
}
