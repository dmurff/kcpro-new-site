import {supabaseServer as supabase} from "../supabase/server"
import NextResponse from 'next/server';
export async function fetchCheckoutSession(paymentIntentId) {
    const {data: checkoutSession, error } = await supabase.from('checkout_sessions').select('*').eq('payment_intent_id', paymentIntentId).single()


    if (error) throw new Error(error.message, "Couldn't fetch checkout session."

    )
    return checkoutSession;
}