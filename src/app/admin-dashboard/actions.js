"use server";

import { supabaseServer as supabase } from "../../lib/supabase/server.js";

export async function createHoop(data) {
  const sb = createSupabaseServer();

  const row = {
    name: data.name,
    brand: data.brand,
    model: data.model,
    price: data.price ? Number(data.price) : undefined,
    install_price: data.install_price ? Number(data.install_price) : undefined,
    backboard_size: data.backboard_size,
    backboard_material: data.backboard_material,
    post_size: data.post_size,
    anchor_type: data.anchor_type,
    adjustment_range: data.adjustment_range,
    can_sell: data.can_sell === "true" || data.can_sell === true,
    can_install_only:
      data.can_install_only === "true" || data.can_install_only === true,
    is_featured: data.is_featured === "true" || data.is_featured === true,
    feature_image: [].concat(data.feature_image || []),
    description: data.description,
  };

  const { data: inserted, error } = await sb
    .from("hoops")
    .insert(row)
    .select()
    .single();
  if (error) throw new Error(error.message);

  return inserted;
}

export async function updateHoop(id, data) {
  console.log(id, data);

  const row = {
    name: data.name,
    brand: data.brand,
    model: data.model,
    price: data.price ? Number(data.price) : undefined,
    install_price: data.install_price ? Number(data.install_price) : undefined,
    backboard_size: data.backboard_size,
    backboard_material: data.backboard_material,
    post_size: data.post_size,
    anchor_type: data.anchor_type,
    adjustment_range: data.adjustment_range,
    can_sell: data.can_sell === "true" || data.can_sell === true,
    can_install_only:
      data.can_install_only === "true" || data.can_install_only === true,
    is_featured: data.is_featured === "true" || data.is_featured === true,
    feature_image: [].concat(data.feature_image || []),
    description: data.description,
  };

  const { error } = await supabase.from("hoops").update(row).eq("id", id);
  if (error) throw new Error(error.message);

  return { success: true };
}

export async function addHoopGallery(hoopId, urls) {
  const sb = createSupabaseServer();

  const { data, error } = await sb.from("hoop_images").insert(
    urls.map(({ url, order_index }) => ({
      hoop_id: hoopId,
      image_url: url,
      order_index,
    }))
  );

  if (error) throw new Error(error.message);
  return data;
}
