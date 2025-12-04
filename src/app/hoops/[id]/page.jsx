import { fetchHoop } from "../../../../lib/data/hoops";
import { fetchImages } from "../../../../lib/data/hoops";
import { fetchHoopBuyServices } from "../../../../lib/data/service";
import HoopCardWrapper from "@/app/components/HoopCardWrapper";

export const revalidate = 60; // Page will re-generate in the background every 60 seconds

export default async function ProductPage({ params }) {
  const { id } = params;
  // const [hoop, setHoop] = useState(null);

  console.log("✅:", id);

  const hoop = await fetchHoop(id);
  const gallery = await fetchImages(id);

  /// fetchBuyServices related to relavent hoop buying services only not miscellaneous services
  const services = await fetchHoopBuyServices();

  return (
    <>
      {/* <Navbar /> */}

      <HoopCardWrapper hoop={hoop} gallery={gallery} services={services} />
    </>
  );
}
