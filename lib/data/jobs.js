import {supabaseServer as supabase } from '../supabase/server';

export async function getJobByPI (pi) {

    const {data , error } = await supabase.from('jobs').select('id','deposit_payment_intent_id').eq('deposit_payment_intent_id', pi).maybeSingle();

    if(error) console.log('pi is clean can make new job');

    return data;
}