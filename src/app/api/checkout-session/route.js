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

        total_cents: body.totalCents,
        remainder_cents: body.remainderCents,
        deposit_cents: body.depositCents,

        hoop_id: body.hoopId,
        selected_service_ids: body.services,
        
        checkout_total: body.checkoutTotal,

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
