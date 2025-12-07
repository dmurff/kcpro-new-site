// "use server";

// import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { fetchProductCardData } from "../../../lib/data/hoops";

export default function ProductCards({ products }) {
  console.log("⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️", products);

  return (
    <div id="product-wrapper" className="bg-white mb-24">
      <div className="h-px bg-gray-100 w-[90%] mx-auto" />
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="bg-white mt-6 grid grid-cols-1 grid-rows-1 gap-x-2 gap-y-10 sm:grid-cols-2 lg:grid-cols-2 xl:gap-x-8 w-[75%] mx-auto">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex items-center group relative h-[650px] max-w-sm sm:w-full bg-black/80 rounded-xl ring-1 ring-gray-900/5 backdrop-blur-sm hover:ring-orange-400 shadow-lg shadow-black/20 hover:shadow-orange-500/30 transition-all duration-500 cursor-pointer"
            >
              <Link href={`/hoops/${product.id}`}>
                <Image
                  src={product.feature_image?.[0]}
                  alt={product.name}
                  fill
                  className="block w-full h-full object-cover rounded-xl sm:object-scale-cover object-top"
                />
              </Link>
              <div className="absolute w-full bottom-0 mt-4 flex flex-col gap-6 justify-between bg-black/10 p-6 rounded-b-xl">
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
