import Image from "next/image";
import Link from "next/link";
// import { StarIcon, FireIcon, ArrowRightIcon } from "@heroicons/react/20/solid";
import OrderNow from "../components/OrderNow";
import Toggle from "../components/Toggle";
import TotalBox from "./TotalBox";

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
} from "@headlessui/react";
import { StarIcon } from "@heroicons/react/20/solid";
import { HeartIcon, MinusIcon, PlusIcon } from "@heroicons/react/24/outline";

const product = {
  name: "",
  price: "$140",
  rating: 4,
  images: [],
  colors: [
    {
      id: "washed-black",
      name: "Washed Black",
      classes: "bg-gray-700 checked:outline-gray-700",
    },
    {
      id: "white",
      name: "White",
      classes: "bg-white checked:outline-gray-400",
    },
    {
      id: "washed-gray",
      name: "Washed Gray",
      classes: "bg-gray-500 checked:outline-gray-500",
    },
  ],
  description: `
    <p>The Zip Tote Basket is the perfect midpoint between shopping tote and comfy backpack. With convertible straps, you can hand carry, should sling, or backpack this convenient and spacious bag. The zip top and durable canvas construction keeps your goods protected for all-day use.</p>
  `,
  details: [
    {
      name: "Specs",
      items: [
        `60" tempered glass backboard`,
        `5" x 5" one-piece steel post`,
        "Bolt-down anchor design for easy relocation",
        "Adjustable between 7.5 and 10ft",
        `Weather and UV resistant padding`,
        "Removable handle to lock height settings",
        "20 plus year lifespan guaratee",
      ],
    },
    {
      name: "Install details",
      items: [
        "On-site hoop placement assistance",
        "We handle underground utility markings",
        "All materials provided by us",
        "2 week turnaround for standard installs",
      ],
    },
    {
      name: "Delivery",
      items: [
        "Free delivery in the Greater Kansas City area",
        "International shipping available",
        "Expedited shipping options",
        "Signature required upon delivery",
      ],
    },
    {
      name: "Returns",
      items: [
        "Easy return requests",
        "Pre-paid shipping label included",
        "10% restocking fee for returns",
        "60 day return window",
      ],
    },
  ],
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function HoopCard({
  hoop,
  onCheckout,
  children,
  gallery,
  onToggle,
  total,
}) {
  if (!hoop) return null;

  console.log("🚀", hoop.id, hoop.name);
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
          {/* Image gallery */}
          <TabGroup className="flex flex-col-reverse">
            {/* Image selector */}
            <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
              <TabList className="grid grid-cols-4 gap-6">
                {gallery.map((image) => (
                  <Tab
                    key={image.id}
                    className="group relative flex h-24 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium text-gray-900 uppercase hover:bg-gray-50 focus:ring-3 focus:ring-orange-500/50 focus:ring-offset-4 focus:outline-hidden"
                  >
                    <span className="sr-only">{hoop.model}</span>
                    <span className="absolute inset-0 overflow-hidden rounded-md">
                      <img
                        alt={image.alt_text || `Image of ${hoop.model}`}
                        src={image.image_url}
                        className="size-full object-cover"
                      />
                    </span>
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 rounded-md ring-2 ring-transparent ring-offset-2 group-data-selected:ring-orange-500"
                    />
                  </Tab>
                ))}
              </TabList>
            </div>

            <TabPanels>
              {gallery.map((image) => (
                <TabPanel key={image.id}>
                  <img
                    alt={`image of ${hoop.model}`}
                    src={image.image_url}
                    className="max-h-full max-w-full object-contain sm:rounded-lg"
                  />
                </TabPanel>
              ))}
            </TabPanels>
          </TabGroup>

          {/* Product info */}
          <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              {hoop.name}
            </h1>

            <div className="mt-3 flex flex-row gap-8 justify-start items-center">
              <h2 className="sr-only">Product information</h2>
              <p className="text-3xl tracking-tight text-gray-900">
                $ {hoop.price}
              </p>
              <p className="text-sm text-gray-900">was</p>
              <span className="text-red-800 text-3xl font-light line-through">
                {`$${hoop.price + 500}`}
              </span>
            </div>

            {/* Reviews */}
            <div className="mt-3">
              <h3 className="sr-only">Reviews</h3>
              <div className="flex items-center">
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      aria-hidden="true"
                      className="text-yellow-500 size-5 shrink-0"
                    />
                  ))}
                </div>
                <p className="sr-only">{product.rating} out of 5 stars</p>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="sr-only">Description</h3>

              <div
                dangerouslySetInnerHTML={{ __html: hoop.description }}
                className="space-y-6 text-base text-gray-700"
              />
            </div>

            <form className="mt-6">
              {/* Colors */}
              <div className="flex flex-col gap-4">
                {/* <h3 className="text-sm font-medium text-gray-600">
                  Add a service
                </h3> */}
                <div className="border-b-1 border-gray-900 p-2 mb-6">
                  <h3 className="text-gray-900 text-md">Add a service</h3>
                  <p className="text-gray-900">(50% deposit at checkout)</p>
                </div>
                <Toggle
                  service_name={"installation"}
                  service_cost={hoop.install_price}
                  onToggle={onToggle}
                />
                <Toggle
                  service_name={"hoop removal"}
                  service_cost={350}
                  onToggle={onToggle}
                />

                {/* <fieldset aria-label="Choose a color" className="mt-2">
                  <div className="flex items-center gap-x-3">
                    {product.colors.map((color) => (
                      <div
                        key={color.id}
                        className="flex rounded-full outline -outline-offset-1 outline-black/10"
                      ></div>
                    ))}
                  </div>
                </fieldset> */}
              </div>

              <div className="mt-10 flex items-end justify-between gap-6">
                {/* {children} */}
                <button
                  type="submit"
                  className="flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-orange-500 px-8 py-3 text-base font-medium text-white hover:bg-orange-600 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 focus:outline-hidden sm:w-full"
                >
                  Add to cart
                </button>
                {/* {here is where the total box will go} */}
                <TotalBox total={total} />
              </div>
            </form>

            <section aria-labelledby="details-heading" className="mt-12">
              <h2 id="details-heading" className="sr-only">
                Additional details
              </h2>

              <div className="divide-y divide-gray-200 border-t border-gray-200">
                {product.details.map((detail) => (
                  <Disclosure key={detail.name} as="div">
                    <h3>
                      <DisclosureButton className="group relative flex w-full items-center justify-between py-6 text-left">
                        <span className="text-sm font-medium text-gray-900 group-data-open:text-indigo-600">
                          {detail.name}
                        </span>
                        <span className="ml-6 flex items-center">
                          <PlusIcon
                            aria-hidden="true"
                            className="block size-6 text-gray-400 group-hover:text-gray-500 group-data-open:hidden"
                          />
                          <MinusIcon
                            aria-hidden="true"
                            className="hidden size-6 text-indigo-400 group-hover:text-indigo-500 group-data-open:block"
                          />
                        </span>
                      </DisclosureButton>
                    </h3>
                    <DisclosurePanel className="pb-6">
                      <ul
                        role="list"
                        className="list-disc space-y-1 pl-5 text-sm/6 text-gray-700 marker:text-gray-300"
                      >
                        {detail.items.map((item) => (
                          <li key={item} className="pl-2">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </DisclosurePanel>
                  </Disclosure>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
