import React from "react";
import Stripe from "stripe";
import { fetchHoop } from "../../../../lib/data/hoops";
import { fetchImages } from "../../../../lib/data/hoops";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function SuccessPage({ searchParams: data }) {
  //   const params = await searchParams;
  //   console.log("🍕:", params);

  //   const data = searchParams;

  console.log("✅✅✅", data);

  const { payment_intent } = data;

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
    <>
      <div className="flex flex-col w-full text-xl font-md text-black">
        <h1 className="text-3xl mb-8 mx-auto pt-8">
          Your hoop order was placed!
        </h1>
        <img
          className={"mx-auto mb-16"}
          width={300}
          src={mainImage}
          alt={hoop.name}
        />
        <p className="text-black text-center text-lg w-[50%] mx-auto">
          {`Congratulations! Your order for the ${hoop.name} has been
          successfully placed. You will recieve an email with scheduling
          instructions. Upon completion the final installation fee of ${totalDue} will be due.`}
        </p>
      </div>
    </>
  );
}
