import React from "react";
import ReactDOMServer from "react-dom/server";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { MapPin } from "lucide-react";

const lucideHtml = ReactDOMServer.renderToStaticMarkup(
  <MapPin size={32} absoluteStrokeWidth color="#057e7e" />
);

const LucideIcon = L.divIcon({
  className: "custom-lucide-icon",
  html: lucideHtml,
  iconSize: [32, 32],
  iconAnchor: [16, 32],
});

const Map: React.FC = () => {
  const position: [number, number] = [40.270136872210244, 44.6241566502115];

  return (
    <div className="w-full h-80 sm:h-96 rounded-3xl overflow-hidden shadow-lg mt-6">
      <MapContainer
        center={position}
        zoom={14}
        scrollWheelZoom={false}
        className="w-full h-full"
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={position} icon={LucideIcon}>
          <Popup>
            Մեր հասցեն այստեղ է՝ Հայաստան քաղաք Աբովյանի Խաչատուր Աբովյանի անվան
            թիվ 1 ավագ դպրոց
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
