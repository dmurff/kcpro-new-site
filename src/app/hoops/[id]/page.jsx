import { fetchHoop } from "../../../../lib/data/hoops";
import { fetchImages } from "../../../../lib/data/hoops";
import { fetchServices } from "../../../../lib/data/hoops";
import HoopCardWrapper from "@/app/components/HoopCardWrapper";

export const revalidate = 60; // Page will re-generate in the background every 60 seconds

export default async function ProductPage({ params }) {
  const { id } = params;
  // const [hoop, setHoop] = useState(null);

  console.log("✅:", id);

  const hoop = await fetchHoop(id);
  const gallery = await fetchImages(id);
  const services = await fetchServices();

  console.log(services);

  return (
    <>
      {/* <Navbar /> */}

      <HoopCardWrapper hoop={hoop} gallery={gallery} services={services} />
    </>
  );
}
