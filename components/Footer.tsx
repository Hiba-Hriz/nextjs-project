import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa6'
const Footer = () => {
  return (
    <footer className='w-full pt-20 pb-10' id='contacts'>
        <div className='flex flex-col items-center'>
            <h1 className=' text-4xl text-center text-black text-bold '>
            Spécialité dans la sauvegarde et la récupération des données et à l’installation des caméras de surveillance. 
               
                </h1>
                
                <a href='/Contact'>
                <MagicButton 
                  title='Contactez nous'
                  icon={<FaLocationArrow/>}
                  position='right'
                />
                </a>
        </div>
        <div className='flex md:flex-row flex-col justify-center items-center '>
    <p className='md:text-base pt-20 text-sm md:front-normal  font-light text-bold text-black pl-4 '>Copyright © 2024 MSI-Consultants. Tous les droits sont réservés.</p>
        </div>

 </footer>
  )
}

export default Footer