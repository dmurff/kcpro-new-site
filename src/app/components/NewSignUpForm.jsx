import { useForm, FormProvider } from "react-hook-form";
import { BsEye } from "react-icons/bs";
import { useState } from "react";

const NewSignUpForm = ({ onSubmit, children }) => {
  const inputClass =
    "block w-full px-4 py-2 pr-10 mb-4 border border-gray-300 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500";

  const [passHidden, setPassHidden] = useState(true);

  const methods = useForm({
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      password: "",
      confirm: "",
    },
  });

  return (
    <FormProvider {...methods}>
      <section className="bg-zinc-300 p-20">
        <form
          className="text-black text-lg font-mono font-bold tracking-wide flex flex-col gap-4 max-w-lg w-full mx-auto p-10 bg-white my-10 rounded-md shadow-xl"
          onSubmit={methods.handleSubmit(onSubmit)}
        >
          <label className="mr-4" htmlFor="first_name">
            First Name
          </label>
          <input
            className={inputClass}
            type="text"
            id="first_name"
            {...methods.register("first_name")}
          />

          <label htmlFor="last_name">Last Name</label>
          <input
            className={inputClass}
            type="text"
            id="last_name"
            {...methods.register("last_name")}
          />

          <label htmlFor="email">Email</label>
          <input
            className={inputClass}
            type="email"
            id="email"
            {...methods.register("email")}
          />

          <label htmlFor="phone">Phone</label>
          <input
            className={inputClass}
            type="tel"
            id="phone"
            {...methods.register("phone")}
          />

          <label htmlFor="password">Password</label>

          <div className="relative">
            <input
              className={inputClass}
              type={passHidden ? "password" : "text"}
              id="password"
              {...register("password")}
            />
            <BsEye
              className="absolute top-1/2 right-3 transform -translate-y-1/2 text-blue-500 text-xl cursor-pointer"
              onClick={() => setPassHidden(!passHidden)}
            />
          </div>

          <label htmlFor="confirm">Confirm Password</label>
          <div className="relative">
            <input
              className={inputClass}
              type={passHidden ? "password" : "text"}
              id="confirm"
              {...register("confirm")}
            />
            <BsEye
              className="absolute top-1/2 right-3 transform -translate-y-1/2 text-blue-500 text-xl cursor-pointer"
              onClick={() => setPassHidden(!passHidden)}
            />
          </div>
          {children}
          <button
            type="submit"
            className="block text-white bg-blue-500 text-lg font-bold font-mono tracking-wide flex justify-center rounded-md p-3 hover:bg-blue-900"
          >
            Submit
          </button>
        </form>
      </section>
    </FormProvider>
  );
};
export default NewSignUpForm;
