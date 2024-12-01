const preloaderDiv = document.createElement('div');
preloaderDiv.classList.add('preloader');
preloaderDiv.classList.add('active');
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


window.addEventListener('load', () => {
  setTimeout(() => {
    preloader.classList.remove('active');
  }, 1000);  
});
