// import Image from "next/image";
"use client";
import Hero from "@/app/components/Hero";
import InfoBox from "@/app/components/InfoBox";
import NewBaseForm from "@/app/components/NewBaseForm";
import SignInForm from "@/app/components/SignInForm";
import LeadForm from "@/app/components/LeadForm";
import { useRouter } from "next/navigation";

export default function Home() {
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

  return (
    <section>
      <div className="text-3xl bg-white text-blue-500">Hello Kansas City</div>
      <Hero />
      <NewBaseForm onSubmit={handleSubmit}>
        <LeadForm />
      </NewBaseForm>
      <InfoBox />
    </section>
  );
}
