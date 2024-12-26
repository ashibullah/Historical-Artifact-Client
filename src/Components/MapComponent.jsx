import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { artifactData } from '../assets/artifactData';

// Sample data for artifacts with coordinates (latitude, longitude)


const MapComponent = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-6">Historical Artifacts Map</h2>
      
      <MapContainer
        center={[20.5937, 78.9629]} // Central point (India) or a location of your choice
        zoom={2}
        scrollWheelZoom={false}
        style={{ height: '500px', width: '100%' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        {/* Loop through artifacts and create markers */}
        {artifactData.map(artifact => (
          <Marker key={artifact.id} position={artifact.coordinates}>
            <Popup>
              <strong>{artifact.name}</strong><br />
              {artifact.description}
            </Popup>
          </Marker>
        ))}
        
      </MapContainer>
    </div>
  );
};

export default MapComponent;
