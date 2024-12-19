import Bento from "@/components/Bento";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import RecentProjects from "@/components/RecentProjects";
import Screfft from "@/components/Screfft";
import { SparklesPreview } from "@/components/Spck";
import UnderSpck from "@/components/UnderSpck";

export default function Home() {
  return (
    <>

      {/* <HeroSection /> */}
      <SparklesPreview />
      <RecentProjects />
      <Screfft />

      <main className="flex items-center justify-center w-full h-full flex-col px-9">
        <div className='h-full md:h-[7rem] w-full rounded-md flex flex-col   relative oberflow-hidden mx-auto py-10 md:py-0'>
        </div>
      </main>

      <Bento />
      <UnderSpck/>

      {/* <main className="flex items-center justify-center w-full h-full flex-col px-9">
        <div className='h-full md:h-[7rem] w-full rounded-md flex flex-col   relative oberflow-hidden mx-auto py-10 md:py-0'>
        </div>
      </main> */}

      <Footer />

    </>
  );
}
