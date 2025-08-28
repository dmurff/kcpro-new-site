import { supabaseServer as supabase } from "./../supabase/server";
import NextResponse from "next/server";

export async function fetchHoop(id) {
  const { data, error } = await supabase
    .from("hoops")
    .select("*")
    .eq("id", id)
    .single();

  if (error) throw new Error(error.message);

  return data;
}

export async function fetchImages(hoopId) {
  const { data, error } = await supabase
    .from("hoop_images")
    .select("id, url, order_index")
    .eq("hoop_id", hoopId)
    .order("order_index", { ascending: true });

  if (error) throw new Error(error.message);
  return data;
}
