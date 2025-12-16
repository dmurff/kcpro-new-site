"use client";
import {
  CheckCircleIcon,
  InformationCircleIcon,
  NumberedListIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
import { useRouter } from "next/navigation";

import Testimonials from "./Testimonials";
import ServiceWhatToExpect from "./ServiceWhatToExpect";
// import { SERVICE_CONTENT } from "../../../lib/data/serviceContent";
import createPaymentIntent from "../../../lib/serivces/service-payment-intent/handlePaymentIntent";

import { useTransition } from "react";

export default function ServiceSlugContent({ serviceId, content, service }) {
  console.log(content);

  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  function handleSubmit() {
    startTransition(async () => {
      const { clientSecret, paymentIntentId } = await createPaymentIntent({ serviceId });

      // router.push(
      //   `/checkout/serviceCheckout?clientSecret=${clientSecret}&serviceId=${serviceId}`
      // );
      window.location.href =
  `/checkout/serviceCheckout?clientSecret=${clientSecret}&serviceId=${serviceId}&paymentIntentId=${paymentIntentId}`;

    });
  }
  return (
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
        <div className="mx-auto max-w-2xl lg:mx-0 mb-16">
          <h2 className="text-orange-500/80 font-bold mx-auto text-base/7 mb-2">
            {content.heroSubtitle}
          </h2>
          <h1 className="text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
            {content.heroHeading}
          </h1>
          <p className="mt-8 text-lg font-medium text-pretty text-gray-600 sm:text-xl/8">
            {content.description}
          </p>
          <button
            disabled={isPending}
            onClick={handleSubmit}
            className="mt-10 group relative inline-flex items-center justify-center rounded-lg bg-black/80 px-6 py-3 text-white shadow transition-1.5 ease-in"
          >
            {isPending ? (
              "Processing..."
            ) : (
              <>
                <span className="transition-opacity duration-200 text-lg/8 group-hover:opacity-0">
                  Service Fee → ${service.price}
                </span>

                <span className="absolute transition-opacity text-lg/8 duration-200 opacity-0 group-hover:opacity-100">
                  Book →
                </span>
              </>
            )}
          </button>
        </div>
        {/* <div id="basicPage">
            <h2 className="text-4xl text-black font-bold">What we do</h2>
          </div>
          <div className=" text-gray-900 text-md">
            {content.timeline.map((t, i) => (
              <p key={i}>
                <span className="font-bold">{t.step}</span>: {t.text}
              </p>
            ))}
          </div> */}
        {/* <p className="text-gray-300 font-bold text-2xl">Service Fee →</p>
            <p className="text-gray-200 text-xl/8">${service.price}.00</p> */}

        <div id="expectations" className="mt-24 mb-10">
          <h2 className="text-gray-900 text-3xl font-semibold mb-4">
            Service Scope
          </h2>
          <ul className="flex flex-col gap-4 text-gray-700 bg-gray-200/30 text-lg/7 rounded-xl w-fit p-6">
            {content.bullets.map((b, i) => (
              <li key={i}>
                <span>
                  <CheckCircleIcon width={20} className="inline mr-2" />
                </span>
                {b}
              </li>
            ))}
          </ul>
        </div>
        <div id="expectations" className="mb-10">
          <h2 className="text-gray-900 text-3xl font-semibold mb-4">
            Not Included in Service
          </h2>
          <ul className="flex flex-col gap-4 text-gray-700 bg-gray-200/30 text-lg/7 rounded-xl w-fit p-6">
            {content.notIncluded?.map((n, i) => (
              <li key={i}>
                <span>
                  <CheckCircleIcon width={20} className="inline mr-2" />
                </span>
                {n}
              </li>
            ))}
          </ul>
        </div>
        <div id="expectations" className="mb-24">
          <h2 className="text-gray-900 text-3xl font-semibold mb-4">
            Timeline
          </h2>
          <ul className="flex flex-col gap-4 text-gray-700 bg-gray-200/30 rounded-xl text-lg/7 w-fit p-6">
            {content.timeline.map((t, i) => (
              <li key={i}>
                <span>
                  <CheckCircleIcon width={20} className="inline mr-2" />
                </span>
                {t.step} → {t.text}
              </li>
            ))}
          </ul>
        </div>
        <ServiceWhatToExpect content={content} />
      </div>
      <Testimonials />
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-16 lg:flex lg:items-center lg:justify-between lg:px-8">
        <h2 className="max-w-2xl text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
          Ready to book your service?
          <br />
          Proceed to checkout to deposit.
        </h2>
        <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:shrink-0">
          <button
            onClick={handleSubmit}
            className="rounded-md bg-orange-400 px-3.5 py-2.5 text-md font-semibold text-white shadow-xs hover:bg-orange-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400"
          >
            {isPending ? "Processing..." : "Get started"}
          </button>
          {/* <a
            href="#"
            className="text-sm/6 font-semibold text-gray-900 hover:opacity-80"
          >
            Learn more
            <span aria-hidden="true">→</span>
          </a> */}
        </div>
      </div>
    </div>
  );
}
