
document.addEventListener("DOMContentLoaded", function () {
  const galeria = document.getElementById('galeria');

  // URL del archivo JSON en GitHub
  const urlJson = 'https://raw.githubusercontent.com/Jenniferg003/Proyecto.github.io/refs/heads/main/galeria.json';

  fetch(urlJson)
      .then(response => {
          if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
      })
      .then(data => {
          const imagenesSeleccionadas = [data[0], data[1], data[2], data[3], data[4]];

          imagenesSeleccionadas.forEach(imagen => {
              const imagenContainer = document.createElement('div');
              imagenContainer.classList.add('imagen-container');

              // Crear la imagen
              const img = document.createElement('img');
              img.src = imagen.url;
              img.alt = 'Imagen no disponible';

              // Crear el texto
              const texto = document.createElement('div');
              texto.classList.add('texto-hover');

              imagenContainer.appendChild(img);

              galeria.appendChild(imagenContainer);
          });
      })
      .catch(error => console.error('Error cargando el JSON:', error));
});


document.addEventListener("DOMContentLoaded", function () {
  const galeria = document.getElementById('galeria2');

  // URL del archivo JSON en GitHub
  const urlJson = 'https://raw.githubusercontent.com/Jenniferg003/Proyecto.github.io/refs/heads/main/galeria.json';

  fetch(urlJson)
      .then(response => {
          if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
      })
      .then(data => {
          const imagenesSeleccionadas = [data[5], data[6], data[7], data[8], data[9]];

          imagenesSeleccionadas.forEach(imagen => {
              const imagenContainer = document.createElement('div');
              imagenContainer.classList.add('imagen-container');

              // Crear la imagen
              const img = document.createElement('img');
              img.src = imagen.url;
              img.alt = 'Imagen no disponible';

              // Crear el texto
              const texto = document.createElement('div');
              texto.classList.add('texto-hover');

              imagenContainer.appendChild(img);

              galeria.appendChild(imagenContainer);
          });
      })
      .catch(error => console.error('Error cargando el JSON:', error));
});
  
document.addEventListener("DOMContentLoaded", function () {
  const galeria = document.getElementById('galeria3');

  // URL del archivo JSON en GitHub
  const urlJson = 'https://raw.githubusercontent.com/Jenniferg003/Proyecto.github.io/refs/heads/main/galeria.json';

  fetch(urlJson)
      .then(response => {
          if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
      })
      .then(data => {
          const imagenesSeleccionadas = [data[10], data[11], data[12], data[13]];

          imagenesSeleccionadas.forEach(imagen => {
              const imagenContainer = document.createElement('div');
              imagenContainer.classList.add('imagen-container');

              // Crear la imagen
              const img = document.createElement('img');
              img.src = imagen.url;
              img.alt = 'Imagen no disponible';

              // Crear el texto
              const texto = document.createElement('div');
              texto.classList.add('texto-hover');

              imagenContainer.appendChild(img);

              galeria.appendChild(imagenContainer);
          });
      })
      .catch(error => console.error('Error cargando el JSON:', error));
});

document.addEventListener("DOMContentLoaded", function () {
  const galeria = document.getElementById('galeria5');

  // URL del archivo JSON en GitHub
  const urlJson = 'https://raw.githubusercontent.com/Jenniferg003/Proyecto.github.io/refs/heads/main/galeria.json';

  fetch(urlJson)
      .then(response => {
          if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
      })
      .then(data => {
          const imagenesSeleccionadas = [data[18], data[19], data[20], data[21], data[22]];

          imagenesSeleccionadas.forEach(imagen => {
              const imagenContainer = document.createElement('div');
              imagenContainer.classList.add('imagen-container');

              // Crear la imagen
              const img = document.createElement('img');
              img.src = imagen.url;
              img.alt = 'Imagen no disponible';

              // Crear el texto
              const texto = document.createElement('div');
              texto.classList.add('texto-hover');

              imagenContainer.appendChild(img);

              galeria.appendChild(imagenContainer);
          });
      })
      .catch(error => console.error('Error cargando el JSON:', error));
});

document.addEventListener("DOMContentLoaded", function () {
  const galeria = document.getElementById('galeria4');

  // URL del archivo JSON en GitHub
  const urlJson = 'https://raw.githubusercontent.com/Jenniferg003/Proyecto.github.io/refs/heads/main/galeria.json';

  fetch(urlJson)
      .then(response => {
          if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
      })
      .then(data => {
          const imagenesSeleccionadas = [data[14], data[15], data[16], data[17]];

          imagenesSeleccionadas.forEach(imagen => {
              const imagenContainer = document.createElement('div');
              imagenContainer.classList.add('imagen-container');

              // Crear la imagen
              const img = document.createElement('img');
              img.src = imagen.url;
              img.alt = 'Imagen no disponible';

              // Crear el texto
              const texto = document.createElement('div');
              texto.classList.add('texto-hover');

              imagenContainer.appendChild(img);

              galeria.appendChild(imagenContainer);
          });
      })
      .catch(error => console.error('Error cargando el JSON:', error));
});

document.addEventListener("DOMContentLoaded", function () {
  const galeria = document.getElementById('galeria6');

  // URL del archivo JSON en GitHub
  const urlJson = 'https://raw.githubusercontent.com/Jenniferg003/Proyecto.github.io/refs/heads/main/galeria.json';

  fetch(urlJson)
      .then(response => {
          if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
      })
      .then(data => {
          const imagenesSeleccionadas = [data[23], data[24], data[25], data[26]];

          imagenesSeleccionadas.forEach(imagen => {
              const imagenContainer = document.createElement('div');
              imagenContainer.classList.add('imagen-container');

              // Crear la imagen
              const img = document.createElement('img');
              img.src = imagen.url;
              img.alt = 'Imagen no disponible';

              // Crear el texto
              const texto = document.createElement('div');
              texto.classList.add('texto-hover');

              imagenContainer.appendChild(img);

              galeria.appendChild(imagenContainer);
          });
      })
      .catch(error => console.error('Error cargando el JSON:', error));
});




