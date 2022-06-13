import React from 'react';
import {MapContainer, Marker, Popup, TileLayer} from 'react-leaflet';
//import 'leaflet/dist/leaflet.css';


//toinen versio kartasta, vielä kesken
function Kartta() {
   
    const fakeData = [
        {name : "Tori", geoJson:{lat: 62.600818, lgn: 29.762092}},
        {name : "IsoMyy", geoJson:{lat: 62.601934, lgn: 29.763317}},
        {name : "Riveria", geoJson:{lat: 62.591987, lgn: 29.768853}},
        {name : "Kotimetsä", geoJson:{lat: 62.622990, lgn: 29.845845}}
    ]

    return (
        <MapContainer 
            style = {{height: "820px"}} 
            center = {{position: "Tori"}} 
            zoom={13}>

            <TileLayer 
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution ='&copy; 
                <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'/>
            
            {fakeData.map((location) => (
                <Marker position = {[location.geoJson.lat, location.geoJson.lgn]} >
                    <Popup>{location.name}</Popup>
                </Marker>
            ))};
        </MapContainer>
    )
}

export default Kartta;
