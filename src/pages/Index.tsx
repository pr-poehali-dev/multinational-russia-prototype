import Header from "@/components/Header";
import PeoplesCarousel from "@/components/PeoplesCarousel";
import ActionButton from "@/components/ActionButton";
import MapSection from "@/components/MapSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <PeoplesCarousel />
      <ActionButton />
      <MapSection />
    </div>
  );
};

export default Index;
