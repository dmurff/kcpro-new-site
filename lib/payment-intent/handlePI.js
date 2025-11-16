import Stripe from "stripe";
// import supabase from "./../../utils/supabaseServer";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function getPIMetadata(pi) {
  const id = pi;

  const paymentIntent = await stripe.paymentIntents.retrieve(id);

  const orderData = { ...paymentIntent.metadata };

  if (!orderData) {
    return { message: "No order data found" };
  }
  return orderData;
}
