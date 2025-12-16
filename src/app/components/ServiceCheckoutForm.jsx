"use client";
import { ChevronRightIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
import {
  Popover,
  PopoverBackdrop,
  PopoverButton,
  PopoverPanel,
} from "@headlessui/react";
import { Elements, PaymentElement } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";


const stripe = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);


export default function ServiceCheckoutForm({service, clientSecret, deposit, remainder}) {




console.log(service.slug)

const serviceName = service.slug.replace('-', " ")

console.log(serviceName)
  
  return (
    <>
      <div className="bg-white">
        {/* Background color split screen for large screens */}
        <div
          aria-hidden="true"
          className="fixed top-0 left-0 hidden h-full w-1/2 bg-white lg:block"
        />
        <div
          aria-hidden="true"
          className="fixed top-0 right-0 hidden h-full w-1/2 bg-gray-50 lg:block"
        />

        <main className="relative mx-auto grid max-w-7xl grid-cols-1 gap-x-16 lg:grid-cols-2 lg:px-8 xl:gap-x-48">
          <h1 className="sr-only">Order information</h1>

          <section
            aria-labelledby="summary-heading"
            className="bg-gray-50 px-4 pt-16 pb-10 sm:px-6 lg:col-start-2 lg:row-start-1 lg:bg-transparent lg:px-0 lg:pb-16"
          >
            <div className="mx-auto max-w-lg lg:max-w-none">
              <h2
                id="summary-heading"
                className="text-lg font-medium text-gray-900"
              >
                Order summary
              </h2>

              <ul
                role="list"
                className="divide-y divide-gray-200 text-sm font-medium text-gray-900"
              >
                {/* {products.map((product) => (
                  <li
                    key={product.id}
                    className="flex items-start space-x-4 py-6"
                  >
                    <img
                      alt={product.imageAlt}
                      src={product.imageSrc}
                      className="size-20 flex-none rounded-md object-cover"
                    />
                    <div className="flex-auto space-y-1">
                      <h3>{product.name}</h3>
                      <p className="text-gray-500">{product.color}</p>
                      <p className="text-gray-500">{product.size}</p>
                    </div>
                    <p className="flex-none text-base font-medium">
                      {product.price}
                    </p>
                  </li>
                ))} */}
              </ul>

              <dl className="hidden space-y-6 border-t border-gray-200 pt-6 text-sm font-medium text-gray-900 lg:block">
                <div className="flex items-center justify-between">
                  <dt className="text-gray-600">Service Cost ({serviceName})</dt>
                  <dd>${service.price}</dd>
                </div>

                <div className="flex items-center justify-between">
                  <dt className="text-gray-600">Deposit Due</dt>
                  <dd>${deposit}</dd>
                </div>

                <div className="flex items-center justify-between">
                  <dt className="text-gray-600">Due On Completion</dt>
                  <dd>${remainder}</dd>
                </div>

                <div className="flex items-center justify-between border-t border-gray-200 pt-6">
                  <dt className="text-base">Due Today</dt>
                  <dd className="text-base">${deposit}</dd>
                </div>
              </dl>

              <Popover className="fixed inset-x-0 bottom-0 flex flex-col-reverse text-sm font-medium text-gray-900 lg:hidden">
                <div className="relative z-1000 border-t border-gray-200 bg-white px-4 sm:px-6">
                  <div className="mx-auto max-w-lg">
                    <PopoverButton className="flex w-full items-center py-6 font-medium">
                      <span className="mr-auto text-base">Due Today</span>
                      <span className="mr-2 text-base">${deposit}</span>
                      <ChevronUpIcon
                        aria-hidden="true"
                        className="size-5 text-gray-500"
                      />
                    </PopoverButton>
                  </div>
                </div>

                <PopoverBackdrop
                  transition
                  className="fixed inset-0 bg-black/25 transition-opacity duration-300 ease-linear data-closed:opacity-0"
                />
                <PopoverPanel
                  transition
                  className="relative transform bg-white px-4 py-6 transition duration-300 ease-in-out data-closed:translate-y-full sm:px-6"
                >
                  <dl className="mx-auto max-w-lg space-y-6">
                    <div className="flex items-center justify-between">
                      <dt className="text-gray-600">Service Cost</dt>
                      <dd>${service.price}</dd>
                    </div>

                    <div className="flex items-center justify-between">
                      <dt className="text-gray-600">Deposit</dt>
                      <dd>${deposit}</dd>
                    </div>

                    <div className="flex items-center justify-between">
                      <dt className="text-gray-600">Due On Completion</dt>
                      <dd>${remainder}</dd>
                    </div>
                  </dl>
                </PopoverPanel>
              </Popover>
            </div>
          </section>

          <form className="px-4 pt-16 pb-36 sm:px-6 lg:col-start-1 lg:row-start-1 lg:px-0 lg:pb-16">
            <div className="mx-auto max-w-lg lg:max-w-none">
              <section aria-labelledby="contact-info-heading">
                <h2
                  id="contact-info-heading"
                  className="text-lg font-medium text-gray-900"
                >
                  Contact information
                </h2>

                <div className="mt-6">
                  <label
                    htmlFor="email-address"
                    className="block text-sm/6 font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <div className="mt-2">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                  </div>
                  <label
                    htmlFor="email-address"
                    className="block text-sm/6 font-medium text-gray-700"
                  >
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email-address"
                      name="email-address"
                      type="email"
                      //   autoComplete="email"
                      className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                  </div>
                  <label
                    htmlFor="email-address"
                    className="block text-sm/6 font-medium text-gray-700"
                  >
                    Phone
                  </label>
                  <div className="mt-2">
                    <input
                      id="phone"
                      name="phone"
                      type="text"
                      //   autoComplete="email"
                      className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                  </div>
                </div>
              </section>

              <section aria-labelledby="payment-heading" className="mt-10">
                <Elements
        stripe={stripe}
        options={{
          clientSecret,
          appearance: {
            theme: "flat",
            variables: { colorPrimaryText: "#262626" },
          },
          layout: {
            type: "tabs",
            defaultCollapsed: false,
          },
        }}
      >
                <PaymentElement  />
      </Elements>
              </section>

              <section aria-labelledby="shipping-heading" className="mt-10">
                <h2
                  id="shipping-heading"
                  className="text-lg font-medium text-gray-900"
                >
                  Address
                </h2>

                <div className="mt-6 grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-3">
                  

                  <div className="sm:col-span-3">
                    <label
                      htmlFor="address"
                      className="block text-sm/6 font-medium text-gray-700"
                    >
                      Address
                    </label>
                    <div className="mt-2">
                      <input
                        id="address"
                        name="address"
                        type="text"
                        autoComplete="street-address"
                        className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                      />
                    </div>
                  </div>

                 

                  <div>
                    <label
                      htmlFor="city"
                      className="block text-sm/6 font-medium text-gray-700"
                    >
                      City
                    </label>
                    <div className="mt-2">
                      <input
                        id="city"
                        name="city"
                        type="text"
                        autoComplete="address-level2"
                        className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="region"
                      className="block text-sm/6 font-medium text-gray-700"
                    >
                      State 
                    </label>
                    <div className="mt-2">
                      <input
                        id="region"
                        name="region"
                        type="text"
                        autoComplete="address-level1"
                        className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="postal-code"
                      className="block text-sm/6 font-medium text-gray-700"
                    >
                      Postal code
                    </label>
                    <div className="mt-2">
                      <input
                        id="postal-code"
                        name="postal-code"
                        type="text"
                        autoComplete="postal-code"
                        className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                      />
                    </div>
                  </div>
                </div>
              </section>

             

              <div className="mt-10 border-t border-gray-200 pt-6 sm:flex sm:items-center sm:justify-between">
                <button
                  type="submit"
                  className="w-full rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-xs hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 focus:outline-hidden sm:order-last sm:ml-6 sm:w-auto"
                >
                  Continue
                </button>
                <p className="mt-4 text-center text-sm text-gray-500 sm:mt-0 sm:text-left">
                  You won't be charged until the next step.
                </p>
              </div>
            </div>
          </form>
        </main>
      </div>
    </>
  );
}
