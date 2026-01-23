export const dynamic = "force-dynamic";


import { fetchAllServices } from "../../../lib/data/service";
import ServiceNavbar from "../components/ServiceNavbar";
import Footer from "../components/Footer";
import ServicesContent from "../components/ServicesContent";
import ServicesHeader from "../components/ServicesHeader";


export default async function Services() {
  const services = await fetchAllServices();



  return (
    <>
      <ServiceNavbar />
      <ServicesHeader />
      <ServicesContent services={services} />
      <Footer />
    </>
  );
}
