import cloudinary from "/utils/cloudinary";
import { Readable } from "stream";

function streamUpload(buffer) {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      { resource_type: "image" },
      (err, result) => {
        if (err) return reject(err);
        resolve(result);
      }
    );
    Readable.from(buffer).pipe(stream);
  });
}

export async function imageUpload(files) {
  if (!files || files.length === 0) {
    return []; // just return an empty array
  }

  const imageUrls = [];

  for (const file of files) {
    const buffer = Buffer.from(await file.arrayBuffer());
    const result = await streamUpload(buffer);
    imageUrls.push(result.secure_url); // ✅ store only the Cloudinary URL
  }

  return imageUrls; // ✅ return array of URLs
}
