"use client";
import React from "react";
import { SparklesCore } from "@/components/ui/sparkles";

export function SparklesPreview() {
  return (
    <div className="h-[40rem] relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.9}
          maxSize={2.4}
          particleDensity={55}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      <div className='h-full md:h-[4rem] w-full rounded-md  relative oberflow-hidden mx-auto py-10 md:py-0'>
        <div className='p-4 relative z-10 w-full text-center'>
          <h1
            className='mt-19 md:mt-0 text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-900'
          >Master the art of modern UI </h1>
          {/* <p
            className='mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto'
          >Unleash your creativity </p> */}
        </div>

      </div>
    </div>
  );
}
