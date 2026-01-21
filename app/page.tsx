import About from "@/components/About";
import ChildrenGallery from "@/components/ChildrenGallery";
import DonationKits from "@/components/DonationKits";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Sponsorship from "@/components/Sponsorship";
import WhatsAppButton from "@/components/WhatsAppButton";


export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <DonationKits />
      <About />
      <ChildrenGallery />
      <Sponsorship />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
