"use client";
import ProductCards from "./ProductCards";

export default function AllProductCards({ products }) {
  console.log(products);
  return (
    <section className="max-w-full mx-auto mt-18">
      <div className="flex flex-col">
        {products.map((p) => (
          <div key={p.id} className="bg-black text-white">
            <img src={p.feature_image}></img>
          </div>
        ))}
      </div>
      {/* <ProductCards /> */}
      <div className="w-full bg-black/80 p-8">
        <h1 className="text-3xl text-center">
          Take your game to the next level with an Ironclad Hoop
        </h1>
      </div>
    </section>
  );
}
