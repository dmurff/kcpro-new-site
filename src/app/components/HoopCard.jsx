import Image from "next/image";
import { StarIcon } from "@heroicons/react/20/solid";

const HoopCard = ({ hoop }) => {
  if (!hoop) return null; // or a fallback?

  return (
    <section>
      <div className="p-8 text-black rounded shadow-md grid grid-cols-2 gap-x-8 m-16 mt-24">
        {/* LEFT COLUMN: Image */}
        <div className="col-start-1 flex justify-center items-start">
          <div className="relative w-[600px] h-[600px]">
            <Image
              src={hoop.feature_image[0]}
              fill
              className="object-contain"
              alt={hoop.name}
            />
          </div>
        </div>

        {/* RIGHT COLUMN: Title */}
        <div className="col-start-2 flex flex-col gap-y-4 w-[600px]">
          <div className="flex items-center justify-between">
            <h2 className="text-black text-4xl">{hoop.name}</h2>
          </div>
          <div className="flex items-center justify-between">
            <h2 className="text-black text-sm">{hoop.description}</h2>
          </div>
          <div className="flex flex-row items-center gap-x-2">
            <p className="text-sm text-orange-600 font-semibold">5.0</p>
            <StarIcon className="w-[15px] h-[15px] mb-1 text-orange-600" />
            <p className="inline text-gray-600 text-xs"> 49 reviews</p>
          </div>
          <p className="text-black text-xl">
            Hoop Price:{" "}
            <span className="text-red-500 text-lg line-through">
              ${Number(`${hoop.price}`) + 500}
            </span>{" "}
            ${hoop.price}
          </p>
          <p className="text-black text-xl">
            Installation fee: ${hoop.install_price}
          </p>
        </div>
      </div>
      <div className="w-full m-16 mt-8">
        <p className="text-md text-gray-900">{hoop.description}</p>
      </div>
    </section>
  );
};

export default HoopCard;
