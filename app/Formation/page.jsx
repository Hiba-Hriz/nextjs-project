'use client';
import React, { useState, useEffect } from 'react';
import { HashLoader } from 'react-spinners';
import Image from 'next/image';
import hero from "@/public/hero.gif";
import brain from "@/public/brain.gif";
import management from "@/public/management.jpg"
import vlogger from "@/public/vlogger.gif"
import java from "@/public/java.jpg"
import itil from "@/public/itil.png"
import Oracle from "@/public/Oracle.png"
import dba from "@/public/dba.jpg"
import mysql from "@/public/mysql.png"
import './page.css';
import Feature from "@/components/feature/Feature";
import "@/components/feature/feature.css"
import Footer from "@/components/Footer";
import MagicButton from '@/components/ui/MagicButton';
import { FaLocationArrow } from 'react-icons/fa6';

const featuresData = [
  {
    title: 'Excel 2013 : Prise main (1 j )',
  },
  {
    title: 'Excel 2013 : Perfectionnement (2 j)',
  },
  {
    title: 'Excel 2013 : Fonctions avancées',
  },
  {
    title: 'MS Project 2013 : Introduction (3 j)',
  },
  {
    title: 'MS Project 2013 : Piloter un projet',
  },
  {
    title: 'Word 2013 : Prise en main (1 j)',
  },
  {
    title: 'Word 2013 : perfectionnement (2 j)',
  },
  {
    title: 'Word 2013 : prise en main et perfectionnement',
  },
];

const javaparagraph = [
  {
    title: '- Programmation JAVA et conception objet Eclipse (5 j) ',
  },
  {
    title: '- Développer avec Eclipse (5 j)'
  },
  {
    title: '- Développer avec Eclipse (5 j)',
  },
  {
    title: '- Swing, développement des applications JAVA (5 j)',
  },
  {
    title: '- Développer avec Python (5 j)',
  },
  {
    title: '- Création d’application web d’entreprise avec JEE et Oracle Weblogic (3 j)',
  },
  {
    title: '- Création d’application web d’entreprise avec JEE et GLASSFISH (3 j)',
  },
  {
    title: '- Maîtriser Java sans connaitre  la programmation orientée objet (5 j)',
  },
];


const Data = [
  {
    title: 'Introduction au CMMI (3 j)',
  },
  {
    title: 'Urbanisation du système <br> d’Information (S.I) (2 j)',
  },
  {
    title: 'Cobit 5 Foundation certifieré (3 j )',
  },
  {
    title: 'Cobit 5 Implémentation certifié  (3 j)',
  },
  {
    title: 'Piloter par les tableaux de bord (2 j)',
  },
  {
    title: 'Analyse et conception avec UML 2.0 (3 j)',
  },
  {
    title: 'Plan de continuité et de reprise après sinistre',
  },
  {
    title: 'Sécurité des SI , état de l’art',
  },
  {
    title: 'Réaliser un Business Plan réaliste et convaincant',
  },
];
const lTIL = [
  {
    title: 'ITIL Foundation (3 j)',
  },
  {
    title: 'ITIL Intermidiate Capability: Opération Support & Analysis (OSA) (5 j)',
  },
  {
    title: 'ITIL Intermidiate Capability: Service Offering and Agreement (OSA)(5 j)',
  },
  {
    title: 'ITIL Intermidiate Lifecycle : Service Transition (ST) (5 j)',
  },
  {
    title: 'ITIL Intermidiate Lifecycle : Service Opération (SO)',
  },
  {
    title: 'Synthèse du référentiel ITIL (2j)',
  },
  
];

