"use client";
import { BsEye } from "react-icons/bs";
import { useState } from "react";
import { useFormContext } from "react-hook-form";

const SignInForm = () => {
  const inputClass =
    "block w-full px-4 py-2 pr-10 mb-4 border border-gray-300 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500";

  const [passHidden, setPassHidden] = useState(true);

  const { register, formState: errors } = useFormContext();

  return (
    <>
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
      <label htmlFor="confirm">Confirm assword</label>
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
    </>
  );
};

export default SignInForm;
