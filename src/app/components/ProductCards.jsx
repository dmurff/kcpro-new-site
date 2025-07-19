"use client";

import { useEffect, useState } from "react";
import supabase from "/utils/supabaseClient";
import Image from "next/image";

// const products = [
//   {
//     id: 1,
//     name: "Basic Tee",
//     href: "#",
//     imageSrc: "/images/t60-3.jpeg",
//     imageAlt: "Front of men's Basic Tee in black.",
//     price: "$35",
//     color: "Black",
//   },
//   {
//     id: 2,
//     name: "Basic Tee",
//     href: "#",
//     imageSrc: "/images/t60-3.jpeg",
//     imageAlt: "Front of men's Basic Tee in white.",
//     price: "$35",
//     color: "Aspen White",
//   },
//   {
//     id: 3,
//     name: "Basic Tee",
//     href: "#",
//     imageSrc: "/images/t60-3.jpeg",
//     imageAlt: "Front of men's Basic Tee in dark gray.",
//     price: "$1899",
//     color: "Charcoal",
//   },
//   {
//     id: 4,
//     name: "Artwork Tee",
//     href: "#",
//     imageSrc: "/images/t60-3.jpeg",
//     imageAlt:
//       "Front of men's Artwork Tee in peach with white and brown dots forming an isometric cube.",
//     price: "$1899",
//     color: "Iso Dots",
//     backboard: "60 inch",
//   },
// ];

export default function ProductCards() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchHoops = async () => {
      const { data, error } = await supabase
        .from("hoops")
        .select(
          "id, name, brand, model, price, is_featured, product_images, backboard_size, anchor_type, post_size, adjustment_range"
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
    <div id="product-wrapper" className="bg-white mb-24">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Our most popular hoops
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative shadow-lg border-4 border-transparent hover:border-orange-500 hover:shadow-xl transition-all duration-200 cursor-pointer"
            >
              <Image
                src={product.product_images?.[0]}
                alt={product.name}
                height={300}
                width={300}
                className="block w-full h-full object-cover object-top"
              />
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-xl font-medium text-gray-700">
                    {product.name}
                    {/* <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a> */}
                  </h3>
                  <p className="mt-1 text-lg text-gray-500">{`Backboard Size ${product.backboard_size?.trim()}"`}</p>
                  <p className="mt-1 text-lg text-gray-500">
                    Height Range {product.adjustment_range}
                  </p>
                </div>
                <p className="text-sm font-bold text-gray-900">
                  {`$ ${product.price}`}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
