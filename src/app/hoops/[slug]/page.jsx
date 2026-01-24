import { fetchHoopBySlug } from "../../../../lib/data/hoops";
import { fetchImages } from "../../../../lib/data/hoops";
import { fetchHoopBuyServices } from "../../../../lib/data/service";
import HoopCardWrapper from "@/app/components/HoopCardWrapper";
import {PRODUCT_CONTENT} from '../../../../lib/data/productContent';

export const revalidate = 60; // Page will re-generate in the background every 60 seconds

export default async function ProductPage({ params }) {
  const { slug } = await params;
 
  // const [hoop, setHoop] = useState(null);

  

  const hoop = await fetchHoopBySlug(slug);

  const id = hoop.id;

  // console.log('ID',id)
  const gallery = await fetchImages(id);

  const content = PRODUCT_CONTENT[slug]

  /// fetchBuyServices related to relavent hoop buying services only not miscellaneous services
  const services = await fetchHoopBuyServices();

  return (
    <>
      {/* <Navbar /> */}

      <HoopCardWrapper hoop={hoop} content={content} gallery={gallery} services={services} />
    </>
  );
}
