'use client'

import React from 'react'
import { FlipWords } from './ui/flip-words'
import { Boxes } from './ui/background-boxes'

export const Hero = () => {
  const words = ["Developer.", "Father.", "Husband."]
  return (
    <div className="h-96 relative w-full overflow-hidden bg-green flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-green z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <Boxes />
      <h2 className="md:text-2xl text-1xl lg:text-4xl text-center text-fontc relative z-20">
        Hello! Meet Ibe
      </h2>
      <h1 className="md:text-4xl text-3xl lg:text-6xl font-bold text-center text-fontc relative z-20">
        a Lifelong Learner and Passionate <FlipWords words={words} duration={500}/>
      </h1>
      <h2 className="lg:text-2xl text-center text-fontc relative z-20">
        Learning, building, and inspiring through curiosity and code.
      </h2>
    </div>
  )
}
