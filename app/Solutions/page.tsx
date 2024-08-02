"use client";
import React, { ReactNode, useState, useEffect } from 'react';
import { HashLoader } from 'react-spinners';
import { motion, useAnimation, Variants, MotionProps } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Tab } from '@headlessui/react';
import Footer from "@/components/Footer";

const fadeInUp: Variants = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants: Variants = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: "easeOut" } },
};

const hoverEffect = {
  whileHover: { scale: 1.05, transition: { duration: 0.3, ease: "easeOut" } },
};

type AnimatedDivProps = MotionProps & {
  children: ReactNode;
  className?: string;
};

const AnimatedDiv: React.FC<AnimatedDivProps> = ({ children, ...props }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start('animate');
    }
  }, [controls, inView]);

  return (
    <motion.div ref={ref} initial="initial" animate={controls} {...props}>
      {children}
    </motion.div>
  );
};

const sections = [
  {
    title: 'Octal Décisionnel',
    content: (
      <motion.div variants={cardVariants} className="text-base sm:text-3xl">
        <p className="mb-4 text-xl">
          La Solution Octal-Décisionnel permet de façon transversale d’intégrer des indicateurs au sein même des écrans d’Octal ERP,
          de créer des alertes, des tableaux de bord et des visualisations graphiques sur les données de production.
        </p>
        <p className="mb-4 text-xl">
          Ces mêmes données peuvent être analysées avec les outils d’infocentre tels que BO, Cognos ou avec les nouveaux outils ORACLE,
          préconisés par AXIN que sont les outils d’Oracle® Business Intelligence.
        </p>
        <p className='text-xl'>
          Parmi ces outils Oracle, AXIN met en œuvre tout particulièrement Oracle Discoverer qui permet aux utilisateurs de construire
          et d’actualiser de façon dynamique et en temps réel des tableaux de bord pour prendre les bonnes décisions grâce aux analyses
          dynamiques multi-axes.
        </p>
      </motion.div>
    ),
  },
  {
    title: 'Octal Connexion',
    content: (
      <motion.div variants={cardVariants} className="text-base sm:text-3xl">
        <p className="mb-4 text-xl">
          Dans le cadre d’une organisation en plusieurs sociétés au sein même d’Octal ERP, les flux multi-sociétés tels que commandes
          fournisseurs-clients, livraison-réception et de facturations peuvent être automatisés.
        </p>
        <p className="mb-4 text-xl">
          Dans un contexte avec des applications hétérogènes, nous mettons en œuvre une solution d’échange de type EAI (Enterprise
          Application Integration) et plus particulièrement celle de notre partenaire technologique.
        </p>
        <p className='text-xl'>
          Un autre volet d’Octal Connexion est l’EDI (Electronic Data Interchange) qui permet l’échange automatique depuis les marchés
          clients, constitués de données prévisionnelles et fermes, et les commandes clients jusqu’aux livraisons et facturations clients.
        </p>
      </motion.div>
    ),
  },
  {
    title: 'Octal Code à Barres',
    content: (
      <motion.div variants={cardVariants} className="text-base sm:text-3xl">
        <p className="mb-4 text-xl">
          La Solution Octal Code à Barres permet, au sein même d’Octal ERP, de paramétrer des scénarios de suivi de production allant de
          la présence et/ou prise de poste jusqu’à la déclaration de production avec traçabilité des numéros de séries et/ou lots, personne,
          équipe ou machine ayant réalisée les opérations. Des lecteurs Code à Barres avec système d’exploitation Windows CE permettent
          également et en temps réel, via une connexion Wi-fi, de compléter la gamme d’outils pour fiabiliser, simplifier les transactions
          répétitives et, indirectement, améliorer les taux de services aux clients.
          <br />
          Les principales fonctionnalités de cette solution concerne les processus suivants :
          <br />
          <p className='font-bold'>Suivi de production</p>
          ◊ Temps présence, hors/de production par OF ou groupe d’OF<br/>
          ◊ Consommation et Fabrication
          <br/>
          <p className='font-bold'>Contrôle expédition</p>
          ◊ Colisage
          <br/>
          ◊ Gestion des bons de préparation
          <br/>
          Gestion de stock
          <br/>
          ◊ Gestion des inventaires
          <br/>
          ◊ Mouvements d’Entrée/Sortie et de transfert de stock
          <br/>
        </p>
      </motion.div>
    ),
  },
  {
    title: 'Solutions Métiers',
    content: (
      <motion.div variants={cardVariants} className="text-base sm:text-3xl">
        <p className="mb-4 text-xl">
          Toutes nos solutions métiers se basent sur la dernière version d’Octal ERP pour bénéficier de la même manière de la richesse des fonctionnalités transversales.
          <br /> Jusqu’à aujourd’hui, deux grands domaines d’activité se dégagent du standard Octal :
          <br /> ◊ Bâtiment et Travaux Public (BTP)
          <br /> ◊ Confection
          <br />
          <p className='font-bold'>Octal BTP</p>
          Depuis la gestion des devis techniques, appelés plus communément Débours, en passant par le réapprovisionnement direct des chantiers, en termes de marchandises et matériels et ceci jusqu’à la gestion et la facturation des situations.
          <br /> Pour une optimisation et un suivi en temps réel des affaires, AXIN propose une solution de géolocalisation de la flotte intervenant sur les chantiers.
          <br />
          <p className='font-bold'>Octal Confection</p>
          Dotée d’un puissant configurateur taille/colorie, la solution confection assure le suivi de production avec une traçabilité par paquet.
        </p>
      </motion.div>
    ),
  },
];

