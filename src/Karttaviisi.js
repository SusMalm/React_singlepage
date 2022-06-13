import React, {useState} from 'react';
import {MapContainer, Marker, Popup, TileLayer} from 'react-leaflet';
import { icon as leafletIcon} from 'leaflet'
//import 'leaflet/dist/leaflet.css';
import kissa from './images/githubpng.png';

//Custom markkerit ja popoup githubin logoilla
const position = [62.600818, 29.762092];
const fakeData = [
  { name: "Tori", image: kissa, geoJson: { lat: 62.600818, lng: 29.762092 },  },
  { name: "Iso-Myy", image: kissa, geoJson: { lat: 62.601934, lng: 29.763317 },  },
  { name: "Riveria Peltola", image: kissa, geoJson: { lat: 62.591987, lng: 29.768853 },  },
  { name: "Koti metsä", image: kissa, geoJson: { lat: 62.622990, lng: 29.845845 },  },
];

function Kartta() {
  const [markersData, setMarkersData] = useState(fakeData);
  
  const onClick = (event) => {
    setMarkersData([...markersData,{
    name: "Uusi", image: kissa,
    geoJson: {
      lat: event.latlng.lat,
      lng: event.latlng.lng,
    },
  }])};

  const customMarkerIcon=leafletIcon({
    iconUrl: kissa,
    iconSize: [32, 32],
    iconAnchor: [16, 16],
    popupAnchor: [-3, -20]
  })

  return (
    <MapContainer
      style={{ height: "820px" }}
      center={position}
      zoom={13}
      onClick={(event) => onClick(event)}>

      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution ='&copy; 
        <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' />

      {markersData.map((location) => (
        <Marker
          key={JSON.stringify(location.geoJson)}
          position={[location.geoJson.lat, location.geoJson.lng]}
          icon={customMarkerIcon}>

          <Popup>
            <img alt="valkoinen kissa mustalla pyöreällä taustalla" src={location.image} />
            {location.name}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
  
export default Kartta;