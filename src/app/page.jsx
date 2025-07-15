// import Image from "next/image";
"use client";
import Hero from "@/app/components/Hero";
import InfoBox from "@/app/components/InfoBox";
import NewBaseForm from "@/app/components/NewBaseForm";
import LeadForm from "@/app/components/LeadForm";
import HomepageMain from "@/app/components/HomepageMain";
import ProductCards from "@/app/components/ProductCards";
import Navbar from "@/app/components/Navbar";

import { useRouter } from "next/navigation";
import Link from "next/link";

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
    <>
      <Navbar />
      <section>
        <Hero />
        <HomepageMain />
        <ProductCards />
        <div className="mx-auto w-fit py-6">
          <Link href="/products">
            <button className="text-cream items-center bg-orange-500 hover:bg-orange-100 hover:text-slate-950 hover:border-2 border-slate-950 rounded-md p-2">
              Hoops for Sale
            </button>
          </Link>
        </div>

        <NewBaseForm onSubmit={handleSubmit}>
          <LeadForm />
        </NewBaseForm>
        <InfoBox />
      </section>
    </>
  );
}
