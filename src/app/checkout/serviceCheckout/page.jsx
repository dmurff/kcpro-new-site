// throw new Error("PAGE.JSX IS EXECUTING");

export const dynamic = "force-dynamic";
import Stripe from "stripe";
import {redirect} from "next/navigation"

import {getJobByPI} from '../../../../lib/data/jobs.js';
import ServiceCheckout from "../../components/ServiceCheckout";
import { fetchSelectedServices } from "../../../../lib/data/service";


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

  // Here I need to check the database for the pi id and if it exists redirect to the payment succeeded message

  console.log("🕰️🕰️", total);

  const paymentIntent = await stripe.paymentIntents.retrieve(pi);

  const jobExists = await getJobByPI(pi);

  if (jobExists?.deposit_payment_intent_id === pi) 


  if(!jobExists) return ;

  if(jobExists){redirect("/checkout/serviceCheckout/success"); 

  }

  // Check if this has already been paid
if (paymentIntent.status === "succeeded") {
   // Instead of showing the form, redirect them to success 
   // or show a "This order is already processed" message.
   redirect("/checkout/success"); 
}

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
