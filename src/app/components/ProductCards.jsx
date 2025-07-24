"use client";

import { useEffect, useState } from "react";
import supabase from "/utils/supabaseClient";
import Image from "next/image";
import Link from "next/link";

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
          "id, name, brand, model, price, is_featured, product_images, backboard_size, anchor_type, post_size, adjustment_range, install_price"
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

        <div className="mt-6 grid grid-cols-1 grid-rows-3 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 w-full h-[600px]">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative h-[650px] w-full border-4 shadow-xl border-transparent hover:border-indigo-500 hover:shadow-xl transition-all duration-200 cursor-pointer"
            >
              <Link href={`/hoops/${product.id}`}>
                <Image
                  src={product.product_images?.[5]}
                  alt={product.name}
                  fill
                  className="block w-full h-full object-cover object-top"
                />
              </Link>
              <div className="absolute w-full bottom-0 mt-4 flex flex-col gap-6 justify-between bg-gray-800 p-6 rounded-t-sm">
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
