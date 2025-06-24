// import Image from "next/image";
import Hero from "@/app/components/Hero";
import InfoBox from "@/app/components/InfoBox";
import LeadForm from "@/app/components/LeadForm";

export default function Home() {
  return (
    <section>
      <div className="text-3xl bg-white text-blue-500">Hello Kansas City</div>
      <Hero />
      <LeadForm />
      <InfoBox />
    </section>
  );
}