const bd = [
  {
    title: 'Administration avancée de MySQL (2 j)',
  },
  {
    title: 'Administration base de données Oracle 12c (5 j)',
  },
  {
    title: 'Oracle 12c – Les fondamentaux (5 j)',
  },
  {
    title: 'Sauvegarde et restauration d’Oracle 12c (4 j)',
  },
  {
    title: 'Mise en place d’oracle 12c (2 j)',
  },
  {
    title: 'Interroger des bases de données avec le langage SQL (3 j)',
  },
  {
    title: 'Administration Oracle 10g 11g (5 j)',
  },
  {
    title: 'Administrateur base de données Oracle 11g (5 j)',
  },
  {
    title: 'Oracle Optimisation (3 j)',
  },
  {
    title: 'Oracle: Débuter avec Oracle, les bases (5 j)',
  },
  {
    title: 'Administrer MySQL (5 j)',
  },
  {
    title: 'PostgreSQL, administration (3 j)',
  },
];
const scrollToOffres = () => {
  const featuresSection = document.getElementById('offres');
  if (featuresSection) {
    featuresSection.scrollIntoView({ behavior: 'smooth' });
  }
};

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="overflow-hidden">
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <HashLoader size={50} color={"#123abc"} loading={loading} />
        </div>
      ) : (
        <div>
          <div className="gpt3__header section__padding" id="home">
            <div className="gpt3__header-content">
              <h1 className="gradient__text">Développez aujourd&apos;hui les compétences de demain</h1>
              <div className="">
                <MagicButton
                  title="Découvrir nos offres"
                  icon={<FaLocationArrow />}
                  position="right"
                  handleClick={scrollToOffres}
                  otherClasses="!bg-[#161A31]"
                />
              </div>
            </div>
            <div className="gpt3__header-image">
              <Image src={hero} alt="Mise" />
            </div>
          </div>

          <div className="gpt3__features section__padding" id="offres">
            <div className="gpt3__features-heading">
              <div className="stars-container">
                <Image src={brain} alt="Stars" className="moveUpDown" width={100} height={50} />
                <Image src={brain} alt="Stars" className="moveUpDown middle-star" width={100} height={50} />
                <Image src={brain} alt="Stars" className="moveUpDown" width={100} height={50} />
              </div>
              <h1 className='text-gradient text'>Apprenez de nouvelles compétences et découvrez nos formations Microsoft</h1>
            </div>
            <div className="gpt3__features-container">
              {featuresData.map((item, index) => (
                <Feature key={index} title={<span dangerouslySetInnerHTML={{ __html: item.title }} />} />
              ))}
            </div>
          </div>

          

          <div className="gpt3__features section__padding">
            <div className="gpt3__features-heading">
              <div className="">
                <Image src={management} alt="" className=" moveUpDown" width={150} height={50} />
              </div>
              <h1 className='text-gradient text'>Management de SI</h1>
            </div>
            <div className="gpt3__features-container">
              {Data.map((item, index) => (
                <Feature key={index} title={<span dangerouslySetInnerHTML={{ __html: item.title }} />} />
              ))}
            </div>
          </div>


          <div className="gpt3__features section__padding">
            <div className="gpt3__features-heading">
              <div className=" stars-container">
                <Image src={vlogger} alt="" className="animated-gif" unoptimized width={100} height={50} />
                <Image src={vlogger} alt="" className="animated-gif middle" unoptimized width={100} height={50} />
                <Image src={vlogger} alt="" className="animated-gif" unoptimized width={100} height={50} />
              </div>  
                <h1 className='text-gradient text'>Développement Java, JEE</h1>
              </div>
              <div className="gpt3__features-container z-10">
                {javaparagraph.map((item, index) => (
                  <Feature key={index} title={<span dangerouslySetInnerHTML={{ __html: item.title }} />} />
                ))}
            </div>
            <div className="cover mt-6 ">
              <Image src={java} alt="Java Development" style={{ height: '250px', width:'250px' }} />
            </div>
          </div>


          <div className="gpt3__features section__padding" id="offres">
            <div className="gpt3__features-heading">
              <div className="stars-container">
                <Image src={itil} alt="" className="rotateBackForth" width={200} height={100} />
              </div>
              <h1 className='text-gradient text'>Management de lTIL</h1>
            </div>
            <div className="gpt3__features-container">
              {lTIL.map((item, index) => (
                <Feature key={index} title={<span dangerouslySetInnerHTML={{ __html: item.title }} />} />
              ))}
            </div>
          </div>

          <div className="gpt3__features section__padding" id="offres">
            <div className="gpt3__features-heading">
              <div className="stars-container">
                <Image src={Oracle} alt="" className="jumpUpRight" width={100} height={100} />
                <Image src={dba} alt="" className="jumpUpRight" width={100} height={100} />
                <Image src={mysql} alt="" className="jumpUpRight" width={100} height={100} />
              </div>
              <h1 className='text-gradient text'>Oracle, MySQL, PostgreSQL, SQL Server</h1>
            </div>
            <div className="gpt3__features-container">
              {bd.map((item, index) => (
                <Feature key={index} title={<span dangerouslySetInnerHTML={{ __html: item.title }} />} />
              ))}
            </div>
          </div>
          <Footer />
        </div>
      )}
    </main>
  );
};

export default Home;