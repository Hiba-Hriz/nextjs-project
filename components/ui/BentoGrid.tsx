"use client"
import { useState } from "react";
import Lottie from "react-lottie";
import { IoCopyOutline } from "react-icons/io5";
import { cn } from "@/utils/cn";
import { GlobeDemo } from "./GridGlobe";
import { BackgroundGradientAnimation } from "@/components/GradientBg";
import animationData from "@/data/confetti.json";
import MagicButton from "./MagicButton";
import Image from 'next/image';

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  

  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id?:number;
  img?:string;
  imgClassName?:string;
  titleClassName?:string;
  spareImg?:string;
}) => {
  const [copied, setCopied] = useState(false);

  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleCopy = () => {
    const text = "";
    navigator.clipboard.writeText(text);
    setCopied(true);
  };
  return (

    <div
      className={cn(
        "row-span-3 relative overflow-hidden rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4 border border-white/[0.1]",
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >


   
         { id === 6  && (
          
          <BackgroundGradientAnimation>
            <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
          </BackgroundGradientAnimation>
        )}
        { id === 7  && (
          
          <BackgroundGradientAnimation>
            <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
          </BackgroundGradientAnimation>
        )}






      <div className='flex
      justify-center h-full'>
       <div className="w-full h-full absolute">
           {img &&(
            <Image 
            src={img}
            alt={img}
            height={100}
            width={100}
            className={cn(imgClassName, 'object-cover',
              'object-center')}
            />
        )}
       </div>
       <div className={`absolute right-0 -bottom-5 `}>
          {spareImg && (
            <Image
            src={spareImg}
            alt={spareImg}
           height={200}
           width={200}
            className={'object-cover,object-center w-full h-full' }
            />
          )}

       </div>
       
       
       
      </div>
      <div className="translate-x-2 transition duration-200">
      
      {id === 2 && (
  <div className="font-sans font-bold text-white dark:text-white  mb-0 mt-0  mr-2 text-center text-1xl">
    {title}
  </div>
)}
{ id===6  &&  (
  <div className="font-sans text-white dark:text-white m-2 text-center text-2xl">
    {title}
  </div>
)}
{ id===7  &&  (
  <div className="font-sans text-white dark:text-white m-2 text-center text-2xl">
    {title}
  </div>
)}
{ id===5 &&  (
  <div className="font-sans text-white dark:text-white m-4 text-center text-2xl">
    {title}
  </div>
)}
{id !== 2 && id !== 5 && id !== 6 && id !== 7 && (
  <div className="font-sans font-bold text-black dark:text-black mb-4 mt-2 text-center text-2xl">
    {title}
  </div>
)}


{id === 2 && (
  
          <div className=" w-full h-full  md:h-96 justify-center flex "> 
            
            <GlobeDemo />
          </div>
        )}


        
         {id === 6  && (
            <div className=" relative ">
             
              <div
                className={`absolute -bottom-0 right-0 ${copied ? "block" : "block"
                  }`}
              >
                
                <Lottie options={defaultOptions} height={200} width={400} />
              </div>
              <a href='/sign-in' className="max-w-[49vw] md:max-w-2xl 
      lg:max-w-[60vw] flex flex-col items-center
      justify-center ml-12 mb-4">
              <MagicButton 
                title={copied ? "en cours..." : "Plus d'infos"}
                icon={<IoCopyOutline />}
                position="right"
                handleClick={handleCopy}
                otherClasses="!bg-[#161A31] "
                
              />
              </a>
            </div>
          )}
          {id === 7 && (
            <div className=" relative ">
             
              <div
                className={`absolute -bottom-0 right-0 ${copied ? "block" : "block"
                  }`}
              >
                
                <Lottie options={defaultOptions} height={200} width={400} />
              </div>
              <a href='/Solutions' className="max-w-[49vw] md:max-w-2xl 
      lg:max-w-[60vw] flex flex-col items-center
      justify-center ml-12 mb-4">
              <MagicButton 
                title={copied ? "en cours..." : "Plus d'infos"}
                icon={<IoCopyOutline />}
                position="right"
                handleClick={handleCopy}
                otherClasses="!bg-[#161A31] "
                
              />
              </a>
            </div>
          )}
      </div>
    </div>
  );
};
