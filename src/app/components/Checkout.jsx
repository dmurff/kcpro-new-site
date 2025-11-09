"use client";

import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";
import { useState } from "react";
import CustomerFields from "@/app/components/CustomerFields";

export default function Checkout() {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    setLoading(true);

    // Preserve state in localStorage for use after payment confirm and redirect
    localStorage.setItem("checkoutCustomerData", JSON.stringify(form));

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/checkout/success`,
      },
    });

    if (error) setMsg(error.message || "Payment failed");
    setLoading(false);
  };

  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-8">
      <form onSubmit={onSubmit}>
        <CustomerFields form={form} handleChange={handleChange} />

        <PaymentElement className="lg:col-start-2 lg:col-end-3" />
        <button
          className="bg-orange-500 w-[200px]"
          disabled={!stripe || loading}
        >
          {loading ? "Processing..." : "Pay"}
        </button>
        {msg && <p>{msg}</p>}
      </form>
    </div>
  );
}
