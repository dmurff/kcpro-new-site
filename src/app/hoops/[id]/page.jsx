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
      const data = await res.json();

      setHoop(data);
    };
    fetchHoop();
  }, [params?.id]);

  if (!hoop) return <div>Loading...</div>;

  return <div>{hoop.image}</div>;
};

export default ProductPage;
