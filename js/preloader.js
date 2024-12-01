const preloaderDiv = document.createElement('div');
preloaderDiv.classList.add('preloader');
preloaderDiv.setAttribute('id', 'preloader');

const spinnerDiv = document.createElement('div');
spinnerDiv.classList.add('spinner');

const logoPreloader = document.createElement('img');
logoPreloader.src = '../assets/img/logo_moes.png';
logoPreloader.alt = 'Imagen de prueba'; 
logoPreloader.width = 150;

preloaderDiv.appendChild(logoPreloader);
preloaderDiv.appendChild(spinnerDiv);
document.body.prepend(preloaderDiv);

const links = document.querySelectorAll('header a');
const preloader = document.getElementById('preloader');

links.forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault(); // Prevenir redirección inmediata

    // Activar el preloader
    preloader.classList.add('active');

    // Esperar 2 segundos antes de redirigir
    setTimeout(() => {
      window.location.href = this.href; // Redirigir al destino
    }, 1000);
  })
});

window.addEventListener('popstate', (event) => {
  console.log('El usuario navegó hacia atrás o adelante');
  console.log('Estado actual:', event.state); // Puedes acceder al estado guardado
});
