import ProductCards from "./ProductCards";

export default function AllProductCards({ products }) {
  console.log(products);
  return (
    <>
      <section className=" bg-gradient-to-r from-black to-black/60 h-[500px]">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          <div className="col-span-1 lg:col-span-6 text-gray-300 flex flex-col justify-center pt-26 lg:pt-18 px-4">
            <h1 className="mt-2 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              In Ground Hoops
            </h1>
            <p className="max-w-lg mt-8 text-left font-semibold text-gray-300 text-base/7">
              We offer the finest models available with unmatched curb appeal
              and durability.
            </p>
          </div>

          {/* Desktop image kept */}
          <div className="hidden lg:block col-span-1 lg:col-span-6 flex justify-center items-center rounded-md pt-18 shadow-xl">
            <img
              className="rounded-md"
              width={500}
              src="/images/hero-image.png"
            />
          </div>
        </div>
      </section>
      <section className="grid grid-cols-1 lg:grid-cols-12 mt-8 px-6">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-1 col-span-1 lg:col-start-1 lg:col-span-6 max-w-7xl mx-auto lg:mx-0">
          {products.map((p, i) => (
            <div
              key={p.id}
              className="bg-black/90 shadow-xl text-blue-100 max-w-[500px] rounded-md shadow-lg border border-white/10"
            >
              <img
                src={`${p.feature_image}`}
                className="w-full aspect-[4/3] object-cover rounded-t-md"
              />
              <div>
                <ul className="grid grid-cols-2 gap-4 p-4">
                  <li>Board Size: {p.backboard_size}"</li>
                  <li>Board Material: {p.backboard_material}</li>
                  <li>Post Dimension: {p.post_size}"</li>
                  <li>Height Min/Max: {p.adjustment_range}"</li>
                  <li>Price: {p.price}</li>
                  <li>Install fee: {p.install_price}</li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
