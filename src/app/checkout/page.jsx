// import Checkout from "@/app/components/Checkout";
// import { Elements } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";
import { fetchHoop } from "../../../lib/data/hoops";
import { fetchServices } from "../../../lib/data/service";
import CheckoutWrapper from "@/app/components/CheckoutWrapper";
import { getPIMetadata } from "../../../lib/payment-intent/handlePI";

export default async function CheckoutPage({ searchParams }) {
  // const { id, type } = searchParams;

  const params = await searchParams;
  console.log("client:", params);
  const { payment_intent_client_secret, pi } = params;

  const orderData = await getPIMetadata(pi);
  console.log("💳💥💳", orderData);

  const { hoopId, remainder, services, deposit_amount } = orderData;

  const depositAmount = (Number(deposit_amount) / 100).toFixed(2);

  console.log("📈📈📈📈📈📈📈📈", services);

  const parsedServices = JSON.parse(services);

  console.log("🚀🚀🚀🚀🚀", parsedServices);

  const selectedServices = await Promise.all(
    parsedServices.map((s) => fetchServices(s)).flat()
  );
  console.log("🚀🚀🚀🚀🚀", selectedServices);

  // fetch hoop to render order details
  const hoop = await fetchHoop(hoopId);

  console.log("💶💶", payment_intent_client_secret);

  const clientSecret = payment_intent_client_secret;

  return (
    <div>
      <CheckoutWrapper
        services={selectedServices}
        remainder={remainder}
        hoop={hoop}
        depositAmount={depositAmount}
        clientSecret={clientSecret}
        paymentIntentId={pi}
      ></CheckoutWrapper>
    </div>
  );
}
