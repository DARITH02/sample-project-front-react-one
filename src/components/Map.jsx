import React, { useState } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import {
  MapPin,
  Navigation,
  Maximize2,
  Minimize2,
  Compass,
  Layers,
} from "lucide-react";

const center = { lat: 11.5622054, lng: 104.89051 };
const containerStyle = { width: "100%", height: "600px" };

// Cyberpunk-style map
const mapStyles = [
  { elementType: "geometry", stylers: [{ color: "#0a0a0a" }] },
  { elementType: "labels.icon", stylers: [{ visibility: "off" }] },
  { elementType: "labels.text.fill", stylers: [{ color: "#00ff88" }] },
  { elementType: "labels.text.stroke", stylers: [{ color: "#0a0a0a" }] },
  { featureType: "administrative", elementType: "geometry", stylers: [{ color: "#ff00ff" }, { lightness: -50 }] },
  { featureType: "poi", elementType: "labels.text.fill", stylers: [{ color: "#00ddff" }] },
  { featureType: "poi.park", elementType: "geometry", stylers: [{ color: "#001a0a" }] },
  { featureType: "road", elementType: "geometry.fill", stylers: [{ color: "#1a1a2e" }] },
  { featureType: "road", elementType: "labels.text.fill", stylers: [{ color: "#00ddff" }] },
  { featureType: "road.arterial", elementType: "geometry", stylers: [{ color: "#2a2a4e" }] },
  { featureType: "road.highway", elementType: "geometry", stylers: [{ color: "#6b00b3" }] },
  { featureType: "water", elementType: "geometry", stylers: [{ color: "#000d1a" }] },
  { featureType: "water", elementType: "labels.text.fill", stylers: [{ color: "#0088cc" }] },
];

