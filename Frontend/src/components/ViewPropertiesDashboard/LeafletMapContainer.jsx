import React from 'react'
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import "leaflet/dist/leaflet.css";

import { LocationPin } from '../../JS/LocationPin';


function LeafletMapContainer() {
    
    return (
        <MapContainer
            className='Leaflet_map'
            style={{height: "800px"}} 
            center={[51.505, -0.09]} 
            zoom={2.25} 
            scrollWheelZoom={true}
            >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png"
            />
            <Marker 
            position={[51.505, -0.09]}
            icon={ LocationPin }
            >
                <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>
    )
}

export default LeafletMapContainer


// import React, { useEffect, useRef } from 'react'
// import mapboxgl from 'mapbox-gl'

// import 'mapbox-gl/dist/mapbox-gl.css';


// function MapContainer() {

//     const mapRef = useRef()
//     const mapContainerRef = useRef()

//     useEffect(() => {
//         mapboxgl.accessToken = 'pk.eyJ1IjoiamFpZGVucGVhcnNvbiIsImEiOiJjbTlheHpjczAwOXRnMmxvY21mNjYxendtIn0.JiTtjg9OK01XNSDwdZ5yhw'
//         mapRef.current = new mapboxgl.Map({
//             container: mapContainerRef.current,
//         });

//         return () => {
//             mapRef.current.remove()
//         }
//     }, [])

//     return (
//         <>
//             <div id='map-container' ref={mapContainerRef} />
//         </>
//     )
// }

// export default MapContainer