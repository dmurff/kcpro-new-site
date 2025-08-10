"use client";

import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";
import { useState } from "react";

export default function Checkout({ id, type }) {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    setLoading(true);
    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/checkout/success?id=${id}&type=${
          type ?? ""
        }`,
      },
    });

    if (error) setMsg(error.message || "Payment failed");
    setLoading(false);
  };

  return (
    <form onSubmit={onSubmit}>
      <PaymentElement />
      <button disabled={!stripe || loading}>
        {loading ? "Processing..." : "Pay"}
      </button>
      {msg && <p>{msg}</p>}
    </form>
  );
}
