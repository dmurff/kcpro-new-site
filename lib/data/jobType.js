import { supabaseServer as supabase } from "../supabase/server";

export default async function determineJobType(serviceIds) {
  if (!selectedServiceIds || selectedServiceIds.length === 0) {
    return "delivery"; // only a purchased hoop
  }
  const { data: services, error } = await supabase
    .from("services")
    .select("name")
    .in("id", serviceIds);

  console.log(services);
}
