import React, { useContext } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { NewsContext } from '../context/NewsContext';
import 'leaflet/dist/leaflet.css';

const NewsMap = () => {
  const { reports } = useContext(NewsContext);

  return (
    <div className="h-[600px] w-full">
      <MapContainer
        // center={[0, 0]}
        // zoom={2}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          // attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {reports.map((report, index) => (
          <Marker 
            key={index} 
            position={[report.latitude, report.longitude]}
          >
            <Popup>
              <h3>{report.title}</h3>
              <p>{report.content.substring(0, 100)}...</p>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default NewsMap;