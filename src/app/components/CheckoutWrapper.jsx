"use client";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Checkout from "./Checkout";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

export default function CheckoutWrapper({ clientSecret, pi }) {
  if (!clientSecret) return "Preparing checkout...";

  return (
    <Elements stripe={stripePromise} options={{ clientSecret }}>
      <Checkout pi={pi} />
    </Elements>
  );
}
