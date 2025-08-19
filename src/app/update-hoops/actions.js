"use server";

import { supabaseServer as supabase } from "../../../lib/supabase/server";
import { imageUpload } from "../../../lib/cloudinary/upload";

console.log("💶💶💶💶💶💶💶💶");

export async function updateHoop(formData) {
  const raw = Object.fromEntries(formData.entries());

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
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { status: 500 }
    );
  }
  return new Response(JSON.stringify({ success: true, data }), {
    status: 200,
  });
}
