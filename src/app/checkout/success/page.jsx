import React from "react";
import Stripe from "stripe";
import { fetchHoop } from "../../../../lib/data/hoops";
import { fetchImages } from "../../../../lib/data/hoops";
import SuccessClient from "@/app/components/SuccessClient";
import { createCustomerAndJob } from "../../../../lib/db/createCustomerAndJob";
import { redirect } from "next/navigation";
// import { createMessage } from "../../../lib/twilio/send_sms";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function SuccessPage({ searchParams }) {
  const params = await searchParams;

  const { payment_intent } = params;

  const paymentIntent = await stripe.paymentIntents.retrieve(payment_intent);

  const { hoopId, remainder, name, email, phone, address, services } =
    paymentIntent.metadata;

  console.log("🍷🍷✅:", services);

  // Stripe only stores strings so must convert the O's to true array's and numbers
  const selectedServiceIds = JSON.parse(services);

  const remainder_cents = Number(remainder);

  const hoop = await fetchHoop(hoopId);
  const hoopImage = await fetchImages(hoopId);
  //   await upsertCustomer({ name, email, phone, address, services });
  // use customer and job values as props to create a visual reinforcement of the service to be rendered or to pass data via email

  try {
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
  } catch (err) {
    console.error("🔥 Crititcal error", err);
    return;
  }

  // send comfirmation text
  // createMessage();

  //   const hoop = await fetchHoop(hoopId);
  //   const hoopImage = await fetchImages(hoopId);

  const totalDue = (remainder / 100).toFixed(2);

  // hoop_images db lookup
  // const mainImage = hoopImage?.[1]?.image_url;

  // hoops db feature_image lookup
  console.log("IMAGE DB data:", hoopImage);
  const mainImage = hoopImage?.[0]?.feature_image?.[0];

  return (
    <SuccessClient
      hoop={hoop}
      mainImage={mainImage}
      totalDue={totalDue}
      // job={job}
    />
  );
}
