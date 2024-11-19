var simplemaps_countrymap_mapdata={
  main_settings: {
   //General settings
    width: "responsive", //'700' or 'responsive'
    background_color: "F3F3F3",
    background_transparent: "yes",
    border_color: "#ffffff",
    
    //State defaults
    state_description: "",
    state_color: "#EBEFF2",
    state_hover_color: "",
    state_url: "",
    border_size: 1.5,
    all_states_inactive: "no",
    all_states_zoomable: "yes",
    location_description: "",
    location_url: "",
    location_color: "",
    location_opacity: "0.8",
    location_hover_opacity: 1,
    location_size: "15",
    location_type: "circle",
    location_image_source: "frog.png",
    location_border_color: "#FFFFFF",
    location_border: 2,
    location_hover_border: 2.5,
    all_locations_inactive: "no",
    all_locations_hidden: "no",
    
    //Label defaults
    label_color: "#ffffff",
    label_hover_color: "#ffffff",
    label_size: 16,
    label_font: "Arial",
    label_display: "auto",
    label_scale: "yes",
    hide_labels: "no",
    hide_eastern_labels: "no",
   
    //Zoom settings
    zoom: "yes",
    manual_zoom: "yes",
    back_image: "no",
    initial_back: "no",
    initial_zoom: "-1",
    initial_zoom_solo: "no",
    region_opacity: 1,
    region_hover_opacity: 0.6,
    zoom_out_incrementally: "yes",
    zoom_percentage: 0.99,
    zoom_time: 0.5,
    
    //Popup settings
    popup_color: "white",
    popup_opacity: 0.9,
    popup_shadow: 1,
    popup_corners: 5,
    popup_font: "12px/1.5 Verdana, Arial, Helvetica, sans-serif",
    popup_nocss: "no",
    
    //Advanced settings
    div: "map",
    auto_load: "yes",
    url_new_tab: "no",
    images_directory: "default",
    fade_time: 0.1,
    link_text: "View Website",
    popups: "detect",
    state_image_url: "",
    state_image_position: "",
    location_image_url: ""
  },
  state_specific: {
    COAMA: {
      name: "Amazonas"
    },
    COANT: {
      name: "Antioquia",
      color: "#79858C"
    },
    COARA: {
      name: "Arauca"
    },
    COATL: {
      name: "Atlántico",
      color: "#79858C"
    },
    COBOL: {
      name: "Bolívar"
    },
    COBOY: {
      name: "Boyacá",
      color: "#79858C"
    },
    COCAL: {
      name: "Caldas"
    },
    COCAQ: {
      name: "Caquetá"
    },
    COCAS: {
      name: "Casanare"
    },
    COCAU: {
      name: "Cauca"
    },
    COCES: {
      name: "Cesar",
      color: "#79858C"
    },
    COCHO: {
      name: "Chocó"
    },
    COCOR: {
      name: "Córdoba"
    },
    COCUN: {
      name: "Cundinamarca",
      color: "#79858C"
    },
    CODC: {
      name: "Distrito Capital de Bogotá"
    },
    COGUA: {
      name: "Guainía"
    },
    COGUV: {
      name: "Guaviare"
    },
    COHUI: {
      name: "Huila"
    },
    COLAG: {
      name: "La Guajira",
      color: "#79858C"
    },
    COMAG: {
      name: "Magdalena",
      color: "#79858C"
    },
    COMET: {
      name: "Meta"
    },
    CONAR: {
      name: "Nariño",
      color: "#79858C"
    },
    CONSA: {
      name: "Norte de Santander"
    },
    COPUT: {
      name: "Putumayo"
    },
    COQUI: {
      name: "Quindío"
    },
    CORIS: {
      name: "Risaralda"
    },
    COSAN: {
      name: "Santander"
    },
    COSAP: {
      name: "San Andrés y Providencia"
    },
    COSUC: {
      name: "Sucre"
    },
    COTOL: {
      name: "Tolima"
    },
    COVAC: {
      name: "Valle del Cauca"
    },
    COVAU: {
      name: "Vaupés"
    },
    COVID: {
      name: "Vichada"
    }
  },
  locations: {
    "0": {
      lat: "6.2308",
      lng: "-75.5906",
      description: "Contacto: 310 343 1657",
      name: "Diego Laverde"
    },
    "1": {
      lat: "10.9833",
      lng: "-74.8019",
      name: "Willian Ospina",
      description: "Contacto: 301 307 7200"
    },
    "2": {
      lat: "11.5442",
      lng: "-72.9069",
      name: "Abidas Orozco",
      description: "Contacto: 317 667 5106"
    },
    "3": {
      lat: "11.2419",
      lng: "-74.2053",
      name: "Abidas Orozco",
      description: "Contacto: 317 667 5106"
    },
    "4": {
      lat: "10.4833",
      lng: "-73.2500",
      name: "Abidas Orozco",
      description: "Contacto: 317 667 5106"
    },
    "5": {
      name: "Luis Burbano",
      lat: "1.2078",
      lng: "-77.2772",
      description: "Contacto:"
    },
    "6": {
      lat: "4.7111",
      lng: "-74.0722",
      name: "John Hernández",
      description: "Contacto: 301 401 7681"
    },
    "7": {
      description: "Contacto: 301 401 7681",
      lat: "5.5333",
      lng: "-73.3667",
      name: "John Hernández"
    }
  },
  labels: {
    COAMA: {
      name: "Amazonas",
      parent_id: "COAMA"
    },
    COANT: {
      name: "Antioquia",
      parent_id: "COANT"
    },
    COARA: {
      name: "Arauca",
      parent_id: "COARA"
    },
    COATL: {
      name: "Atlántico",
      parent_id: "COATL"
    },
    COBOL: {
      name: "Bolívar",
      parent_id: "COBOL"
    },
    COBOY: {
      name: "Boyacá",
      parent_id: "COBOY"
    },
    COCAL: {
      name: "Caldas",
      parent_id: "COCAL"
    },
    COCAQ: {
      name: "Caquetá",
      parent_id: "COCAQ"
    },
    COCAS: {
      name: "Casanare",
      parent_id: "COCAS"
    },
    COCAU: {
      name: "Cauca",
      parent_id: "COCAU"
    },
    COCES: {
      name: "Cesar",
      parent_id: "COCES"
    },
    COCHO: {
      name: "Chocó",
      parent_id: "COCHO"
    },
    COCOR: {
      name: "Córdoba",
      parent_id: "COCOR"
    },
    COCUN: {
      name: "Cundinamarca",
      parent_id: "COCUN"
    },
    CODC: {
      name: "Distrito Capital de Bogotá",
      parent_id: "CODC"
    },
    COGUA: {
      name: "Guainía",
      parent_id: "COGUA"
    },
    COGUV: {
      name: "Guaviare",
      parent_id: "COGUV"
    },
    COHUI: {
      name: "Huila",
      parent_id: "COHUI"
    },
    COLAG: {
      name: "La Guajira",
      parent_id: "COLAG"
    },
    COMAG: {
      name: "Magdalena",
      parent_id: "COMAG"
    },
    COMET: {
      name: "Meta",
      parent_id: "COMET"
    },
    CONAR: {
      name: "Nariño",
      parent_id: "CONAR"
    },
    CONSA: {
      name: "Norte de Santander",
      parent_id: "CONSA"
    },
    COPUT: {
      name: "Putumayo",
      parent_id: "COPUT"
    },
    COQUI: {
      name: "Quindío",
      parent_id: "COQUI"
    },
    CORIS: {
      name: "Risaralda",
      parent_id: "CORIS"
    },
    COSAN: {
      name: "Santander",
      parent_id: "COSAN"
    },
    COSAP: {
      name: "San Andrés y Providencia",
      parent_id: "COSAP"
    },
    COSUC: {
      name: "Sucre",
      parent_id: "COSUC"
    },
    COTOL: {
      name: "Tolima",
      parent_id: "COTOL"
    },
    COVAC: {
      name: "Valle del Cauca",
      parent_id: "COVAC"
    },
    COVAU: {
      name: "Vaupés",
      parent_id: "COVAU"
    },
    COVID: {
      name: "Vichada",
      parent_id: "COVID"
    }
  },
  legend: {
    entries: []
  },
  regions: {}
};