import { NextResponse } from "next/server";
import createSupabaseServer from "../../../lib/supabase/server.js";
import cloudinary from "../../../../utils/cloudinary";
import { Readable } from "stream";

function streamUpload(buffer) {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      {
        resource_type: "image",
      },
      (err, result) => {
        if (err) return reject(err);
        resolve(result);
      }
    );

    Readable.from(buffer).pipe(stream);
  });
}

export async function POST(req) {
  const formData = await req.formData();

  if (!formData) {
    return NextResponse(
      { success: false, error: "No data provided" },
      { status: 400 }
    );
  }
  console.log("📦 Incoming data:", formData);

  const images = formData.getAll("feature_image");

  const imageUrls = [];

  for (const file of images) {
    const buffer = Buffer.from(await file.arrayBuffer());
    const result = await streamUpload(buffer);

    imageUrls.push(result.secure_url);
  }

  const hoopData = {
    name: formData.get("name"),
    brand: formData.get("brand"),
    model: formData.get("model"),
    price: parseFloat(formData.get("price")),
    install_price: parseFloat(formData.get("install_price")),
    backboard_size: formData.get("backboard_size"),
    backboard_material: formData.get("backboard_material"),
    post_size: formData.get("post_size"),
    anchor_type: formData.get("anchor_type"),
    adjustment_range: formData.get("adjustment_range"),
    can_sell: !!formData.get("can_sell"),
    can_install_only: !!formData.get("can_install_only"),
    is_featured: !!formData.get("is_featured"),
    description: formData.get("description"),
    feature_image: imageUrls,
  };

  const { error } = await supabase.from("hoops").insert(hoopData);

  if (error) {
    return NextResponse.json(
      { success: false, error: error.message || "Insert failed" },
      { status: 500 }
    );
  }

  console.log("Hoop inserted");
  return NextResponse.json({ success: true });
}

// get data

export async function GET(req) {
  const supabase = createSupabaseServer();
  console.log(req);
  const { data, error } = await supabase.from("hoops").select("*");

  if (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true, data });
}
