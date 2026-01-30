"use client";
import { loadStripe } from "@stripe/stripe-js";
import ServiceCheckoutForm from "./ServiceCheckoutForm";
import { Elements } from "@stripe/react-stripe-js";

const stripe = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

export default function ServiceCheckout({
  clientSecret,
  services,
  deposit,
  total,
  remainder,
  paymentIntentId,
}) {
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
        <ServiceCheckoutForm
          paymentIntentId={paymentIntentId}
          clientSecret={clientSecret}
          services={services}
          deposit={deposit}
          total={total}
          remainder={remainder}
        />
      </Elements>
    </>
  );
}
