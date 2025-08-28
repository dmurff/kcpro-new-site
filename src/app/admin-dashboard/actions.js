"use server";

import { createClient } from "@supabase/supabase-js";

function supabaseServer() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY // server-only
  );
}

export async function createHoop(data) {
  const sb = supabaseServer();

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

  return { success: true, inserted };
}

export async function updateHoop(id, data) {
  const sb = supabaseServer();

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

  const { error } = await sb.from("hoops").update(row).eq("id", id);
  if (error) throw new Error(error.message);

  return { success: true };
}

export async function addHoopGallery(hoopId, urls) {
  const sb = supabaseServer();

  const { data, error } = await sb.from("hoop_images").insert(
    urls.map((url, i) => ({
      hoop_id: hoopId,
      image_url: url,
      order_index: i,
    }))
  );

  if (error) throw new Error(error.message);
  return data;
}
