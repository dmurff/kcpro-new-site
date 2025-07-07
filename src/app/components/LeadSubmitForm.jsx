"use client";

import BaseForm from "./BaseForm";

const LeadSubmitForm = () => {
  const handleLeadForm = async (formData) => {
    console.log("form Data:", formData);
  };

  return (
    <BaseForm onSubmit={handleLeadForm}>
      <label htmlFor="image">Image Upload</label>
      <input type="file" name="image" id="image"></input>
      <button className="bg-zinc-300">Add Image</button>
    </BaseForm>
  );
};

export default LeadSubmitForm;
