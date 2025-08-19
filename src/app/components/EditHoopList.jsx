"use client";
import { useState, useEffect } from "react";
import { supabase } from "../../../lib/supabase/client";
import AddHoopForm from "./AddHoopForm";
import FormCheckbox from "./FormCheckbox";

export default function EditHoopList({ hoops, action }) {
  const [showEditForm, setShowEditForm] = useState(false);
  const [selectedHoop, setSelectedHoop] = useState(null);

  return (
    <div className="bg-gray-900 w-full">
      {/* //   <div className="w-full text-center mb-8 p-4">
    //     <h1 className="text-3xl">Hoop List</h1>
    //   </div> */}

      {hoops.map((h) => (
        <div key={h.id} className="flex items-center justify-around mb-16">
          <button
            onClick={() => {
              setShowEditForm(true);
              setSelectedHoop(h);
            }}
            className="border-2 p-2 bg-white text-gray-900 font-semibold hover:bg-blue-900 hover:text-white hover:border-white transition duration-200 ease-in"
          >
            {h.model}
          </button>
        </div>
      ))}
      {/* <div className="flex items-center justify-around mb-16">
        <button
          onClick={() => fetchHoop("GC-55-LG")}
          className="border-2 p-2 bg-white text-gray-900 font-semibold hover:bg-blue-900 hover:text-white hover:border-white transition duration-200 ease-in"
        >
          GC-55-LG
        </button>
        <button
          onClick={() => fetchHoop("TPT-553-LG")}
          className="border-2 p-2 bg-white text-gray-900 font-semibold hover:bg-blue-900 hover:text-white hover:border-white transition duration-200 ease-in"
        >
          TPT-553-LG
        </button>
        <button
          onClick={() => fetchHoop("FCH-664-XL")}
          className="border-2 p-2 bg-white text-gray-900 font-semibold hover:bg-blue-900 hover:text-white hover:border-white transition duration-200 ease-in"
        >
          FCH-664-XL
        </button>
      </div> */}
      {selectedHoop && (
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 bg-gray-300">
          <AddHoopForm
            key={selectedHoop.id}
            initialValues={selectedHoop}
            action={action}
            hoops={hoops}
          >
            <FormCheckbox title="Can Sell" name="can_sell" />
            <FormCheckbox title="Install Only" name="can_install_only" />
            <FormCheckbox title="Is Featured" name="is_featured" />
          </AddHoopForm>
        </div>
      )}
    </div>
  );
}
