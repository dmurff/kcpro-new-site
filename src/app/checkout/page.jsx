// import Checkout from "@/app/components/Checkout";
// import { Elements } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";
import { fetchHoop } from "../../../lib/data/hoops";
import CheckoutWrapper from "@/app/components/CheckoutWrapper";

export default async function CheckoutPage({ searchParams }) {
  // const { id, type } = searchParams;

  const params = await searchParams;
  console.log("client:", params);
  const { payment_intent_client_secret, pi } = params;

  console.log("💶💶", payment_intent_client_secret);

  const clientSecret = payment_intent_client_secret;

  return (
    <div>
      <CheckoutWrapper
        clientSecret={clientSecret}
        paymentIntentId={pi}
      ></CheckoutWrapper>
    </div>
  );
}
