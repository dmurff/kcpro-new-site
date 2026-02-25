import "server-only";
import { supabaseServer as supabase } from "../../../../../lib/supabase/server";
import Stripe from "stripe";
import { NextResponse } from "next/server";
import createPaymentIntent from "../../../../../lib/services/service-payment-intent/handlePaymentIntent";
import { getServiceIdsByName } from "../../../../../lib/data/service";
export async function POST(req) {
  const body = await req.json();

  const { serviceNames } = body;

  console.log("💥💥", serviceNames);

  const serviceObs = await getServiceIdsByName(serviceNames);

  console.log("zzzzzzzzzzzzzzz", serviceObs);

  const services = serviceObs.map((s) => s.id);

  console.log("HHHHHHHHHHHHHHHHHHHHHHHHHHHH", services);
  // Idempotency key extraction
  const idempotencyKey = req.headers.get("idempotency-key");

  const response = await createPaymentIntent({ services, idempotencyKey });

  console.log(
    ">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>",
    response,
  );

  return NextResponse.json({
    clientSecret: response.clientSecret,
    paymentIntentId: response.paymentIntentId,
    serviceIds: response.serviceIds,
    total: response.total,
    remainder: response.remainder,
    deposit: response.deposit,
  });
}
