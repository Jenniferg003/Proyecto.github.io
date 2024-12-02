document.addEventListener("DOMContentLoaded", function () {
    const galeria = document.getElementById('servicio');
  
    // URL del archivo JSON
    const urlJson = '../servicios.json';
  
  fetch(urlJson)
  .then(response => response.json())
  .then(data => {
    
    const imagenesSeleccionadas = [data[0], data[1], data[2], data[3], data[4]]; 
  
    imagenesSeleccionadas.forEach(imagen => {
      const imagenContainer = document.createElement('div');
      imagenContainer.classList.add('imagen-container');
  
      // Crear la imagen
      const img = document.createElement('img');
      img.src = imagen.url;
      img.alt = 'Imagen seleccionada';
  
      // Crear el texto
      const texto = document.createElement('div');
      texto.classList.add('texto-hover');
      texto.textContent = imagen.texto;
  
      
      imagenContainer.appendChild(img);
      imagenContainer.appendChild(texto);
  
      galeria.appendChild(imagenContainer);
    });
  })
  .catch(error => console.error('Error cargando el JSON:', error));
  });

  document.addEventListener("DOMContentLoaded", function () {
    const galeria = document.getElementById('servicio2');
  
    // URL del archivo JSON
    const urlJson = '../servicios.json';
  
  fetch(urlJson)
  .then(response => response.json())
  .then(data => {
    
    const imagenesSeleccionadas = [data[5], data[6], data[7], data[8]]; 
  
    imagenesSeleccionadas.forEach(imagen => {
      const imagenContainer = document.createElement('div');
      imagenContainer.classList.add('imagen-container');
  
      // Crear la imagen
      const img = document.createElement('img');
      img.src = imagen.url;
      img.alt = 'Imagen seleccionada';
  
      // Crear el texto
      const texto = document.createElement('div');
      texto.classList.add('texto-hover');
      texto.textContent = imagen.texto;
  
      
      imagenContainer.appendChild(img);
      imagenContainer.appendChild(texto);
  
      galeria.appendChild(imagenContainer);
    });
  })
  .catch(error => console.error('Error cargando el JSON:', error));
  });

  document.addEventListener("DOMContentLoaded", function () {
    const galeria = document.getElementById('servicio3');
  
    // URL del archivo JSON
    const urlJson = '../servicios.json';
  
  fetch(urlJson)
  .then(response => response.json())
  .then(data => {
    
    const imagenesSeleccionadas = [data[9], data[10], data[11], data[12]]; 
  
    imagenesSeleccionadas.forEach(imagen => {
      const imagenContainer = document.createElement('div');
      imagenContainer.classList.add('imagen-container');
  
      // Crear la imagen
      const img = document.createElement('img');
      img.src = imagen.url;
      img.alt = 'Imagen seleccionada';
  
      // Crear el texto
      const texto = document.createElement('div');
      texto.classList.add('texto-hover');
      texto.textContent = imagen.texto;
  
      
      imagenContainer.appendChild(img);
      imagenContainer.appendChild(texto);
  
      galeria.appendChild(imagenContainer);
    });
  })
  .catch(error => console.error('Error cargando el JSON:', error));
  });

  document.addEventListener("DOMContentLoaded", function () {
    const galeria = document.getElementById('servicio4');
  
    // URL del archivo JSON
    const urlJson = '../servicios.json';
  
  fetch(urlJson)
  .then(response => response.json())
  .then(data => {
    
    const imagenesSeleccionadas = [data[13], data[14], data[15]]; 
  
    imagenesSeleccionadas.forEach(imagen => {
      const imagenContainer = document.createElement('div');
      imagenContainer.classList.add('imagen-container');
  
      // Crear la imagen
      const img = document.createElement('img');
      img.src = imagen.url;
      img.alt = 'Imagen seleccionada';
  
      // Crear el texto
      const texto = document.createElement('div');
      texto.classList.add('texto-hover');
      texto.textContent = imagen.texto;
  
      
      imagenContainer.appendChild(img);
      imagenContainer.appendChild(texto);
  
      galeria.appendChild(imagenContainer);
    });
  })
  .catch(error => console.error('Error cargando el JSON:', error));
  });

  