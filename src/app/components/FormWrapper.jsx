"use client";
import { useRouter } from "next/navigation";

export default async function FormWrapper() {
  const router = useRouter();

  const handleSubmit = async (formData) => {
    const response = await fetch("/api/leads", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (result.success) {
      router.push("/thank-you");
    } else {
      console.error("Failed to submit lead:", result.error);
    }
  };
}
