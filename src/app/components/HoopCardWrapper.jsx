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

  return (
    <>
      <HoopCard
        hoop={hoop}
        gallery={gallery}
        onToggle={handleToggle}
        total={total} // pass computed total from state down
      />
    </>
  );
}
