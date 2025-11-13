import React from "react";
import Stripe from "stripe";
import { fetchHoop } from "../../../../lib/data/hoops";
import { fetchImages } from "../../../../lib/data/hoops";
import SuccessClient from "@/app/components/SuccessClient";
import { createCustomerAndJob } from "../../../../lib/db/createCustomerAndJob";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function SuccessPage({ searchParams }) {
  const params = await searchParams;

  console.log("📈📈📈📈📈📈📈📈", params);

  const { payment_intent } = params;

  const paymentIntent = await stripe.paymentIntents.retrieve(payment_intent);
  console.log("XXXXXXXXXXXXXXXX", paymentIntent.metadata);

  const { hoopId, remainder, name, email, phone, address, services } =
    paymentIntent.metadata;

  const selectedServiceIds = JSON.parse(services);
  const remainder_cents = Number(remainder);

  console.log("💳💳💳💳💳💳:", name, email, phone, address);

  const hoop = await fetchHoop(hoopId);
  const hoopImage = await fetchImages(hoopId);
  //   await upsertCustomer({ name, email, phone, address, services });
  // use customer and job values as props to create a visual reinforcement of the service to be rendered or to pass data via email
  const { customer, job, message } = await createCustomerAndJob(
    {
      name,
      email,
      phone,
      address,
    },
    {
      hoop_id: hoopId,
      remainder_cents,
      payment_intent_id: payment_intent,
      selectedServiceIds,
    }
  );

  console.log("🏀💶✅", customer, job, message);

  //   const hoop = await fetchHoop(hoopId);
  //   const hoopImage = await fetchImages(hoopId);

  const totalDue = (remainder / 100).toFixed(2);

  const mainImage = hoopImage?.[1]?.image_url;

  console.log(hoopImage);

  return (
    <SuccessClient hoop={hoop} mainImage={mainImage} totalDue={totalDue} />
  );
}
