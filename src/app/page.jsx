// import Image from "next/image";
export const dynamic = "force-dynamic";


import Hero from "@/app/components/Hero";
import HomepageMain from "@/app/components/HomepageMain";
import FeaturedProducts from "@/app/components/FeaturedProducts";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
// import NewBaseForm from "@/app/components/NewBaseForm";
// import LeadForm from "@/app/components/LeadForm";
// import SalesSection from "@/app/components/SalesSection";
// import HomepageCta from "@/app/components/HomepageCta";
// import HomePageOffer from "@/app/components/HomePageOffer";

// import Link from "next/link";

export default function Home() {
  return (
    <>
      <Navbar />
      <section>
        <Hero />
        <HomepageMain />
        {/* <SalesSection /> */}
        {/* <HomepageCta /> */}
        <FeaturedProducts />
        {/* <HomePageOffer /> */}
        {/* <NewBaseForm>
          <LeadForm />
        </NewBaseForm> */}
        <Footer />
      </section>
    </>
  );
}
