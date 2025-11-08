"use client";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Checkout from "./Checkout";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

export default function CheckoutWrapper({ clientSecret }) {
  if (!clientSecret) return "Preparing checkout...";

  return (
    <Elements
      stripe={stripePromise}
      options={{
        clientSecret,
        appearance: {},
        fields: {
          billingDetails: {
            name: "always",
            email: "always",
            phone: "always",
          },
        },
      }}
    >
      <Checkout />
    </Elements>
  );
}
