"use client";

import { useForm, FormProvider } from "react-hook-form";
import { useRouter } from "next/navigation";

const NewBaseForm = ({ children }) => {
  const inputClass =
    "block w-full px-4 py-2 pr-10 mb-4 border border-gray-300 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500";
  const router = useRouter();
  const methods = useForm({
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
    },
  });

  const onSubmit = async (data) => {
    const response = await fetch("/api/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    if (result.success) {
      router.push("/thank-you");
    } else {
      console.error("Failed to submit lead:", result.error);
    }
  };

  return (
    <FormProvider {...methods}>
      <section className="grid grid-cols-1 lg:grid-cols-12 lg:mx-0 lg:mt-10 lg:max-w-none">
        <form
          className="text-black text-lg font-mono font-bold tracking-wide flex flex-col gap-4 max-w-lg mx-auto w-full p-10 bg-white my-4 rounded-md shadow-xl lg:col-span-6 lg:col-start-4"
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

          {children}
          <button
            type="submit"
            className="block text-white bg-orange-500 text-lg font-bold font-mono tracking-wide flex justify-center rounded-md p-3 hover:bg-amber-700"
          >
            Get Quote
          </button>
        </form>
      </section>
    </FormProvider>
  );
};

export default NewBaseForm;
