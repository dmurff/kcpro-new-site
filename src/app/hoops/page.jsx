import { supabaseServer as supabase } from "../../../lib/supabase/server";
import Navbar from "./../components/Navbar";
import { fetchAllHoops } from "../../../lib/data/hoops.js";
import AllProductCards from "../components/AllProductCards";
import NewHero from "../components/NewHero";
import ProductCards from "../components/ProductCards";

export default async function Hoops() {
  const hoops = await fetchAllHoops();

  return (
    <>
      <Navbar />
      <NewHero products={hoops} />
      <AllProductCards products={hoops} />
      <ProductCards />
    </>
  );
}
