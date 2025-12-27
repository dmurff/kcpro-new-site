"use server";

import { supabaseServer as supabase } from "../../../../lib/supabase/server";


import { NextResponse } from "next/server";
export async function POST(req){

    try{
    const body = await req.json();

    console.log(body)

    const payload = {
        payment_intent_id: body.paymentIntentId,
        name: body.name,
        email: body.email,
        phone: body.phone,
        address: body.address,
        city: body.city,
        state: body.state,
        postal_code: body.postalCode,
        remainder_cents: body.remainder_cents,
        total_cents: body.totalCents,
        deposit_cents: body.deposit,
        hoop_id: body.hoopId,
        selected_service_ids: body.services,

    }


     const {data, error } = await supabase.from('checkout_sessions').insert(payload).select().single()



    if (error) {
    console.error("❌ Error adding checkout_session:", error);
    throw new Error("Failed to save customer");

   

  }


    return NextResponse.json(data, {message: 'success', })  }

    catch(err) {
        // return NextResponse.json(err.message)
        return NextResponse.json({message: 'Error creating checkout_session', status: 500}) 
    }

    // const { error } = await supabase.insert(customerData);
  } 
