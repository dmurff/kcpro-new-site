"use server";

import { createClient } from "@supabase/supabase-js";

function supabaseServer() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY // server-only
  );
}

export async function createHoop(formData) {
  const sb = supabaseServer();

  const row = {
    name: formData.get("name") || null,
    brand: formData.get("brand") || null,
    model: formData.get("model") || null,
    price: formData.get("price") || null,
    install_price: formData.get("install_price") || null,
    backboard_size: formData.get("backboard_size") || null,
    backboard_material: formData.get("backboard_material") || null,
    post_size: formData.get("post_size") || null,
    anchor_type: formData.get("anchor_type") || null,
    adjustment_range: formData.get("adjustment_range") || null,
    can_sell: formData.get("can_sell") === "true",
    can_install_only: formData.get("can_install_only") === "true",
    is_featured: formData.get("is_featured") === "true",
    feature_img: formData.get("feature_img") || null, // Cloudinary URL
    description: formData.get("description") || null,
  };

  const { error } = await sb.from("hoops").insert(row);
  if (error) throw new Error(error.message);

  return { success: true };
}
