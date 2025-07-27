"use client";

import { useForm } from "react-hook-form";

const labelStyle = "block text-lg/6 font-medium text-gray-900";

const inputStyle =
  "block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 mb-8";

const AddHoopImages = ({ id }) => {
  const hoopPhotoLoader = async () => {
    console.log(id);
  };

  const { register, handleSubmit } = useForm();
  return (
    <div className="w-full flex justify-center m-8">
      <form onSubmit={handleSubmit(hoopPhotoLoader)}>
        <label htmlFor="feature_image" className={labelStyle}>
          Add Hoop images to database
        </label>
        <input
          className={inputStyle}
          type="file"
          accept="image/*"
          multiple
          {...register("image_url")}
        ></input>
        <button
          type="submit"
          className="inline-flex rounded-md bg-indigo-600 px-3.5
            py-2.5 text-sm font-semibold text-white hover:bg-indigo-500
            focus-visible:outline-2 focus-visible:outline-offset-2
            focus-visible:outline-indigo-600"
        >
          {" "}
          Upload Photos
        </button>
      </form>
    </div>
  );
};

export default AddHoopImages;
