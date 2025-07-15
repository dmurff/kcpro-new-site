"use client";
import { useForm } from "react-hook-form";

const lableStyle = "block text-lg/6 font-medium text-gray-900";

const inputStyle =
  "block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 mb-8";

const AddHoopForm = () => {
  const {
    register,
    formState: { errors },
  } = useForm({
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
      <form className="w-150">
        <lable className={lableStyle}>Hoop name</lable>
        <input {...register("name")} className={inputStyle} />

        <lable className={lableStyle}>Brand</lable>
        <input {...register("brand")} className={inputStyle} />

        <lable className={lableStyle}>Model</lable>
        <input {...register("model")} className={inputStyle} />

        <lable className={lableStyle}>Price</lable>
        <input {...register("price")} className={inputStyle} />

        <lable className={lableStyle}>Install price</lable>
        <input {...register("install_price")} className={inputStyle} />

        <lable className={lableStyle}>Can Sell</lable>
        <input {...register("can_sell")} className={inputStyle} />

        <lable className={lableStyle}>Can Install Only</lable>
        <input {...register("can_install_only")} className={inputStyle} />

        <lable className={lableStyle}>Backboard size</lable>
        <input {...register("backboard_size")} className={inputStyle} />

        <lable className={lableStyle}>Hoop name</lable>
        <input {...register("name")} className={inputStyle} />

        <lable className={lableStyle}>Hoop name</lable>
        <input {...register("name")} className={inputStyle} />
      </form>
    </>
  );
};

export default AddHoopForm;
