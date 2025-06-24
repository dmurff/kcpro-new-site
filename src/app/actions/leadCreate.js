"use server";
import supabase from "/utils/supabaseClient";
import { redirect } from "next/navigation";

const leadCreate = async (formData) => {
  const leadData = {
    name: formData.get("name"),
    email: formData.get("email"),
  };

  const { error } = await supabase
    .from("leads")
    .insert([{ name: leadData.name, email: leadData.email }]);

  if (error) console.error("insert error", error);

  redirect("/thank-you");
};

export default leadCreate;
