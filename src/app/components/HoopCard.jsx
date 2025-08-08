import Image from "next/image";
import Link from "next/link";
import { StarIcon, FireIcon, ArrowRightIcon } from "@heroicons/react/20/solid";
import OrderNow from "../components/OrderNow";

const HoopCard = ({ hoop, onCheckout }) => {
  if (!hoop) return null; // or a fallback?

  return (
    <section>
      <div className="relative p-8 text-black rounded shadow-md grid lg:mx-16 lg:grid-cols-2 gap-x-8 mt-24 lg:mt-40 bg-white">
        {/* <svg
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
              <stop stopColor="#e7480eff" />
              <stop offset={1} stopColor="#e80a0aff" />
            </linearGradient>
          </defs>
        </svg> */}
        {/* LEFT COLUMN: Image */}

        <div className="lg:col-start-1 flex justify-center items-start mb-8">
          <div className="relative w-[300px] h-[300px] object-scale-down lg:w-[600px] lg:h-[600px]">
            <Image
              src={hoop.feature_image[0]}
              fill
              className="object-contain"
              alt={hoop.name}
            />
          </div>
        </div>

        {/* RIGHT COLUMN: Title */}
        <div className="lg:col-start-2 flex flex-col gap-y-4 w-full lg:w-[600px]">
          <div className="flex items-center justify-between">
            <h2 className="text-black text-4xl -ml-2">{hoop.name}</h2>
          </div>
          <div className="flex flex-col items-start justify-between gap-y-6">
            <p className="text-black text-sm">{hoop.description}</p>
            <div className="flex items-center gap-x-2">
              <FireIcon className="h-[30px] w-[30px] text-orange-400 shrink-0 -ml-1" />
              <p className="text-black text-sm leading-none">
                One of the most popular hoops sold in Kansas City in 2024!
              </p>
            </div>
          </div>
          <div className="flex flex-row items-center gap-x-2">
            <p className="text-sm text-orange-600 font-semibold">5.0</p>
            <StarIcon className="w-[15px] h-[15px] mb-1 text-orange-600 ml-0" />
            <p className="inline text-gray-600 text-xs"> 49 reviews</p>
          </div>
          <div
            id="hoop_price"
            className="flex flex-row items-center gap-x-2 w-full"
          >
            <p className="text-xl">Hoop Price: </p>
            <p className="text-red-500 text-sm line-through">
              ${Number(`${hoop.price}`) + 500}
            </p>{" "}
            <ArrowRightIcon className="h-[15px] w-[15px]" />${hoop.price}
          </div>
          <p className="text-black text-md">
            <span className="text-xl">Installation fee:</span> $
            {hoop.install_price}
          </p>
          <hr className="my-4 border-t border-gray-300" />
          <div>
            <OrderNow id={hoop.id} type="hoops" />
          </div>
        </div>
      </div>
      <div className="w-full mt-8">
        <p className="text-md text-gray-900">{hoop.description}</p>
      </div>
    </section>
  );
};

export default HoopCard;
