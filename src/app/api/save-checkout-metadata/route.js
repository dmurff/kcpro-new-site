import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
  const body = await req.json();
  const { paymentIntentId, name, email, phone, address,city,
  state,
  postalCode, } = body;

  const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);

  const newMetadata = {
    ...paymentIntent.metadata,
    name,
    email,
    phone,
    address,
    
  };

  if (address) newMetadata.address = address;
if (city) newMetadata.city = city;
if (state) newMetadata.state = state;
if (postalCode) newMetadata.postalCode = postalCode;


  await stripe.paymentIntents.update(paymentIntentId, {
    metadata: newMetadata,
    receipt_email: email,
  });

  const orderData = await stripe.paymentIntents.retrieve(paymentIntentId);
  console.log("New OrderData:>>>>>>>", orderData);

  return Response.json({ success: true });
}
