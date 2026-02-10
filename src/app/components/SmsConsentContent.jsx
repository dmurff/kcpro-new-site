import Link from "next/link";

export default function SmsConsentContent() {
  return (
    <>
      <div className="relative isolate overflow-hidden bg-white lg:py-0 mt-0">
        <section className="flex flex-col items-start justify-center mt-24 py-8 lg:py-24 mb-16 p-4 lg:p-8 lg:max-w-1/2">
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
          <h1 className="text-[2rem] leading-[1.25] mb-1 font-bold text-[#222]">
            SMS Consent Disclosure
          </h1>

          <p className="mt-4 text-xs text-[#222] leading-relaxed">
            By providing your phone number, you agree to receive appointment
            confirmations, schedule updates, job status notifications, and
            service reminders from KC Pro Assembly. Messages are sent only in
            relation to services you request.
          </p>

          <p className="mt-4 text-xs text-[#222] leading-relaxed">
            Message &amp; data rates may apply. Reply <strong>STOP</strong> to
            unsubscribe or <strong>HELP</strong> for assistance. Consent is not
            a condition of purchase. View our{" "}
            <Link
              href="/privacy-policy"
              className="text-gray-700 font-semibold hover:text-gray-400"
            >
              Privacy Policy
            </Link>{" "}
            for details.
          </p>
        </section>
      </div>
    </>
  );
}
