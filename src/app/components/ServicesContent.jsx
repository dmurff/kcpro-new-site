import Link from "next/link";

export default function ServicesContent({ services }) {
  return (
    // <div className="relative isolate overflow-hidden bg-black/80 py-24 sm:py-32">
    <>
      <div className="relative isolate overflow-hidden bg-white py-24 sm:py-32">
        <img
          alt=""
          src="/images/services_hero.png"
          className="absolute inset-0 -z-10 size-full object-cover object-right opacity-0 md:object-center"
        />
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
            className="aspect-1097/845 w-274.25 bg-linear-to-tr from-bg-gray-400 to-gray-600 opacity-15"
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className=" text-gray-900 text-base/7 p-2 rounded-xl">
             <p className="text-lg/7 text-gray-800 font-light mt-2 mb-8">
              Choose a service below to see what's included. From there you book the service. Only select your main service here. 
            </p>
            <p className="text-lg/7 text-gray-800 font-light mt-8">
               When booking you select additional services before proceeding to the deposit checkout. With a succesfull deposit you will receive a time stamped spot in our job queue. We will send information and reach out with a comfirmation.
            </p>
            <p className="text-lg/7 text-gray-800 font-light mt-8">
               Select a
              service to see what’s included and what to expect. A 25% deposit
              (capped at $200) locks in your schedule. Final payment is due upon
              completion.
            </p>

          </div>
          <div
            id="serviceCards"
            className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8"
          >
            <Link
              href="/hoops"
              className="flex gap-x-4 rounded-xl bg-blue-200 p-6 ring-1 ring-gray-900/5 backdrop-blur-sm hover:ring-blue-500 shadow-lg shadow-black/20 hover:shadow-blue-500/30"
            >
              <div className="text-base/7">
                <h3 className="font-semibold text-gray-900">Best Value</h3>
                <p className="mt-2 text-gray-700">
                  Purchase a hoop and get $200 off full installation, $100 off
                  conrete or assembly only, and free delivery.
                </p>
                <p className="mt-2 text-sm/6 font-semibold text-gray-700 hover:text-gray-950">
                  Shop Hoops <span aria-hidden="true">→</span>
                </p>
              </div>
            </Link>
            {services.map((s) => (
              <Link
                key={s.id}
                href={`services/${s.slug}`}
                className="flex gap-x-4 rounded-xl bg-gray-200/30 p-6 ring-1 ring-gray-900/5 backdrop-blur-sm hover:ring-orange-400 shadow-lg shadow-black/20 hover:shadow-orange-500/30"
              >
                <div className="text-base/7">
                  <h3 className="font-semibold text-gray-900">
                    {s.display_name}
                  </h3>
                  <p className="mt-2 text-gray-700">{s.description}</p>
                  <p className="mt-2 text-gray-700">${s.price}</p>
                  <p className="mt-2 text-sm/6 font-semibold text-gray-400 hover:text-gray-950">
                    Learn more <span aria-hidden="true">→</span>
                  </p>
                </div>
              </Link>
            ))}
            {/* <Link
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
          </Link> */}
          </div>
        </div>
      </div>
    </>
  );
}
