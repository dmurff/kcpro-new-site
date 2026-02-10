import Link from "next/link";

export default function ContactContent() {
  return (
    <div className="relative isolate overflow-hidden bg-gray-200/80 py-24 sm:py-32">
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
          className="aspect-1097/845 w-274.25 bg-linear-to-tr from-gray-400 to-gray-600/10"
        />
      </div>
      <div className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:-top-112 sm:ml-16 sm:translate-x-0">
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="aspect-1097/845 w-274.25 bg-linear-to-tr from-gray-400 to-gray-600/10"
        />
      </div>
      <section className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl text-gray-900 mb-8">Call or Text</h2>

          <a
            href="tel:+18163014776"
            className="text-gray-700 text-lg hover:text-black"
          >
            816.301.4776
          </a>

          <p className="text-base/7 text-gray-900"></p>
        </div>
        <h2 className="text-3xl text-gray-900 mb-8">Email Support</h2>

        <a
          href="mailto:support@kcproassembly.com"
          className="text-gray-700 text-lg hover:text-black"
        >
          support@kcproassembly.com
        </a>

        {/* <div/> */}
      </section>
    </div>
  );
}
