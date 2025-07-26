"use client";
import supabase from "./../../../utils/supabaseClient";
import { useState, useEffect } from "react";
import AddHoopForm from "../components/AddHoopForm";
import FormCheckbox from "../components/FormCheckbox";
import AddHoopImages from "../components/AddHoopImages";

const updateHoopPage = () => {
  const [showEditForm, setShowEditForm] = useState(false);
  const [selectedHoop, setSelectedHoop] = useState(null);

  useEffect(() => {
    if (showEditForm) {
      console.log("edit changed");
    }
  }, [showEditForm]);

  const updateHoop = async (model) => {
    console.log("Hoop Update ✅", model);
    const { data, error } = await supabase
      .from("hoops")
      .select("*")
      .eq("model", model)
      .single();

    if (data) {
      console.log("hoop data received! ✅", data);

      setSelectedHoop(data);
      setShowEditForm(true);

      return;
    }
    return console.log("No hoop pulled 💥", error.message);
  };

  return (
    <div className="bg-gray-900 w-full">
      <div className="w-full text-center mb-8 p-4">
        <h1 className="text-3xl">Hoop List</h1>
      </div>

      <div className="flex items-center justify-around mb-16">
        <button
          onClick={() => updateHoop("GC-55-LG")}
          className="border-2 p-2 bg-white text-gray-900 font-semibold hover:bg-blue-900 hover:text-white hover:border-white transition duration-200 ease-in"
        >
          GC-55-LG
        </button>
        <button
          onClick={() => updateHoop("TPT-553-LG")}
          className="border-2 p-2 bg-white text-gray-900 font-semibold hover:bg-blue-900 hover:text-white hover:border-white transition duration-200 ease-in"
        >
          TPT-553-LG
        </button>
        <button
          onClick={() => updateHoop("FCH-664-XL")}
          className="border-2 p-2 bg-white text-gray-900 font-semibold hover:bg-blue-900 hover:text-white hover:border-white transition duration-200 ease-in"
        >
          FCH-664-XL
        </button>
      </div>
      {showEditForm && selectedHoop && (
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 bg-gray-300">
          <AddHoopForm initialValues={selectedHoop} /*onSubmit={handleSubmit}*/>
            <FormCheckbox title="Can Sell" name="can_sell" />
            <FormCheckbox title="Install Only" name="can_install_only" />
            <FormCheckbox title="Is Featured" name="is_featured" />
          </AddHoopForm>
          <AddHoopImages />
        </div>
      )}
    </div>
  );
};

export default updateHoopPage;
