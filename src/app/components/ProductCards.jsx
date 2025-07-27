"use client";

import { useEffect, useState } from "react";
import supabase from "/utils/supabaseClient";
import Image from "next/image";
import Link from "next/link";

export default function ProductCards() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchHoops = async () => {
      const { data, error } = await supabase
        .from("hoops")
        .select(
          "id, name, brand, model, price, is_featured, feature_image, backboard_size, anchor_type, post_size, adjustment_range, install_price"
        )
        .order("price", { ascending: true });

      if (error) {
        console.error("Fetch error", error);
      }
      setProducts(data);
    };
    fetchHoops();
  }, []);

  return (
    <div id="product-wrapper" className="bg-gray-100/20 mb-24">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Our most popular hoops
        </h2>

        <div className="mt-6 grid grid-cols-1 grid-rows-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 w-full">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative h-[650px] w-full rounded-md border-4 shadow-xl border-transparent hover:border-indigo-500 hover:shadow-xl transition-all duration-200 cursor-pointer"
            >
              <Link href={`/hoops/${product.id}`}>
                <Image
                  src={product.feature_image?.[0]}
                  alt={product.name}
                  fill
                  className="block w-full h-full object-cover object-top"
                />
              </Link>
              <div className="absolute w-full bottom-0 mt-4 flex flex-col gap-6 justify-between bg-gray-800 p-6 rounded-t-md">
                <h3 className="text-xl font-medium text-white">
                  {product.name}
                  {/* <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a> */}
                </h3>
                <p className="mt-1 text-lg text-white">{`Backboard Size ${product.backboard_size?.trim()}"`}</p>
                <p className="mt-1 text-lg text-white">
                  Height Range {product.adjustment_range}
                </p>
                <div>
                  <p className="text-sm font-bold text-white">
                    {`$ ${product.price}`}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
