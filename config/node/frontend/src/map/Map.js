import React from "react";
import {
  MapContainer,
  TileLayer,
  LayersControl,
  Marker,
  Popup,
} from "react-leaflet";
import "./Map.css";
import "leaflet/dist/leaflet.css";
import { DefaultIcon } from "./icon";

function Map({ units }) {
  return (
    <div className="map">
      <MapContainer center={[52.23, 21.0]} zoom={15}>
        <LayersControl>
          <LayersControl.BaseLayer checked name="OSM">
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          </LayersControl.BaseLayer>
          <LayersControl.BaseLayer checked name="WMS Google Satelites">
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}"
            />
          </LayersControl.BaseLayer>
        </LayersControl>
        {units.map((unit) => {
          return (
            <Marker key={unit.id} position={[unit.lat, unit.lng]}>
              <Popup key={unit.id}>
                <h5>{unit.name}</h5>
                <br />
                <strong>Adres: </strong>
                {unit.address} <br />
                <strong>Tel.: </strong>
                {unit.phone}
                <br />
                <strong>Fax: </strong>
                {unit.fax} <br />
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
}

export default Map;
