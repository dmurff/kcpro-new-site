// import supabase from "../../../../utils/supabaseServer";

import { NextResponse } from "next/server";
export async function POST(req){

    try{
    const body = await req.json();

    console.log(body)
    const checkoutData = body

    console.log('❤️❤️❤️🔨🔨🔨',checkoutData);

//      const {data, error } = await supabase.from('checkout_sessions').insert(checkoutData).select().single()


//     if (error) {
//     console.error("❌ Error adding checkout_session:", error);
//     throw new Error("Failed to save customer");
//   }

    return NextResponse.json({ message: "checkoutSession", checkoutData }) }

    catch(err) {
        return NextResponse.json(err.message)
    }

    // const { error } = await supabase.insert(customerData);
  } 
