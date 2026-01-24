"use client";
import { useState } from "react";
import HoopCard from "./HoopCard";
import OrderNow from "./OrderNow";
import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from "uuid";

export default function HoopCardWrapper({ hoop, gallery, services, content }) {
  const router = useRouter();

  

  // must generate the idempotency key on the client before sending to the payment intent api
  const generateIdempotencyKey = () => {
    return uuidv4();
  };

  const [selectedServices, setSelectedServices] = useState({});

  // toggle update state handler
  const handleToggle = (serviceName, cost, checked) => {
    setSelectedServices((prev) => {
      if (checked) {
        return { ...prev, [serviceName]: cost };
      } else {
        const { [serviceName]: _, ...rest } = prev;
        return rest;
      }
    });
  };

  const servicesTotal = Object.values(selectedServices).reduce(
    (sum, v) => sum + v,
    0
  );

  // Calculate service fee (deposit amount capped at 200 or 25%)
  const depositDue = Math.min(servicesTotal * 0.25, 200);

  // Need to attach the remainder into the job table in supabase and add to the data payload
  const remainder = servicesTotal - depositDue;

  const orderTotal = hoop.price + depositDue;

  const total = orderTotal.toFixed(2);

  // Handle checkout function
  const handleCheckout = async () => {
    const serviceNames = Object.keys(selectedServices);
    const data = {
      hoop: hoop.id,
      services: serviceNames,
      remainder_due: remainder,
    };
    const idempotencyKey = generateIdempotencyKey();
    const res = await fetch("/api/payments/create-intent", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "Idempotency-Key": idempotencyKey,
      },
      body: JSON.stringify(data),
    });

    const { clientSecret, paymentIntentId } = await res.json();

    // Never expose the client secret or log it in the browser accessible code
    // console.log(clientSecret);
    // Redirect client-side
    router.push(
      `/checkout?payment_intent_client_secret=${clientSecret}&pi=${paymentIntentId}`
    );
  };

  return (
    <>
      <HoopCard
        selectedServices={selectedServices}
        handleCheckout={handleCheckout}
        hoop={hoop}
        gallery={gallery}
        onToggle={handleToggle}
        total={total} // pass computed total from state down
        services={services}
        content={content}
      />
    </>
  );
}
