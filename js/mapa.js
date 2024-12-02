function initMap() {
    const location = { lat: 10.076578, lng: -84.191226 };
  
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15,  
      center: location,
    });
  
    
    new google.maps.Marker({
      position: location,
      map: map,
      title: "Ubicación seleccionada",
    });
  }
  