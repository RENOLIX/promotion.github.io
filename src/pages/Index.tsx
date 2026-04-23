import { useCallback, useState } from "react";
import SiteFooter from "../components/layout/SiteFooter";
import SiteHeader from "../components/layout/SiteHeader";
import DoorIntro from "./home/_components/DoorIntro";
import GallerySection from "./home/_components/GallerySection";
import HeroSection from "./home/_components/HeroSection";
import InterestSection from "./home/_components/InterestSection";
import ProjectsSection from "./home/_components/ProjectsSection";
import WhyChooseSection from "./home/_components/WhyChooseSection";

export default function Index() {
  const [introComplete, setIntroComplete] = useState(false);

  const handleIntroComplete = useCallback(() => {
    setIntroComplete(true);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <DoorIntro onComplete={handleIntroComplete} />
      {introComplete ? (
        <>
          <SiteHeader />
          <HeroSection />
          <ProjectsSection />
          <GallerySection />
          <WhyChooseSection />
          <InterestSection />
          <SiteFooter />
        </>
      ) : null}
    </div>
  );
}
