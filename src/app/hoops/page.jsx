import HoopCard from "../components/HoopCard";
import { supabaseServer as supabase } from "../../../lib/supabase/server";
import Navbar from "./../components/Navbar";
import { fetchAllHoops } from "../../../lib/data/hoops.js";
import ProductCards from "../components/ProductCards";
import AllProductCards from "../components/AllProductCards";

export default async function Hoops() {
  const hoops = await fetchAllHoops("GC-55-LG");

  return (
    <>
      <Navbar />

      <AllProductCards products={hoops} />
      {/* <ProductCards /> */}
    </>
  );
}
