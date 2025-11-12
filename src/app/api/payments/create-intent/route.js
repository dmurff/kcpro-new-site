import { NextResponse } from "next/server";
import Stripe from "stripe";
import supabase from "../../../../../utils/supabaseServer";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
  const body = await req.json();
  console.log("💶💶💶❤️", body);
  const hoopId = body.hoop;
  const selectedServices = body.services;

  // Idempotency key extraction
  const idempotencyKey = req.headers.get("idempotency-key");

  const { data: services, error: serviceError } = await supabase
    .from("services")
    .select("*")
    .in("name", selectedServices);

  console.log("🕰️🕰️", services);

  // Filter out nulls if any query failed

  // Add up the service prices

  const serviceTotal = services.reduce(
    (sum, service) => sum + service.price,
    0
  );

  console.log("🍷🍷🍷🍷🍷", serviceTotal);

  // service deposit at 25%
  const deposit = Math.round(Number(Math.min(serviceTotal * 0.25, 200)) * 100);

  const remainder = serviceTotal * 100 - deposit;

  // const serviceAmount = Math.round(Number(serviceTotal * 0.25 * 100));
  console.log("SERVICE TOTAL:", deposit);

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

  const finalSale = Math.round(Number(price + deposit));
  console.log("💳💳💳", finalSale);

  try {
    const paymentIntent = await stripe.paymentIntents.create(
      {
        amount: finalSale,
        currency: "usd",
        payment_method_types: ["card", "link"],
        metadata: {
          hoopId,
          remainder,
          services: JSON.stringify(services.map((s) => s.id)),
        },
      },
      { idempotencyKey }
    );

    console.log(paymentIntent.client_secret, paymentIntent);

    return NextResponse.json({
      clientSecret: paymentIntent.client_secret,
      paymentIntentId: paymentIntent.id,
    });
  } catch (err) {
    console.error("❌ Stripe Error:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
