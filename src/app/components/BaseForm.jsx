"use client";
import { useForm } from "react-hook-form";

const BaseForm = ({ children, onSubmit }) => {
  const inputClass =
    "block w-full px-4 py-2 pr-10 mb-4 border border-gray-300 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
    },
  });

  return (
    <section className="bg-zinc-300 p-20">
      <form
        className="text-black text-lg font-mono font-bold tracking-wide flex flex-col gap-4 max-w-lg w-full mx-auto p-10 bg-white my-10 rounded-md shadow-xl"
        onSubmit={handleSubmit(onSubmit)}
      >
        <label className="mr-4" htmlFor="first_name">
          First Name
        </label>
        <input
          className={inputClass}
          type="text"
          id="first_name"
          {...register("first_name")}
        />

        <label htmlFor="last_name">Last Name</label>
        <input
          className={inputClass}
          type="text"
          id="last_name"
          {...register("last_name")}
        />

        <label htmlFor="email">Email</label>
        <input
          className={inputClass}
          type="email"
          id="email"
          {...register("email")}
        />

        <label htmlFor="phone">Phone</label>
        <input
          className={inputClass}
          type="tel"
          id="phone"
          {...register("phone")}
        />
        {React.Children.map(children, (child) =>
          React.isValidElement(child)
            ? React.cloneElement(child, { register, errors })
            : child
        )}
        <button
          type="submit"
          className="block text-white bg-blue-500 text-lg font-bold font-mono tracking-wide flex justify-center rounded-md p-3 hover:bg-blue-900"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default BaseForm;
