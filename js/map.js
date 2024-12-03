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
          case 'BOYACA': return { color: '#2183D5', weight: 1 };
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
    lat: 4.7110,
    lng: -74.0721,
    name: '<div class="font-size-marker-map">John Hernández <br> Contacto: 301 401 7681 <br> Cundinamarca</div>'
  },
  { 
    lat: 5.5333, 
    lng: -73.3667, 
    name: '<div class="font-size-marker-map">John Hernández <br> Contacto: 301 401 7681 <br> Boyacá</div>' 
  },
  { 
    lat: 6.2442, 
    lng: -75.5812, 
    name: '<div class="font-size-marker-map">Diego Laverde <br> Contacto: 310 343 1657 <br> Antioquia</div>' 
  },
  { 
    lat: 10.5833, 
    lng: -75.2100, 
    name: '<div class="font-size-marker-map">Willian Ospina <br> Contacto: 301 307 7200 <br> Atlántico</div>' 
  },
  { 
    lat: 11.1442, 
    lng: -72.9069, 
    name: '<div class="font-size-marker-map">Abidas Orozco <br> Contacto: 317 667 5106 <br> La Guajira</div>' 
  },
  { 
    lat: 10.2419, 
    lng: -74.5053, 
    name: '<div class="font-size-marker-map">Abidas Orozco <br> Contacto: 317 667 5106 <br> Magdalena</div>'
  },
  { 
    lat: 9.0349, 
    lng: -73.7500, 
    name: '<div class="font-size-marker-map">Abidas Orozco <br> Contacto: 317 667 5106 <br> Cesar</div>' 
  },
  { 
    lat: 1.2078, 
    lng: -78.2772, 
    name: '<div class="font-size-marker-map">Luis Burbano <br> Contacto:  <br> Nariño</div>' 
  }
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

