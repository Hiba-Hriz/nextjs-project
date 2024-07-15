import { Comp } from '@/data'
import React from 'react'
import { Button } from './ui/MovingBorders'
import Image from 'next/image';
const Competences = () => {
  return (
    <div className="py-20" id="">
        <h1 className="heading">
            
            
            <span className="text-black">6 Axes de compétences pour la PME/PMI
            
            </span>
            <div className="flex justify-center mt-6">
         <div className="shimmer-container relative w-64 h-10">
           <div className="shimmer"></div>
          </div>
        </div>

        </h1>
        <div className="w-full mt-12 grid lg:grid-cols-4
        grid-cols-1 gap-10">
            {Comp.map((card) => (
                <Button
                key={card.id}
                duration={Math.floor(Math.random() *10000)
                    +10000  }
                borderRadius='1.75rem'
                className='flew-1 text-white border-neutral-900 dark:border-slate-800' >
                    <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2 ">
                        
                      < Image src={`/${card.thumbnail}`}
                      alt={card.thumbnail} 
                     height={100}
                     width={100}
                      className="lg:w-32 md:w-20 w-16"/> 
                      <div className='lg:ms-5'>
                        <h1 className='text-start text-xl md:text-2xl font-bold'>
                         {card.title}
                        </h1>
                    </div> 
                    </div>
                </Button>
            ))}
        </div>
    </div>
  )
}

export default Competences