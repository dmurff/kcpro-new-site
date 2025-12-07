import { fetchAllServices } from "../../../lib/data/service";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ServicesContent from "../components/ServicesContent";
import {
  CalendarDaysIcon,
  NewspaperIcon,
  PhoneIcon,
} from "@heroicons/react/20/solid";

export default async function Services() {
  const services = await fetchAllServices();

  //   return (
  //     <>
  //       <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 ">
  //         {services.map((s) => (
  //           <div key={s.id} className="bg-black/80">
  //             <h1 className="text-white font-bold text-3xl">{s.display_name}</h1>
  //           </div>
  //         ))}
  //       </div>
  //     </>
  //   );
  // }

  return (
    <>
      <Navbar />

      <ServicesContent services={services} />
      <Footer />
    </>
  );
}
