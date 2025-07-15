import { useForm } from "react-hook-from";

const lableStyle = "block text-sm/6 font-medium text-gray-900";

const inputStyle =
  "block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6";

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
      <form>
        <lable className={lableStyle}>Hoop name</lable>
        <input {...register("name")} className={inputStyle} />
        <input {...register("brand")} />
        <input {...register("model")} />
        <input {...register("price")} />
        <input {...register("installPrice")} />
        <input {...register("name")} />
        <input {...register("name")} />
        <input {...register("name")} />
        <input {...register("name")} />
      </form>
    </>
  );
};

export default AddHoopForm;
