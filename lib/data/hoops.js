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
