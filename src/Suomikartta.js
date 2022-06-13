import React from 'react';
import {MapContainer, Marker, Popup, TileLayer} from 'react-leaflet';
//import 'leaflet/dist/leaflet.css';
import githubPng from './images/githubpng.png';

/*kartan pikkukuvat popoup*/
import helsinkiLahto from './images_reissu/helsinki_eka.JPG';
import lahti from './images_reissu/lahti_eka.JPG';
import hameenlinna from './images_reissu/hlinna_eka.JPG'; // teltta
import turku from './images_reissu/turku_eka.JPG'; // suvilla 2yötä
import rauma from './images_reissu/rauma_eka.JPG';
import pori from './images_reissu/pori_eka.JPG'; // teltta
import tampere from './images_reissu/tampere_eka.JPG'; // mökki 2yötä camping härmälä
import jyvaskyla from './images_reissu/jyvaskyla_eka.JPG'; // teltta camping jyväskylä tuomiojärvi
import virrat from './images_reissu/virrat_eka.JPG'; // teltta
import seinajoki from './images_reissu/seinajoki_eka.JPG'; // teltta camping törnävä
import vaasa from './images_reissu/vaasa_eka.JPG';
import pedersore  from './images_camping/camping_pedersore.JPG'; // teltta camping HIRVEÄ
import kokkola from './images_reissu/kokkola_eka.JPG';
import raahe from './images_reissu/raahe_eka.JPG';
import liminka from './images_camping/camping_liminka.JPG'; // teltta camping
import oulu from './images_reissu/oulu_eka.JPG';
import kemi from './images_reissu/kemi_eka.JPG';
import tornio from './images_reissu/tornio_eka.JPG'; // teltta camping
import rovaniemi from './images_reissu/rovaniemi_eka.JPG'; // mökki 2yötä napapiirin saari-tuvat


import kittila from './images_reissu/kittila_eka.JPG'; // teltta camping kittilän leirintäalue
import muonio from './images_reissu/muonio_eka.JPG';
import arcticknife from './images_reissu/arctic_knife.JPG';
import palojoensuu from './images_camping/camping_karesuvanto_jokiharju.JPG';
import kilpisjarvi from './images_reissu/kilpisjarvi_eka.JPG'; // teltta camping kilpisjärven retkeilykeskus
import muoniopaluu from './images_reissu/muonio_paluu_eka.JPG';
import sonkamuotka from './images_camping/camping_parkkipaikka_teltta.JPG'; // teltta
import kittilapaluu from './images_reissu/kittila_paluu_eka.JPG';
import sodankyla from './images_reissu/sodankyla_eka.JPG'; // retkeilymaja 2 yötä camping nilimella
import inari from './images_reissu/inari_eka.JPG';
//import tankavaara from '/images_reissu/tankavaara_eka.JPG'; // teltta 
import kaamanen from './images_camping/camping_kaamanen_kievari_eka.JPG'; // teltta camping kaamasen kievari
import kevo from './images_reissu/kevo_eka.JPG';
import utsjoki from './images_reissu/utsjoki_eka.JPG'; // teltta camping
import kaamanenpaluu from './images_camping/camping_kaamanen_kievari_toka.JPG';
import inaripaluu from './images_reissu/inari_paluu_eka.JPG';
//import tankavaarapaluu from '/images_reissu/tankavaara_paluu_eka.JPG'; // teltta
import sodankylapaluu from './images_reissu/sodankyla_paluu_eka.JPG';
import kemijarvi from './images_reissu/kemijarvi_eka.JPG'; // teltta camping hietaniemi


