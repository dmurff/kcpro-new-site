import Navbar from "@/app/components/Navbar";
import HoopCard from "@/app/components/HoopCard";
import { fetchHoop } from "../../../../lib/data/hoops";
import TotalBox from "@/app/components/TotalBox";

export const revalidate = 60; // Page will re-generate in the background every 60 seconds

export default async function ProductPage({ params }) {
  const { id } = params;
  // const [hoop, setHoop] = useState(null);

  console.log("✅:", id);

  const hoop = await fetchHoop(id);

  return (
    <>
      {/* <Navbar /> */}
      <HoopCard hoop={hoop}>
        <TotalBox />
      </HoopCard>
    </>
  );
}
