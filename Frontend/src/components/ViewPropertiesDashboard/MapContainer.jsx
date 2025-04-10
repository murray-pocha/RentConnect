import React, { useEffect, useRef } from 'react'
import mapboxgl from 'mapbox-gl'

import 'mapbox-gl/dist/mapbox-gl.css';


function MapContainer() {

    const mapRef = useRef()
    const mapContainerRef = useRef()

    useEffect(() => {
        mapboxgl.accessToken = 'pk.eyJ1IjoiamFpZGVucGVhcnNvbiIsImEiOiJjbTlheHpjczAwOXRnMmxvY21mNjYxendtIn0.JiTtjg9OK01XNSDwdZ5yhw'
        mapRef.current = new mapboxgl.Map({
            container: mapContainerRef.current,
        });

        return () => {
            mapRef.current.remove()
        }
    }, [])

    return (
        <>
            <div id='map-container' ref={mapContainerRef} />
        </>
    )
}

export default MapContainer