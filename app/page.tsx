"use client"
import React, { useState, useEffect } from 'react';
import Head from 'next/head'; 
import Competences from "@/components/Competences";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Octalerp from "@/components/Octalerp";
import Octalsolutions from "@/components/Octalsolutions";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import { HashLoader } from 'react-spinners';
import References from '@/components/ui/References';
export default function Home() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    
    const timer = setTimeout(() => setLoading(false), 2000);

    return () => clearTimeout(timer);
  }, []);
  return (
    
    

    <main className="relative bg-[#ffffff] flex justify-center  items-center flex-col 
     mx-auto sm:px-10 px-5 overflow-clip">
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <HashLoader size={50} color={"#123abc"} loading={loading} />
        </div>
      ) : (
      <div className="max-w-7xl w-full">
        
        
        <Hero />
        <Grid />
        <References />
        <Experience/>
        <Competences/>
        <Octalerp/>
        <Octalsolutions />
        <Footer/>
      </div>
      )}
    </main>

   
  
);
}
