import React from "react";
import { useState } from "react";

export default function CustomerForm() {
  const [form, setForm] = useState({
    name: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  return (
    <form
      className="text-black text-sm font-mono tracking-wide flex flex-col gap-4 max-w-lg w-full p-4 bg-white my-4 rounded-md shadow-md"
      action=""
    >
      <div className="align-start flex gap-x-4 flex-col">
        <label htmlFor="name" className="font-mono text-sm mb-2">
          Name
        </label>
        <input
          className="bg-zinc-200 rounded-lg p-3 focus:border focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-.75 focus:ring-blue-300"
          type="text"
          name="name"
          id="name"
          required
          value={form.name}
          onChange={handleChange}
        />
      </div>
    </form>
  );
}
