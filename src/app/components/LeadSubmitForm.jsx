"use client";

import BaseComponent from "./BaseComponent";

const LeadSubmitForm = () => {
  const handleLeadForm = async (formData) => {
    console.log("form Data:", formData);
  };

  return (
    <BaseComponent onSubmit={handleLeadForm}>
      <label htmlFor="image">Image Upload</label>
      <input type="file" name="image" id="image"></input>
      <button className="bg-zinc-300">Add Image</button>
    </BaseComponent>
  );
};

export default LeadSubmitForm;
