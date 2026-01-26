import { NextResponse } from "next/server";
import Stripe from "stripe";
import {supabaseServer as supabase} from "../../../../../lib/supabase/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {

  let serviceDiscount = 0;

  const body = await req.json();
  const hoopId = body.hoop;
  const selectedServices = body.services;


  // check if hoop exists in db 

  const { data, error } = await supabase
    .from("hoops")
    .select("*")
    .eq("id", hoopId)
    .single();

  if (error) {
    console.error("❌ Supabase Error:", error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

// add a hoop purchase discount if the hoop id returns a hoop from db
 



  // Idempotency key extraction
  const idempotencyKey = req.headers.get("idempotency-key");

  const { data: services, error: serviceError } = await supabase
    .from("services")
    .select("*")
    .in("name", selectedServices);

  // Filter out nulls if any query failed


  // check if a hoop is being purchased and add discounts to applicable selected services 

  if (data && services)
 {
     services.map(s => {
      if(s.name.includes('hoop_assembly')) {
        serviceDiscount += 100;
      }

      if(s.name.includes('hoop_concrete')){
     serviceDiscount += 100;
      }

      if(s.name.includes('installation')){
        serviceDiscount +=200;
      }
      
     }
    
    )
  }

  // Add up the service prices

  let serviceTotal = services.reduce(
    (sum, service) => sum + Number(service.price),
    0
  );

  // subtract discount
  serviceTotal -= Number(serviceDiscount)

  // if(serviceDiscount) {
  //   serviceTotal = Math.round(Number(serviceTotal - serviceDiscount))
  // };

  // service deposit at 25%
  const deposit = Number(Math.min(serviceTotal * 0.25, 200)) ;


 

  // const serviceAmount = Math.round(Number(serviceTotal * 0.25 * 100));

  
  
  // ✅ 2. Convert hoop price to cents (assuming it's in dollars)
  const  price = Number(data.price) ;

  //  if (serviceDiscount) {
  // price = Math.round(Number(price - serviceDiscount))
  // }

  if (isNaN(price) || price <= 0) {
    return NextResponse.json({ error: "Invalid price" }, { status: 400 });
  }

  const sale = Number(price + deposit);

  const finalSale = sale * 100
  // const remainder = serviceTotal * 100 - deposit;
  console.log('💶💶💶💶💶💶💶💶💶💶💶💶💶💶💶💶', serviceTotal, deposit)
  let remainder = Number(serviceTotal - deposit);
remainder *= 100;
  
const depositCents = Math.round(Number(deposit * 100))
console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>:::::', finalSale, remainder, deposit)
  
  try {
    const paymentIntent = await stripe.paymentIntents.create(
      {
        amount: finalSale,
        currency: "usd",
        payment_method_types: ["card"],
        metadata: {
          hoopId,
          remainder,
          services: JSON.stringify(services.map((s) => s.id)),
          amount_paid: depositCents,
          deposit_amount: depositCents,
        },
      },
      { idempotencyKey }
    );

    return NextResponse.json({
      clientSecret: paymentIntent.client_secret,
      paymentIntentId: paymentIntent.id,
    });
  } catch (err) {
    console.error("❌ Stripe Error:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
