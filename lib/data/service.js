import "server-only";

import createSupabaseServer from "./../supabase/server";

export async function fetchHoopBuyServices() {
  const supabase = createSupabaseServer();
  const { data, error } = await supabase
    .from("services")
    .select("id, name, description, price, is_active")
    .eq("is_active", true)
    .order("created_at", { ascending: true });

  // .single();

  if (error) throw new Error(error.message);

  return data;
}

export async function fetchAllServices() {
  const supabase = createSupabaseServer();
  const { data, error } = await supabase
    .from("services")
    .select("*")
    .order("created_at", { ascending: true });

  if (error) throw new Error(error.message);
  return data;
}

export async function fetchServiceBySlug(slug) {
  const supabase = createSupabaseServer();
  if (!slug || typeof slug !== "string") {
    return null;
  }

  const { data, error } = await supabase
    .from("services")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error) throw new Error(error.message);

  return data;
}

export async function fetchSelectedServices(serviceIds) {
  const supabase = createSupabaseServer();
  const { data, error } = await supabase
    .from("services")
    .select("*")
    .in("id", serviceIds)
    .order("created_at", { ascending: true });

  if (error) throw new Error(error.message);
  return data;
}
