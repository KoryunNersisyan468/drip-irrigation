import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

const DefaultIcon = L.Icon.Default.extend({
  options: {
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
    iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  },
});

L.Marker.prototype.options.icon = new DefaultIcon();

const Map: React.FC = () => {
  const position: [number, number] = [40.270136872210244, 44.6241566502115]; 

  return (
    <div className="w-full h-80 sm:h-96 rounded-3xl overflow-hidden shadow-lg mt-6">
      <MapContainer center={position} zoom={14} scrollWheelZoom={false} className="w-full h-full">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>Մեր հասցեն այստեղ է՝ Հայաստան քաղաք Աբովյանի Խաչատուր Աբովյանի անվան թիվ 1 ավագ դպրոց</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
