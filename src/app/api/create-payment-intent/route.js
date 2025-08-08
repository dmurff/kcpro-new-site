import { NextResponse } from "next/server";
import Stripe from "stripe";
import supabase from "../../../../utils/supabaseServer";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
  const body = await req.json();
  const { id } = body;

  const { data, error } = await supabase
    .from("hoops")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error("❌ Supabase Error:", error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  console.log(data);

  // ✅ 2. Convert hoop price to cents (assuming it's in dollars)
  const price = Math.round(Number(data.price) * 100);

  if (isNaN(price) || price <= 0) {
    return NextResponse.json({ error: "Invalid price" }, { status: 400 });
  }

  console.log("Creating PaymentIntent for amount:", price);

  console.log("Stripe secret key is:", process.env.STRIPE_SECRET_KEY);

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: price,
      currency: "usd",
      metadata: {
        id,
      },
    });

    return NextResponse.json({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (err) {
    console.error("❌ Stripe Error:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
