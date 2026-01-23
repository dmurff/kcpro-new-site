export const dynamic = "force-dynamic";

import HoopsNavbar from "./../components/HoopsNavbar";
import { fetchAllHoops } from "../../../lib/data/hoops.js";
import AllProducts from "../components/AllProducts";
import NewHero from "../components/NewHero";
import ProductCards from "../components/ProductCards";
import Footer from "../components/Footer";

export default async function Hoops({searchParams}) {
  const products = await fetchAllHoops();
const {pricingContext} = await searchParams;

console.log(pricingContext, "🏀❤️👋💶💶")

  return (
    <>
      <HoopsNavbar />
      <NewHero products={products} />
      {/* <AllProducts products={products} /> */}

      {/* <ProductCards /> */}
      <Footer />
    </>
  );
}