const Map = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [mapType, setMapType] = useState("styled");

  // Load Google Maps
  const { isLoaded } = useJsApiLoader({ googleMapsApiKey: "AIzaSyCpIILD1kg7c1zdZA5KCLoTasoeR4XDEu4" });

  if (!isLoaded) return <div className="text-white text-center py-20">Loading Map...</div>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-purple-950 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-96 h-96 bg-purple-600 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
          </div>
          <h1 className="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 mb-4 tracking-tighter relative">
            LOCATION HUB
          </h1>
          <div className="flex items-center justify-center gap-2 text-cyan-400">
            <Compass className="animate-spin" size={20} style={{ animationDuration: "3s" }} />
            <p className="text-lg font-mono">Phnom Penh, Cambodia</p>
          </div>
        </div>

        {/* Map Container */}
        <div className="relative">
          {/* Glow effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-3xl blur-2xl opacity-30 animate-pulse"></div>

          <div className={`relative bg-black/80 backdrop-blur-xl rounded-3xl overflow-hidden border-2 border-purple-500/50 shadow-2xl ${isFullscreen ? "fixed inset-4 z-50" : ""}`}>
            {/* Top Bar */}
            <div className="absolute top-0 left-0 right-0 z-10 p-4 md:p-6 flex items-center justify-between">
              <div className="flex items-center gap-3 bg-black/80 backdrop-blur-md px-4 py-3 rounded-2xl border border-cyan-500/50 shadow-lg shadow-cyan-500/20">
                <MapPin className="text-cyan-400 animate-pulse" size={22} />
                <div className="font-mono">
                  <div className="text-cyan-400 text-sm font-bold">11.5622°N</div>
                  <div className="text-purple-400 text-xs">104.8905°E</div>
                </div>
              </div>

              <div className="flex gap-2">
                <button onClick={() => setMapType(mapType === "styled" ? "default" : "styled")} className="bg-black/80 backdrop-blur-md p-3 rounded-xl border border-purple-500/50 hover:bg-purple-600/30 transition-all duration-300 hover:scale-110 shadow-lg shadow-purple-500/20" title="Toggle Map Style">
                  <Layers className="text-purple-400" size={20} />
                </button>

                <button onClick={() => setIsFullscreen(!isFullscreen)} className="bg-black/80 backdrop-blur-md p-3 rounded-xl border border-cyan-500/50 hover:bg-cyan-600/30 transition-all duration-300 hover:scale-110 shadow-lg shadow-cyan-500/20">
                  {isFullscreen ? <Minimize2 className="text-cyan-400" size={20} /> : <Maximize2 className="text-cyan-400" size={20} />}
                </button>
              </div>
            </div>

            {/* Map */}
            <GoogleMap
              mapContainerStyle={isFullscreen ? { width: "100%", height: "100%" } : containerStyle}
              center={center}
              zoom={18}
              options={{
                styles: mapType === "styled" ? mapStyles : [],
                disableDefaultUI: true,
                zoomControl: true,
                mapTypeControl: false,
                streetViewControl: false,
                fullscreenControl: false,
              }}
            >
              <Marker position={center} />
            </GoogleMap>

            {/* Bottom Panel */}
            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
              <div className="bg-black/80 backdrop-blur-md rounded-2xl border border-purple-500/50 p-4 shadow-2xl">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-2">
                    <div className="bg-gradient-to-r from-purple-600/30 to-cyan-600/30 backdrop-blur-sm px-4 py-2 rounded-full border border-purple-500/30">
                      <span className="text-cyan-300 text-sm font-mono font-bold">ZOOM: 18x</span>
                    </div>
                    <div className="bg-gradient-to-r from-pink-600/30 to-purple-600/30 backdrop-blur-sm px-4 py-2 rounded-full border border-pink-500/30">
                      <span className="text-pink-300 text-sm font-mono font-bold">{mapType === "styled" ? "CYBER MODE" : "STANDARD"}</span>
                    </div>
                    <div className="bg-gradient-to-r from-cyan-600/30 to-blue-600/30 backdrop-blur-sm px-4 py-2 rounded-full border border-cyan-500/30">
                      <span className="text-cyan-300 text-sm font-mono font-bold">ACTIVE</span>
                    </div>
                  </div>

                  <button className="group relative bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 hover:from-cyan-400 hover:via-purple-400 hover:to-pink-400 px-8 py-3 rounded-full font-bold transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-purple-500/50 flex items-center gap-3 hover:scale-105">
                    <Navigation className="group-hover:rotate-45 transition-transform duration-300" size={20} />
                    <span className="text-white uppercase tracking-wider">Navigate</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {[
            { label: "LATITUDE", value: "11.5622°N", gradient: "from-cyan-500 via-blue-500 to-purple-500", icon: "↑" },
            { label: "LONGITUDE", value: "104.8905°E", gradient: "from-purple-500 via-pink-500 to-red-500", icon: "→" },
            { label: "ALTITUDE", value: "12m ASL", gradient: "from-pink-500 via-purple-500 to-cyan-500", icon: "⬆" },
          ].map((stat, i) => (
            <div key={i} className="group relative">
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${stat.gradient} rounded-2xl blur opacity-40 group-hover:opacity-70 transition-all duration-500`}></div>
              <div className="relative bg-black/90 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/30 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden">
                <div className={`absolute top-0 right-0 text-8xl font-black opacity-5 text-transparent bg-clip-text bg-gradient-to-br ${stat.gradient}`}>{stat.icon}</div>
                <p className="text-cyan-400 text-xs font-mono font-bold mb-2 uppercase tracking-wider">{stat.label}</p>
                <p className="text-white text-3xl font-black font-mono relative z-10">{stat.value}</p>
                <div className="mt-3 h-1 w-full bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-8 bg-gradient-to-r from-purple-900/50 via-black/50 to-cyan-900/50 backdrop-blur-md rounded-2xl border border-purple-500/30 p-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50"></div>
              <span className="text-cyan-400 font-mono text-sm">
                System Status: <span className="text-green-400 font-bold">ONLINE</span>
              </span>
            </div>
            <div className="text-purple-400 font-mono text-sm">
              Last Updated: <span className="text-white font-bold">{new Date().toLocaleTimeString()}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
