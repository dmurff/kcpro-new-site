"use client";

import Link from "next/link";
// import { ServerClient } from "postmark";
import { useState } from "react";
import toast from "react-hot-toast";

import OrderSummary from './OrderSummary';

export default function ServiceBundle({ services, primaryServiceId }) {
  const [addonIds, setAddonIds] = useState([]);
  const [isPending, setIsPending] = useState(false); 

   function onCheckout () {
     setIsPending(true);

  const params = new URLSearchParams({
    primaryServiceId,
    addonIds: addonIds.join(","), // 👈 important
  });
 console.log(params)


  window.location.href =
    `/checkout/serviceCheckout?${params.toString()}`;
    
  }



  const primaryService = services.find((s)=> s.id === primaryServiceId)
  const selectedAddons = services.filter((s) => addonIds.includes(s.id))
  const serviceTotal = primaryService.price + (selectedAddons.reduce((acc, s)=> acc + s.price, 0))
  const deposit = Math.min(serviceTotal * .25, 200).toFixed(2)
  const remainder = serviceTotal - deposit;


  const handleClick = (service) => {
    if (service.id === primaryServiceId) {
      toast.success(
        "This service is already selected as your primary job. Select add ons or proceed to checkout"
      );
      return;
    }

    if (service.service_group === "primary") {
      toast.error(
        "To change your main service, start from that service’s page."
      );
      return;
    }

    setAddonIds((prev) =>
      prev.includes(service.id)
        ? prev.filter((id) => id !== service.id)
        : [...prev, service.id]
    );
  };

  //   console.log(selectedIds);

  return (
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
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-16">
        <div className=" text-gray-900 text-base/7 p-2 rounded-xl">
          <h2 className="font-semibold bg-orange-2text-xl font-semibold bg-orange-400/70 tracking-tight text-pretty text-gray-900 inline-block text-2xl mb-2">
            Service Add-ons{" "}
          </h2>{" "}
          <p>
            Select add on services if you need them or proceed to checkout. A
            25% deposit (capped at $200) locks in your schedule. Final payment
            is due upon completion.
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
                conrete or assembly only. Delivery and box disposal included
                free.
              </p>
              <p className="mt-2 text-sm/6 font-semibold text-gray-700 hover:text-gray-950">
                Shop Hoops <span aria-hidden="true">→</span>
              </p>
            </div>
          </Link>
          {services.map((s) => {
            const isPrimary = s.id === primaryServiceId;
            const isAddonSelected = addonIds.includes(s.id);
            return (
              <button
                key={s.id}
                onClick={() => handleClick(s)}
                // className={`flex gap-x-4 rounded-xl backdrop-blur-sm p-6 shadow-lg ring-1 ${
                //   isSelected
                //     ? "hover:shadow-orange-500/30 bg-black/80 text-gray-400 ring:orange-500"
                //     : "bg-gray-200/30 hover:ring-orange-400 text-gray-700 ring-gray-900/5 shadow-black/20"
                // }`}
                className={`flex gap-x-4 text-gray-900 rounded-xl backdrop-blur-sm p-6 shadow-lg ring-1 transition ${
                  isPrimary
                    ? "bg-black/80 text-white ring-orange-500 cursor-not-allowed"
                    : isAddonSelected
                    ? "bg-black/80 ring-orange-400 hover:shadow-orange-500/30 text-white"
                    : "bg-gray-200/30 hover:ring-orange-300 ring-gray-900/5"
                }`}
              >
                <div className="text-base/7">

                  {isPrimary && (
                    <span className="inline-block mb-2 text-xs font-semibold uppercase text-orange-400">
                      Primary Service
                    </span>
                  )}


                  <h3 className="font-semibold ">{s.display_name}</h3>
                  <p className="mt-2 ">{s.description}</p>
                  <p className="mt-2 ">${s.price}</p>
                  <p className="mt-2 text-sm/6 font-semibold text-gray-400 hover:text-gray-950">
                    Learn more <span aria-hidden="true">→</span>
                  </p>
                </div>
              </button>
            );
          })}
        </div>

      </div>
      <OrderSummary onCheckout={onCheckout} isPending={isPending} primaryService={primaryService} selectedAddons={selectedAddons} serviceTotal={serviceTotal} deposit={deposit} remainder={remainder} />
    </div>
  );
}
