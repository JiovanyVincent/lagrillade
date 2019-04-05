import React from 'react';
import { ContentHome } from '../components/ContentHome';
import { Footer } from '../views/Footer';

const sections = [
  {
    title: "Le restaurant"
  },
  {
    subtitle: "A propos",
    paragAbout: "La Grillade est un restaurant ouvert par son fondateur J. VINCENT. Etant spécialiste en mets et saveurs grillés, il vous invite à venir vous régaler dans son merveilleux restaurant, et vous réserve de délicieuses surprises de l'entrée au dessert, en passant par les boissons en tous genres."
  },
  {
    subtitle: "Concept",
    concept1: "Pensé pour vous permettre de déguster nos spécialités à votre aise, dans un ambiance chic & cosy. Nous vous avons réservé des espaces fumeurs et non fumeurs, et mettons à votre disposition des chaises pour enfants afin qu'eux aussi puissent se délecter !",
    concept2: "Parce que nous savons qu'en semaine vous n'en avez pas toujours le temps, nous vous proposons notre service rapide sur place ou à emporter, préparé avec soin et attention afin de vous permettre de vous régaler.",
    concept3: "Un espace bar est mis à votre disposition afin de savourer de délicieux cocktails dans une ambiance lounge. Nos barmans sont présents pour vous servir, et pourront à votre demande vous surprendre par leurs cocktails inédits et exclusifs. "
  },
  {
    title: "Nos spécialités"
  },
  {
    title: "Nos chefs"
  }
]
export class Home extends React.Component {
  
  render() {
      let section1 = sections[0],
          section2 = sections[1],
          section3 = sections[2],
          section4 = sections[3],
          section5 = sections[4];
    return (
      <div>
        <ContentHome 
        TitleOne={section1.title}
        SubtitleOne={section2.subtitle}
        SubtitleTwo={section3.subtitle}
        Concept1={section3.concept1}
        Concept2={section3.concept2}
        Concept3={section3.concept3}
        ParagAbout={section2.paragAbout}
        TitleTwo={section4.title}
        TitleThree={section5.title}
      />
      <Footer />
      </div>
    );
  }
}