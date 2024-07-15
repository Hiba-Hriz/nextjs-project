"use client"
import React,{ useState } from 'react';
import Slider, { Settings } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';

const logos = [
  { src: '/logo1.png', alt: 'Logo 1' },
  { src: '/logo2.png', alt: 'Logo 2' },
  { src: '/logo3.jpg', alt: 'Logo 3' },
  { src: '/l.png', alt: 'Logo 4' },
  { src: '/logo5.png', alt: 'Logo 5' },
  { src: '/logo6.png', alt: 'Logo 6' },
  { src: '/logo7.jpg', alt: 'Logo 7' },
  { src: '/logo8.png', alt: 'Logo 8' },
  { src: '/logo9.jpg', alt: 'Logo 9' },
  { src: '/logo10.gif', alt: 'Logo 10' },
  { src: '/logo11.jpg', alt: 'Logo 11' },
  { src: '/logo12.jpg', alt: 'Logo 12' },
  { src: '/logo13.jpg', alt: 'Logo 13' },
  { src: '/logo14.png', alt: 'Logo 14' },
  { src: '/logo15.jpg', alt: 'Logo 15' },
  { src: '/logo16.png', alt: 'Logo 16' },
  { src: '/logo17.png', alt: 'Logo 17' },
  { src: '/logo18.gif', alt: 'Logo 18' },
  { src: '/logo19.jpg', alt: 'Logo 19' },
  { src: '/logo20.png', alt: 'Logo 20' },
  { src: '/logo21.png', alt: 'Logo 21' },
  { src: '/logo22.png', alt: 'Logo 22' },
  { src: '/logo23.png', alt: 'Logo 23' },
];

const References = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          dots:false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots:false,
        },
      },
    ],
  };

  return (
    <div className="py-20">
      <h1 className="heading">
        <span className="text-black">Nos références</span>
      </h1>
      <h2 className="justify-center text-blue-950 text-center text-3xl font-bold mt-6">
        Parmi ceux qui nous font confiance :
      </h2>
      <div className="flex justify-center mt-6">
        <div className="wave-container relative w-64 h-10 flex justify-between">
          {[...Array(10)].map((_, i) => (
            <span key={i} className="wave-dot w-3 h-3 bg-blue-950 rounded-full"></span>
          ))}
        </div>
      </div>
      <div className="mt-10 mx-10">
        <Slider {...settings}>
          {logos.map((logo, index) => (
            <div key={index} className="p-2">
              <div className="flex items-center justify-center h-32 logo bg-light-mode border rounded-xl">
                <Image src={logo.src} alt={logo.alt} width={150} height={80} />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default References;