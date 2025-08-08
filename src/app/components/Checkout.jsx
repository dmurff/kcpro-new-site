"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const Checkout = ({ id, type, onCheckout }) => {
  console.log(id, type);

  const [data, setData] = useState(null);

  useEffect(() => {
    if (!id || !type) return;

    const fetchData = async () => {
      const res = await fetch(`api/hoops/${id}`);
      const json = await res.json();
      setData(json.data);
    };

    fetchData();
    console.log("✅", data);
  }, [id, type]);

  if (!data) return <div className="text-black">Loading checkout...</div>;

  return (
    <div>
      <h1 className="text-black">Hi</h1>
      <button className="bg-black text-white text-2xl" onClick={onCheckout}>
        Order now
      </button>
    </div>
  );
};

export default Checkout;
