"use client";
import React from "react";
import { SparklesCore } from "@/components/ui/sparkles";
 
function UnderSpck() {
  return (
<div className="h-[30rem] w-full bg-black-100 flex flex-col items-center justify-center overflow-hidden rounded-md">
      <h1 className="md:text-6xl text-2xl lg:text-5xl font-bold text-center text-white relative z-20">
      Transform ideas into stunning realities.
      </h1>
      <div className="w-[50rem] h-10 relative">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[6px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-9/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
 
        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.1}
          maxSize={2}
          particleDensity={190}
          className="w-full h-10"
          particleColor="#FFFFFF"
        />
 
        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-black-100 [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
    </div>  )
}

export default UnderSpck