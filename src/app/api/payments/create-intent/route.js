import { NextResponse } from "next/server";
import Stripe from "stripe";
import supabase from "../../../../../utils/supabaseServer";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
  const body = await req.json();
  console.log("💶💶💶❤️", body);
  const hoopId = body.hoop;
  const selectedServices = body.services;

  const serviceRows = await Promise.all(
    selectedServices.map(async (s) => {
      const { data, error } = await supabase
        .from("services")
        .select("*")
        .eq("name", s)
        .single();

      return data;
    })
  );

  console.log("🕰️🕰️", serviceRows);

  // Filter out nulls if any query failed

  const validServices = serviceRows.filter(Boolean);

  // Add up the service prices

  const serviceTotal = validServices.reduce(
    (sum, service) => sum + service.price,
    0
  );

  console.log("🍷🍷🍷🍷🍷", serviceTotal);

  const { data, error } = await supabase
    .from("hoops")
    .select("*")
    .eq("id", hoopId)
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
        hoopId,
      },
    });

    console.log(paymentIntent.client_secret);

    return NextResponse.json({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (err) {
    console.error("❌ Stripe Error:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
