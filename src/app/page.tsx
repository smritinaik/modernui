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
      <div
            className='h-full md:h-[90rem] w-full rounded-md flex flex-col   relative oberflow-hidden mx-auto py-10 md:py-0'
        >
            <div className='p-4 relative z-10 w-full text-center'>
                <h1
                    className='mt-20 md:mt-0 text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-900'
                >Designed And Developed By SMRITI NAIK  </h1>
            </div>

        </div>
      </main>
    </>
  );
}
