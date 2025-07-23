"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";

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
      console.log("Hoop:", hoop);
    };
    fetchHoop();
  }, [params?.id]);

  if (!hoop) return <div>Loading...</div>;

  return (
    // <div className="p-8 bg-blue-500/10 text-black rounded shadow-md grid grid-cols-2 gap-x-24 mx-16 items-start">
    //   <div className="flex justify-center col-start-2">
    //     <h2 className="text-black text-4xl">{hoop.name}</h2>
    //   </div>
    //   <div className="col-start-1 flex justify-center items-start col-span-1">
    //     <div className="relative bg-white w-[400px] h-[600px]">
    //       <Image className="object-contain" src={hoop.product_images[0]} fill />
    //     </div>
    //   </div>
    // </div>
    <div className="p-8 text-black bg-white rounded shadow-md grid grid-cols-2 gap-x-8 mx-16">
      {/* LEFT COLUMN: Image */}
      <div className="col-start-1 flex justify-center items-start">
        <div className="relative w-[600px] h-[600px] bg-white">
          <Image
            src={hoop.product_images[0]}
            fill
            className="object-contain"
            alt={hoop.name}
          />
        </div>
      </div>

      {/* RIGHT COLUMN: Title */}
      <div className="col-start-2 flex items-start justify-start">
        <h2 className="text-black text-4xl">{hoop.name}</h2>
      </div>
      <p className="col-start-2 text-red-500 text-3xl line-through">
        $ {hoop.price}
      </p>
    </div>
  );
};

export default ProductPage;
