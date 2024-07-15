"use client"
import React, { useState, useEffect } from 'react';
import { HashLoader } from 'react-spinners';
import Footer from "@/components/Footer";
import MaxWidthWrapper from "@/components/ui/MaxWidthWrapper";
import ContactForm from "@/components/ContactForm";
import { BackgroundGradientAnimation } from "@/components/GradientBg";
import Image from 'next/image';
import position from "@/public/position.png"
import phone from "@/public/phone.png";
import email from "@/public/email.png";
import fax from "@/public/fax.png";
const ContactInfoItem = ({ text, imageSrc }) => (
  <div className="flex flex-col items-center mb-4">
    <div className={`w-[64px] h-[64px] rounded-full flex justify-center items-center bg-white mb-2`}>
      <Image src={imageSrc} alt="icon" height={100} width={100} className="w-[100%] h-[100%] object-contain" />
    </div>
    <p className="contact-line text-white font-bold text-center">{text}</p>
  </div>
);
const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <main>
    {loading ? (
      <div className="flex justify-center items-center h-screen">
        <HashLoader size={50} color={"#123abc"} loading={loading} />
      </div>
    ) : (
   <div>
    <MaxWidthWrapper>
      <div className="contact-page-container">
        <h2 className="page-title">Nous contacter</h2> 
        <div className="contact-info relative overflow-hidden rounded-lg"> 
          <BackgroundGradientAnimation className="absolute inset-0 z-0"/> 
          <div className="relative z-10 text-white font-bold text-center p-8 "> 
          
          <ContactInfoItem text="82, Av Habib Bourguiba, Immeuble Tunisie Télécom, Bureau N°10, étage 4, 2080 Ariana-Tunis" imageSrc={position} />
            <ContactInfoItem text="+216 71 701 172" imageSrc={phone} />
            <ContactInfoItem text="msi-consultants @gnet.com" imageSrc={email} />
            <ContactInfoItem text="+216 71 707 731" imageSrc={fax} />
          </div>
        </div>

        <h1 className="page-title">Formulaire de contact</h1>
        <ContactForm />
      </div>
    </MaxWidthWrapper>
    <Footer />
  </div>
    )}
    </main>
  );
};

export default Home;