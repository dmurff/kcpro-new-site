"use client";
import { FormProvider, useForm } from "react-hook-form";
import { useEffect } from "react";

const labelStyle = "block text-lg/6 font-medium text-gray-900";

const inputStyle =
  "block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 mb-8";

const AddHoopForm = ({ onSubmit, children, initialValues }) => {
  const methods = useForm({
    defaultValues: {
      name: "",
      brand: "",
      model: "",
      price: "",
      install_price: "",
      backboard_size: "",
      backboard_material: "",
      post_size: "",
      anchor_type: "",
      adjustment_range: "",
      can_sell: false,
      can_install_only: false,
      is_featured: false,
      description: "",
      feature_image: "",
    },
  });

  useEffect(() => {
    if (initialValues) {
      methods.reset(initialValues);
    }
  }, [initialValues, methods]);

  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} className="max-w-3/4">
          <label htmlFor="name" className={labelStyle}>
            Hoop name
          </label>
          <input
            id="name"
            {...methods.register("name")}
            className={inputStyle}
          />

          <label htmlFor="brand" className={labelStyle}>
            Brand
          </label>
          <input
            id="brand"
            {...methods.register("brand")}
            className={inputStyle}
          />

          <label htmlFor="model" className={labelStyle}>
            Model
          </label>
          <input
            id="model"
            {...methods.register("model")}
            className={inputStyle}
          />

          <label htmlFor="price" className={labelStyle}>
            Price
          </label>
          <input
            id="price"
            {...methods.register("price")}
            className={inputStyle}
          />

          <label htmlFor="install_price" className={labelStyle}>
            Install price
          </label>
          <input
            id="install_price"
            {...methods.register("install_price")}
            className={inputStyle}
          />

          <label htmlFor="backboard_size" className={labelStyle}>
            Backboard Size
          </label>
          <input
            id="backboard_size"
            {...methods.register("backboard_size")}
            className={inputStyle}
          />

          <label htmlFor="backboard_material" className={labelStyle}>
            Backboard Material
          </label>
          <input
            id="backboard_material"
            {...methods.register("backboard_material")}
            className={inputStyle}
          />
          <label htmlFor="post_size" className={labelStyle}>
            Post Size
          </label>
          <input
            id="post_size"
            {...methods.register("post_size")}
            className={inputStyle}
          />
          <label htmlFor="anchor_type" className={labelStyle}>
            Anchor Type
          </label>
          <input
            id="anchor_type"
            {...methods.register("anchor_type")}
            className={inputStyle}
          />
          <label htmlFor="adjustment_range" className={labelStyle}>
            Adjustment Range
          </label>
          <input
            id="adjustment_range"
            {...methods.register("adjustment_range")}
            className={inputStyle}
          />

          {children}
          <label htmlFor="feature_image" className={labelStyle}>
            Images
          </label>
          <input
            className={inputStyle}
            type="file"
            accept="image/*"
            multiple
            {...methods.register("feature_image")}
          ></input>
          <label className={`mt-6 ${labelStyle}`} htmlFor="description">
            Product Description
          </label>
          <textarea
            className={inputStyle}
            id="description"
            type="text"
            {...methods.register("description")}
          ></textarea>
          <button
            type="submit"
            className="inline-flex rounded-md bg-indigo-600 px-3.5
            py-2.5 text-sm font-semibold text-white hover:bg-indigo-500
            focus-visible:outline-2 focus-visible:outline-offset-2
            focus-visible:outline-indigo-600"
          >
            {" "}
            Upload Hoop
          </button>
        </form>
      </FormProvider>
    </>
  );
};

export default AddHoopForm;
