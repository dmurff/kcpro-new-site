"use client";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import ServiceCheckoutForm from "./ServiceCheckoutForm";

const stripe = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
export default function ServiceCheckout({ clientSecret }) {
  return (
    <>
      <Elements
        stripe={stripe}
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
        <ServiceCheckoutForm />
      </Elements>
    </>
  );
}
