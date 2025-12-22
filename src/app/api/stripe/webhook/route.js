
import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
  console.log("🔔 Stripe webhook hit");
  return NextResponse.json({ received: true });
}
