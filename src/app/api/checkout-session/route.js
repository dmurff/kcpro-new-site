// api is safe so no need for server-only or use server

import createSupabaseServer from "../../../lib/supabase/server";
import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

import { NextResponse } from "next/server";
export async function POST(req) {
  const supabase = createSupabaseServer();
  try {
    const body = await req.json();

    console.log(body);

    const payload = {
      payment_intent_id: body.paymentIntentId,
      name: body.name,
      email: body.email,
      phone: body.phone,
      address: body.address,
      city: body.city,
      state: body.state,
      postal_code: body.postalCode,

      total_cents: body.totalCents,
      remainder_cents: body.remainderCents,
      deposit_cents: body.depositCents,

      hoop_id: body.hoopId,
      selected_service_ids: body.services,

      checkout_total: body.checkoutTotal,
    };

    const { data: dbSession, error } = await supabase
      .from("checkout_sessions")
      .upsert(payload, { onConflict: "payment_intent_id" })
      .select()
      .single();

    if (error) {
      console.error("❌ Error adding checkout_session:", error);
      throw new Error("Failed to save customer");
    }

    // So I run the metadata update logic here?
    const paymentIntent = await stripe.paymentIntents.retrieve(
      body.paymentIntentId
    );

    const newMetadata = {
      ...paymentIntent.metadata,

      email: body.email,
    };

    await stripe.paymentIntents.update(body.paymentIntentId, {
      metadata: {
        checkout_session_db_id: dbSession.id,

        ...newMetadata,
      },
      receipt_email: body.email,
    });

    return NextResponse.json(dbSession, { message: "success" });
  } catch (err) {
    console.error("🔥 Error:", err.message);
    return NextResponse.json({
      message: "Error creating checkout_session",
      status: 500,
    });
  }

  // const { error } = await supabase.insert(customerData);
}