import kuusamo from './images_reissu/kuusamo_eka.JPG'; // mökki 2 yötä camping matkajoki Super 
import suomussalmi from './images_reissu/suomussalmi_eka.JPG'; // teltta camping Super
import kuhmo from './images_reissu/kuhmo_eka.JPG'; // teltta camping kalevala
import sotkamo from './images_reissu/sotkamo_eka.JPG';
import kajaani from './images_reissu/kajaani_eka.JPG'; // teltta camping kajaanin portti
import iisalmi from './images_reissu/iisalmi_eka.JPG'; // teltta camping koljonvirta
import nurmes from './images_reissu/nurmes_eka.JPG'; // siskolla yö
import juuka from './images_reissu/juuka_eka.JPG'; // äiteen ja iskän luona 7vrk
import koli from './images_reissu/koli_eka.JPG';
import juankoski from './images_reissu/juankoski_eka.JPG';
//import riistavesi??
import kuopio from './images_reissu/kuopio_eka.JPG'; // veljen luona 2yötä
import varkaus from './images_reissu/varkaus_eka.JPG'; // teltta camping taipale
import joensuu from './images_reissu/joensuu_eka.JPG'; // teltta camping linnunlahti
import kesalahti from './images_reissu/kesalahti_eka.JPG';
import punkaharju from './images_reissu/punkaharju_eka.JPG'; 
import putikko from './images_camping/camping_punkaharju_putikko.JPG';
import savonlinna from './images_reissu/savonlinna_eka.JPG';
import sulkava from './images_reissu/sulkava_eka.JPG'; // tanjan mökillä 2 yötä
import juva from './images_reissu/juva_eka.JPG';
import mikkeli from './images_reissu/mikkeli_eka.JPG';
import suomenniemi from './images_reissu/suomenniemi_eka.JPG'; // teltta camping suomijärvi?
import lappeenranta from './images_reissu/lappeenranta_eka.JPG'; // teltta camping huhtiniemi
import kotka from './images_reissu/kotka_eka.JPG'; // teltta camping santalahti
import loviisa from './images_reissu/loviisa_eka.JPG';
import porvoo from './images_reissu/porvoo_eka.JPG';
import vantaa from './images_reissu/vantaa_eka.JPG';
import helsinkiPaluu from './images_reissu/helsinki_paluu_eka.JPG';


// Suomen ympäri pyöräilyn reitti kartassa, popup ikkunoissa pienet kuvat
// Työn alla on tehdä vaihtuvat pienet kuvat popup ikkunoihin ja kuvista klikattaessa
// suurempiin kuviin


