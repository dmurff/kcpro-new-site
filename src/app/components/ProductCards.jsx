"use client";

import { useEffect, useState } from "react";
import supabase from "/utils/supabaseClient";
import { NextResponse } from "next/server";

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
        .select("id, name, brand, model, price, is_featured, product_images");

      if (error) {
        console.error("Fetch error", error);
      }
      setProducts(data);
    };
    fetchHoops();
  }, []);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Our most popular hoops
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <img
                // alt={product.imageAlt}
                src={product.product_images?.[0]}
                className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
              />
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    {/* <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a> */}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.name}</p>
                  <p className="mt-1 text-sm text-gray-500">
                    {product.backboard}
                  </p>
                </div>
                <p className="text-sm font-medium text-gray-900">
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
