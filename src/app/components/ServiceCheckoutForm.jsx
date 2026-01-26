"use client";
import { ChevronRightIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
import {
  Popover,
  PopoverBackdrop,
  PopoverButton,
  PopoverPanel,
} from "@headlessui/react";
import { PaymentElement, useElements, useStripe } from "@stripe/react-stripe-js";
import {useState} from "react";




export default function  ServiceCheckoutForm({services, deposit, remainder, total, paymentIntentId}) {

    console.log('🍕 SERVICES:',services)


const stripe = useStripe();
const elements = useElements();
const [loading, setLoading] = useState(false);
const [msg, setMsg] = useState("");

  const [form, setForm] = useState({
    
      name: "",
      email: '',
      phone: "",
      address: "",
      city: '',
      state: '',
      postalCode: '',

    
  })

  const handleSubmit =async(e) => 
    {
e.preventDefault();
if(!elements || !stripe ) {
  return;
}

 if (!form.name || !form.email || !form.phone || !form.address) {
      setMsg("Please fill in all the customer details before proceeding.");
      return;
    }

    setLoading(true);

    // await fetch('/api/save-checkout-metadata', {
    //   method: "POST",
    //   headers: {"Content-Type": "application/json"},
    //   body: JSON.stringify({
    //     paymentIntentId,
    //     ...form,
    //   }),
    // });

    const selectedServiceIds = services.map(s => s.id);


    const checkoutData = {
      paymentIntentId,
      services: selectedServiceIds,
      // totalCents: Number(total * 100),
      remainderCents: Number(remainder * 100),
      depositCents: Number(deposit * 100),
      ...form,
    }

  

    const res = await fetch('/api/checkout-session', {
      method: 'POST',
      headers: {"Content-Type": "application/json" },
      body: JSON.stringify(checkoutData)
    });



const result = await res.json();
console.log(result)


    const {error} = await stripe.confirmPayment({
      elements,
      redirect: "always",
      confirmParams: {
        return_url: `${window.location.origin}/checkout/serviceCheckout/success`
      }
    })

    }

 function handleChange(e) {
  
  setForm({...form, [e.target.name]:e.target.value})
 }

// console.log(service.slug)



console.log(form);
  
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

              

              <dl className="hidden space-y-6 border-t border-gray-200 pt-6 text-sm font-medium text-gray-900 lg:block">
                
                {services.map(s => ( <div key={s.id} className="flex items-center justify-between">
                  <dt className="text-gray-600">{s.display_name}</dt>
                  <dd>${s.price.toFixed(2)}</dd>
                </div>))}
                <div className=" border-t border-gray-200 pt-6">
               </div>
               
                <div className="flex items-center justify-between">
                  <dt className="text-gray-600">Service Cost</dt>
                  <dd>${total.toFixed(2)}</dd>
                </div>

                {/* <div className="flex items-center justify-between">
                  <dt className="text-gray-600">Deposit Due</dt>
                  <dd>${deposit.toFixed(2)}</dd>
                </div> */}

                <div className="flex items-center justify-between">
                  <dt className="text-gray-600">Due On Job Completion</dt>
                  <dd>${remainder.toFixed(2)}</dd>
                </div>

                <div className="flex items-center justify-between border-t border-gray-200 pt-6">
                  <dt className="text-base">Deposit Due</dt>
                  <dd className="text-base">${deposit.toFixed(2)}</dd>
                </div>
              </dl>

              <Popover className="fixed inset-x-0 bottom-0 flex flex-col-reverse text-sm font-medium text-gray-900 lg:hidden">
                <div className="relative z-1000 border-t border-gray-200 bg-white px-4 sm:px-6">
                  <div className="mx-auto max-w-lg">
                    <PopoverButton className="flex w-full items-center py-6 font-medium">
                      <span className="mr-auto text-base">Due Today</span>
                      <span className="mr-2 text-base">${deposit.toFixed(2)}</span>
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
                      <dd>${total.toFixed(2)}</dd>
                    </div>

                    <div className="flex items-center justify-between">
                      <dt className="text-gray-600">Deposit</dt>
                      <dd>${deposit.toFixed(2)}</dd>
                    </div>

                    <div className="flex items-center justify-between">
                      <dt className="text-gray-600">Due On Completion</dt>
                      <dd>${remainder.toFixed(2)}</dd>
                    </div>
                  </dl>
                </PopoverPanel>
              </Popover>
            </div>
          </section>

          <form onSubmit={handleSubmit}className="px-4 pt-16 pb-36 sm:px-6 lg:col-start-1 lg:row-start-1 lg:px-0 lg:pb-16">
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
                    htmlFor="name"
                    className="block text-sm/6 font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <div className="mt-2">
                    <input
                    onChange={handleChange}
                    value={form.name}
                      id="name"
                      name="name"
                      type="text"


                      className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-orange-600 sm:text-sm/6"
                    />
                  </div>
                  <label
                    htmlFor="email"
                    className="block text-sm/6 font-medium text-gray-700"
                  >
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                    onChange={handleChange}
                    value={form.email}
                      id="email"
                      name="email"
                      type="email"



                      className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-orange-600 sm:text-sm/6"
                    />
                  </div>
                  <label
                    htmlFor="phone"
                    className="block text-sm/6 font-medium text-gray-700"
                  >
                    Phone
                  </label>
                  <div className="mt-2">
                    <input
                    onChange={handleChange}
                    value={form.phone}
                      id="phone"
                      name="phone"
                      type="text"

                      //   autoComplete="email"
                      className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-orange-600 sm:text-sm/6"
                    />
                  </div>
                </div>
              </section>

              <section aria-labelledby="payment-heading" className="mt-10">
                
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
                      onChange={handleChange}
                      value={form.address}
                        id="address"
                        name="address"
                        type="text"
                        autoComplete="street-address"
                        className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-orange-600 sm:text-sm/6"
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
                      onChange={handleChange}
                      value={form.city}
                        id="city"
                        name="city"
                        type="text"
                        autoComplete="address-level2"
                        className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-orange-600 sm:text-sm/6"
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
                      onChange={handleChange}
                      value={form.state}
                        id="state"
                        name="state"
                        type="text"
                        autoComplete="address-level1"
                        className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-orange-600 sm:text-sm/6"
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
                      onChange={handleChange}
                      value={form.postalCode}
                        id="postalCode"
                        name="postalCode"
                        type="text"
                        // autoComplete="postalCode"
                        className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-orange-600 sm:text-sm/6"
                      />
                    </div>
                  </div>
                 
                </div>
                 <PaymentElement  className="mt-6"/>
                 
              </section>

             

              <div className="mt-10 border-t border-gray-200 pt-6 sm:flex sm:items-center sm:justify-between">
                <button
                  type="submit"
                  className="w-full rounded-md border border-transparent bg-orange-600 px-4 py-2 text-sm font-medium text-white shadow-xs hover:bg-orange-700 focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-gray-50 focus:outline-hidden sm:order-last sm:ml-6 sm:w-auto"
                >
                  Continue
                </button>
                <p className="mt-4 text-center text-sm text-gray-500 sm:mt-0 sm:text-left">
                  *** With a successful payment you will be emailed a receipt/intructions for next steps.


                </p>
              </div>
            </div>
          </form>
        </main>
      </div>
    </>
  );
}
