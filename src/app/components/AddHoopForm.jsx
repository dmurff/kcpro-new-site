"use client";
import { FormProvider, useForm } from "react-hook-form";

const labelStyle = "block text-lg/6 font-medium text-gray-900";

const inputStyle =
  "block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 mb-8";

const AddHoopForm = ({ onSubmit, children }) => {
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
      adjustment_range: "",
      anchor_type: "",
      description: "",
    },
  });

  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} className="w-150">
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

          {children}
        </form>
      </FormProvider>
    </>
  );
};

export default AddHoopForm;
