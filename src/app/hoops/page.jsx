import HoopCard from "../components/HoopCard";
import { supabaseServer as supabase } from "@/lib/supabase/server";

const Products = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center text-white mb-10">
      {/* Background image with dark overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: "url('/images/hero-product.jpg')" }}
      >
        {/* <div className="absolute inset-0 backdrop-blur-sm z-5" /> */}
        {/* Dark overlay */}
        {/* <div className="absolute inset-0 bg-blue-800/70"></div> */}
        <div className="absolute inset-0 z-10 bg-blue-950/70 clip-diagonal pointer-events-none"></div>
      </div>
      {/* Content Layer */}

      {/* <div className="relative z-10 translate-x-4 sm:translate-x-8 md:translate-x-10"> */}
      <div className="relative z-20 text-right max-w-3xl ml-auto mr-16">
        <h1 className="text-6xl font-bold text-white mb-2">
          Bring the Court Home
        </h1>
        <p className="max-w-2xl text-gray-300 text-xl leading-relaxed">
          Transform your space with the perfect basketball hoop
        </p>
      </div>
      <HoopCard />
    </section>
  );
};

export default Products;
