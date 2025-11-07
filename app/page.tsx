import About from "@/components/About";
import ChildrenGallery from "@/components/ChildrenGallery";
import ChristmasParty from "@/components/ChristmasParty";
import DonationKits from "@/components/DonationKits";
import Hero from "@/components/Hero";


export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <DonationKits />
      <ChristmasParty />
      <ChildrenGallery />
    </div>
  );
}
