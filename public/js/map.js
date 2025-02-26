
mapboxgl.accessToken = mapToken;
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v12',
    center: Listing.geometry.coordinates, // starting position [lng, lat]. Note that lat must be set between -90 and 90
    zoom: 12 // starting zoom
});
console.log(Listing.geometry.coordinates);

const marker = new mapboxgl.Marker({ color: "red" })
    .setLngLat(Listing.geometry.coordinates)//Listing.geometry.coordinates use 
    .setPopup(new mapboxgl.Popup({ offset: 25 })
    .setHTML(`<h4>${Listing.title}</h4><p>Exact Location Provided after booking</p>`))
    .addTo(map);