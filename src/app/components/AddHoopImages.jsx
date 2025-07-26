import { FormProvider, useForm } from "react-hook-form";

const labelStyle = "block text-lg/6 font-medium text-gray-900";

const inputStyle =
  "block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 mb-8";

const AddHoopImages = () => {
  const methods = useForm({
    defaultValues: {
      hoop_images: "",
    },
  });

  return (
    <div className="w-full bg-black text-white">
      <h2>Image Form</h2>
      <label htmlFor="product_images" className={labelStyle}>
        Images
      </label>
      <input
        className={inputStyle}
        type="file"
        accept="image/*"
        multiple
        {...methods.register("hoop_images")}
      ></input>
    </div>
  );
};

export default AddHoopImages;
