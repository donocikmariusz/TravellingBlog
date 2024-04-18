<!DOCTYPE html>
<html>
<head>
    <title>Interaktywna mapa Europy</title>
    <link rel="stylesheet" href="https://unpkg.com/leaflet/dist/leaflet.css" />
    <script src="https://unpkg.com/leaflet/dist/leaflet.js"></script>
    <style>
        #mapid { height: 180px; }
    </style>
</head>
<body>

<div id="mapid"></div>
<script>
    var map = L.map('mapid').setView([51.505, -0.09], 3); // Centruj mapę na Europie

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap'
    }).addTo(map);

    var countries = [
        {name: "Polska", latLng: [51.9194, 19.1451], url: "https://example.com/polska"},
        {name: "Niemcy", latLng: [51.1657, 10.4515], url: "https://example.com/niemcy"},
        // Dodaj więcej krajów według potrzeb
    ];

    countries.forEach(function(country) {
        L.marker(country.latLng)
            .addTo(map)
            .bindPopup(`<b>${country.name}</b> <br> <a href="${country.url}">Więcej informacji</a>`)
            .on('click', function() {
                window.location.href = country.url;
            });
    });
</script>

</body>
</html>
