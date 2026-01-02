import Stripe from "stripe";
import { NextResponse } from "next/server";
import { createCustomerAndJob } from "../../../../../lib/db/createCustomerAndJob";
import {fetchCheckoutSession} from "../../../../../lib/data/checkoutSessions";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

export async function POST(req) {
  // 1. Read raw body EXACTLY once
  const rawBody = await req.text();

  // 2. Read Stripe signature from headers
  const signature = req.headers.get("stripe-signature");

  let event;

  // 3. Verify + construct Stripe event
  try {
    event = stripe.webhooks.constructEvent(
      rawBody,
      signature,
      endpointSecret
    );
  } catch (err) {
    return new NextResponse("Invalid signature", { status: 400 });
  }

  // 4. Route by event type
  switch (event.type) {
    case "payment_intent.succeeded": {
      const paymentIntent = event.data.object;
      console.log('✅ ', paymentIntent);
      // So here is where I call the business DB logic

      const paymentIntentId = paymentIntent.id
        
console.log(paymentIntentId,'❤️🤣🤣🤣🤣🤣')


      // handle success
      const checkoutData = await fetchCheckoutSession(paymentIntentId)

      console.log(checkoutData, '🏀💶💶🏀')

      // if(!checkoutData) return NextResponse.json({success: false});

      await createCustomerAndJob(checkoutData)
      break;
    }

    case "payment_intent.payment_failed": {
      const paymentIntent = event.data.object;
      // handle failure
      break;
    }

    default:
      // ignore what you don’t care about
      break;
  }



  // 5. Always acknowledge receipt
  return NextResponse.json({ received: true });
}
