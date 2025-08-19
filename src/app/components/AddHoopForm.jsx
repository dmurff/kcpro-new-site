"use client";

import { useState, useEffect } from "react";

const labelStyle = "block text-lg/6 font-medium text-gray-900";
const inputStyle =
  "block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 mb-8";

export default function AddHoopForm({ initialValues = {}, action }) {
  const [formValues, setFormValues] = useState(initialValues);

  return (
    <form action={action} className="max-w-3/4">
      <input type="hidden" name="id" defaultValue={formValues.id || ""} />

      <label htmlFor="name" className={labelStyle}>
        Hoop name
      </label>
      <input
        id="name"
        name="name"
        defaultValue={formValues.name || ""}
        className={inputStyle}
      />

      <label htmlFor="brand" className={labelStyle}>
        Brand
      </label>
      <input
        id="brand"
        name="brand"
        defaultValue={formValues.brand || ""}
        className={inputStyle}
      />

      <label htmlFor="model" className={labelStyle}>
        Model
      </label>
      <input
        id="model"
        name="model"
        defaultValue={formValues.model || ""}
        className={inputStyle}
      />

      <label htmlFor="price" className={labelStyle}>
        Price
      </label>
      <input
        id="price"
        name="price"
        defaultValue={formValues.price || ""}
        className={inputStyle}
      />

      <label htmlFor="install_price" className={labelStyle}>
        Install price
      </label>
      <input
        id="install_price"
        name="install_price"
        defaultValue={formValues.install_price || ""}
        className={inputStyle}
      />

      <label htmlFor="backboard_size" className={labelStyle}>
        Backboard Size
      </label>
      <input
        id="backboard_size"
        name="backboard_size"
        defaultValue={formValues.backboard_size || ""}
        className={inputStyle}
      />

      <label htmlFor="backboard_material" className={labelStyle}>
        Backboard Material
      </label>
      <input
        id="backboard_material"
        name="backboard_material"
        defaultValue={formValues.backboard_material || ""}
        className={inputStyle}
      />

      <label htmlFor="post_size" className={labelStyle}>
        Post Size
      </label>
      <input
        id="post_size"
        name="post_size"
        defaultValue={formValues.post_size || ""}
        className={inputStyle}
      />

      <label htmlFor="anchor_type" className={labelStyle}>
        Anchor Type
      </label>
      <input
        id="anchor_type"
        name="anchor_type"
        defaultValue={formValues.anchor_type || ""}
        className={inputStyle}
      />

      <label htmlFor="adjustment_range" className={labelStyle}>
        Adjustment Range
      </label>
      <input
        id="adjustment_range"
        name="adjustment_range"
        defaultValue={formValues.adjustment_range || ""}
        className={inputStyle}
      />

      {/* Booleans: unchecked boxes don't submit anything.
         Either handle defaults on the server OR include a hidden false field first. */}
      <input type="hidden" name="can_sell" value="false" />
      <label className={labelStyle}>
        <input
          type="checkbox"
          name="can_sell"
          defaultChecked={!!formValues.can_sell}
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
          defaultChecked={!!formValues.can_install_only}
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
          defaultChecked={!!formValues.is_featured}
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
        defaultValue={formValues.description || ""}
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
