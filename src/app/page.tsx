import HeroSection from "@/components/HeroSection";
import RecentProjects from "@/components/RecentProjects";
import Screfft from "@/components/Screfft";

export default function Home() {
  return (
    <>
    
      <HeroSection />
      <main className="flex items-center justify-center w-full h-full flex-col px-14">
      <RecentProjects />
      <Screfft/>
      <RecentProjects />
      </main>
    </>
  );
}
