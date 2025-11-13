import About from "@/components/About";
import ChildrenGallery from "@/components/ChildrenGallery";
import ChristmasParty from "@/components/ChristmasParty";
import DonationKits from "@/components/DonationKits";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Sponsorship from "@/components/Sponsorship";


export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <DonationKits />
      <About />
      <ChristmasParty />
      <ChildrenGallery />
      <Sponsorship />
      <Footer />
    </div>
  );
}