const Page = () => {
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
    <div className="bg-blue-900 text-white min-h-screen overflow-hidden">
      <div className="container mx-auto p-8 font-sans">
        <AnimatedDiv className="relative z-10" variants={stagger}>
          <AnimatedDiv className="mb-12 text-center" variants={fadeInUp}>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4">Octal CRM</h1>
            <p className="text-lg md:text-2xl mb-4">
              Le succès d’une entreprise est la résultante d’un travail efficace de sa force commerciale en leur donnant les moyens de réellement travailler ensemble, tout en restant constamment connecté au système central.
              Développée avec une interface légère, Octal CRM s’appuie sur les fondamentaux et la richesse fonctionnelle de la gestion de la relation client et commerciale d’Octal ERP.
            </p>
          </AnimatedDiv>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Gestion du Planning", description: "Gérer le Planning et Agenda du personnel constituant votre force de vente."},
              { title: "Clients et Prospects", description: "Gérer les nouveaux clients, prospects et contacts."},
              { title: "Analyse des Devis", description: "Saisir et analyser, en temps réel, les devis ainsi que les données concurrentes."},
              { title: "Actions Internes", description: "Gérer les actions internes, clients et prospects telles que mailing, appel, relance, compte-rendu de visite pour assurer un suivi efficace des offres."},
              { title: "Diffusion de l’Information", description: "Assurer la diffusion de l’information, des statistiques, des indicateurs et des documents entre les différents collaborateurs."}
            ].map((item, index) => (
              <AnimatedDiv key={index} className="p-6 bg-white text-black rounded-lg shadow-lg" variants={cardVariants} {...hoverEffect}>
                <h2 className="text-2xl font-bold mb-2">{item.title}</h2>
                <p className="text-xl">{item.description}</p>
              </AnimatedDiv>
            ))}
          </div>

          <AnimatedDiv className="mb-12 text-center mt-16" variants={fadeInUp}>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4">Octal E-Commerce</h1>
            <p className="text-lg md:text-2xl mb-4">
              Un seul système d’information intégrant, en temps réel, l’ensemble des canaux de ventes de votre société.
              Développée avec une interface légère, Octal E-Commerce se base sur la gestion commerciale d’Octal ERP et répond parfaitement à la mise en ligne des pièces de rechange et des articles négoces au service des clients.
            </p>
          </AnimatedDiv>

          <AnimatedDiv className="mb-12 text-center mt-16" variants={fadeInUp}>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4">Octal Mobilité</h1>
            <p className="text-lg md:text-2xl mb-4">
              Le module Service Client est déjà très riche et complet au sein même d’Octal-ERP.
              Développée avec une interface légère, Octal Mobilité pourra être utilisée à partir de PC portable ou directement depuis un téléphone portable de type PDA, smartphone ou autres technologies.
            </p>
          </AnimatedDiv>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Planning et Agenda", description: "Gérer le Planning et Agenda du personnel technique nomade."},
              { title: "Interventions garanties", description: "Gérer les interventions au titre des garanties ou des contrats de maintenance sur les équipements clients."},
              { title: "Réparations Client", description: "Gérer les réparations à effectuer directement chez les clients."},
              { title: "Actions Qualités", description: "Gérer les demandes et actions qualités liées aux équipements clients."},
              { title: "Suivi des interventions", description: "Saisir et assurer, en temps réel, le suivi des interventions tels que les compte-rendus, les temps passés, les pièces de rechange consommées ou les coûts supplémentaires qui y sont affectés."}
            ].map((item, index) => (
              <AnimatedDiv key={index} className="p-6 bg-white text-black rounded-lg shadow-lg" variants={cardVariants} {...hoverEffect}>
                <h2 className="text-2xl font-bold mb-2">{item.title}</h2>
                <p className="text-xl">{item.description}</p>
              </AnimatedDiv>
            ))}
          </div>
        </AnimatedDiv>

        


        <AnimatedDiv className="container  mt-8 sm:mt-20 text-black" variants={fadeInUp}>
      {sections.map((section, index) => (
        <motion.section
          key={index}
          initial="initial"
          animate="animate"
          variants={fadeInUp}
          className="py-12 -mx-8 bg-white mb-12 rounded-lg shadow-lg"
        >
          <AnimatedDiv className="px-4 sm:px-8 lg:px-12" variants={fadeInUp}>
            <h2 className="text-3xl sm:text-5xl font-extrabold mb-6 text-center ">{section.title}</h2>
            {section.content}
          </AnimatedDiv>
        </motion.section>
      ))}
    </AnimatedDiv>




      </div>
      <Footer />
    </div>
      )}
    </main>
  );
};

export default Page;