"use client";
import { useState } from "react";
import HoopCard from "./HoopCard";
import OrderNow from "./OrderNow";

export default function HoopCardWrapper({ hoop, gallery }) {
  const [selectedServices, setSelectedServices] = useState({});

  // toggle update state handler
  const handleToggle = (serviceName, cost, checked) => {
    setSelectedServices((prev) => ({
      ...prev,
      [serviceName]: checked ? cost : 0,
    }));
  };

  const total = Object.values(selectedServices).reduce(
    (a, b) => a + b,
    hoop.price
  );
  //   const total = serviceTotal + hoop.price;

  // Handle checkout function
  const handleCheckout = async () => {
    const data = { hoop: hoop.id, services: selectedServices, total };

    const res = await fetch("/api/payments/create-intent", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(data),
    });

    const clientSecret = await res.json();
    console.log(clientSecret);
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
      />
    </>
  );
}
