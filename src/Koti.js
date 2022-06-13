import React, { Component } from "react";

import koodarinappis from './images_karuselli/koodarin_nappis_kaksi.jpg';
import kuvaaja from './images_karuselli/Kurrreja_kuvaaja.png';
import kortteja from './images_karuselli/kortteja_maailmalta.jpg';
 
class Koti extends Component {
  render() {
    return (
     
      <div class="kirjoitus">
        <h1>Tervetuloa Susannan harjoitus sivulle</h1>
        
        <p></p>
        <h2>Opiskelustani</h2>
        <p>
        Aloitin helmikuussa Riveriassa kurssin: Ohjelmoinnistako minulle ammatti?<br></br> 
        Kurssi on tiukkaan pakettiin puristettu ja sisältää Tieto ja viestintätekniikan perustutkinnosta,<br></br> 
        tutkinnon osat: ohjelmointi 45osp, ohjelmiston kehittäjänä toimiminen 45osp
        </p>
        <p>
        <img class="sample-kuva" 
        alt="näppäimistö jonka päällä lukee värikkäin kirjaimin alan lyhenteitä esim html css react" 
        src={koodarinappis}/>
        </p>
        <p>
        Aiemmmista opinnoista mainittakoon <br></br> 
        Audiovisuaalinen viestintä; Media-assistentti 2004<br></br> 
        Mekaanikko tietotekniikka; radio- ja tv-asentaja 1997<br></br> 
        Hienomekaanikko 1995
        </p>

        <p>
        <img class="sample-kuva" 
        alt="valokuvaaja istuu maassa kuvaamassa oravaa, pieni lapsi katsoo kuvaajaa, molempien ympärillä useita oravia" 
        src={kuvaaja}/>
        </p>

        <h3>Harrastuksista</h3>
        <p>
        Harrastan valokuvausta, kuvankäsittelyä,<br></br> 
        retkeilyä, pyöräilyä, mäyräkoirieni kanssa puuhailua,<br></br> 
        lukemista, legoilua, askartelua ja keräilyä.
        </p>

        
        <p>
        <img class="sample-kuva" 
        alt="postikortteja leviteltynä tason päälle lomittain" 
        src={kortteja}/>
        </p>




      </div>
     
    );
  }
}
export default Koti;