function Kartta() {
    const position = [64.96344, 27.59048]; //Manner-Suomen keskipiste

    const lahtoPosition = [60.231510, 24.891497]; // lähtö Pohjois-Haaga
    const lahtiPosition = [60.977646, 25.652371];
    const hameenlinnaPosition = [61.001346, 24.459450]; 
    const turkuPosition = [60.43600, 22.22865]; 
    const raumaPosition = [61.130396, 21.512179]; 
    const poriPosition = [61.483862, 21.782106];
    const tamperePosition = [61.50557, 23.74273]; 
    const jyvaskylaPosition = [62.242767, 25.725606];
    const virratPosition = [62.250743, 23.783131]; 
    const seinajokiPosition = [62.78821, 22.85004];
    const vaasaPosition = [63.09474, 21.61020]; 
    const pedersorePosition = [63.588050, 22.749789];
    const kokkolaPosition = [63.84221, 23.12531];
    const raahePosition = [64.673515, 24.502730];
    const liminkaPosition = [64.794237, 25.358435]; //Värminkoski oliko tämä??
    const ouluPosition = [65.011346, 25.46428]; 
    const kemiPosition = [65.740063, 24.586995]; 
    const tornioPosition = [65.85081, 24.14293]; 
    const rovaniemiPosition = [66.50425, 25.72927];


    const kittilaPosition = [67.646528, 24.920084];
    const muonioPosition = [67.955414, 23.684376]; 
    const arcticknifePosition = [68.162021, 23.268071]; // super palvelu
    const palojoensuuPosition = [68.284786, 23.081057];
    const kilpisjarviPosition = [69.046964, 20.799084]; 
    const muoniopaluuPosition = [67.956310, 23.684859];
    const sonkamuotkaPosition = [68.157978, 23.288759];
    const kittilapaluuPosition = [67.647312, 24.919640];
    const sodankylaPosition = [67.410312, 26.573566];
    const tankavaaraPosition = [68.178364, 27.094957];
    const inariPosition = [68.340457, 27.336007]; // inarin kunnan raja
    const kaamanenPosition = [69.103083, 27.195892];
    const kevoPosition = [69.75789, 27.02044]; 
    const utsjokiPosition = [69.907613, 27.026223]; 
    const inaripaluuPosition = [69.461187, 27.236708]; // inarin kunnan raja
    const kaamanenpaluuPosition = [69.103166, 27.196283];
    const tankavaarapaluuPosition = [68.185446, 27.092208];
    const sodankylapaluuPosition =[67.416027, 26.589118];
    const kemijarviPosition = [66.71739, 27.41880];
     
     
    const kuusamoPosition = [65.96505, 29.18848];
    const suomussalmiPosition = [64.88467, 28.91169];
    const kuhmoPosition = [64.11649, 29.58697];
    const sotkamoPosition = [64.130930, 28.390372];
    const kajaaniPosition = [64.221728, 27.728372];
    const iisalmiPosition = [63.59580, 27.15922]; 
    const nurmesPosition = [63.53520, 29.17143];
    const juukaPosition = [63.31343, 29.25183];
    const koliPosition = [63.09267, 29.80900]; 
    const juankoskiPosition = [63.066638, 28.330845];
    // riistavesi??
    const kuopioPosition = [62.901349, 27.661331]; 
    const varkausPosition = [62.32027, 27.90603];
    const joensuuPosition = [62.59800, 29.73962]; 
    const kesalahtiPosition = [61.892324, 29.825823];
    const punkaharjuPosition = [61.75598, 29.39302];
    const putikkoPosition = [61.714417, 29.396843];
    const savonlinnaPosition = [61.86415, 28.90110]; 
    const sulkavaPosition = [61.78727, 28.37016];
    const juvaPosition = [61.895874, 27.861932];
    const mikkeliPosition = [61.686466, 27.286034];
    const suomenniemiPosition = [61.325747, 27.556370]; 
    const lappeenrantaPosition = [61.053231, 28.154038];
    const kotkaPosition = [60.437627, 26.862716];
    const loviisaPosition = [60.459566, 26.234208];
    const porvooPosition = [60.393566, 25.657731];
    const vantaaPosition = [60.248644, 25.159465];
    const helsinkiPosition = [60.236707, 25.135864]; 

    return (
        <MapContainer style = {{height: "820px"}} center = {position} zoom={6}>

            <TileLayer 
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution ='&copy; 
                <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'/>

            <Marker position={position}> 
                <Popup>Manner-Suomen keskipiste
                </Popup>
            </Marker>

            <Marker position={lahtoPosition}> 
                <Popup>Helsinki 1.7.2000<br></br>
                    <img class="sample-vaaka" 
                    alt="pyöräilijä kerrostalon edessä retkikuormalla varustetun pyöränsä kanssa" 
                    src={helsinkiLahto}/>
                </Popup>
            </Marker>

            <Marker position={lahtiPosition}>
                <Popup>Lahti 1.7.2000<br></br>
                    <img class="sample-vaaka" 
                    alt="pyöräilijä seisoo Lahden kyltin vieressä" 
                    src={lahti}/>
                </Popup>
            </Marker>

            <Marker position={hameenlinnaPosition}>
                <Popup>Hämeenlinna 1.7.2000<br></br>
                    <img class="sample-vaaka" 
                    alt="pyöräilijä seisoo Hämeenlinnan kyltin vieressä" 
                    src={hameenlinna}/>
                </Popup>
            </Marker>

            <Marker position={turkuPosition}>
                <Popup>Turku 2.7 - 4.7.2000<br></br>
                    <img class="sample-vaaka" 
                    alt="pyöräilijä seisoo Turun kyltin vieressä" 
                    src={turku}/>
                </Popup>
            </Marker>

            <Marker position={raumaPosition}>
                <Popup>Rauma 4.7.2000<br></br>
                    <img class="sample-vaaka" 
                    alt="pyöräilijä seisoo Rauman kyltin vieressä" 
                    src={rauma}/>
                </Popup>
            </Marker>

            <Marker position={poriPosition}>
                <Popup>Pori 4.7.2000<br></br>
                    <img class="sample-vaaka" 
                    alt="pyöräilijä seisoo Porin kyltin vieressä" 
                    src={pori}/>
                </Popup>
            </Marker>

            <Marker position={tamperePosition}>
                <Popup>Tampere 5.7 - 7.7.2000<br></br>
                    <img class="sample-vaaka" 
                    alt="pyöräilijä seisoo Tampereen kyltin vieressä" 
                    src={tampere}/>
                </Popup>
            </Marker>

            <Marker position={jyvaskylaPosition}>
                <Popup>Jyväskylä 7.7.2000<br></br>
                    <img class="sample-vaaka" 
                    alt="pyöräilijä seisoo Jyväskylän kyltin vieressä" 
                    src={jyvaskyla}/>
                </Popup>
            </Marker>

            <Marker position={virratPosition} >
                <Popup>Virrat 8.7.2000<br></br>
                    <img class="sample-vaaka" 
                    alt="pyöräilijä seisoo Virrat kyltin vieressä" 
                    src={virrat}/>
                </Popup>
            </Marker>

            <Marker position={seinajokiPosition}>
                <Popup>Seinäjoki 9.7.2000<br></br>
                    <img class="sample-vaaka" 
                    alt="pyöräilijä seisoo Seinäjoen kyltin vieressä" 
                    src={seinajoki}/>
                </Popup>
            </Marker>

            <Marker position={vaasaPosition}>
                <Popup>Vaasa 10.7.2000<br></br>
                    <img class="sample-vaaka" 
                    alt="pyöräilijä seisoo Vaasan kyltin vieressä" 
                    src={vaasa}/>
                </Popup>
            </Marker>

            <Marker position={pedersorePosition}>
                <Popup>Pedersöre 10.7.2000<br></br>
                    <img class="sample-vaaka" 
                    alt="Teltta ison kiven vieressä leirintäalueella" 
                    src={pedersore}/>
                </Popup>
            </Marker>

            <Marker position={kokkolaPosition}>
                <Popup>Kokkola 11.7.2000<br></br>
                    <img class="sample-vaaka" 
                    alt="pyöräilijä seisoo Kokkolan kyltin vieressä" 
                    src={kokkola}/>
                </Popup>
            </Marker>

            <Marker position={raahePosition}>
                <Popup>Raahe 11.7.2000<br></br>
                    <img class="sample-vaaka" 
                    alt="pyöräilijä seisoo Raahen kyltin vieressä" 
                    src={raahe}/>
                </Popup>
            </Marker>

            <Marker position={liminkaPosition}>
                <Popup>Liminka 11.7.2000<br></br>
                    <img class="sample-vaaka" 
                    alt="teltta ja rakennuksia Limingan leirintäalueella" 
                    src={liminka}/>
                </Popup>
            </Marker>

            <Marker position={ouluPosition}>
                <Popup>Oulu 12.7.2000<br></br>
                    <img class="sample-vaaka" 
                    alt="pyöräilijä seisoo Oulun kyltin vieressä" 
                    src={oulu}/>
                </Popup>
            </Marker>

            <Marker position={kemiPosition}>
                <Popup>Kemi 12.7.2000<br></br>
                    <img class="sample-vaaka" 
                    alt="pyöräilijä seisoo Kemin kyltin vieressä" 
                    src={kemi}/>
                </Popup>
            </Marker>

            <Marker position={tornioPosition}>
                <Popup>Tornio 12.7.2000<br></br>
                    <img class="sample-vaaka" 
                    alt="pyöräilijä seisoo Tornion kyltin vieressä" 
                    src={tornio}/>
                </Popup>
            </Marker>

            <Marker position={rovaniemiPosition}>
                <Popup>Rovaniemi 13.7 - 15.7.2000<br></br>
                    <img class="sample-vaaka" 
                    alt="pyöräilijä seisoo Rovaniemen kyltin vieressä" 
                    src={rovaniemi}/>
                </Popup>
            </Marker>



            <Marker position={kittilaPosition}>
                <Popup>Kittilä 15.7.2000<br></br>
                    <img class="sample-vaaka" 
                    alt="pyöräilijä seisoo Kittilän kyltin vieressä" 
                    src={kittila}/>
                </Popup>
            </Marker>

            <Marker position={muonioPosition}>
                <Popup>Muonio 16.7.2000<br></br>
                    <img class="sample-vaaka" 
                    alt="pyöräilijä seisoo Muonion kyltin vieressä" 
                    src={muonio}/>
                </Popup>
            </Marker>

            <Marker position={arcticknifePosition}>
                <Popup>Arctic Knife 16.7.2000<br></br>
                    <img class="sample-vaaka" 
                    alt="Matkamuistomyymälän rakennus" 
                    src={arcticknife}/>
                </Popup>
            </Marker>

            <Marker position={palojoensuuPosition}>
                <Popup>Palojoensuu 16.7.2000<br></br>
                    <img class="sample-vaaka" 
                    alt="Jokiharjun leirintäalueen kyltti sekä rakennus" 
                    src={palojoensuu}/>
                </Popup>
            </Marker>

            <Marker position={kilpisjarviPosition}>
                <Popup>Kilpisjärvi 17.7.2000<br></br>
                    <img class="sample-vaaka" 
                    alt="pyöräilijä seisoo Kilpisjärven kyltin vieressä" 
                    src={kilpisjarvi}/>
                </Popup>
            </Marker>

            <Marker position={sonkamuotkaPosition}>
                <Popup>Sonkamuotka 18.7.2000<br></br>
                    <img class="sample-vaaka" 
                    alt="polkupyörä ja lila kupoliteltta pystytettynä" 
                    src={sonkamuotka}/>
                </Popup>
            </Marker>

            <Marker position={muoniopaluuPosition}>
                <Popup>Muonio 19.7.2000<br></br>
                    <img class="sample-vaaka" 
                    alt="pyöräilijä seisoo Muonion kyltin vieressä" 
                    src={muoniopaluu}/>
                </Popup>
            </Marker>

            <Marker position={kittilapaluuPosition}>
                <Popup>Kittilä 19.7.2000<br></br>
                    <img class="sample-vaaka" 
                    alt="pyöräilijä seisoo Kittilän kyltin vieressä" 
                    src={kittilapaluu}/>
                </Popup>
            </Marker>



            <Marker position={sodankylaPosition}>
                <Popup>Sodankylä 20.7 - 22.7.2000<br></br>
                    <img class="sample-vaaka" 
                    alt="pyöräilijä seisoo Sodankylän kyltin vieressä" 
                    src={sodankyla}/>
                </Popup>
            </Marker>

            <Marker position={tankavaaraPosition}>
                <Popup>Tankavaara 22.7.2000<br></br>
                    <img class="sample-icon" 
                    alt="githubin logo jossa valkoinen kissaprofiili mustan ympyrätaustan sisällä" 
                    src={githubPng}/>
                </Popup>
            </Marker>

            <Marker position={inariPosition}>
                <Popup>Inari 23.7.2000<br></br>
                    <img class="sample-vaaka" 
                    alt="pyöräilijä seisoo Inarin kyltin vieressä" 
                    src={inari}/>
                </Popup>
            </Marker>

            <Marker position={kaamanenPosition}>
                <Popup>Kaamanen 23.7.2000<br></br>
                    <img class="sample-vaaka" 
                    alt="Kaamasen kievarin punainen rakennus" 
                    src={kaamanen}/>
                </Popup>
            </Marker>

            <Marker position={kevoPosition}>
                <Popup>Kevo 24.7.2000<br></br>
                    <img class="sample-vaaka" 
                    alt="pyöräilijä nousemassa pyörän satulalle Kevon metsämaiseman edessä" 
                    src={kevo}/>
                </Popup>
            </Marker>

            <Marker position={utsjokiPosition}>
                <Popup>Utsjoki 24.7.2000<br></br>
                    <img class="sample-vaaka" 
                    alt="pyöräilijä seisoo Utsjoen kyltin vieressä" 
                    src={utsjoki}/>
                </Popup>
            </Marker>

            <Marker position={inaripaluuPosition}>
                <Popup>Inari 25.7.2000<br></br>
                    <img class="sample-vaaka" 
                    alt="pyöräilijä seisoo Inarin kyltin vieressä" 
                    src={inaripaluu}/>
                </Popup>
            </Marker>

            <Marker position={kaamanenpaluuPosition}>
                <Popup>Kaamanen 25.7.2000<br></br>
                    <img class="sample-vaaka" 
                    alt="Kaamasen kievarin punainen rakennus" 
                    src={kaamanenpaluu}/>
                </Popup>
            </Marker>

            <Marker position={tankavaarapaluuPosition}>
                <Popup>Tankavaara 26.7.2000<br></br>
                    <img class="sample-icon" 
                    alt="githubin logo jossa valkoinen kissaprofiili mustan ympyrätaustan sisällä" 
                    src={githubPng}/>
                </Popup>
            </Marker>

            <Marker position={sodankylapaluuPosition}>
                <Popup>Sodankylä 27.7.2000<br></br>
                    <img class="sample-vaaka" 
                    alt="pyöräilijä seisoo Sodankylän kyltin vieressä" 
                    src={sodankylapaluu}/>
                </Popup>
            </Marker>

            <Marker position={kemijarviPosition}>
                <Popup>Kemijärvi 28.7.2000<br></br>
                    <img class="sample-vaaka" 
                    alt="pyöräilijä seisoo Kemijärven kyltin vieressä" 
                    src={kemijarvi}/>
                </Popup>
            </Marker>



            <Marker position={kuusamoPosition}>
                <Popup>Kuusamo 29.7 - 31.7.2000<br></br>
                    <img class="sample-vaaka" 
                    alt="pyöräilijä seisoo Kuusamon kyltin vieressä" 
                    src={kuusamo}/>
                </Popup>
            </Marker>

            <Marker position={suomussalmiPosition}>
                <Popup>Suomussalmi 31.7.2000<br></br>
                    <img class="sample-vaaka" 
                    alt="pyöräilijä seisoo Suomussalmen kyltin vieressä" 
                    src={suomussalmi}/>
                </Popup>
            </Marker>

            <Marker position={kuhmoPosition}>
                <Popup>Kuhmo 1.8.2000<br></br>
                    <img class="sample-vaaka" 
                    alt="pyöräilijä seisoo Kuhmon kyltin vieressä" 
                    src={kuhmo}/>
                </Popup>
            </Marker>

            <Marker position={sotkamoPosition}>
                <Popup>Sotkamo 2.8.2000<br></br>
                    <img class="sample-vaaka" 
                    alt="pyöräilijä seisoo Sotkamon kyltin vieressä" 
                    src={sotkamo}/>
                </Popup>
            </Marker>

            <Marker position={kajaaniPosition}>
                <Popup>Kajaani 2.8.2000<br></br>
                    <img class="sample-vaaka" 
                    alt="pyöräilijä seisoo Kajaanin kyltin vieressä" 
                    src={kajaani}/>
                </Popup>
            </Marker>

            <Marker position={iisalmiPosition}>
                <Popup>Iisalmi 3.8.2000<br></br>
                    <img class="sample-vaaka" 
                    alt="pyöräilijä seisoo Iisalmen kyltin vieressä" 
                    src={iisalmi}/>
                </Popup>
            </Marker>

            <Marker position={nurmesPosition}>
                <Popup>Nurmes 4.8.2000<br></br>
                    <img class="sample-vaaka" 
                    alt="pyöräilijä seisoo Nurmeksen kyltin vieressä" 
                    src={nurmes}/>
                </Popup>
            </Marker>

            <Marker position={juukaPosition}>
                <Popup>Juuka 5.8 - 13.8.2000<br></br>
                    <img class="sample-vaaka" 
                    alt="pyöräilijä seisoo Juuan kyltin vieressä" 
                    src={juuka}/>
                </Popup>
            </Marker>

            <Marker position={koliPosition}>
                <Popup>Koli 10.8.2000<br></br>
                    <img class="sample-vaaka" 
                    alt="retkeilijä seisoo Akka-Kolin laella olevan kyltin vieressä" 
                    src={koli}/>
                </Popup>
            </Marker>

            <Marker position={juankoskiPosition}>
                <Popup>Juankoski 13.8.2000<br></br>
                    <img class="sample-vaaka" 
                    alt="pyöräilijä seisoo Juankoski kyltin vieressä" 
                    src={juankoski}/>
                </Popup>
            </Marker>

            <Marker position={kuopioPosition}>
                <Popup>Kuopio 13.8 - 15.8.2000<br></br>
                    <img class="sample-vaaka" 
                    alt="pyöräilijä seisoo Kuopion kyltin vieressä" 
                    src={kuopio}/>
                </Popup>
            </Marker>

            <Marker position={varkausPosition}>
                <Popup>Varkaus 15.8.2000<br></br>
                    <img class="sample-vaaka" 
                    alt="pyöräilijä seisoo Varkauden kyltin vieressä" 
                    src={varkaus}/>
                </Popup>
            </Marker>

            <Marker position={joensuuPosition}>
                <Popup>Joensuu 16.8.2000<br></br>
                    <img class="sample-vaaka" 
                    alt="pyöräilijä seisoo Joensuun kyltin vieressä" 
                    src={joensuu}/>
                </Popup>
            </Marker>

            <Marker position={kesalahtiPosition}>
                <Popup>Kesälahti 17.8.2000<br></br>
                    <img class="sample-vaaka" 
                    alt="pyöräilijä seisoo Joensuun kyltin vieressä" 
                    src={kesalahti}/>
                </Popup>
            </Marker>

            <Marker position={punkaharjuPosition}>
                <Popup>Punkaharju 17.8.2000<br></br>
                    <img class="sample-vaaka" 
                    alt="pyöräilijä seisoo Punkaharjun kyltin vieressä" 
                    src={punkaharju}/>
                </Popup>
            </Marker>

            <Marker position={putikkoPosition}>
                <Popup>Putikko 17.8.2000<br></br>
                    <img class="sample-vaaka" 
                    alt="leirintäalueen päärakennus" 
                    src={putikko}/>
                </Popup>
            </Marker>

            <Marker position={savonlinnaPosition}>
                <Popup>Savonlinna 18.8.2000<br></br>
                    <img class="sample-vaaka" 
                    alt="pyöräilijä seisoo Savonlinnan kyltin vieressä" 
                    src={savonlinna}/>
                </Popup>
            </Marker>

            <Marker position={sulkavaPosition}>
                <Popup>Sulkava 18.8 - 20.8.2000<br></br>
                    <img class="sample-vaaka" 
                    alt="pyöräilijä seisoo Sulkavan kyltin vieressä" 
                    src={sulkava}/>
                </Popup>
            </Marker>

            <Marker position={juvaPosition}>
                <Popup>Juva 20.8.2000<br></br>
                    <img class="sample-vaaka" 
                    alt="pyöräilijä seisoo Juvan kyltin vieressä" 
                    src={juva}/>
                </Popup>
            </Marker>

            <Marker position={mikkeliPosition}>
                <Popup>Mikkeli 20.8.2000<br></br>
                    <img class="sample-vaaka" 
                    alt="pyöräilijä seisoo Mikkelin kyltin vieressä" 
                    src={mikkeli}/>
                </Popup>
            </Marker>

            <Marker position={suomenniemiPosition}>
                <Popup>Suomenniemi 20.8.2000<br></br>
                    <img class="sample-vaaka" 
                    alt="pyöräilijä seisoo Suomenniemen kyltin vieressä" 
                    src={suomenniemi}/>
                </Popup>
            </Marker>

            <Marker position={lappeenrantaPosition}>
                <Popup>Lappeenranta 21.8.2000<br></br>
                    <img class="sample-vaaka" 
                    alt="pyöräilijä seisoo Lappeenrannan kyltin vieressä" 
                    src={lappeenranta}/>
                </Popup>
            </Marker>

            <Marker position={kotkaPosition}>
                <Popup>Kotka 22.8.2000<br></br>
                    <img class="sample-vaaka" 
                    alt="pyöräilijä seisoo Kotkan kyltin vieressä" 
                    src={kotka}/>
                </Popup>
            </Marker>

            <Marker position={loviisaPosition}>
                <Popup>Loviisa 23.8.2000<br></br>
                    <img class="sample-vaaka" 
                    alt="pyöräilijä seisoo Loviisan kyltin vieressä" 
                    src={loviisa}/>
                </Popup>
            </Marker>

            <Marker position={porvooPosition}>
                <Popup>Porvoo 23.8.2000<br></br>
                    <img class="sample-vaaka" 
                    alt="pyöräilijä seisoo Porvoon kyltin vieressä" 
                    src={porvoo}/>
                </Popup>
            </Marker>

            <Marker position={vantaaPosition}>
                <Popup>Vantaa 23.8.2000<br></br>
                    <img class="sample-vaaka" 
                    alt="pyöräilijä seisoo Vantaan kyltin vieressä" 
                    src={vantaa}/>
                </Popup>
            </Marker>

            <Marker position={helsinkiPosition}> 
                <Popup>Helsinki 23.8.2000<br></br>
                    <img class="sample-vaaka" 
                    alt="pyöräilijä seisoo Helsingin kyltin vieressä" 
                    src={helsinkiPaluu}/>
                </Popup>
            </Marker>

        </MapContainer>
    )

}

export default Kartta;