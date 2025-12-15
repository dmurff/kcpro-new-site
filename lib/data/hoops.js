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

// export async function fetchImages(hoopId) {
//   const { data, error } = await supabase
//     .from("hoops")
//     .select("id, feature_image")
//     .eq("id", hoopId);
//   // .order("order_index", { ascending: true });

//   if (error) throw new Error(error.message);
//   console.log("HOOP IMAGE", data);
//   return data;
// }

// Original fetch Image
export async function fetchImages(hoopId) {
  const { data, error } = await supabase
    .from("hoop_images")
    .select("id, image_url, order_index")
    .eq("hoop_id", hoopId)
    .order("order_index", { ascending: true });

  if (error) throw new Error(error.message);
  return data;
}

// move to service.js
export async function fetchServices(id) {
  const { data, error } = await supabase
    .from("services")
    .select("id, name, description, price, is_active")
    .eq("id", id)
    .single();
  // .order("created_at", { ascending: true });

  if (error) throw new Error(error.message);
  return data;
}

export async function fetchAllHoops() {
  const { data, error } = await supabase
    .from("hoops")
    .select("*")
    .order("price", { ascending: true });
  // .eq("model", model);

  if (error) {
    throw new Error(error.message);
  }

  console.log("ALL HOOPS FETCH:", data, error);

  return data ?? [];
}

export async function fetchFeaturedHoops() {
  const { data, error } = await supabase
    .from("hoops")

    .select(
      "id, name, brand, model, price, feature_image, backboard_size, anchor_type, post_size, adjustment_range, install_price"
    )
    .eq("is_featured", true)
    .order("price", { ascending: true });

  if (error) throw new Error(error.message);

  return data;
}
