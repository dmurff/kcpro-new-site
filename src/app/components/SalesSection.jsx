import Image from "next/image";

export default function SalesSection() {
  return (
    <section className="bg-gradient-to-b from-gray-100 to-gray-300 to-90% h-[800px]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 h-full">
        <div className="grid grid-cols-1 md:grid-cols-2 h-full">
          {/* Left Text Column */}
          <div className="flex flex-col justify-center">
            <p className="text-orange-300 font-black text-2xl">01.</p>
            <h2 className="text-3xl lg:text-4xl text-slate-800 font-bold">
              Select your hoop
            </h2>
            <p className="text-lg/7 text-slate-600 font-light mt-8">
              Kansas City's top hoop installers partnered with the best in
              ground hoop manufacturer to bring you double the quality. For 30
              years Ironclad Sports has innovated and defined the modern era of
              home basketball systems.
            </p>
          </div>

          {/* Right Image Column */}
          <div className="relative flex items-end justify-center">
            <Image
              src="/images/tpt-render.png"
              alt="Hoops"
              width={900}
              height={900}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
