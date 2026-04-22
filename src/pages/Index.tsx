import { useCallback, useState } from "react";
import SiteFooter from "../components/layout/SiteFooter";
import SiteHeader from "../components/layout/SiteHeader";
import DoorIntro from "./home/_components/DoorIntro";
import GallerySection from "./home/_components/GallerySection";
import HeroSection from "./home/_components/HeroSection";
import ProjectsSection from "./home/_components/ProjectsSection";
import TestimonialsSection from "./home/_components/TestimonialsSection";
import TourSection from "./home/_components/TourSection";

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
          <TourSection />
          <GallerySection />
          <TestimonialsSection />
          <SiteFooter />
        </>
      ) : null}
    </div>
  );
}
