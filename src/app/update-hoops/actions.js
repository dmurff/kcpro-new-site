"use server";
import { createClient } from "@supabase/supabase-js";

export async function saveHoop(formData) {
  const base = {
    id: formData.get("id") || null,
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
    description: formData.get("description") || null,
  };

  // Only include feature_img if the client actually sent it
  if (formData.has("feature_img")) {
    base.feature_img = formData.get("feature_img");
  }

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY,
  );

  if (base.id) {
    const { error } = await supabase
      .from("hoops")
      .update(base)
      .eq("id", base.id);
    if (error) throw new Error(error.message);
  } else {
    const { error } = await supabase.from("hoops").insert(base);
    if (error) throw new Error(error.message);
  }

  return { success: true };
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
