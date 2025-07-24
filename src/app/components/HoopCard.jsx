import Image from "next/image";

const HoopCard = ({ hoop }) => {
  if (!hoop) return null; // or a fallback?

  return (
    <div className="p-8 text-black rounded shadow-md grid grid-cols-2 gap-x-8 m-16 mt-24">
      {/* LEFT COLUMN: Image */}
      <div className="col-start-1 flex justify-center items-start">
        <div className="relative w-[600px] h-[600px] bg-white">
          <Image
            src={hoop.product_images[5]}
            fill
            className="object-contain"
            alt={hoop.name}
          />
        </div>
      </div>

      {/* RIGHT COLUMN: Title */}
      <div className="col-start-2 flex flex-col gap-y-6 w-[600px]">
        <h2 className="text-black text-4xl">{hoop.name}</h2>
        <p className="text-xl">
          Price was:{" "}
          <span className="text-red-500 text-2xl line-through">$2499</span>
        </p>
        <p className="text-black text-2xl">Current Price: ${hoop.price}</p>
        <p className="text-black text-2xl">
          Installation fee: ${hoop.install_price}
        </p>
      </div>
    </div>
  );
};

export default HoopCard;
