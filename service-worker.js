const CACHE_NAME = 'melocraft-cache-v3'; // Incrementa la versión si haces cambios sustanciales
const urlsToCache = [
  '/', // Importante para cachear la raíz
  '/Index.html',
  '/style.css',
  '/script.js',
  '/loading-screen.js', // ¡Añadir el nuevo script de carga!
  '/manifest.json',
  '/assets/images/favicon.ico',
  '/assets/images/placeholder.jpg',
  '/assets/images/icon-192x192.png',
  '/assets/images/icon-512x512.png',
  '/assets/images/maskable_icon_x512.png',
  '/assets/images/icon-splash-screen.png',
  'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Poppins:wght@400;600&display=swap', // Fuentes de Google
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css', // Font Awesome

  // --- RUTAS DE AUDIO E IMÁGENES DE CANCIONES (¡COMPLETA ESTA SECCIÓN!) ---
  // Asegúrate de que CADA una de estas rutas coincida con tus archivos reales
  // y con lo que tienes en script.js
  '/assets/audio/full/hawaiian-roller-coaster-ride-full.mp3',
  '/assets/audio/bases/hawaiian-roller-coaster-ride-base.mp3',
  '/assets/audio/vocals/hawaiian-roller-coaster-ride-vocals.mp3',
  '/assets/images/hawaiian-roller-coaster-ride.jpg',

  '/assets/audio/full/love-me-again-full.mp3',
  '/assets/audio/bases/love-me-again-base.mp3',
  '/assets/audio/vocals/love-me-again-vocals.mp3',
  '/assets/images/love-me-again.jpg',

  '/assets/audio/full/olimpo-full.mp3',
  '/assets/audio/bases/olimpo-base.mp3',
  '/assets/audio/vocals/olimpo-vocals.mp3',
  '/assets/images/olimpo.jpg',

  '/assets/audio/full/counting-stars-full.mp3',
  '/assets/audio/bases/counting-stars-base.mp3',
  '/assets/audio/vocals/counting-stars-vocals.mp3',
  '/assets/images/counting-stars.jpg',

  '/assets/audio/full/Rosa-De-trigo-full.mp3',
  '/assets/audio/bases/Rosa-De-trigo-base.mp3',
  '/assets/audio/vocals/Rosa-De-trigo-vocal.mp3',
  '/assets/images/Rosa-De-trigo.PNG', // Cuidado con las extensiones .PNG vs .png

  '/assets/audio/full/Claro-full.mp3',
  '/assets/audio/bases/Claro-base.mp3',
  '/assets/audio/vocals/Claro-vocal.mp3',
  '/assets/images/Claro.PNG',

  '/assets/audio/full/meltdown-full.mp3',
  '/assets/audio/bases/meltdown-base.mp3',
  '/assets/audio/vocals/meltdown-vocal.mp3',
  '/assets/images/meltdown.jpg',

  '/assets/audio/full/Washing-full.mp3',
  '/assets/audio/bases/Washing-base.mp3',
  '/assets/audio/vocals/Washing-vocal.mp3',
  '/assets/images/Washing.jpg',

  '/assets/audio/full/tommy-full.mp3',
  '/assets/audio/bases/tommy-base.mp3',
  '/assets/audio/vocals/tommy-vocal.mp3',
  '/assets/images/tommy.jpg',

  '/assets/audio/full/patapim-full.mp3',
  '/assets/audio/bases/patapim-base.mp3',
  '/assets/audio/vocals/patapim-vocal.mp3',
  '/assets/images/patapim.PNG',

  '/assets/audio/full/rosadrill-full.mp3',
  '/assets/audio/bases/rosadrill-base.mp3',
  '/assets/audio/vocals/rosadrill-vocal.mp3',
  '/assets/images/Rosadrill.PNG',

  '/assets/audio/full/here-full.mp3',
  '/assets/audio/bases/here-base.mp3',
  '/assets/audio/vocals/here-vocal.mp3',
  '/assets/images/Here.png',

  '/assets/audio/full/rockbody-full.mp3',
  '/assets/audio/bases/rockbody-base.mp3',
  '/assets/audio/vocals/rockbody-vocal.mp3',
  '/assets/images/Rockbody.jpg',

  '/assets/audio/full/sinrollos-full.mp3',
  '/assets/audio/bases/sinrollo-base.mp3',
  '/assets/audio/vocals/Sinrollo-vocal.mp3',
  '/assets/images/Sinrollos.PNG'
];


self.addEventListener('install', event => {
  console.log('Service Worker: Installing...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Service Worker: Caching App Shell and static assets');
        return cache.addAll(urlsToCache);
      })
      .catch(error => {
        console.error('Service Worker: Cache addAll failed:', error);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response; // Devuelve del caché si está disponible
        }
        return fetch(event.request).catch(() => {
          // Opcional: devolver una página offline si la petición falla
          // return caches.match('/offline.html'); // Si tuvieras una página offline específica
        });
      })
  );
});

self.addEventListener('activate', event => {
  console.log('Service Worker: Activating...');
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('Service Worker: Deleting old cache', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
