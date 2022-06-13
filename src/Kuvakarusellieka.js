import React from 'react';
import { Carousel } from 'react-carousel-minimal';

import retkeily from './images_karuselli/pyoraily_mutkitellen.png';
import kuvaaja from './images_karuselli/Kurrreja_kuvaaja.png';

import reissut from './images_karuselli/kolmikko_reissussa.jpg';
import porroset from './images_karuselli/porroset_retkella.jpg';
import kolmikko from './images_karuselli/kansallispuistossa.jpg';

import kirjat from './images_karuselli/kolme_kirjaa.jpg';
import kortteja from './images_karuselli/kortteja_maailmalta.jpg';
import legoilu from './images_karuselli/lego_irveta.jpg';
import legot from './images_karuselli/lego_sauvakauppa.jpg';


function Kuva() {
  const data = [
    { image: retkeily, caption: "Retkeily" },
    { image: kuvaaja, caption: "Valokuvaus" },

    { image: reissut, caption: "Matkustelu" },
    { image: porroset, caption: "Metsäily" },
    { image: kolmikko, caption: "Kansallispuistoilu" },

    { image: kirjat, caption: "Lukeminen" },
    { image: kortteja, caption: "Keräily" },
    { image: legoilu, caption: "Legoilu" },
    { image: legot, caption: "Legoilu" },
  
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
            time={2000}
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
