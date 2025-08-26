"use client";

import { useState, useEffect } from "react";
import { createHoop } from "@/app/admin-dashboard/actions";
import { updateHoop } from "@/app/admin-dashboard/actions";

const labelStyle = "block text-lg/6 font-medium text-gray-900";
const inputStyle =
  "block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 mb-8";

export default function AddHoopForm({ initialValues = {}, mode, id = null }) {
  const [formValues, setFormValues] = useState(initialValues);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);

    // 1. Convert to object
    const submitted = Object.fromEntries(formData.entries());

    // --- 2. Grab file(s) ---
    const files = formData.getAll("feature_image");
    let secureUrls = [];

    if (files && files.length > 0) {
      for (const file of files) {
        if (file.size > 0) {
          const uploadData = new FormData();
          uploadData.append("file", file);
          uploadData.append(
            "upload_preset",
            `${process.env.NEXT_PUBLIC_CLOUDINARY_PRESET}`
          );

          const res = await fetch(
            `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/upload`,
            { method: "POST", body: uploadData }
          );
          const data = await res.json();
          secureUrls.push(data.secure_url);
        }
      }
    }

    // --- 3. Replace file field with Cloudinary URLs ---
    if (secureUrls.length > 0) {
      submitted.feature_image = secureUrls;
    }

    let updates = submitted;

    // If editing, only keep changed values
    let payload = submitted;
    if (mode === "edit") {
      payload = {};
      for (const key in submitted) {
        const newVal = submitted[key];
        const oldVal = initialValues[key] ?? "";

        // Skip unchanged
        if (String(newVal) === String(oldVal)) continue;

        if (key === "feature_image" && secureUrls.length > 0) {
          // Always include the uploaded images
          payload[key] = secureUrls;
          continue;
        } else {
          payload[key] = newVal;
        }
        // Skip empty values for required fields (don’t wipe DB!)
      }
    }

    console.log("💶💶", payload);

    // Call the right action
    if (mode === "edit") {
      await updateHoop(id, payload);
    } else {
      await createHoop(payload);
    }

    setLoading(false);
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-3/4">
      <input type="hidden" name="id" defaultValue={initialValues.id || ""} />

      <label htmlFor="name" className={labelStyle}>
        Hoop name
      </label>
      <input
        id="name"
        name="name"
        defaultValue={initialValues.name || ""}
        className={inputStyle}
      />

      <label htmlFor="brand" className={labelStyle}>
        Brand
      </label>
      <input
        id="brand"
        name="brand"
        defaultValue={initialValues.brand || ""}
        className={inputStyle}
      />

      <label htmlFor="model" className={labelStyle}>
        Model
      </label>
      <input
        id="model"
        name="model"
        defaultValue={initialValues.model || ""}
        className={inputStyle}
      />

      <label htmlFor="price" className={labelStyle}>
        Price
      </label>
      <input
        id="price"
        name="price"
        defaultValue={initialValues.price || ""}
        className={inputStyle}
      />

      <label htmlFor="install_price" className={labelStyle}>
        Install price
      </label>
      <input
        id="install_price"
        name="install_price"
        defaultValue={initialValues.install_price || ""}
        className={inputStyle}
      />

      <label htmlFor="backboard_size" className={labelStyle}>
        Backboard Size
      </label>
      <input
        id="backboard_size"
        name="backboard_size"
        defaultValue={initialValues.backboard_size || ""}
        className={inputStyle}
      />

      <label htmlFor="backboard_material" className={labelStyle}>
        Backboard Material
      </label>
      <input
        id="backboard_material"
        name="backboard_material"
        defaultValue={initialValues.backboard_material || ""}
        className={inputStyle}
      />

      <label htmlFor="post_size" className={labelStyle}>
        Post Size
      </label>
      <input
        id="post_size"
        name="post_size"
        defaultValue={initialValues.post_size || ""}
        className={inputStyle}
      />

      <label htmlFor="anchor_type" className={labelStyle}>
        Anchor Type
      </label>
      <input
        id="anchor_type"
        name="anchor_type"
        defaultValue={initialValues.anchor_type || ""}
        className={inputStyle}
      />

      <label htmlFor="adjustment_range" className={labelStyle}>
        Adjustment Range
      </label>
      <input
        id="adjustment_range"
        name="adjustment_range"
        defaultValue={initialValues.adjustment_range || ""}
        className={inputStyle}
      />

      {/* Booleans: unchecked boxes don't submit anything.
         Either handle defaults on the server OR include a hidden false field first. */}
      <input type="hidden" name="can_sell" value="false" />
      <label className={labelStyle}>
        <input
          type="checkbox"
          name="can_sell"
          defaultChecked={!!initialValues.can_sell}
          value="true"
          className="mr-2"
        />
        Can Sell
      </label>

      <input type="hidden" name="can_install_only" value="false" />
      <label className={labelStyle}>
        <input
          type="checkbox"
          name="can_install_only"
          defaultChecked={!!initialValues.can_install_only}
          value="true"
          className="mr-2"
        />
        Install Only
      </label>

      <input type="hidden" name="is_featured" value="false" />
      <label className={labelStyle}>
        <input
          type="checkbox"
          name="is_featured"
          defaultChecked={!!initialValues.is_featured}
          value="true"
          className="mr-2"
        />
        Is Featured
      </label>

      <label htmlFor="feature_image" className={labelStyle}>
        Images
      </label>
      <input
        id="feature_image"
        name="feature_image"
        type="file"
        accept="image/*"
        multiple
        className={inputStyle}
      />
      {/* Note: You can’t prefill files. To clear the file input on selection change, rely on the key remount. */}

      <label htmlFor="description" className={`mt-6 ${labelStyle}`}>
        Product Description
      </label>
      <textarea
        id="description"
        name="description"
        defaultValue={initialValues.description || ""}
        className={inputStyle}
      />

      <button
        type="submit"
        className="inline-flex rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Save
      </button>
    </form>
  );
}
