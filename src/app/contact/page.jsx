import ContactHeader from "../components/ContactHeader";
import ServiceNavbar from "../components/ServiceNavbar";
import ContactContent from "../components/ContactContent";
import Footer from "../components/Footer";

export default async function ContactPage() {
  return (
    <>
      <ServiceNavbar />
      <ContactHeader />
      <ContactContent />
      <Footer />
    </>
  );
}

//  <AboutHeader />
//       <AboutContent />
