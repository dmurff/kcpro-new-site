"use client";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Checkout from "./Checkout";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

export default function CheckoutWrapper({
  clientSecret,
  paymentIntentId,
  services,
  remainder,
  hoop,
  depositAmount,
}) {
  if (!clientSecret) return "Preparing checkout...";

  console.log("clientSecret:", clientSecret);

  return (
    <>
      <Elements
        stripe={stripePromise}
        options={{
          clientSecret,
          appearance: {
            theme: "flat",
            variables: { colorPrimaryText: "#262626" },
          },
          layout: {
            type: "tabs",
            defaultCollapsed: false,
          },
        }}
      >
        <Checkout
          paymentIntentId={paymentIntentId}
          services={services}
          remainder={remainder}
          hoop={hoop}
          depositAmount={depositAmount}
        />
      </Elements>
    </>
  );
}
