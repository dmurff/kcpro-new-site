"use server";
// import stripe from "stripe/stripe-js"
import { fetchServices } from "../../data/hoops";

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default async function createPaymentIntent({ serviceId }) {
  const service = await fetchServices(serviceId);

  const total = service.price * 100;

  const fee = Math.min(total * 0.25, 200);

  const remainder = total - fee;

  console.log("💅💅💅💅💅💅💅💅✅✅✅✅✅✅✅✅", service.price);

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: fee,
      currency: "usd",
      automatic_payment_methods: {
        enabled: true,
      },
      metadata: {
        service_id: serviceId,
        service_slug: service.slug,
        remainder,
      },
    });

    return {
      clientSecret: paymentIntent.client_secret,
    };
  } catch (err) {
    return err.message;
  }
}
