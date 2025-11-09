import React from "react";
import Stripe from "stripe";
import { fetchHoop } from "../../../../lib/data/hoops";
import { fetchImages } from "../../../../lib/data/hoops";
import SuccessClient from "@/app/components/SuccessClient";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function SuccessPage({ searchParams }) {
  const params = searchParams;
  //   console.log("🍕:", params);

  //   const data = searchParams;
  const { payment_intent } = params;

  // console.log("✅✅✅", params);

  const paymentIntent = await stripe.paymentIntents.retrieve(payment_intent);
  console.log(paymentIntent);

  const { hoopId, remainder } = paymentIntent.metadata;

  const [hoop, hoopImage] = await Promise.all([
    fetchHoop(hoopId),
    fetchImages(hoopId),
  ]);
  //   const hoop = await fetchHoop(hoopId);
  //   const hoopImage = await fetchImages(hoopId);

  const totalDue = (remainder / 100).toFixed(2);

  const mainImage = hoopImage?.[1]?.image_url;

  console.log(hoopImage);

  return (
    <SuccessClient hoop={hoop} mainImage={mainImage} totalDue={totalDue} />
  );
}
