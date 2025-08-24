export async function POST(req) {
  try {
    const formData = await req.formData();

    // basic fields
    const name = formData.get("name") || null;
    const brand = formData.get("brand") || null;
    const model = formData.get("model") || null;
    const price = formData.get("price") || null;
    const install_price = formData.get("install_price") || null;
    const backboard_size = formData.get("backboard_size") || null;
    const backboard_material = formData.get("backboard_material") || null;
    const post_size = formData.get("post_size") || null;
    const anchor_type = formData.get("anchor_type") || null;
    const adjustment_range = formData.get("adjustment_range") || null;

    const can_sell = formData.get("can_sell") === "true";
    const can_install_only = formData.get("can_install_only") === "true";
    const is_featured = formData.get("is_featured") === "true";

    // IMPORTANT: this is now a URL (from Cloudinary), not a File
    const feature_img = formData.get("feature_img") || null;

    // optional gallery (array of URLs)
    const gallery_json = formData.get("gallery_json");
    const gallery = gallery_json ? JSON.parse(gallery_json) : [];

    // TODO: replace with your actual DB write (Supabase/Prisma/etc)
    // Example (pseudo):
    // await db.hoops.insert({
    //   name, brand, model, price, install_price,
    //   backboard_size, backboard_material, post_size,
    //   anchor_type, adjustment_range,
    //   can_sell, can_install_only, is_featured,
    //   feature_img, gallery
    // });

    return Response.json({ success: true });
  } catch (e) {
    console.error(e);
    return Response.json({ success: false, error: e.message }, { status: 500 });
  }
}
