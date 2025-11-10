import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
  const body = await req.json();
  const { paymentIntentId, name, email, phone, address } = body;

  const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);

  const newMetadata = {
    ...paymentIntent.metadata,
    name,
    email,
    phone,
    address,
  };

  await stripe.paymentIntents.update(paymentIntentId, {
    metadata: newMetadata,
  });

  const orderData = await stripe.paymentIntents.retrieve(paymentIntentId);
  console.log("New OrderData:>>>>>>>", orderData);

  return Response.json({ success: true });
}
