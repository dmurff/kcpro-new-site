"use client";
import ProductCards from "./ProductCards";

export default function AllProductCards({ products }) {
  console.log(products);
  return (
    <section className="max-w-full mx-auto">
      <div className="flex flex-row items-center bg-gradient-to-r from-black to-black/70 h-[500px]">
        <div className="flex flex-col w-[50%] text-gray-300 text-center items-center justify-center p-6">
          <div className="flex flex-col justify-items-start">
            <h1 className="mt-2 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              In Ground Hoops
            </h1>
            <p className="max-w-[250px] mt-8 text-left text-gray-300 text-base/7">
              We offer the finest models available with unmatched curb appeal
              and durability.
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center w-[50%]">
          <div className="rounded-md">
            <img
              className="rounded-md"
              width={500}
              src="/images/render_hoops.png"
            />
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-lg text-center text-gray-900 mt-8">
          We offer a wide range of in ground hoops for the perfect home
          basketball experience.
        </h2>
      </div>
      <div>
        <h2 className="text-lg text-center text-gray-900 mt-8">
          We offer a wide range of in ground hoops for the perfect home
          basketball experience.
        </h2>
      </div>
      <div>
        <h2 className="text-lg text-center text-gray-900 mt-8">
          We offer a wide range of in ground hoops for the perfect home
          basketball experience.
        </h2>
      </div>
      <div>
        <h2 className="text-lg text-center text-gray-900 mt-8">
          We offer a wide range of in ground hoops for the perfect home
          basketball experience.
        </h2>
      </div>
    </section>
  );
}
