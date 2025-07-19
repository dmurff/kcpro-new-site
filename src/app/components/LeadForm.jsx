"use client";
import { useFormContext } from "react-hook-form";

const checkboxStyle =
  "h-5 w-5 accent-indigo-600 rounded border-gray-300 focus:ring-2 focus:ring-indigo-600";

const LeadForm = () => {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext();

  const basketball = watch("basketball_hoop", false);
  const [playset, furniture, gym_product] = watch(
    ["playset", "furniture", "gym_product"],
    [false, false, false]
  );

  const otherOption = playset || furniture || gym_product;

  return (
    <>
      <h2 className="text-2xl font-bold font-sans mb-4">
        What can we help you with?
      </h2>
      <div className="bg-zinc-100 mb-4 flex flex-col gap-4 p-5 rounded-md">
        <label htmlFor="basketball_hoop">Basketball hoop</label>
        <input
          className={checkboxStyle}
          type="checkbox"
          id="basketball_hoop"
          {...register("basketball_hoop")}
        ></input>
        <label htmlFor="playset">Playset</label>
        <input
          className={checkboxStyle}
          type="checkbox"
          id="playset"
          {...register("playset")}
        ></input>
        <label htmlFor="furniture">Furniture</label>
        <input
          className={checkboxStyle}
          type="checkbox"
          id="furniture"
          {...register("furniture")}
        ></input>
        <label htmlFor="gym product">Gym product</label>
        <input
          className={checkboxStyle}
          type="checkbox"
          id="gym_product"
          {...register("gym_product")}
        ></input>
      </div>
      {basketball && (
        <>
          <select
            {...register("hoop_job_details")}
            className="appearance-none block w-full px-4 py-2 pr-10 mb-4 border border-gray-300 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
          >
            <option>Select one that applies...</option>
            <option>I need help buying and installing a hoop</option>
            <option>
              I need help buying, installing, and removing an existing hoop
            </option>
            <option>I need help removing an existing hoop</option>
            <option>I need help relocating a hoop</option>
            <option>
              I already bought a hoop and need an installation quote
            </option>
          </select>
        </>
      )}
      <>
        {otherOption && (
          <>
            <label>Details</label>
            <textarea
              className="block w-full px-4 py-2 pr-10 mb-4 border border-gray-300 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
              {...register("misc_job_details")}
              placeholder="Tell us more about the product you need help installing..."
            ></textarea>
          </>
        )}
      </>
    </>
  );
};

export default LeadForm;

//  className="block w-full px-4 py-2 pr-10 mb-4 border border-gray-300 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
