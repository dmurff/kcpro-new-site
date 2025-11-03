"use client";
import { useState } from "react";
import HoopCard from "./HoopCard";
import OrderNow from "./OrderNow";

export default function HoopCardWrapper({ hoop, gallery, services }) {
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

  const remainder = servicesTotal - depositDue;

  console.log("💳📈", depositDue, remainder);

  const orderTotal = hoop.price + depositDue;

  const total = orderTotal.toFixed(2);

  // Handle checkout function
  const handleCheckout = async () => {
    const serviceNames = Object.keys(selectedServices);
    const data = {
      hoop: hoop.id,
      services: serviceNames,
    };

    console.log(serviceNames);

    const res = await fetch("/api/payments/create-intent", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(data),
    });

    const clientSecret = await res.json();

    // Never expose the client secret or log it in the browser accessible code
    // console.log(clientSecret);
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
      />
    </>
  );
}
