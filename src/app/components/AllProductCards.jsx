import ProductCards from "./ProductCards";
import Link from "next/link";

export default function AllProductCards({ products }) {
  console.log(products);
  return (
    <>
      <section className=" bg-gradient-to-r from-black/90 to-black/60 h-[500px]">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          <div className="col-span-1 lg:col-span-6 text-gray-300 mx-auto lg:mx-0 flex flex-col justify-center mt-16 lg:pt-8 px-4">
            <h1 className="mt-26 lg:mt-0 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              In Ground Hoops
            </h1>
            <p className="max-w-[250px] mt-8 text-left font-semibold text-gray-300 text-base/7">
              We offer the finest models available with unmatched curb appeal
              and durability.
            </p>
          </div>

          {/* Desktop image kept */}
          <div className="bg-transparent hidden lg:block col-span-1 lg:col-span-6 flex justify-center items-center rounded-md pt-18">
            <img
              className="rounded-md"
              width={300}
              src="/images/TPT-553-60-2.JPEG"
            />
          </div>
        </div>
      </section>
      <section className="bg-black/10 grid grid-cols-1 lg:grid-cols-12 p-8 px-6">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 col-span-1 lg:col-start-1 lg:col-span-8 max-w-7xl mx-auto lg:mx-0">
          {products.map((p, i) => (
            <Link
              key={p.id}
              href={`/hoops/${p.id}`}
              className="bg-black/80 shadow-xl text-gray-300 max-w-[500px] rounded-md shadow-lg border-4 border-transparent hover:border-orange-500 hover:shadow-xl transition-all duration-500 cursor-pointer"
            >
              <img
                src={`${p.feature_image}`}
                className="w-full aspect-[4/3] object-contain rounded-t-md"
              />
              <div className="bg-black/90">
                <ul className="flex flex-col gap-4 p-4">
                  <li>Board Size: {p.backboard_size}"</li>
                  <li>Board Material: {p.backboard_material}</li>
                  <li>Post Dimension: {p.post_size}"</li>
                  <li>Height Min/Max: {p.adjustment_range}"</li>
                  <li>Price: {p.price}</li>
                  <li>Install fee: {p.install_price}</li>
                </ul>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
