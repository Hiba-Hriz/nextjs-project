import React from 'react';
import { features } from '@/data';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { FEATURES } from '@/data';
import FeatureSlider from '@/components/FeatureSlider';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 

interface FeatureCardProps {
  icon: string;
  title: string;
  content: string;
  index: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full flex justify-center items-center bg-white`}>
      <Image src={icon} alt="icon" height={100} width={100} className="w-[100%] h-[100%] object-contain " unoptimized/>
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-gradient text-[30px] leading-[43.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[25px] leading-[30px]">
        {content}
      </p>
    </div>
  </div>
);

type FeatureItemProps = {
  title: string;
  icon: string;
  description: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ title, icon, description }) => {
  return (
    <li className="flex w-full flex-1 flex-col items-start">
      <div>
        <Image src={icon} alt="icon" width={78} height={78} unoptimized />
      </div>
      <h2 className="lg:bold-32 mt-5 lg:bold-64 font-poppins font-semibold xs:text-[18px] text-[30px] text-gradient">
        {title}
      </h2>
      <p className="regular-16 mt-5 text-white lg:mt-[30px] text-[25px]">
        {description}
      </p>
    </li>
  );
}

const Dashboard: React.FC = () => (
  <div className='overflow-hidden'>
    <div style={{ backgroundColor: "#080526" }}>
      <section id="features" className="flex md:flex-row flex-col sm:py-16 py-6">
        <div className="flex-1 flex justify-center items-start pl-12 pr-1 flex-col">
          <h2 className="font-poppins font-semibold xs:text-[18px] text-[40px] text-gradient xs:leading-[76.8px] leading-[66.8px] w-full">
            Offrez-vous la clé du succès avec  Octal ERP pour Etre Rapidement Performant
          </h2>
          <p className="font-poppins font-normal text-dimWhite text-[25px] leading-[30.8px] max-w-[470px] mt-5">
            De la conception au SAV, en passant par la relation client (CRM), les achats, la fabrication, les expéditions et la facturation, OCTAL permet de gérer les principales TAL figure parmi les progiciels les plus diffusés et installés sur le marché ORACLE français, ce qui est un gage de fiabilité, de pérennité et d’évolutivité de celui-ci.
          </p>
        </div>
        <div className="flex-1 flex justify-center items-center md:ml-10 ml-0 md:mt-0 mt-10 relative flex-col">
          {features.map((feature, index) => (
            <FeatureCard key={feature.id} {...feature} index={index} />
          ))}
        </div>
      </section>

      <section className="flex-col flexCenter overflow-hidden bg-feature-bg bg-center bg-no-repeat py-24 sm:py-16 mt-14">
        <div className="max-container padding-container relative w-full flex justify-between">
          <div className="flex flex-1 lg:min-h-[900px]">
            <Image
              src="/ergonomie.jpg"
              alt="ergonomie"
              width={500}
              height={1000}
              className="absolute top-[13%] z-10 hidden max-w-[1500px] rotate-[15deg] md:-left-16 lg:flex 3xl:left-20"
            />
          </div>
          <div className="z-20 flex w-full flex-col lg:w-[60%] p-6 lg:mr-10">
            <div className='relative'>
              <Image
                src="/monitor.png"
                alt="monitor"
                width={50}
                height={50}
                className="absolute left-[-5px] top-[-4px] w-10 lg:w-[50px]"
              />
              <h2 className="lg:bold-64 font-poppins font-semibold xs:text-[18px] text-[40px] pt-8 text-gradient">Ergonomie Efficace</h2>
            </div>
            <ul className="mt-10 grid gap-10 md:grid-cols-2 lg:mg-20 lg:gap-20">
              {FEATURES.map((feature) => (
                <FeatureItem key={feature.title} title={feature.title} icon={feature.icon} description={feature.description} />
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="modules" className=" py-6">
  <h2 className="lg:bold-64 font-poppins font-semibold xs:text-[18px] text-[40px] pt-8 text-gradient text-center">
    Modules
  </h2>
  <div className="max-w-7xl mx-auto">
    <FeatureSlider />
  </div>
</section>


    </div>
    <Footer />
  </div>
);

export default Dashboard;