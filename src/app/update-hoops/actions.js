"use server";

import { supabaseServer as supabase } from "../../../lib/supabase/server";
import { imageUpload } from "../../../lib/cloudinary/upload";

console.log("💶💶💶💶💶💶💶💶");

export async function updateHoop(formData) {
  const hoopData = {};
  console.log("✅✅✅✅✅", formData);
  const id = formData.get("id");

  console.log("🚀🚀🚀🚀🚀🚀", id);

  for (const [key, value] of formData.entries()) {
    if (key !== "feature_image") {
      hoopData[key] = value;
    }
  }

  const feature_image = formData.getAll("feature_image");

  console.log("💶💶💶", hoopData);

  await imageUpload(feature_image);

  const { data, error } = await supabase
    .from("hoops")
    .update(hoopData)
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    return { ok: false }, { error: error.message };
  }
  return { ok: true, data };
}
