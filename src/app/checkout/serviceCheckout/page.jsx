// throw new Error("PAGE.JSX IS EXECUTING");

export const dynamic = "force-dynamic";

import ServiceCheckout from "../../components/ServiceCheckout";
import {fetchServices} from "../../../../lib/data/hoops"

export default async function Page({ searchParams }) {

  
  const { serviceId, clientSecret } = await searchParams;
  
  // const service = await fetchServices(serviceId);

  const rawService = await fetchServices(serviceId);

// FORCE serialization
const service = JSON.parse(JSON.stringify(rawService));

    console.log("🐦🐦🐦🐦🐦🕰️🕰️🕰️🕰️🕰️", service);

    const price = service.price;

    const deposit = Math.min(price * .25, 200);
const remainder = price - deposit;



  return (
    <>
      <ServiceCheckout clientSecret={clientSecret} service={service} deposit={deposit} remainder={remainder} />
    </>
  );
}
