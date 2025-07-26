import React, { useContext, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { NewsContext } from '../context/NewsContext';
import { ThemeContext } from '../context/ThemeContext';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix the marker icon issue
const markerIcon = new L.Icon({
  iconUrl: './marker-icon.png',
  iconRetinaUrl: './marker-icon-2x.png',
  shadowUrl: './marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

// Fix Leaflet marker icon issue
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: './marker-icon-2x.png',
  iconUrl: './marker-icon.png',
  shadowUrl: './marker-shadow.png',
});

// Simple function to convert location strings to coordinates
// In a real app, you'd want to use a geocoding service
const getCoordinatesFromLocation = (location: string): [number, number] | null => {
  const mockCoordinates: { [key: string]: [number, number] } = {
    'Cebu City': [10.3157, 123.8854],
    'Mandaue City': [10.3231, 123.9333],
    'Lapu-Lapu City': [10.3111, 123.9494],
    'Talisay City': [10.2447, 123.8500],
    'Carcar City': [10.1061, 123.6425],
    'Toledo City': [10.3769, 123.6453],
    'Danao City': [10.5336, 123.9436],
    'Minglanilla': [10.2453, 123.7964],
    'Consolacion': [10.3833, 123.9500],
    'Cordova': [10.2500, 123.9500],
    'Bantayan Island': [11.2000, 123.7333],
    'Moalboal': [9.9333, 123.4000]
  };
  
  // Try to find exact match
  if (location in mockCoordinates) {
    return mockCoordinates[location];
  }
  
  // If no exact match, return random coordinates for demo
  return [
    (Math.random() * 180) - 90,  // latitude between -90 and 90
    (Math.random() * 360) - 180  // longitude between -180 and 180
  ];
};

const NewsMap = () => {
  const { reports } = useContext(NewsContext);
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className="h-[600px] w-full bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg">
      <MapContainer
        key={darkMode ? 'dark' : 'light'}
        center={[10.3157, 123.8854] as [number, number]} // Cebu City coordinates
        zoom={11} // Closer zoom to show Cebu metropolitan area
        style={{ height: '100%', width: '100%' }}
        className="rounded-lg"
      >
        <TileLayer
          url={darkMode 
            ? "https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
            : "https://tile.openstreetmap.org/{z}/{x}/{y}.png"
          }
        />
        {reports.map((report, index) => {
          // Convert location string to coordinates (simple example)
          const coords = getCoordinatesFromLocation(report.location);
          if (!coords) return null;

          return (
            <Marker 
              key={index} 
              position={coords}
              icon={markerIcon}
            >
              <Popup className="dark:bg-gray-800 dark:text-white">
                <h3 className="font-bold mb-2">{report.title}</h3>
                <p className="text-sm">{report.description.substring(0, 100)}...</p>
                <div className="text-xs mt-2 text-gray-500 dark:text-gray-400">
                  {report.location}
                </div>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
};

export default NewsMap;