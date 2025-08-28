var map = L.map('map', {
  zoomControl: true,          // Desactiva el control de zoom (+/-)
  scrollWheelZoom: false,      // Desactiva el zoom con la rueda del ratón
  doubleClickZoom: false,      // Desactiva el zoom al hacer doble clic
  dragging: false              // Opcional: Desactiva el arrastre del mapa
}).setView([4.5709, -74.2973], 6);


var geojson;

fetch('https://gist.githubusercontent.com/john-guerra/43c7656821069d00dcbc/raw/be6a6e239cd5b5b803c6e7c2ec405b793a9064dd/Colombia.geo.json')
  .then(response => response.json())
  .then(data => {
    geojson = L.geoJSON(data, {
      style: function (feature) {
        switch (feature.properties.NOMBRE_DPT) {
          case 'ANTIOQUIA': return { color: '#2183D5', weight: 1 };
          case 'ATLANTICO': return { color: '#2183D5', weight: 1 };
          case 'LA GUAJIRA': return { color: '#2183D5', weight: 1 };
          case 'MAGDALENA': return { color: '#2183D5', weight: 1 };
          case 'CESAR': return { color: '#2183D5', weight: 1 };
          case 'NARIÑO': return { color: '#2183D5', weight: 1 };
          case 'CUNDINAMARCA': return { color: '#2183D5', weight: 1 };
          case 'META': return { color: '#2183D5', weight: 1 };
          case 'SANTANDER': return { color: '#2183D5', weight: 1 };
          case 'SAN ANDRES': return { color: '#2183D5', weight: 1 };
          case 'VALLE DEL CAUCA': return { color: '#2183D5', weight: 1 };
          default: return { color: '#79858C', weight: 1 };
        }
      },
      onEachFeature: function (feature, layer) {
        layer.on({
          mouseover: highlightFeature,
          mouseout: resetHighlight
        });
        //layer.bindPopup(feature.properties.name);
      }
    }).addTo(map);
  })
  .catch(error => console.error('Error loading GeoJSON:', error));

function highlightFeature(e) {
  var layer = e.target;

  if (layer.options.color == '#79858C') {
    return;
  }

  layer.setStyle({
    weight: 1,
    color: '#2183D5',
    dashArray: '',
    fillOpacity: 1
  });

  if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
    layer.bringToFront();
  }
}

function resetHighlight(e) {
  geojson.resetStyle(e.target);
}

const redIcon = L.icon({
  iconUrl: '../assets/icons/location-pin.png', // URL to red marker
  iconSize: [40, 40], // Adjust size (default is 25x41)
  iconAnchor: [12, 41], // Anchor point (center bottom)
  popupAnchor: [1, -34], // Popup offset
});

var markers = [
  {
    // Bogotá, Cundinamarca
    lat: 4.7110,
    lng: -74.0721,
    name: '<div class="font-size-marker-map"> Cundinamarca <br><br> MAINFRAME <br> Ing. Juan Pablo Zapata  <br> Contacto: +57 317 5085599 </div> <br> <div class="font-size-marker-map">Ing. John Hernández <br> Contacto: +57 301 4017681 </div>'
  },
  { 
    // Medellín, Antioquia
    lat: 6.2442, 
    lng: -75.5812, 
    name: '<div class="font-size-marker-map">Antioquia <br><br> DomoSmarTech <br> Ing. Diego Laverde <br> Contacto: +57 310 343 1657 </div>' 
  },
  { 
    // Barranquilla, Atlántico
    lat: 10.5833, 
    lng: -75.2100, 
    name: '<div class="font-size-marker-map">Atlántico <br><br> Comercial <br> Ing. Willian Ospina <br> Contacto: +57 301 307 7200 </div>' 
  },
  {
    // La Guajira
    lat: 11.1442, 
    lng: -72.9069, 
    name: '<div class="font-size-marker-map">La Guajira <br><br> SERVIPLUS IT <br> Ing. Abdias Orozco <br> Contacto: +57 317 667 5106 </div>' 
  },
  { 
    // Magdalena
    lat: 10.2419, 
    lng: -74.5053, 
    name: '<div class="font-size-marker-map">Magdalena <br><br> SERVIPLUS IT <br> Ing. Abdias Orozco <br> Contacto: +57 317 667 5106 </div>'
  },
  { 
    // Cesar
    lat: 9.0349, 
    lng: -73.7500, 
    name: '<div class="font-size-marker-map">Cesar <br><br> SERVIPLUS IT <br> Ing. Abdias Orozco <br> Contacto: +57 317 667 5106 </div>' 
  },
  { // Pasto, Nariño
    lat: 1.2078, 
    lng: -78.2772, 
    name: '<div class="font-size-marker-map">Nariño <br><br> Comercial <br> Ing. Luis Burbano <br> Contacto: +57 316 725 3469 </div>' 
  },
  { // Meta
    lat: 2.9630, 
    lng: -73.708889, 
    name: '<div class="font-size-marker-map">Meta <br><br> SMART LIVING INGENIERÍA <br> Ing. Cristian Cuesta <br> Contacto: +57 304 674 9000 </div>' 
  },
  { // Santander
    lat: 6.6666, 
    lng: -73.45, 
    name: '<div class="font-size-marker-map">Santander <br><br> BEST LIFE TECHNOLOGY S.A.S <br> Ing. Carlos Plata <br> Contacto: +57 317 4013850 </div> <br> <div class="font-size-marker-map"> SANTAFÉ SOLUCIONES S.A.S. <br>Ing. Carlos Plata <br> Contacto: +57 317 4013850 </div>' 
  },
  { // San Andrés – Providencia - Santa Catalina
    lat: 12.5847, 
    lng: -81.7005,
    name: '<div class="font-size-marker-map">San Andrés - Providencia - Santa Catalina <br><br> TECNOSHAP <br> Ing. Favian Racini <br> Contacto: +57 318 376 5426 </div>' 
  },
  { // Valle del Cauca
    lat: 3.9333, 
    lng: -76.5166, 
    name: '<div class="font-size-marker-map">Valle del Cauca <br><br> UPPER TECHNOLOGY <br> Ing. Francisco Vásquez <br> Contacto: +57 350 284 3616 </div>' 
  },
];

markers.forEach(function (marker) {
  L.marker([marker.lat, marker.lng], { icon: redIcon })
    .addTo(map)
    .bindPopup(marker.name);
});

function adjustZoom() {
  if (window.innerWidth < 1025) {
      map.setView([4.5709, -74.2973], 5);
  }
  else {
      map.setView([4.5709, -74.2973], 6);
  }
}
// Call on load and resize
adjustZoom();
window.addEventListener('resize', adjustZoom);

