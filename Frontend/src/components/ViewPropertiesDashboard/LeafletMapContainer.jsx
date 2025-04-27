import React from 'react'
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import "leaflet/dist/leaflet.css";

import { LocationPin } from '../../JS/LocationPin';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react'


function LeafletMapContainer({listings}) {
    
    const navigateToProperty = useNavigate()

    return (
        <MapContainer
            className="Leaflet_map"
            style={{ height: "800px" }}
            center={[51.505, -0.09]}
            zoom={2.25}
            scrollWheelZoom={true}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png"
            />

            {listings.map((listing, index) => {
                // Ensure latitude and longitude exist before rendering the marker
                if (listing.latitude && listing.longitude) {
                    return (
                        <Marker
                            key={index}
                            position={[listing.latitude, listing.longitude]}
                            icon={LocationPin}
                        >
                            <Popup>
                                <img
                                    cursor="pointer"
                                    onClick={() => navigateToProperty('property-page/' + listing.id)}
                                    src={listing.image}
                                    alt={listing.title}
                                    style={{ width: "100px", height: "100px" }}
                                />
                                <div>
                                    <strong>{listing.title}</strong>
                                    <br />
                                    {listing.description}
                                    <br />
                                    ${listing.fees}
                                </div>
                            </Popup>
                        </Marker>
                    );
                }
                return null; // Return null if latitude or longitude is missing
            })}
        </MapContainer>
    );
}

export default LeafletMapContainer