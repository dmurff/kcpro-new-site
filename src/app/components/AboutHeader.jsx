import Link from "next/link";


export default function AboutHeader () {
    return (
        <div className="mx-auto lg:mx-0 bg-black/90 mt-18 p-8">
      <div className="max-w-2xl">
        <h2 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl mx-auto lg:mx-0">
          About Us
        </h2>
        <p className="mt-8 text-lg font-medium text-pretty text-gray-200 sm:text-xl/8">
         We specialize in basketball hoop sales and installation in the Kansas City area.
        </p>

        <div className="flex flex-row gap-4 mt-16 mb-16">
          {/* <Link
              href="#"
              className="bg-orange-400 hover:bg-orange-500 text-white text-sm text-base/7 p-2 rounded-xl"
            >
              Fast Book
            </Link>
            <Link
              href="#serviceCards"
              className="ring-1 ring-blue-100 text-white text-sm text-base/7 p-2 rounded-xl "
            >
              Explore Services
            </Link> */}

          {/* <Link
            href="#"
            className=" inline-flex rounded-md bg-orange-400 px-3.5 py-2.5 text-sm font-semibold text-white hover:outline-orange-600 hover:bg-orange-600 focus-visible:outline-2 focus-visible:outline-offset-2 items-center hover:text-gray-300 transition duration-150 ease-in"
          >
            {" "}
            Fast Book
          </Link>
          <Link
            href="#serviceCards"
            className=" inline-flex rounded-md bg-transparent border-2 outline-blue-100 px-3.5 py-2.5 text-sm font-semibold text-white hover:bg-blue-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 hover:border-blue-100 hover:text-slate-800 transition duration-300 ease-in-out"
          >
            {" "}
            Not sure? Check out our services
            <span className="ml-2" aria-hidden="true">
              ↓
            </span>
          </Link> */}

          {/* <ul className="mt-8 text-lg font-medium text-pretty text-gray-600 sm:text-xl/8">
              <li>
                <span className="text-xl font-bold">Step 1:</span> At service
                checkout select the jobs you need.
              </li>
              <li>
                <span className="text-xl font-bold">Step 2:</span> At service
                checkout select the jobs you need.
              </li>
              <li>
                <span className="text-xl font-bold">Step 3:</span> At service
                checkout select the jobs you need.
              </li>
            </ul> */}
        </div>
      </div>
    </div>
    )
};