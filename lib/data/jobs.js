import {supabaseServer as supabase } from '../supabase/server';

export async function getJobByPI (pi) {
console.log(':::::::::::::::::::',pi.length)
    const {data , error } = await supabase.from('jobs').select('*').eq('deposit_payment_intent_id', pi)

    if(error) console.log('pi is clean can make new job');

console.log('Supabase Data:', data?.length);


    return data[0];
}