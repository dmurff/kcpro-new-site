import AboutHeader from "../components/AboutHeader";
import ServiceNavbar from "../components/ServiceNavbar";
import AboutContent from "../components/AboutContent";
import Footer from "../components/Footer";

export default async function AboutPage() {
  return (
    <>
      <ServiceNavbar />
      <AboutHeader />
      <AboutContent />
      <Footer />
    </>
  );
}
