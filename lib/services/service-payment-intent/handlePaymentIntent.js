import "server-only";
// import stripe from "stripe/stripe-js"
// import { fetchServices } from "../../data/hoops";
import { fetchSelectedServices } from "../../data/service";

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default async function createPaymentIntent({ bundledIds, idempotencyKey }) {
  // const service = await fetchServices(bundledIds);
  console.log("🐦", bundledIds, idempotencyKey);
  const serviceOb = await fetchSelectedServices(bundledIds);
  console.log("✅✅", serviceOb);

  const servicesArr = serviceOb.map((s) => s.id);

  console.log("💅💅🔥", servicesArr);

  const serviceIds = servicesArr.join(",");

  const total = serviceOb.reduce((acc, s) => acc + s.price, 0);

  const deposit = Math.min(total * 0.25, 200);

  const remainder = total - deposit;

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(deposit * 100),
      currency: "usd",
      automatic_payment_methods: {
        enabled: true,
      },
      metadata: {
        service_ids: serviceOb.map((s) => s.id).join(","),
        service_slugs: serviceOb.map((s) => s.slug).join(","),
        remainder_dollars: remainder.toFixed(2),
      },
      
    }, {idempotencyKey});

    return {
      paymentIntentId: paymentIntent.id,
      serviceIds,
      total,
      deposit,
      remainder,
    };
  } catch (err) {
    return console.error("CREATE PAYMEMT INTENT FAILED:", err);
  }
}
