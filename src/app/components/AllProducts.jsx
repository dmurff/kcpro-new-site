import { fetchAllHoops } from "../../../lib/data/hoops";
import ProductCards from "../components/ProductCards";

export default async function AllProducts() {
  const products = await fetchAllHoops();
  return <ProductCards products={products} />;
}
