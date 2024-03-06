"use client";
import React from "react";
import { WavyBackground } from "./ui/wavy-background";
import { Button } from "./ui/button";
import Link from "next/link";

export function Waves() {
  return (
    <WavyBackground className="max-w-4xl mx-auto pb-40 items-center justify-center w-screen overflow-hidden ">
      <div className="justify-center items-center flex flex-col w-full">
      <p className="text-6xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center -z-10">
      Laissez nous développer votre business en ligne.      </p>
      <p className="text-base md:text-2xl mt-4 text-white font-normal inter-var text-center">
      Créez, développez et transformez votre entreprise avec notre plateforme tout-en-un de création de site web et de marketing digital.
        </p>
      <div className="justify-center items-center mt-8">
      <Link href="#_" className="relative px-6 py-3 font-bold text-white rounded-lg group">
<span className="absolute rounded-xl inset-0 w-full h-full transition duration-300 transform -translate-x-1 -translate-y-1 bg-purple-800 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0"></span>
<span className="absolute inset-0 w-full rounded-xl h-full transition duration-300 transform translate-x-1 translate-y-1 bg-pink-800 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0 mix-blend-screen"></span>
<span className="relative">Commencer</span>
</Link>      </div>
  
</div>
    </WavyBackground>
  );
}

