import {
  ChatBubbleLeftIcon,
  WrenchScrewdriverIcon,
  ClockIcon,
  PhoneIcon,
  StarIcon,
} from "@heroicons/react/20/solid";
import { FaGoogle } from "react-icons/fa";
import Image from "next/image";

export default function HomepageMain() {
  return (
    <>
      <div
        className="relative isolate overflow-hidden bg-gradient-to-b from-gray-300 via-gray-100 to-white
                pt-16 pb-6 sm:pt-20 sm:pb-8 lg:pt-24 lg:pb-24"
      >
        <div
          aria-hidden="true"
          className="absolute -top-80 left-[max(6rem,33%)] -z-10 transform-gpu blur-3xl sm:left-1/2 md:top-20 lg:ml-20 xl:top-3 xl:ml-56"
        >
          <div
            style={{
              clipPath:
                "polygon(63.1% 29.6%, 100% 17.2%, 76.7% 3.1%, 48.4% 0.1%, 44.6% 4.8%, 54.5% 25.4%, 59.8% 49.1%, 55.3% 57.9%, 44.5% 57.3%, 27.8% 48%, 35.1% 81.6%, 0% 97.8%, 39.3% 100%, 35.3% 81.5%, 97.2% 52.8%, 63.1% 29.6%)",
            }}
            className="aspect-801/1036 w-200.25 bg-linear-to-tr from-gray-400 to-gray-600 opacity-20"
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            {/* <p className="text-base/7 font-semibold text-white">
              Are you ready to ball?
            </p> */}
            <h2 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
              Basketball Goals
            </h2>
            <p className="mt-6 text-xl/8 text-gray-700">
              One of our specialties at KC Pro Assembly is basketball goal sales
              and installation. We have been in business since 2011 and are very
              passionate about delivering premium hoops along with seamless
              installations. Take the stress out of your project and trust us to
              handle it with precision.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:mt-10 lg:max-w-none lg:grid-cols-12">
            <div className="relative lg:order-last lg:col-span-5">
              <svg
                aria-hidden="true"
                className="absolute -top-160 left-1 -z-10 h-256 w-702 -translate-x-1/2 mask-[radial-gradient(64rem_64rem_at_111.5rem_0%,white,transparent)] stroke-gray-900/10"
              >
                <defs>
                  <pattern
                    id="e87443c8-56e4-4c20-9111-55b82fa704e3"
                    width={200}
                    height={200}
                    patternUnits="userSpaceOnUse"
                  >
                    <path d="M0.5 0V200M200 0.5L0 0.499983" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#e87443c8-56e4-4c20-9111-55b82fa704e3)"
                  width="100%"
                  height="100%"
                  strokeWidth={0}
                />
              </svg>

              {/* <figure className="border border-slate-800 p-8">
              <blockquote className="text-xl/8 font-semibold tracking-tight text-gray-900">
                <p>See what our customer's say about us!</p>
              </blockquote>
              <figcaption className="mt-8 flex gap-x-4">
                <img
                  alt=""
                  src="/images/karen-dillon.jpg"
                  className="mt-1 size-10 flex-none rounded-full bg-gray-50"
                />
                <div className="text-sm/6">
                  <div className="flex items-center gap-x-4 font-semibold text-gray-900">
                    Karen Dillon
                    <FaGoogle className="text-orange-500 h-4 w-4" />
                  </div>
                  <div className="flex items-center">
                    <StarIcon className="text-yellow-400" />
                    <StarIcon className="text-yellow-400" />
                    <StarIcon className="text-yellow-400" />
                    <StarIcon className="text-yellow-400" />
                    <StarIcon className="text-yellow-400" />
                  </div>
                </div>
              </figcaption>
            </figure> */}
              <div className="relative h-[800px] lg:order-last lg:col-span-5 shadow-lg">
                <Image
                  className="rounded-md overflow-hidden object-cover"
                  src="/images/t60-3.jpeg"
                  alt="In ground basketball hoop on driveway"
                  fill
                />
              </div>
            </div>
            <section
              className="max-w-xl text-base/7 text-gray-600 lg:col-span-7 scroll-mt-24"
              id="our-process"
            >
              {/* <p className="text-base/7 font-semibold text-gray-500 mt-16"> */}
              {/* <p className="text-base/7 font-semibold text-whit mt-16">
                Why us?
              </p> */}
              <h2 className="-ml-1 mt-18 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                Professional Service
              </h2>
              <ul
                role="list"
                className="mt-8 max-w-xl space-y-14 text-gray-600"
              >
                <li className="flex gap-x-3">
                  <ChatBubbleLeftIcon
                    aria-hidden="true"
                    className="mt-1 size-5 flex-none text-slate-800"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      We learn your space.
                    </strong>{" "}
                    Whether you already bought a hoop and only need installation
                    or bought form our store, the first step is to learn about
                    your space and your needs. Our experience helps us ask the
                    right questions.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <WrenchScrewdriverIcon
                    aria-hidden="true"
                    className="mt-1 size-5 flex-none text-slate-800"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      We do it right.
                    </strong>{" "}
                    We hold ourselves to the highest standards and strive for
                    perfection. Upon job confirmation we will handle everything
                    including underground utility markings. Safety is a top
                    priority.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ClockIcon
                    aria-hidden="true"
                    className="mt-1 size-5 flex-none text-slate-800"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      We do it fast.
                    </strong>{" "}
                    We've seen it all and this translates to speed. We aim for a
                    two-week turnaround from purchase. This includes an industry
                    standard 4-7 day concrete curing period.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <PhoneIcon
                    aria-hidden="true"
                    className="mt-1 size-5 flex-none text-slate-800"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      We keep you in the loop.
                    </strong>{" "}
                    Our business is built on communication. You are busy, so we
                    do our best to work with your schedule. We notify you of
                    arrivals and completed work so you always know where your
                    project stands.
                  </span>
                </li>
              </ul>
              {/* {Product cards} */}
            </section>
          </div>
        </div>
      </div>
      <div className="h-px bg-gray-100 w-[90%]" />
    </>
  );
}
