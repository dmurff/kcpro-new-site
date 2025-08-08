"use client";
import Checkout from "@/app/components/Checkout";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useSearchParams } from "next/navigation";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

const CheckoutPage = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const type = searchParams.get("type");

  const handleStartCheckout = async () => {
    const res = await fetch("/api/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
      }),
    });

    const data = await res.json();
    console.log("Client Secret:", data.clientSecret);
  };

  return (
    <div>
      <Elements stripe={stripePromise}>
        <Checkout id={id} type={type} onCheckout={handleStartCheckout} />
      </Elements>
    </div>
  );
};

export default CheckoutPage;
