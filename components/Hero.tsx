import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa6'

const Hero = () => {
  return (
    <div className='pb-20 pt-36 md:pb-16 md:pt-12 lg:pb-14 lg:pt-10 min-h-screen'>
        <div>
        <Spotlight className='absolute -top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill='white'/>

        <Spotlight className='absolute top-10 left-full h-[80vh] w-[50vw]' fill='purple'/>

        <Spotlight className='absolute top-28 left-80 h-[80vh] w-[50vw]' fill='blue'/>


        </div>
        <div className="h-[99vh] w-full dark:blue dark:bg-black-100  flex 
        items-center justify-center absolute top-0 left-0">
      <div className="absolute pointer-events-none
       inset-0 flex items-center justify-center dark:bg-black-100 bg-white
        [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"/>
      
    </div>
    <div className='flex justify-center relative my-20
    z-10'>
      <div className='max-w-[89vw] md:max-w-2xl 
      lg:max-w-[60vw] flex flex-col items-center
      justify-center'>
        <h2 className='uppercase tracking-widest
        text-xs text-center   text-blue-100 max-w-80 -mt-20 md:mt-0'>
          projets ERPtt
        </h2>
        <TextGenerateEffect 
        className='text-center text-3xl
        md:text-5xl lg:text-6xl'
        words="L'expertise en systèmes d'informations"
        />
        <p className='text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl text-white'>
          votre partenaire de référence
        </p>
        <a href='/sign-in'>
          <MagicButton
          title="Afficher plus"
          icon={<FaLocationArrow /> }
           position='right'
           />
        </a>
      </div>
    </div>
    </div>

)
}

export default Hero