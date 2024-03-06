/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "../components/ui/tracing-beam";

export function Features() {
  return (
    <TracingBeam className="px-6">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative lg:ml-56">
        {dummyContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
            <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
              {item.badge}
            </h2>

            <p className="text-2xl mb-4 font-bold">
              {item.title}
            </p>

            <div className="text-xl  prose prose-sm dark:prose-invert">
              {item?.image && (
                <Image
                  src={item.image}
                  alt="blog thumbnail"
                  height="500"
                  width="500"
                  className="rounded-lg mb-10 object-cover border-2 border-white shadow-purple-700 shadow-md"
                />
              )}
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
  );
}

const dummyContent = [
  {
    title: "Apportez nous l&apos;idée de votre projet",
    description: (
      <>
        <p>
        Imaginez un site web qui va au-delà des conventions, un lieu où l'innovation rencontre la simplicité. Notre équipe est avide de découvrir comment votre projet transcende les frontières, comment il apporte une solution unique ou comment il repousse les limites du possible. Exprimez votre vision avec passion, et ensemble, nous façonnerons l'avenir numérique.
        </p>
       
      </>
    ),
    badge: "",
    image:
      "https://images.unsplash.com/photo-1535868463750-c78d9543614f?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Gagnez du temps et de l'argent",
    description: (
      <>
        <p>
        Bienvenue dans l'univers de l'efficacité, où chaque instant compte et chaque euro économisé est une victoire. Notre mission est de vous offrir une solution qui simplifie votre vie, vous permettant de gagner du temps et de l'argent sans compromis. Découvrez comment notre plateforme peut transformer votre quotidien.
        </p>

      </>
    ),
    badge: "",
    image:
      "https://images.unsplash.com/photo-1450897918656-527057db59d3?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Optimisez vos publicités pour plus de conversions",
    description: (
      <>
        <p>
        Chaque annonce compte, chaque clic est une opportunité. Notre solution est conçue pour maximiser l'impact de vos publicités, transformant chaque campagne en une puissante machine à conversions. Plongez dans une nouvelle ère de publicité où la pertinence et l'efficacité règnent en maîtres.
        </p>
      </>
    ),
    badge: "",
    image:
      "https://plus.unsplash.com/premium_photo-1679397743664-f9384e6ad49d?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
