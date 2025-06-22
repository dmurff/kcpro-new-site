"use server";

const leadCreate = async (response) => {
  const formData = response;

  const leadData = {
    name: formData.get("name"),
    email: formData.get("email"),
  };
};

export default leadCreate;
