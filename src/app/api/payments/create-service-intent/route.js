import "server-only";
import { supabaseServer as supabase } from "../../../../../lib/supabase/server";
import Stripe from "stripe";
import { NextResponse } from "next/server";
import createPaymentIntent from "../../../../../lib/services/service-payment-intent/handlePaymentIntent";

export async function POST(req) {
  const body = await req.json();

  const { bundledIds } = body;
  console.log("💥💥", bundledIds);

  // Idempotency key extraction
  const idempotencyKey = req.headers.get("idempotency-key");


  const response = await createPaymentIntent({ bundledIds, idempotencyKey });

  console.log(
    ">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>",
    response
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
