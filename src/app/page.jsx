// import Image from "next/image";
// "use client";
import Hero from "@/app/components/Hero";
import NewBaseForm from "@/app/components/NewBaseForm";
import LeadForm from "@/app/components/LeadForm";
import HomepageMain from "@/app/components/HomepageMain";
import FeaturedProducts from "@/app/components/FeaturedProducts";
import Navbar from "@/app/components/Navbar";
import SalesSection from "@/app/components/SalesSection";
import Footer from "@/app/components/Footer";

// import Link from "next/link";

export default function Home() {
  return (
    <>
      <Navbar />
      <section>
        <Hero />
        <HomepageMain />
        <SalesSection />

        <FeaturedProducts />
        <NewBaseForm>
          <LeadForm />
        </NewBaseForm>
        <Footer />
      </section>
    </>
  );
}
