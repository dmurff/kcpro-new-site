
// import stripe from "stripe/stripe-js"
// import { fetchServices } from "../../data/hoops";
import {fetchSelectedServices} from "../../data/service"


const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default async function createPaymentIntent({ serviceIds }) {
  // const service = await fetchServices(serviceIds);
  const services = await fetchSelectedServices(serviceIds)

  console.log('🏀🔨', services)

  const total = services.reduce((acc, s)=> acc + s.price, 0)

  

  const deposit = Math.min(total * 0.25, 200);

  const remainder = total - deposit;

  console.log("💅💅💅💅💅💅💅💅✅✅✅✅✅✅✅✅", total);

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(deposit * 100),
      currency: "usd",
      automatic_payment_methods: {
        enabled: true,
      },
      metadata: {
        service_ids: services.map(s => s.id).join(','),
        service_slugs: services.map(s => s.slug).join(","),
        remainder_dollars: remainder.toFixed(2),
        
      },
    });

    return {
      clientSecret: paymentIntent.client_secret,
        paymentIntentId: paymentIntent.id,
        services,
        total,
        deposit,
        remainder,
        total,

    };
  } catch (err) {
    return err.message;
  }
}
