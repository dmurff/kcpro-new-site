import 'server-only';

import {supabaseServer as supabase} from '../supabase/server';


export async function getServiceId(jobId) {

const {data, error} = await supabase.from('jobs-services'
).select('service_id').eq('job_Id', jobId).maybeSingle()

return data;
}