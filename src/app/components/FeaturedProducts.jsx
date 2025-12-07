import { fetchFeaturedHoops } from "../../../lib/data/hoops";
import ProductCards from "../components/ProductCards";

export default async function FeaturedProducts() {
  const products = await fetchFeaturedHoops();

  return <ProductCards products={products} />;
}
