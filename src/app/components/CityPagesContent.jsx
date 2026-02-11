import { CheckCircleIcon } from "@heroicons/react/24/solid";

export default function CityPagesContent() {
  return (
    <>
      (
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Header */}
          <div className="max-w-2xl">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Areas We Serve
            </h1>

            <p className="mt-6 text-lg leading-7 text-gray-700">
              KC Pro Assembly proudly provides professional basketball hoop
              installation, concrete work, and service across the Greater Kansas
              City area. If you don’t see your city listed below, reach out — we
              may still be able to help.
            </p>
          </div>

          {/* Service Area List */}
          <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Kansas Side */}
            <div className="rounded-2xl bg-gray-100/60 p-6 sm:p-10">
              <h2 className="text-2xl font-semibold text-gray-900">
                Kansas Service Areas
              </h2>

              <ul className="mt-6 space-y-4 list-none p-0">
                {[
                  "Overland Park",
                  "Olathe",
                  "Lenexa",
                  "Shawnee",
                  "Leawood",
                  "Prairie Village",
                  "Mission",
                  "Gardner",
                  "Basehor",
                  "Bonner Springs",
                ].map((city) => (
                  <li
                    key={city}
                    className="flex items-start gap-3 text-gray-800"
                  >
                    <CheckCircleIcon className="w-[20px] h-[20px] shrink-0 text-gray-900 mt-1" />
                    <span className="text-base sm:text-lg">{city}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Missouri Side */}
            <div className="rounded-2xl bg-gray-100/60 p-6 sm:p-10">
              <h2 className="text-2xl font-semibold text-gray-900">
                Missouri Service Areas
              </h2>

              <ul className="mt-6 space-y-4 list-none p-0">
                {[
                  "Kansas City",
                  "Lee’s Summit",
                  "Blue Springs",
                  "Independence",
                  "Liberty",
                  "Parkville",
                  "Gladstone",
                  "Raytown",
                  "Belton",
                  "Grandview",
                ].map((city) => (
                  <li
                    key={city}
                    className="flex items-start gap-3 text-gray-800"
                  >
                    <CheckCircleIcon className="w-[20px] h-[20px] shrink-0 text-gray-900 mt-1" />
                    <span className="text-base sm:text-lg">{city}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Extra Text */}
          <div className="mt-14 max-w-3xl">
            <h3 className="text-xl font-semibold text-gray-900">
              Not sure if you’re in our service area?
            </h3>

            <p className="mt-4 text-lg leading-7 text-gray-700">
              We frequently travel to surrounding suburbs and nearby
              communities. If you’re located outside of the cities listed above,
              contact us and we’ll confirm availability.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
