"use client";
import { useState } from "react";

const SignUpForm = () => {
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    confirm: "",
  });

  const handleSignUp = async () => {};

  return (
    <section>
      <form>
        <label htmlFor="first_name">First Name</label>
        <input
          type="text"
          id="first_name"
          name="first_name"
          onChange={(e) => setForm({ ...form, first_name: e.target.value })}
        ></input>

        <label htmlFor="last_name">Last Name</label>
        <input
          type="text"
          id="last_name"
          name="last_name"
          onChange={(e) => setForm({ ...form, last_name: e.target.value })}
        ></input>

        <label htmlFor="email">Email</label>
        <input type="text" id="email" name="email"></input>

        <label htmlFor="email">Password</label>
        <input type="text" id="password" name="password"></input>

        <label htmlFor="email">Confirm Password</label>
        <input type="text" id="confirm" name="confirm"></input>
        <button
          type="submit"
          className="block bg-blue-700 text-sm bold flex justify-center rounded-md p-3"
          onSubmit={handleSignUp}
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default SignUpForm;
