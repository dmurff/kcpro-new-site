import 'server-only';

import {supabaseServer as supabase} from '../supabase/server';

export async function getCustomerById(id) {


    const {data , error} = await supabase.from('customers').select('*').eq('id', id).maybeSingle();

    return data;
}