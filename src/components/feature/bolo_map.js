import React, { useEffect, useState } from 'react';
import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup, Circle } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { getNearByLocation } from '../../api/mapSlice';
import { useDispatch, useSelector } from 'react-redux';
import './locationList.css'; // Import the CSS file for styling

// Create a custom icon for the current location
const greenIcon = L.icon({
 iconUrl: 'https://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|2ecc71&chf=a,s,ee00FFFF',
 iconSize: [25, 41], // size of the icon
 iconAnchor: [12, 41], // point of the icon which will correspond to marker's location
 popupAnchor: [1, -34], // point from which the popup should open relative to the iconAnchor
});

const redPinIcon = L.icon({
  iconUrl: 'https://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|FF0000&chf=a,s,ee00FFFF',
  iconSize: [25, 41], // size of the icon
  iconAnchor: [12, 41], // point of the icon which will correspond to marker's location
  popupAnchor: [1, -34], // point from which the popup should open relative to the iconAnchor
 });
const BoloMap = () => {
 const locationsss = useSelector((state) => state.location.data) || [];
 const dispatch = useDispatch();
 const [currentLocation, setCurrentLocation] = useState(null);

 useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        setCurrentLocation({ lat: latitude, lng: longitude });
        dispatch(getNearByLocation({ lat: latitude, long: longitude, type: "Bolo" }));
      }, (error) => {
        console.error("Error getting user location:", error);
      });
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
 }, [dispatch]);

 return (
    <div>
      <MapContainer center={[9.000546654886332, 38.81153754341556]} zoom={13} style={{ height: "100vh", width: "100%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {locationsss.map((location, index) => (
          <div key={index}>
            <Circle center={[location.latitude, location.longitude]} radius={10} pathOptions={{ color: 'red' }} />
            <Marker position={[location.latitude, location.longitude]} icon={redPinIcon}>
              <Popup>
              {/* {location.name} */}
          <h4>Name: {location.name} </h4>
          <h4>Distance: {(location.distance / 1000)} km</h4>
         <h4>Duration: {location.duration / 60} min</h4>
              </Popup>
            </Marker>
          </div>
        ))}
        {currentLocation && (
          <Marker position={[currentLocation.lat, currentLocation.lng]} icon={greenIcon} >
            <Popup>Your Current Location</Popup>
          </Marker>
        )}
      </MapContainer>
      <div className="location-list">
        {locationsss.map((location, index) => (
          <div key={index} className="location-item">
            <p>Name: {location.name}</p>
            <p>Latitude: {location.latitude}</p>
            <p>Longitude: {location.longitude}</p>
          </div>
        ))}
      </div>
    </div>
 );
};

export default BoloMap;
