"use client";
import React, { useState } from 'react';
import { motion, useAnimation }  from 'framer-motion';
import Lottie from 'lottie-react';
import { useInView } from 'react-intersection-observer';
import { Tab } from '@headlessui/react';
import Footer from "@/components/Footer";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
};
const flipVariants = {
  initial: { rotateY: 0 },
  animate: { rotateY: 180 },
};
const hoverEffect = {
  scale: 1.1,
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.15)",
};
const Page = () => {
  const { ref: inViewRef, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const controls = useAnimation();
  const [isFlipped, setIsFlipped] = useState(false);
  const toggleFlip = () => setIsFlipped(!isFlipped);
  if (inView) {
    controls.start('animate');
  }
  return (
    <div>
    <div className="min-h-screen relative overflow-hidden p-8 text-black font-sans " style={{ backgroundColor: '#061436' }}>
      
    

      <motion.div className="container mx-auto relative z-10" variants={stagger} initial="initial" animate="animate">
        <motion.div className="mb-12 text-center" variants={fadeInUp}>
          <h1 className="text-6xl font-extrabold mb-4 text-gray-50">Octal CRM</h1>
          <p className="text-2xl mb-4 text-gray-50">Le succès d’une entreprise est la résultante d’un travail efficace de sa force commerciale en leur donnant les moyens de réellement travailler ensemble, tout en restant constamment connecté au système central.
      Développée avec une interface légère, Octal CRM s’appuie sur les fondamentaux et la richesse fonctionnelle de la gestion de la relation client et commerciale d’Octal ERP.
      </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          <motion.div className=" p-6 bg-white rounded-lg shadow-2xl " variants={cardVariants} whileHover={hoverEffect}>
            <h2 className="text-2xl font-bold mb-2">Gestion du Planning</h2>
            <p className='text-xl'>Gérer le Planning et Agenda du personnel constituant votre force de vente.</p>
          </motion.div>
          <motion.div className="p-6 bg-white rounded-lg shadow-lg" variants={cardVariants} whileHover={hoverEffect}>
            <h2 className="text-2xl font-bold mb-2">Clients et Prospects</h2>
            <p className='text-xl'>Gérer les nouveaux clients, prospects et contacts.</p>
          </motion.div>
          <motion.div className="p-6 bg-white rounded-lg shadow-lg" variants={cardVariants} whileHover={hoverEffect}>
            <h2 className="text-2xl font-bold mb-2">Analyse des Devis</h2>
            <p className='text-xl'>Saisir et analyser, en temps réel, les devis ainsi que les données concurrentes.</p>
          </motion.div>
          <motion.div className="p-6 bg-white rounded-lg shadow-lg" variants={cardVariants} whileHover={hoverEffect}>
            <h2 className="text-2xl font-bold mb-2">Actions Internes</h2>
            <p className='text-xl'>Gérer les actions internes, clients et prospects telles que mailing, appel, relance, compte-rendu de visite pour assurer un suivi efficace des offres.</p>
          </motion.div>
          <motion.div className="p-6 bg-white rounded-lg shadow-lg" variants={cardVariants} whileHover={hoverEffect}>
            <h2 className="text-2xl font-bold mb-2">Diffusion de l’Information</h2>
            <p className='text-xl'>Assurer la diffusion de l’information, des statistiques, des indicateurs et des documents entre les différents collaborateurs.</p>
          </motion.div>
        </div>

        <motion.div className="mb-12 text-center mt-16" variants={fadeInUp}>
          <h1 className="text-6xl font-extrabold mb-4 text-white">Octal E-Commerce</h1>
          <p className=" mb-4 text-white text-2xl">Un seul système d’information intégrant, en temps réel, l’ensemble des canaux de ventes de votre société. On trouve sur le marché une multitude de logiciel de vente en ligne, mais une solution de E-Commerce n’est pas efficace sans les fondamentaux d’une gestion commerciale éprouvée.
          Développée avec une interface légère, Octal E-Commerce se base sur la gestion commerciale d’Octal ERP et répond parfaitement à la mise en ligne des pièces de rechange et des articles négoces au service des clients.</p>
        </motion.div>

        <motion.div className="mb-12 text-center mt-16" ref={inViewRef} variants={fadeInUp} initial="initial" animate={controls}>
          <h1 className="text-6xl font-extrabold mb-4 text-white ">Octal Mobilité</h1>
          <p className=" mb-4 text-white text-2xl">Le module Service Client est déjà très riche et complet au sein même d’Octal-ERP, le voici qu’il prend ses aises et son autonomie pour prendre en compte tous les besoins de mobilité pour le personnel nomade de votre société.
          Développée avec une interface légère, Octal Mobilité pourra être utilisée à partir de PC portable ou directement depuis un téléphone portable de type PDA, smartphone ou autres technologies.</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div className="p-6 bg-white rounded-lg shadow-lg" variants={cardVariants} whileHover={hoverEffect}>
            <h2 className="text-2xl font-bold mb-2">Planning et Agenda</h2>
            <p className='text-xl'>Gérer le Planning et Agenda du personnel technique nomade.</p>
          </motion.div>
          <motion.div className="p-6 bg-white rounded-lg shadow-lg" variants={cardVariants} whileHover={hoverEffect}>
            <h2 className="text-2xl font-bold mb-2">Interventions garanties</h2>
            <p className='text-xl'>Gérer les interventions au titre des garanties ou des contrats de maintenance sur les équipements clients.</p>
          </motion.div>
          <motion.div className="p-6 bg-white rounded-lg shadow-lg" variants={cardVariants} whileHover={hoverEffect}>
            <h2 className="text-2xl font-bold mb-2">Réparations Client</h2>
            <p className='text-xl'>Gérer les réparations à effectuer directement chez les clients.</p>
          </motion.div>
          <motion.div className="p-6 bg-white rounded-lg shadow-lg" variants={cardVariants} whileHover={hoverEffect}>
            <h2 className="text-2xl font-bold mb-2">Actions Qualités</h2>
            <p className='text-xl'>Gérer les demandes et actions qualités liées aux équipements clients.</p>
          </motion.div>
          <motion.div className="p-6 bg-white rounded-lg shadow-lg" variants={cardVariants} whileHover={hoverEffect}>
            <h2 className="text-2xl font-bold mb-2">Suivi des interventions</h2>
            <p className='text-xl'>Saisir et assurer, en temps réel,  le suivi des interventions tels que les compte-rendus, les temps passés, les pièces de rechange consommées ou les coûts supplémentaires qui y sont affectés.</p>
          </motion.div>
        </div>
      </motion.div>


      <div className="container mx-auto mt-8 sm:mt-20">
        <Tab.Group>
          <Tab.List className="flex flex-wrap p-1 space-x-2 rounded-xl" style={{ backgroundColor: '#E2CBFF' }}>
            {['Octal Décisionnel', 'Octal Connexion', 'Octal Code à Barres', 'Solutions Métiers'].map((tab) => (
              <Tab key={tab} className={({ selected }) =>
                selected
                  ? 'flex-1 py-2.5 text-base sm:text-xl leading-5 font-medium text-black bg-white shadow rounded-lg'
                  : 'flex-1 py-2.5 text-base sm:text-xl leading-5 font-medium text-black rounded-lg'
              }>
                {tab}
              </Tab>
            ))}
          </Tab.List>

          <Tab.Panels>
            <Tab.Panel>
              <motion.div variants={fadeInUp} initial="initial" animate="animate" className="mt-8 p-4 sm:p-6 bg-white rounded-xl shadow-xl">
                <h1 className="text-2xl sm:text-4xl font-extrabold mb-4">Octal Décisionnel</h1>
                <motion.p variants={cardVariants} className="mb-4 text-base sm:text-2xl">La Solution Octal-Décisionnel permet de façon transversale d’intégrer des indicateurs au sein même des écrans d’Octal ERP, de créer des alertes, des tableaux de bord et des visualisations graphiques sur les données de production.</motion.p>
                <motion.p variants={cardVariants} className="mb-4 text-base sm:text-2xl">Ces mêmes données peuvent être analysées avec les outils d’infocentre tels que BO, Cognos ou avec les nouveaux outils ORACLE, préconisés par AXIN que sont les outils d’Oracle® Business Intelligence permettant d’obtenir une plus grande visibilité et une meilleure analyse des activités de votre entreprise.</motion.p>
                <motion.p variants={cardVariants} className="text-base sm:text-2xl">Parmi ces outils Oracle, AXIN met en œuvre tout particulièrement Oracle Discoverer qui permet aux utilisateurs de construire et d’actualiser de façon dynamique et en temps réel  des tableaux de bord pour prendre les bonnes décisions grâce aux analyses dynamiques multi-axes.</motion.p>
              </motion.div>
            </Tab.Panel>

            <Tab.Panel>
              <motion.div variants={fadeInUp} initial="initial" animate="animate" className="mt-8 p-4 sm:p-6 bg-white rounded-xl shadow-xl">
                <h1 className="text-2xl sm:text-4xl font-extrabold mb-4">Octal Connexion</h1>
                <motion.p variants={cardVariants} className="mb-4 text-base sm:text-2xl">Dans le cadre d’une organisation en plusieurs sociétés au sein même d’Octal ERP, les flux multi-sociétés tels que commandes fournisseurs-clients, livraison-réception et de facturations peuvent être automatisés.</motion.p>
                <motion.p variants={cardVariants} className="mb-4 text-base sm:text-2xl">Dans un contexte avec des applications hétérogènes, nous mettons en œuvre une solution d’échange de type EAI ( Enterprise Application Integration ) et plus particulièrement celle de notre partenaire technologique.</motion.p>
                <motion.p variants={cardVariants} className="mb-4 text-base sm:text-2xl">Un autre volet d’Octal Connexion est l’EDI ( Electronic Data Interchange ) qui permet l’échange automatique depuis les marchés clients, constitués de données prévisionnelles et fermes, et les commandes clients jusqu’aux livraisons et facturations clients.</motion.p>
                <motion.p variants={cardVariants} className="mb-4 text-base sm:text-2xl">D ‘autres formes d’échanges existent telles que l’intégration automatique, via le module GED ( Gestion Electronique de Document ) d’Octal ERP, de plans ou documents scannés, la lecture automatique de factures fournisseurs, etc …</motion.p>
              </motion.div>
            </Tab.Panel>

            <Tab.Panel>
              <motion.div className="mt-8 p-4 sm:p-6 bg-white rounded-xl shadow-xl">
                <h1 className="text-2xl sm:text-4xl font-extrabold mb-4">Octal Code à Barres</h1>
                <motion.ul className="list-disc list-inside space-y-2 mb-4 text-base sm:text-2xl" variants={cardVariants}>
                  <li>Paramétrer des scénarios de suivi de production allant de la présence et/ou prise de poste jusqu’à la déclaration de production avec traçabilité des numéros de séries et/ou lots, personne, équipe ou machine ayant réalisée les opérations.</li>
                  <li>Lecteurs Code à Barres avec système d’exploitation Windows CE permettent également et en temps réel, via une connexion Wi-Fi, de compléter la gamme d’outils pour fiabiliser, simplifier les transactions répétitives et, indirectement, améliorer les taux de services aux clients.</li>
                </motion.ul>
                <h2 className="text-xl sm:text-3xl font-semibold my-4">Fonctionnalités principales :</h2>
                <motion.ul className="list-disc list-inside space-y-2 text-base sm:text-2xl" variants={cardVariants}>
                  <li>Suivi de production : Temps présence, hors/de production par OF ou groupe d’OF</li>
                  <li>Consommation et Fabrication</li>
                  <li>Contrôle expédition : Colisage, Gestion des bons de préparation</li>
                  <li>Gestion de stock : Inventaires, Mouvements d’Entrée/Sortie et de transfert de stock</li>
                </motion.ul>
              </motion.div>
            </Tab.Panel>

            <Tab.Panel>
              <motion.div className="mt-8 p-4 sm:p-6 bg-white rounded-xl shadow-xl">
                <h1 className="text-2xl sm:text-4xl font-extrabold mb-4">Solutions Métiers</h1>
                <motion.p variants={cardVariants} className="mb-4 text-base sm:text-2xl">Toutes nos solutions métiers se basent sur la dernière version d’Octal ERP pour bénéficier de la même manière de la richesse des fonctionnalités transversales. Jusqu’à aujourd’hui, deux grands domaines d’activité se dégagent du standard Octal :</motion.p>
                <h2 className="text-xl sm:text-3xl font-semibold my-4">Octal BTP</h2>
                <motion.p variants={cardVariants} className="mb-4 text-base sm:text-2xl">Depuis la gestion des devis techniques, appelés plus communément Débours, en passant par le réapprovisionnement direct des chantiers, en terme de marchandises et matériels et ceci jusqu’à la gestion et la facturation des situations. Pour une optimisation et un suivi en temps réel des affaires, AXIN propose une solution de géolocalisation de la flotte intervenant sur les chantiers.</motion.p>
                <h2 className="text-xl sm:text-3xl font-semibold my-4">Octal Confection</h2>
                <motion.p variants={cardVariants} className="mb-4 text-base sm:text-2xl">Dotée d’un puissant configurateur taille/colorie, la solution confection assure le suivi de production avec une traçabilité par paquet.</motion.p>
              </motion.div>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>

        <motion.div
          className="relative mt-16"
          onClick={() => toggleFlip()}
          variants={flipVariants}
          initial="initial"
          animate={isFlipped ? "animate" : "initial"}
        >
          <div className="w-48 sm:w-64 h-36 sm:h-48 bg-white rounded-xl shadow-xl mx-auto cursor-pointer">
            <div className={`absolute inset-0 flex items-center justify-center text-center transition-transform ${isFlipped ? 'rotate-y-180' : ''}`}>
              <div className="front text-lg sm:text-2xl">
              
                Découvrez Octal erp </div>
              <div className="back text-lg sm:text-2xl absolute inset-0 rotate-0">
              
                en cours...</div>
            </div>
          </div>
        </motion.div>
      </div>
    
    </div>
    <Footer/>
    </div>
  );
};

export default Page;