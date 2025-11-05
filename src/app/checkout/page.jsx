import Checkout from "@/app/components/Checkout";
// import { Elements } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";
import { fetchHoop } from "../../../lib/data/hoops";
import CheckoutWrapper from "@/app/components/CheckoutWrapper";

export default async function CheckoutPage({ searchParams }) {
  // const { id, type } = searchParams;

  const params = await searchParams;
  const { secret, pi } = params;

  console.log("💶💶😂😂🤣🤣🤣", secret, pi);

  // const hoop = await fetchHoop(id);

  // console.log(hoop);

  return (
    <div>
      {/* <Elements stripe={stripePromise}>
        <Checkout id={id} type={type} onCheckout={handleStartCheckout} />
      </Elements> */}
      <CheckoutWrapper clientSecret={secret} pi={pi}></CheckoutWrapper>
    </div>
  );
}
