"use client";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Checkout from "./Checkout";
import CustomerForm from "@/app/components/CustomerForm";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

export default function CheckoutWrapper({ clientSecret }) {
  if (!clientSecret) return "Preparing checkout...";

  return (
    <div className="w-[50%] grid grid-col-1">
      <CustomerForm />
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
        <Checkout />
      </Elements>
    </div>
  );
}
