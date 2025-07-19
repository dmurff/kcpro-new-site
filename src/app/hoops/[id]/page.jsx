"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";

const ProductPage = () => {
  const params = useParams();
  const [hoop, setHoop] = useState(null);

  useEffect(() => {
    if (!params?.id) return;

    const fetchHoop = async () => {
      const { id } = params;
      const res = await fetch(`/api/hoops/${id}`);
      const json = await res.json();

      setHoop(json.data);
    };
    fetchHoop();
  }, [params?.id]);

  if (!hoop) return <div>Loading...</div>;

  return (
    <div className="p-8 bg-white text-black rounded shadow-md">
      <h2 className="text-black text-2xl">{hoop.name}</h2>
    </div>
  );
};

export default ProductPage;
