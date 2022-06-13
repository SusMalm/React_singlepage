import React from 'react';
import {MapContainer, Marker, Popup, TileLayer} from 'react-leaflet';
//import 'leaflet/dist/leaflet.css';
import githubPng from './images/githubpng.png';


function Kartta() {
    const position = [62.600818, 29.762092];
    const isoMyyPosition = [62.601934, 29.763317];
    const kouluposition = [62.591987, 29.768853];
    const kotiPosition = [62.622990, 29.845845];

    return (
        <MapContainer 
            style = {{height: "820px"}} 
            center = {position} 
            zoom={13}>
            <TileLayer 
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution ='&copy; 
                <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' />
            <TileLayer url="https://tile.thunderforest.com/landscape/{z}/{x}/{y}.png"/>
            <TileLayer url="https://tile.waymarkedtrails.org/hiking/{z}/{x}/{y}.png"/>

            <Marker position={position}> 
                <Popup>Tori<br></br>
                    <img class="sample-icon" 
                    alt="githubin logo jossa valkoinen kissaprofiili mustan ympyrätaustan sisällä" 
                    src={githubPng}/>
                </Popup>
            </Marker>

            <Marker position={isoMyyPosition}>
                <Popup>IsoMyy<br></br>
                    <img class="sample-icon" 
                    alt="githubin logo jossa valkoinen kissaprofiili mustan ympyrätaustan sisällä" 
                    src={githubPng}/>
                </Popup>
            </Marker>

            <Marker position={kouluposition}>
                <Popup>Riveria Peltola<br></br>
                    <img class="sample-icon" 
                    alt="githubin logo jossa valkoinen kissaprofiili mustan ympyrätaustan sisällä" 
                    src={githubPng}/>
                </Popup>
            </Marker>

            <Marker position={kotiPosition}>
                <Popup>Koti metsä<br></br>
                    <img class="sample-icon" 
                    alt="githubin logo jossa valkoinen kissaprofiili mustan ympyrätaustan sisällä" 
                    src={githubPng}/>
                </Popup>
            </Marker>

        </MapContainer>
    )

}

export default Kartta;