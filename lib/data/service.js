import "server-only";

import { supabaseServer as supabase } from "./../supabase/server.js";

export async function fetchHoopBuyServices() {
  const { data, error } = await supabase
    .from("services")
    .select("id, name, description, price, is_active, display_name")
    .eq("is_active", true)
    .order("created_at", { ascending: true });

  // .single();

  if (error) throw new Error(error.message);

  return data;
}

export async function fetchAllServices() {
  const { data, error } = await supabase
    .from("services")
    .select("*")
    .order("created_at", { ascending: true });

  if (error) throw new Error(error.message);
  return data;
}

export async function fetchServiceBySlug(slug) {
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
  const { data, error } = await supabase
    .from("services")
    .select("*")
    .in("id", serviceIds)
    .order("created_at", { ascending: true });

  if (error) throw new Error(error.message);
  return data;
}
