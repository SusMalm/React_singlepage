import React, { useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
//import "leaflet/dist/leaflet.css";
import kissa from './images/githubpng.png';


// kartta klikattavilla markkereilla, vielä kesken
const position = [62.600818, 29.762092];
const fakeData = [
  { name: "Tori", image: kissa, geoJson: { lat: 62.600818, lng: 29.762092 } },
  { name: "Iso-Myy", image: kissa, geoJson: { lat: 62.601934, lng: 29.763317 } },
];

function Kartta() {
  const [markersData, setMarkersData] = useState(fakeData);
 
  const onClick = (event) => {
    setMarkersData([
      ...markersData,
      { name: "Uusi", image: kissa,
        geoJson: { lat: event.latlng.lat, lng: event.latlng.lng },
      },
    ]);
  };

  return (
    <MapContainer
      style={{ height: "820px" }}
      center={position}
      zoom={13}
      onClick={(event) => onClick(event)}>

      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution ='&copy; 
        <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' 
      />
      {markersData.map((location) => (
        <Marker
          key={JSON.stringify(location.geoJson)}
          position={[location.geoJson.lat, location.geoJson.lng]}>
            
          <Popup>
            <img alt="" src={location.image} />
            {location.name}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default Kartta;
  
