import { supabaseServer as supabase } from "./../supabase/server";

export async function fetchServices(id) {
  const { data, error } = await supabase
    .from("services")
    .select("id, name, description, price, is_active")
    .eq("id", id)
    .single();

  if (error) throw new Error(error.message);
  return data;
}
