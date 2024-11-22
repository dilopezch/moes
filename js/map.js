var map = L.map('map', {
  zoomControl: false,          // Desactiva el control de zoom (+/-)
  scrollWheelZoom: false,      // Desactiva el zoom con la rueda del ratón
  doubleClickZoom: false,      // Desactiva el zoom al hacer doble clic
  dragging: false              // Opcional: Desactiva el arrastre del mapa
}).setView([4.5709, -74.2973], 6);