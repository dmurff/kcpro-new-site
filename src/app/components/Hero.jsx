// import { supabaseServer as supabase } from "../../../lib/supabase/server";

export default async function Example() {
  //   const { data, error } = await supabase
  //     .from("hoops")
  //     .select("*")
  //     .eq("name", "Full Court 60")
  //     .single();

  return (
    <div className="relative bg-gray-900">
      <div className="relative aspect-[3/4] overflow-hidden bg-indigo-600 md:absolute md:left-0 md:h-full md:w-1/3 lg:w-1/2">
        <div className="bg-indigo-900/10 inset-0 absolute z-10" />
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: "url('/images/hero-image.png')" }}
          // style={{ backgroundImage: data.feature_image[0] }}
        ></div>

        <svg
          viewBox="0 0 926 676"
          aria-hidden="true"
          className="absolute -bottom-24 left-24 w-231.5 transform-gpu blur-[118px]"
        >
          <path
            d="m254.325 516.708-90.89 158.331L0 436.427l254.325 80.281 163.691-285.15c1.048 131.759 36.144 345.144 168.149 144.613C751.171 125.508 707.17-93.823 826.603 41.15c95.546 107.978 104.766 294.048 97.432 373.585L685.481 297.694l16.974 360.474-448.13-141.46Z"
            fill="url(#60c3c623-93e0-4a09-a0e6-4c228a0116d8)"
            fillOpacity=".4"
          />
          <defs>
            <linearGradient
              id="60c3c621-93e0-4a09-a0e6-4c228a0116d8"
              x1="926.392"
              x2="-109.635"
              y1=".176"
              y2="321.024"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#eb8219ff" />
              <stop offset={1} stopColor="#2b31d8ff" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="relative mx-auto max-w-7xl py-24 sm:py-32 lg:px-8 lg:py-40">
        <svg
          viewBox="0 0 926 676"
          aria-hidden="true"
          className="absolute -bottom-24 left-24 w-231.5 transform-gpu blur-[118px]"
        >
          <path
            d="m254.325 516.708-90.89 158.331L0 436.427l254.325 80.281 163.691-285.15c1.048 131.759 36.144 345.144 168.149 144.613C751.171 125.508 707.17-93.823 826.603 41.15c95.546 107.978 104.766 294.048 97.432 373.585L685.481 297.694l16.974 360.474-448.13-141.46Z"
            fill="url(#60c3c621-93e0-4a09-a0e6-4c228a0116d8)"
            fillOpacity=".4"
          />
          <defs>
            <linearGradient
              id="60c3c621-93e0-4a09-a0e6-4c228a0116d8"
              x1="926.392"
              x2="-109.635"
              y1=".176"
              y2="321.024"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#ae6319ff" />
              <stop offset={1} stopColor="#2904f9ff" />
            </linearGradient>
          </defs>
        </svg>
        <div className="pr-6 pl-6 md:ml-auto md:w-2/3 md:pl-16 lg:w-1/2 lg:pr-0 lg:pl-24 xl:pl-32">
          <p className="text-base/7 font-semibold text-gray-400">
            KC Pro Assembly
          </p>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Your driveway is about to become the best part of your home.
          </h1>
          <p className="mt-6 text-base/7 text-gray-300">
            We offer a line of premium in ground hoops that will transform your
            space and create memories. Join hundreds of satisfied customers in
            the Kansas City area and trust us to handle your project with speed
            and precision.
          </p>
          <div className="mt-8 flex gap-6">
            <a
              href="#"
              className="z-20 inline-flex rounded-md bg-orange-500 px-3.5 py-2.5 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 items-center"
            >
              {" "}
              Shop hoops + install
            </a>
            <a
              href="#our-process"
              className="z-20 inline-flex rounded-md bg-transparent border-2 outline-blue-100 px-3.5 py-2.5 text-sm font-semibold text-white hover:bg-blue-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 hover:border-blue-100 hover:text-slate-800 transition duration-300 ease-in-out"
            >
              {" "}
              Not sure? Learn our process
              <span className="ml-2" aria-hidden="true">
                ↓
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
