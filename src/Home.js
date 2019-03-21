import React from 'react';
import { ContentHome } from './components/ContentHome';

const sections = [
  {
    title: "Le restaurant"
  },
  {
    subtitle: "A propos",
    parag1: "Quibus occurrere bene pertinax miles explicatis ordinibus parans hastisque feriens scuta qui habitus iram pugnantium concitat et dolorem proximos iam gestu terrebat sed eum in certamen alacriter consurgentem revocavere ductores rati intempestivum anceps subire certamen cum haut longe muri distarent, quorum tutela securitas poterat in solido locari cunctorum."
  },
  {
    subtitle: "Concept",
    parag1: "Quibus occurrere bene pertinax miles explicatis ordinibus parans hastisque feriens scuta qui habitus iram pugnantium concitat et dolorem proximos iam gestu terrebat sed ",
    parag2: "Quibus occurrere bene pertinax miles explicatis ordinibus parans hastisque feriens scuta qui habitus iram pugnantium concitat et dolorem proximos iam gestu terrebat sed ",
    parag3: "Quibus occurrere bene pertinax miles explicatis ordinibus parans hastisque feriens scuta qui habitus iram pugnantium concitat et dolorem proximos iam gestu terrebat sed "
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
        Concept1={section3.parag1}
        Concept2={section3.parag2}
        Concept3={section3.parag3}
        ParagAbout={section2.parag1}
        TitleTwo={section4.title}
        TitleThree={section5.title}
      />
      </div>
    );
  }
}