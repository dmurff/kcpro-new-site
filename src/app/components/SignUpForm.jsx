"use client";
import { useState, useEffect } from "react";
import supabase from "../../../utils/supabaseClient";
import { BsEye } from "react-icons/bs";

const SignUpForm = () => {
  // global styling
  const inputClass =
    "block w-full px-4 py-2 pr-10 mb-4 border border-gray-300 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500";
  //

  const [passHidden, setPassHidden] = useState(true);

  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    password: "",
    confirm: "",
  });

  useEffect(() => {
    console.log("Form after reset:", form);
  }, [form]);

  const changeForm = (e) => {
    console.log(e);
    const { name, value } = e.target;

    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (form.password !== form.confirm) {
      alert("Passwords do not match");
      setForm({ ...form, password: "", confirm: "" });

      return;
    }

    const { data, error } = await supabase.auth.signUp({
      email: form.email,
      password: form.password,
      options: {
        data: {
          first_name: form.first_name,
          last_name: form.last_name,
          phone: form.phone,
        },
      },
    });

    if (!error) {
      console.log("User created:", data);
      setForm({
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        password: "",
        confirm: "",
      });
    } else {
      console.log(error.message);
    }
  };

  return (
    <section className="bg-zinc-300 p-20">
      <form
        className="text-black text-lg font-mono font-bold tracking-wide flex flex-col gap-4 max-w-lg w-full mx-auto p-10 bg-white my-10 rounded-md shadow-xl"
        onSubmit={handleSignUp}
      >
        <label className="mr-4" htmlFor="first_name">
          First Name
        </label>
        <input
          className={inputClass}
          type="text"
          id="first_name"
          name="first_name"
          value={form.first_name}
          onChange={changeForm}
        ></input>

        <label htmlFor="last_name">Last Name</label>
        <input
          className={inputClass}
          type="text"
          id="last_name"
          name="last_name"
          value={form.last_name}
          onChange={changeForm}
        ></input>

        <label htmlFor="email">Email</label>
        <input
          className={inputClass}
          type="text"
          id="email"
          name="email"
          value={form.email}
          onChange={changeForm}
        ></input>

        <label htmlFor="phone">Phone</label>
        <input
          className={inputClass}
          type="text"
          id="phone"
          name="phone"
          value={form.phone}
          onChange={changeForm}
        ></input>

        <label htmlFor="password">Password</label>

        <div className="relative">
          <input
            className={inputClass}
            type={passHidden ? "password" : "text"}
            id="password"
            name="password"
            placeholder="enter password"
            value={form.password}
            onChange={changeForm}
          ></input>
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
            name="confirm"
            placeholder="confirm password"
            value={form.confirm}
            onChange={changeForm}
          ></input>
          <BsEye
            className="absolute top-1/2 right-3 transform -translate-y-1/2 text-blue-500 text-xl cursor-pointer"
            onClick={() => setPassHidden(!passHidden)}
          />
        </div>
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

export default SignUpForm;
