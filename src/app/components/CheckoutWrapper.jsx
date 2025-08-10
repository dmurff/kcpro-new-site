"use client";
import { loadStripe } from "@stripe/stripe-js";
import { useState, useEffect } from "react";
import { Elements } from "@stripe/react-stripe-js";
import Checkout from "./Checkout";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

export default function CheckoutWrapper({ hoop, id, type }) {
  const [clientSecret, setClientSecret] = useState(null);

  useEffect(() => {
    (async () => {
      const res = await fetch("/api/payments/create-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });

      const data = await res.json();
      if (data?.clientSecret) setClientSecret(data.clientSecret);
      else console.error(data);
    })();
  }, [id]);

  if (!clientSecret) return "Preparing checkout...";

  return (
    <Elements stripe={stripePromise} options={{ clientSecret }}>
      <Checkout />
    </Elements>
  );
}
