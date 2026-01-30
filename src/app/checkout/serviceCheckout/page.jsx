// throw new Error("PAGE.JSX IS EXECUTING");

export const dynamic = "force-dynamic";
import Stripe from "stripe";

import ServiceCheckout from "../../components/ServiceCheckout";
import { fetchSelectedServices } from "../../../../lib/data/service";
import createPaymentIntent from "../../../../lib/services/service-payment-intent/handlePaymentIntent";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function Page({ searchParams }) {
  //  const { primaryServiceId, addonIds } = await searchParams;
  // const  params  = await searchParams;
  const filters = await searchParams;

  const pi = filters.pi;
  const totalStr = filters.total;
  const depositStr = filters.deposit;
  const remainderStr = filters.remainder;

  const total = Number(totalStr);
  const deposit = Number(depositStr);
  const remainder = Number(remainderStr);

  const serviceIdsString = filters.serviceIds;

  const serviceIdsArr = serviceIdsString.split(",");

  console.log("🕰️🕰️", total);

  const paymentIntent = await stripe.paymentIntents.retrieve(pi);

  const clientSecret = paymentIntent.client_secret;

  // const addonIdArray = addonIds ? addonIds.split(",") : [];
  // const serviceIds = [primaryServiceId, ...addonIdArray];

  const services = await fetchSelectedServices(serviceIdsArr);

  // const {
  //   clientSecret,
  //   paymentIntentId,
  //   services,
  //   deposit,
  //   remainder,
  //   total,
  // } = await createPaymentIntent({ serviceIds });

  // console.log('⚠️⚠️',rawServices)

  // FORCE serialization
  // const serviceIds = JSON.parse(JSON.stringify(rawServices));

  // const totalPrice = services.reduce((acc, s)=> acc + s.price, 0 );

  return (
    <>
      <ServiceCheckout
        clientSecret={clientSecret}
        paymentIntentId={pi}
        services={services}
        total={total}
        deposit={deposit}
        remainder={remainder}
      />
    </>
  );
}
