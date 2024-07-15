"use client"
import React, { useEffect, useRef } from 'react';
import Slider, { Settings } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import MovingRed from './ui/MovingRed';

interface Feature {
  title: string;
  description: string;
}

const features: Feature[] = [
  
  
  {
    title: 'Production et suivi d’atelier',
    description: 'Les groupements d’OF, la planification à capacité finie ou infinie, amont ou aval, le calcul de charges, la gestion des manquants et l’ordonnancement constituent de nombreux outils d’aide au lancement. La distribution du travail dans les ateliers s’effectue au moyen de fiche suiveuse, bon de travail et bon de sortie matière. Le suivi d’atelier par code à barres permet la saisie des temps de présence, des temps passés et des quantités consommées et fabriquées par phase, OF ou groupe d’OF en tenant compte des réservations et équivalences.',
  },
  
  {
    title: 'Qualité',
    description: 'Chaque entrée en stock peut faire l’objet d’un contrôle global qualitatif ou détaillé via la gamme de contrôle, l’échantillonnage et la déclaration de non conformité constatée. Les non conformités potentielles et les actions préventives traitent le risque de non qualité. La gestion de la non conformité permet de créer et valoriser l’action curative, créer et valider les actions correctives, créer les demandes de dérogation client et tracer les demandes de dérogation fournisseur. La notation automatique des fournisseurs analyse le respect des délais, des quantités et la qualité des produits livrés.',
  },
  
  
  {
    title: 'Commercial-CRM',
    description: 'La saisie et l’analyse des offres concurrentes combinées aux campagnes et actions clients telles que mailing, appel, relance, compte rendu de visite participent à un suivi efficace des devis prospects ou clients.\n\nLes prévisions de vente, les marchés clients, le calcul du délai à la commande contribuent au respect des délais de livraison imposés par le client.\n\nLe rating, l’assurance crédit, la gestion des encours et les blocages constituent une aide précieuse à la gestion du risque client.',
  },
  {
    title: 'Gestion de Projet',
    description: 'Elle permet d’organiser méthodologiquement la réalisation d’un produit, généralement sur mesure, répondant aux exigences et attentes du client.\n\nElle prend en compte les conditions de coût et de délais négociés avec le client et permet de piloter l’activité avant la fabrication (conception, plans), pendant et après (garantie, maintenance).',
  },
  {
    title: 'Données Techniques',
    description: 'Qu’elles soient issues de la CAO/DAO, créées manuellement par duplication d’autres entités ou générées par le configurateur, les données techniques permettent de définir l’article, ses unités, ses équivalents, ses commentaires, ses indices, sa nomenclature multi-niveaux et ses gammes basées sur des ressources homme et machine associées à des calendriers.',
  },
  {
    title: 'Configurateur',
    description: 'Complément indispensable des données techniques, le configurateur génère dès le devis ou la commande la nomenclature et la gamme du produit fini personnalisé selon les besoins du client et calcule le prix de vente au fur et à mesure de la configuration. OCTAL est un des rares ERP intégrant un configurateur paramétrable au travers de macros, calculs et tableaux croisés.',
  },
  {
    title: 'Service Client',
    description: 'La description fine des équipements clients, des garanties et contrats de services leur étant associée, la gestion complète des interventions, retours et réparations, ainsi que l’élaboration de circuits de traitements efficaces des demandes vous permettent d’articuler les flux de gestion du Service Client autour d’outils performants et structurants.',
  },
  {
    title: 'Maintenance',
    description: 'Chaque équipement est identifié par un code, un numéro de série, un type et une famille, localisé par un site et un centre, tracé par fournisseur, fabricant, commande et réception fournisseur, date de mise en service et date de fin de garantie, décrit par des commentaires, spécifié par des caractéristiques techniques, illustré par des documents techniques, des photos et des plans associés et structuré sur plusieurs niveaux de nomenclatures.Chaque équipement possède une liste de pièces de rechange et une liste d’opérations d’entretien ou de contrôle, avec pour chacune de ces listes des fréquences de réalisation et un historique des interventions avec leur coût prévu par rapport à un budget et leur coût réalisé en fonction des consommations et des temps passés saisis.',
  },
  {
    title: 'Plan Industriel et Commercial (PIC)',
    description: 'La génération de prévisions de ventes, de budgets de réalisations (achat, sous-traitance, main d’ oeuvre) et de plans des charges à partir des prévisions issues de simulations de PIC basées sur des horizons temporels et des niveaux d’agrégations entièrement paramétrables vous aidera à piloter votre activité à moyen et long terme.',
  },
  {
    title: 'Plan Directeur de Production(PDP)',
    description: 'Les prévisions de ventes, qu’elles aient été générées à partir du PIC, d’historique de ventes, des appels de marchés clients ou saisies manuellement pourront être intégrées au périmètre des éléments pris en compte par le moteur de calcul du simulateur de PDP, les résultats produits par celui-ci pouvant être validés de manière globale ou partielle et modifiés manuellement.',
  },
  {
    title: 'Calcul des Besoins Nets (CBN)',
    description: 'Véritable moteur de l’ERP OCTAL, le CBN génère les ordres d’achat, de fabrication et de sous-traitance ainsi que les mouvements inter-site à partir de tout ou partie des devis, commandes clients, prévisions de vente et lancement manuel. Il tient compte des paramètres d’approvisionnement, des stocks à date, des dates de péremption et assure une traçabilité complète des besoins.',
  },
  {
    title: 'Planification, et ordonnancement',
    description: 'Le module de planification OCTAL rassemble les outils permettant non seulement d’organiser en amont son atelier de fabrication (sélection manuelle ou automatique des OF liés à une affaire ou une ressource de fabrication, vision détaillée du plan de charge, diagramme de GANTT,…) mais également de réagir rapidement à toute perturbation en évaluant la faisabilité des différents plans d’actions envisageables (décalage ou éclatement d’OF, transformation d’opérations internes en opérations sous-traitées,… ).',
  },
  {
    title: 'Gestion des Achats',
    description: 'La consultation des stocks par centre et emplacement, l’inventaire général et tournant, les mouvements multi-centre, l’analyse ABC sont des fonctions classiques. OCTAL propose par ailleurs des fonctionnalités innovantes telles que la traçabilité multi-niveaux ascendante et descendante par lot et série ainsi que la visualisation du stock futur à date en fonction des différents types de mouvement tels que : réception fournisseur, sortie sur OF ou livraison client.',
  },
  {
    title: 'Gestion des coûts',
    description: 'La valorisation théorique et les coûts de revient réels des stocks et des encours de production permettent une analyse du prévu, de l’engagé et du réalisé par section et frais pour un client, une affaire, une commande ou un OF en fonction des types de prix associés aux mouvements de stock.',
  },
  {
    title: 'Gestion du transport',
    description: 'Totalement intégrée aux flux achats et ventes, les outils du module transport vous permettent non seulement d’optimiser vos flux logistiques via le suivi des demandes de transports mais également de prévoir en amont les coûts de transports dès la réalisation des offres commerciales et d’analyser en aval le poids financier effectif du transport dans l’évaluation globale de vos coûts réels.',
  },
];

const FeatureSlider: React.FC = () => {
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          dots: false, 
        },
      },
    ],
    appendDots: (dots) => (
      <div>
        <ul style={{ margin: "0px" }}>{dots}</ul>
      </div>
    )
  };

  const slidesRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (slidesRef.current.length > 0) {
      const heights = slidesRef.current.map(slide => slide.getBoundingClientRect().height);
      const maxHeight = Math.max(...heights);
      slidesRef.current.forEach(slide => (slide.style.height = `${maxHeight}px`));
    }
  }, []);

  return (
    <Slider {...settings}>
      {features.map((feature, index) => (
        <div
          key={index}
          ref={el => {
            if (el) slidesRef.current[index] = el;
          }}
          className="p-4 flex flex-col justify-between h-full"
        >
          <div className="flex-grow">
            <h2 className="font-poppins font-semibold text-[24px] lg:text-[30px] text-gradient leading-[1.2] mb-4">
              {feature.title}
            </h2>
            <MovingRed 
              title={feature.description}
              icon={<></>} 
              position=""
              handleClick={() => {}} 
              otherClasses="text-[16px] lg:text-[20px] flex-grow"
            />
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default FeatureSlider;