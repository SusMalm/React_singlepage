import React from 'react';
import { Carousel } from 'react-carousel-minimal';

import nappis from './images_karuselli/koodarin_nappis_kaksi.jpg';

import opiskelemme from './images_karuselli/logo_kimara.jpg';
import kuuntelen from './images_karuselli/kuuntelen_video_tutoriaalia.jpg';

import ulkoilua from './images_karuselli/kansallispuistossa.jpg';

import koodaan from './images_karuselli/opiskelen_koodaamista_harjoituksilla.jpg';
import layoutteja from './images_karuselli/layout_kollaasi.jpg';

import photoshoppausta from './images_karuselli/kuvan_saatamista_muokkausta.jpg';
import legoilua from './images_karuselli/lego_irveta.jpg';
import inspiraatio from './images_karuselli/inspiraationi_mimmit_koodaa.jpg';




function Kuva() {
  const data = [
    { image: nappis, caption: "Juniorikoodari" },

    { image: opiskelemme, caption: "Opiskelu materiaalia" },
    { image: kuuntelen, caption: "Tutoriaalien kuuntelua" },

    { image: ulkoilua, caption: "Taukoja myös" },

    
    
    { image: koodaan, caption: "Koodaa koodaa" },
    { image: layoutteja, caption: "Projekteja" },

    { image: photoshoppausta, caption: "Kuvankäsittelyä" },
    { image: legoilua, caption: "Mietintä taukoja" },

    { image: inspiraatio, caption: "Inspiraatio" },


  
  ];

  const captionStyle = {
  fontSize: '2em',
  fontWeight: 'bold',
  }

  const slideNumberStyle = {
  fontSize: '20px',
  fontWeight: 'bold',
  }

  return (
    <div className="karuselli">
      <div style={{ textAlign: "center" }}>
        <div style={{ padding: "0 2px" }}>
          <Carousel
            data={data}
            time={3000}
            width="750px"
            height="500px"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            /*slideBackgroundColor="darkgray"*/
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="100px"
            style={{
              image: "center",
              textAlign: "center",
              maxWidth: "850px",
              maxHeight: "800px",
              margin: "20px auto 20px auto", 
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Kuva;