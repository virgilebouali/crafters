import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
const Hero = () => {
  return (
    <div>
        <h2 className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
        The Best Compagny 
      </h2>
      <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
        Leverage the power of canvas to create a beautiful hero section
      </p>
      <div className="flex items-center justify-center mt-6 gap-4">
     
        <div className="    ">
        <Button variant="outline" className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 p-6 hover:text-violet-300">
            <Link href="">Get started</Link>
        </Button>
        </div>
      </div>
    </div>
  )
}

export default Hero