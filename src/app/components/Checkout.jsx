"use client";

import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";
import { useState } from "react";
import CustomerFields from "@/app/components/CustomerFields";
import TotalBox from "./TotalBox";

export default function Checkout({
  paymentIntentId,
  services,
  remainder,
  hoop,
  depositAmount,
}) {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    postalCode: "",
  });

  console.log("SERVICES:", services, "REMAINDER:", remainder, "HOOP:", hoop);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    // customer data check
    if (!form.name || !form.email || !form.phone || !form.address || !form.city || !form.state || !form.postalCode) {
      setMsg("Please fill in all the customer details before proceeding.");
      return;
    }

    setLoading(true);

    await fetch("/api/checkout-session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(
        // paymentIntentId,
        // depositAmount,
        // remainder,
        // hoop.id,
        // services,
        // totalCents: Number(remainder) + Number(depositAmount),
        // ...form,
        {
    paymentIntentId,
    depositCents: depositAmount,
    remainderCents: remainder,
    totalCents: Number(remainder) + Number(depositAmount),
    hoopId: hoop.id,              // ✅ UUID ONLY
    services,                     // array of UUIDs
    ...form,
  }

      ),
    });

    const { error } = await stripe.confirmPayment({
      elements,
      redirect: "always",
      confirmParams: {
        return_url: `${window.location.origin}/checkout/success`,
      },
    });

    if (error) setMsg(error.message || "Payment failed");
    setLoading(false);
    return;
  };

  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 px-6">
      <div className="flex flex-col gap-4 col-start-1 lg:col-start-2 lg:row-start-1 mx-auto lg:my-4 my-0">
        <img
          className="bg-black/80 rounded-md max-h-[300px] object-contain"
          src={`${hoop.feature_image}`}
          width={500}
        />

        <div
          id="order_summary"
          className="flex flex-col justify-self-start gap-2 text-black lg:col-start-2 shadow-md rounded-md p-4 lg:row-span-2"
        >
          <h2 className="text-black mx-auto">Order Summary:</h2>
          <div className="flex justify-between">
            <p>Model:</p>
            <p className="text-black">{hoop.name}</p>
          </div>

          <div className="flex justify-between">
            <p>Labor deposit:</p>
            <p className="text-black">${depositAmount}</p>
          </div>
          <div className="flex justify-between">
            <p>Hoop Cost:</p>
            <p>${hoop.price}</p>
          </div>
          <div className="flex justify-between">
            <p>Total:</p>
            <p>${(Number(hoop.price) + Number(depositAmount)).toFixed(2)}</p>
          </div>
        </div>
      </div>
      <form className="row-start-2 lg:row-start-1" onSubmit={onSubmit}>
        <CustomerFields form={form} handleChange={handleChange} />

        <PaymentElement
          options={{
            defaultValues: {
              billingDetails: {
                email: form.email || "",
              },
            },
            PaymentMethodOrder: ["card", "link"],
          }}
          className="lg:col-start-2 lg:col-end-3 lg:row-start-2 lg:mt-6"
        />
        <button
          className="block text-lg font-semibold bg-orange-400 w-[200px] hover:bg-orange-600 transition duration-1.5 ease-in rounded-md p-4 mt-6 mx-auto lg:mx-0"
          disabled={
            !stripe ||
            loading ||
            !form.name ||
            !form.email ||
            !form.phone ||
            !form.address
          }
        >
          {loading ? "Processing..." : "Pay"}
        </button>
        {msg && <p>{msg}</p>}
      </form>

      <div className="mx-auto lg:mx-0">
        <p className="text-md text-black">
          *** With a successful payment you will be emailed a
          receipt/intructions for next steps.
        </p>
      </div>
    </div>
  );
}
