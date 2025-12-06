import ProductCards from "./ProductCards";
import Link from "next/link";

export default function NewHero({ products }) {
  return (
    <>
      <div className="relative isolate overflow-hidden bg-white py-24 sm:py-32">
        <img
          alt=""
          src="/images/TPT-533-60-2.JPEG"
          className="absolute inset-0 -z-10 size-full object-cover object-right opacity-10 md:object-center"
        />
        <div className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl">
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="aspect-1097/845 w-274.25 bg-linear-to-tr from-orange-400 to-orange-600/70 opacity-15"
          />
        </div>
        <div className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:-top-112 sm:ml-16 sm:translate-x-0">
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="aspect-1097/845 w-274.25 bg-linear-to-tr from-bg-orange-400 to-orange-600 opacity-15"
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
              In Ground Hoops
            </h2>
            <p className="mt-8 text-lg font-medium text-pretty text-gray-600 sm:text-xl/8">
              We offer the finest models available with unmatched curb appeal
              and durability.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
            {products.map((p) => (
              <Link
                key={p.id}
                href="#"
                className="flex flex-col gap-x-4 rounded-xl bg-black/80 p-6 ring-1 ring-gray-900/5 backdrop-blur-sm hover:ring-orange-400 shadow-lg shadow-black/20 hover:shadow-orange-500/30"
              >
                <img
                  src={p.feature_image}
                  width={300}
                  className="object-contain max-h-[300px]"
                />
                <div className="text-base/7">
                  <h3 className="font-semibold text-gray-100">{p.name}</h3>
                  <p className="mt-2 text-gray-100">{p.description}</p>
                  <p className="mt-2 text-gray-100">${p.price}</p>
                  <p className="mt-2 text-sm/6 font-semibold text-gray-100 hover:text-gray-300">
                    Learn more <span aria-hidden="true">→</span>
                  </p>
                </div>
              </Link>
            ))}
            <Link
              href="/hoops"
              className="flex gap-x-4 rounded-xl bg-blue-200 p-6 ring-1 ring-gray-900/5 backdrop-blur-sm hover:ring-blue-500 shadow-lg shadow-black/20 hover:shadow-blue-500/30"
            >
              <div className="text-base/7">
                <h3 className="font-semibold text-gray-900">Best Value</h3>
                <p className="mt-2 text-gray-700">
                  Purchase a hoop and get $200 off installation plus free
                  delivery.
                </p>
                <p className="mt-2 text-sm/6 font-semibold text-gray-700 hover:text-gray-950">
                  Shop Hoops <span aria-hidden="true">→</span>
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <ProductCards />
    </>
  );
}
