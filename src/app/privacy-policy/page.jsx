import PrivacyContent from "../components/PrivacyContent";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Privacy Policy | KC Pro Assembly",
};

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      <PrivacyContent />
      <Footer />
    </>
  );
}
