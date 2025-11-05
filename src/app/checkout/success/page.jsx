import React from "react";
import Stripe from "stripe";
import { fetchHoop } from "../../../../lib/data/hoops";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function SuccessPage({ searchParams }) {
  const params = await searchParams;
  console.log("🍕:", params);

  const data = params;

  console.log("✅✅✅", data);

  const { payment_intent } = data;

  const paymentIntent = await stripe.paymentIntents.retrieve(payment_intent);
  console.log(paymentIntent);

  const { hoopId } = paymentIntent.metadata;

  const hoop = await fetchHoop(hoopId);

  return (
    <>
      <div className="text-xl font-md text-black">
        SuccessPage!
        <h1>{`${payment_intent}`}</h1>
      </div>
    </>
  );
}
