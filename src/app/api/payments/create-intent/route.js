import { NextResponse } from "next/server";
import Stripe from "stripe";
import createSupabseServer from "../../../../../lib/supabase/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
  const supabase = createSupabseServer();

  const body = await req.json();
  const hoopId = body.hoop;
  const selectedServices = body.services;

  // Idempotency key extraction
  const idempotencyKey = req.headers.get("idempotency-key");

  const { data: services, error: serviceError } = await supabase
    .from("services")
    .select("*")
    .in("name", selectedServices);

  // Filter out nulls if any query failed

  // Add up the service prices

  const serviceTotal = services.reduce(
    (sum, service) => sum + service.price,
    0
  );

  // service deposit at 25%
  const deposit = Math.round(Number(Math.min(serviceTotal * 0.25, 200)) * 100);

  const remainder = serviceTotal * 100 - deposit;

  // const serviceAmount = Math.round(Number(serviceTotal * 0.25 * 100));

  const { data, error } = await supabase
    .from("hoops")
    .select("*")
    .eq("id", hoopId)
    .single();

  if (error) {
    console.error("❌ Supabase Error:", error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  // ✅ 2. Convert hoop price to cents (assuming it's in dollars)
  const price = Math.round(Number(data.price) * 100);

  if (isNaN(price) || price <= 0) {
    return NextResponse.json({ error: "Invalid price" }, { status: 400 });
  }

  const finalSale = Math.round(Number(price + deposit));

  try {
    const paymentIntent = await stripe.paymentIntents.create(
      {
        amount: finalSale,
        currency: "usd",
        payment_method_types: ["card"],
        metadata: {
          hoopId,
          remainder,
          services: JSON.stringify(services.map((s) => s.id)),
          amount_paid: deposit,
          deposit_amount: deposit,
        },
      },
      { idempotencyKey }
    );

    return NextResponse.json({
      clientSecret: paymentIntent.client_secret,
      paymentIntentId: paymentIntent.id,
    });
  } catch (err) {
    console.error("❌ Stripe Error:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
