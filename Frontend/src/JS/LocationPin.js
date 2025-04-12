import L from 'leaflet';

const LocationPin = new L.Icon({
    iconUrl: '../../public/pin.png',
    iconRetinaUrl: '../../public/pin.png',
    iconAnchor: null,
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(30, 30),
    className: 'location_pin',
    iconAnchor: [15, 30],
    popupAnchor: [0, -30]
});

export { LocationPin }