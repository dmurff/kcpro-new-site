// throw new Error("PAGE.JSX IS EXECUTING");

export const dynamic = "force-dynamic";

import ServiceCheckout from "../../components/ServiceCheckout";
// import {fetchSelectedServices} from "../../../../lib/data/service"
import createPaymentIntent from "../../../../lib/services/service-payment-intent/handlePaymentIntent";


export default async function Page({ searchParams }) {

   const { primaryServiceId, addonIds } = await searchParams;

  const addonIdArray = addonIds ? addonIds.split(",") : [];
  const serviceIds = [primaryServiceId, ...addonIdArray];

  const {
    clientSecret,
    paymentIntentId,
    services,
    deposit,
    remainder,
    total,
  } = await createPaymentIntent({ serviceIds });

  

  

  // console.log('⚠️⚠️',rawServices)

// FORCE serialization
// const serviceIds = JSON.parse(JSON.stringify(rawServices));


    // const totalPrice = services.reduce((acc, s)=> acc + s.price, 0 );

   


  



  return (
    <>
      <ServiceCheckout clientSecret={clientSecret} paymentIntentId={paymentIntentId}services={services} total={total} deposit={deposit} remainder={remainder} />
    </>
  );
}
