// import Checkout from "@/app/components/Checkout";
// import { Elements } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";
import { fetchHoop } from "../../../lib/data/hoops";
import { fetchServices } from "../../../lib/data/hoops";
import CheckoutWrapper from "@/app/components/CheckoutWrapper";
import { getPIMetadata } from "../../../lib/payment-intent/handlePI";
import { getPIObj } from "../../../lib/payment-intent/handlePI";

export default async function CheckoutPage({ searchParams }) {
  // const { id, type } = searchParams;

  const params = await searchParams;

  const { payment_intent_client_secret, pi } = params;

  const orderData = await getPIMetadata(pi);

  const { hoopId, remainder, services, deposit_amount } = orderData;

  console.log("ORDERDATA222222", orderData);

  const depositAmount = (Number(deposit_amount) / 100).toFixed(2);

  const parsedServices = JSON.parse(services);

  const selectedServices = await Promise.all(
    parsedServices.map((s) => fetchServices(s)).flat(),
  );

  // fetch hoop to render order details
  const hoop = await fetchHoop(hoopId);
  const selectedServiceIds = selectedServices.map((s) => s.id);

  const clientSecret = payment_intent_client_secret;

  return (
    <div>
      <CheckoutWrapper
        services={selectedServiceIds}
        remainder={remainder}
        hoop={hoop}
        depositAmount={depositAmount}
        clientSecret={clientSecret}
        paymentIntentId={pi}
      ></CheckoutWrapper>
    </div>
  );
}
