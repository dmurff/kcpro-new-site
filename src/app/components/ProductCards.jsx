// "use server";

// import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { fetchProductCardData } from "../../../lib/data/hoops";

export default function ProductCards({ products }) {
  console.log("⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️", products);

  return (
    <div className="relative isolate overflow-hidden bg-white py-8 sm:py-32 lg:py-16">
      {/* <img
        alt=""
        src="/images/services_hero.png"
        className="absolute inset-0 -z-10 size-full object-cover object-right opacity-0 md:object-center"
      /> */}
      <div className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl">
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="aspect-1097/845 w-274.25 bg-linear-to-tr from-gray-400 to-gray-600/70 opacity-15"
        />
      </div>
      <div className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:-top-112 sm:ml-16 sm:translate-x-0">
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="aspect-1097/845 w-274.25 bg-linear-to-tr from-bg-gray-800 to-gray-900 opacity-15"
        />
      </div>
      {/* <div className="h-px bg-gray-100 w-[90%] mx-auto" /> */}

      <div className="mx-auto max-w-2xl px-4 py-1 sm:px-6 sm:py-1 lg:max-w-7xl lg:px-8">
        <div className="flex justify-center items-center mb-16">
          <h2 className="text-4xl text-white text-center bg-black/70 p-4 rounded-lg">
            Best Sellers
          </h2>
        </div>
        <div className=" mt-6 grid grid-cols-1 grid-rows-1 gap-x-2 gap-y-10 sm:grid-cols-2 lg:grid-cols-2 xl:gap-x-8 mx-auto">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex lg:justify-center group relative h-[650px] sm:w-full bg-black/80 rounded-xl ring-1 ring-gray-900/5 backdrop-blur-sm hover:ring-orange-400 shadow-lg shadow-black/20 hover:shadow-orange-500/30 transition-all duration-500 cursor-pointer"
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
        <div className="mt-2 flex py-10 items-center justify-center gap-x-6">
          <Link
            href="/hoops"
            className="rounded-md bg-orange-400 px-3.5 py-2.5 text-md font-semibold text-white shadow-xs hover:bg-orange-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            See all hoops
          </Link>
          <a
            href="/services"
            className="text-sm/6 font-semibold text-gray-900 hover:text-gray-600"
          >
            See other services <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </div>
  );
}
