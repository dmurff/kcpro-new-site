import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

console.log(
  "SERVICE ROLE KEY LENGTH:",
  process.env.SUPABASE_SERVICE_ROLE_KEY?.length
);

export default supabase;
