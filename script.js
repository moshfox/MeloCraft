// --- Datos de las Canciones ---
const songs = [
    {
        id: 'hawaiian',
        title: 'Hawaiian Roller Coaster Ride',
        artist: 'Mark Kealiʻi Hoʻomalu',
        image: 'assets/images/hawaiian-roller-coaster-ride.jpg',
        fullAudio: 'assets/audio/full/hawaiian-roller-coaster-ride-full.mp3',
        baseAudio: 'assets/audio/bases/hawaiian-roller-coaster-ride-base.mp3',
        vocalAudio: 'assets/audio/vocals/hawaiian-roller-coaster-ride-vocals.mp3'
    },
    {
        id: 'love-me-again',
        title: 'Love Me Again',
        artist: 'John Newman',
        image: 'assets/images/love-me-again.jpg',
        fullAudio: 'assets/audio/full/love-me-again-full.mp3',
        baseAudio: 'assets/audio/bases/love-me-again-base.mp3',
        vocalAudio: 'assets/audio/vocals/love-me-again-vocals.mp3'
    },
    {
        id: 'olimpo',
        title: 'OLIMPO',
        artist: 'Milo J',
        image: 'assets/images/olimpo.jpg',
        fullAudio: 'assets/audio/full/olimpo-full.mp3',
        baseAudio: 'assets/audio/bases/olimpo-base.mp3',
        vocalAudio: 'assets/audio/vocals/olimpo-vocals.mp3'
    },
    {
        id: 'counting-stars',
        title: 'Counting Stars',
        artist: 'OneRepublic',
        image: 'assets/images/counting-stars.jpg',
        fullAudio: 'assets/audio/full/counting-stars-full.mp3',
        baseAudio: 'assets/audio/bases/counting-stars-base.mp3',
        vocalAudio: 'assets/audio/vocals/counting-stars-vocals.mp3'
    },
    {
        id: 'Rosa de trigo',
        title: 'Rosa De Trigo',
        artist: 'H.A.',
        image: 'assets/images/Rosa-de-trigo.PNG',
        fullAudio: 'assets/audio/full/Rosa-full.mp3',
        baseAudio: 'assets/audio/bases/Rosa-base.mp3',
        vocalAudio: 'assets/audio/vocals/Rosa-vocals.mp3'
    },
    {
        id: 'Claro y Oscuro',
        title: 'Claro y Oscuro',
        artist: 'H.A.',
        image: 'assets/images/Claro.PNG',
        fullAudio: 'assets/audio/full/Claro-full.mp3',
        baseAudio: 'assets/audio/bases/Claro-base.mp3',
        vocalAudio: 'assets/audio/vocals/Claro-vocal.mp3',
    },
    // NUEVA CANCIÓN AÑADIDA
    {
        id: 'meltdown',
        title: 'Meltdown',
        artist: 'Hookme',
        image: 'assets/images/Meltdown.jpg',
        fullAudio: 'assets/audio/full/meltdown-full.mp3',
        baseAudio: 'assets/audio/bases/meltdown-base.mp3',
        vocalAudio: 'assets/audio/vocals/meltdown-vocals.mp3'
    },
        {
        id: 'Washing Machine Heart',
        title: 'Washing Machine Heart',
        artist: 'Mitski',
        image: 'assets/images/Washing.jpg',
        fullAudio: 'assets/audio/full/washing-full.mp3',
        baseAudio: 'assets/audio/bases/washing-base.mp3',
        vocalAudio: 'assets/audio/vocals/washing-vocals.mp3',
    },
      {
        id: 'Espresso Macchiato',
        title: 'Espresso Macchiato',
        artist: 'Tommy Cash',
        image: 'assets/images/tommy.jpg',
        fullAudio: 'assets/audio/full/Tommy-full.mp3',
        baseAudio: 'assets/audio/bases/Tommy-base.mp3',
        vocalAudio: 'assets/audio/vocals/Tommy-vocals.mp3',
    },
    {
        id: 'PATAPIM FUNK',
        title: 'PATAPIM FUNK ',
        artist: 'SXYGX',
        image: 'assets/images/patapim.PNG',
        fullAudio: 'assets/audio/full/Tommy-full.mp3',
        baseAudio: 'assets/audio/bases/patapim-base.mp3',
        vocalAudio: 'assets/audio/vocals/patapim-vocals.mp3',
    },
        {
        id: 'Rosa De Trigo Drill',
        title: 'Rosa De Trigo Drill',
        artist: 'Hodely - H.A.',
        image: 'assets/images/Rosadrill.PNG',
        fullAudio: 'assets/audio/full/Rosadrill-full.mp3',
        baseAudio: 'assets/audio/bases/Rosadrill-base.mp3',
        vocalAudio: 'assets/audio/vocals/Rosadrill-vocals.mp3',
    },
       {
        id: 'Here',
        title: 'Here',
        artist: 'Alessia Cara',
        image: 'assets/images/Here.png',
        fullAudio: 'assets/audio/full/Here-full.mp3',
        baseAudio: 'assets/audio/bases/Here-base.mp3',
        vocalAudio: 'assets/audio/vocals/Here-vocals.mp3',
    },
       {
        id: 'Rock That Body',
        title: 'Rock That Body',
        artist: 'Black Eyed Peas',
        image: 'assets/images/Rockbody.jpg',
        fullAudio: 'assets/audio/full/Rockbody-full.mp3',
        baseAudio: 'assets/audio/bases/Rockbody-base.mp3',
        vocalAudio: 'assets/audio/vocals/RockBody-vocals.mp3',
    },
    {
        id: 'Sin Tanto Royo',
        title: 'Sin Tanto Royo',
        artist: 'Luis R Conriquez x Tito Double P',
        image: 'assets/images/Sinrollos.PNG',
        fullAudio: 'assets/audio/full/sinrollos-full.mp3',
        baseAudio: 'assets/audio/bases/sinrollo-base.mp3',
        vocalAudio: 'assets/audio/vocals/Sinrollo-vocal.mp3',
    }

];

// --- Elementos de la Interfaz ---
const homePage = document.getElementById('homePage');
const baseSelectionPage = document.getElementById('baseSelectionPage');
const vocalSelectionPage = document.getElementById('vocalSelectionPage');
const mixResultPage = document.getElementById('mixResultPage');

const createButton = document.getElementById('createButton');
const fullSongGrid = document.getElementById('fullSongGrid');
const baseTrackSelectionGrid = document.getElementById('baseTrackSelectionGrid');
const vocalTrackSelectionGrid = document.getElementById('vocalTrackSelectionGrid');

const nextToVocalSelectionButton = document.getElementById('nextToVocalSelectionButton');
const backFromBaseSelectionButton = document.getElementById('backFromBaseSelectionButton');
const nextToMixResultButton = document.getElementById('nextToMixResultButton');
const backToVocalSelectionButton = document.getElementById('backToVocalSelectionButton');
const createNewMixButton = document.getElementById('createNewMixButton');
const backFromMixResultButton = document.getElementById('backFromMixResultButton');

const finalMixedTrackPlayer = document.getElementById('finalMixedTrack');
const finalBaseArtwork = document.getElementById('finalBaseArtwork');
const finalBaseTitle = document.getElementById('finalBaseTitle');
const finalVocalArtwork = document.getElementById('finalVocalArtwork');
const finalVocalTitle = document.getElementById('finalVocalTitle');

const volumeSlider = document.getElementById('volumeSlider');
const muteButton = document.getElementById('muteButton');

// NUEVOS sliders de volumen individuales en la mezcla final
const baseVolumeSlider = document.getElementById('baseVolumeSlider');
const vocalVolumeSlider = document.getElementById('vocalVolumeSlider');

// NUEVOS elementos de búsqueda
const searchInputBase = document.getElementById('searchInputBase');
const searchInputVocal = document.getElementById('searchInputVocal');


// --- Reproductores de Audio Globales ---
const globalFeaturedAudioPlayer = document.getElementById('globalFeaturedAudioPlayer');

// Estos se usarán para la reproducción de fondo continua en las páginas de selección
let baseSelectionPageAudio = new Audio();
let vocalSelectionPageAudio = new Audio();

// Para la reproducción individual temporal en las páginas de selección (cuando el usuario hace click)
let currentPlayingSelectionAudio = null; // Un único reproductor para la pista actualmente clickeada

// Para la mezcla final, dos audios reproduciéndose a la vez
let finalBaseAudio = new Audio();
let finalVocalAudio = new Audio();

// --- Variables de Estado de Selección ---
let selectedBaseTrack = null;
let selectedVocalTrack = null;

// --- Funciones de Audio ---

/** Detiene y resetea todos los reproductores de audio activos. */
function stopAllAudio() {
    [globalFeaturedAudioPlayer, baseSelectionPageAudio, vocalSelectionPageAudio,
      currentPlayingSelectionAudio, finalBaseAudio, finalVocalAudio].forEach(player => {
        if (player) {
            player.pause();
            player.currentTime = 0;
            // Solo limpiar SRC si no es el reproductor principal en la home page (que queremos que siga cargado)
            if (player !== globalFeaturedAudioPlayer) {
                player.src = '';
                player.load();
            }
        }
    });

    // Desvincular eventos para finalMixedTrackPlayer para evitar reproducciones fantasma
    if (finalMixedTrackPlayer) {
        finalMixedTrackPlayer.onplay = null;
        finalMixedTrackPlayer.onpause = null;
        finalMixedTrackPlayer.onseeking = null;
        finalMixedTrackPlayer.onseeked = null;
        finalMixedTrackPlayer.onended = null;
        finalMixedTrackPlayer.src = ''; // Limpiar src del reproductor visible
        finalMixedTrackPlayer.load(); // Cargar para resetear
    }

    // Asegurarse de que cualquier elemento "playing" se desactive en la UI
    document.querySelectorAll('.full-song-item.playing').forEach(item => {
        item.classList.remove('playing');
        const icon = item.querySelector('.play-pause-overlay .icon');
        if (icon) icon.textContent = '▶';
    });
    // Y para las selecciones de base/vocal también si tuvieran un estado de "playing"
    document.querySelectorAll('.song-option .fa-pause').forEach(icon => {
        icon.classList.replace('fa-pause', 'fa-play');
    });
}

/** Aplica el volumen actual del slider global a todos los reproductores. */
function applyGlobalVolume() {
    const newGlobalVolume = volumeSlider.value / 100;

    // Aplicar a reproductores generales
    [globalFeaturedAudioPlayer, baseSelectionPageAudio, vocalSelectionPageAudio,
      currentPlayingSelectionAudio].forEach(player => {
        if (player) {
            // Asegurarse de que el reproductor principal no esté silenciado si el volumen es > 0
            // EXCEPCIÓN: globalFeaturedAudioPlayer puede iniciarse silenciado por autoplay policy.
            // Si el volumen global se ajusta por el usuario y no está en 0, desmutearlo.
            if (player === globalFeaturedAudioPlayer && newGlobalVolume > 0 && player.muted && !player.paused) {
                player.muted = false; // Desmutearlo si el usuario ajusta el volumen o hace clic
                console.log("Global player desmuteado por ajuste de volumen.");
            }
            player.volume = newGlobalVolume;
        }
    });

    // Los volúmenes individuales de la mezcla final se controlan también por el global
    // Esto asegura que el slider global sea el volumen máximo, y los individuales el balance
    if (finalBaseAudio && baseVolumeSlider) {
        finalBaseAudio.volume = newGlobalVolume * (baseVolumeSlider.value / 100);
    }
    if (finalVocalAudio && vocalVolumeSlider) {
        finalVocalAudio.volume = newGlobalVolume * (vocalVolumeSlider.value / 100);
    }

    // Actualizar icono de silenciar
    if (newGlobalVolume === 0) {
        muteButton.classList.remove('fa-volume-up');
        muteButton.classList.add('fa-volume-mute');
    } else {
        muteButton.classList.remove('fa-volume-mute');
        muteButton.classList.add('fa-volume-up');
    }
}

/**
 * Reproduce una canción aleatoria completa en la página de inicio.
 * Se inicia SILENCIADA para cumplir con las políticas de autoplay.
 * El usuario debe hacer clic en una canción para escuchar el audio con sonido.
 */
async function playRandomFeaturedSong() {
    // Al volver a la home, siempre queremos que el audio principal se reinicie y esté silenciado por autoplay
    globalFeaturedAudioPlayer.pause();
    globalFeaturedAudioPlayer.currentTime = 0;
    globalFeaturedAudioPlayer.src = ''; // Limpiar para forzar recarga si no está cargada ya

    const randomIndex = Math.floor(Math.random() * songs.length);
    const randomSong = songs[randomIndex];

    globalFeaturedAudioPlayer.src = randomSong.fullAudio;
    globalFeaturedAudioPlayer.muted = true; // Iniciar silenciado para el autoplay
    globalFeaturedAudioPlayer.volume = volumeSlider.value / 100; // Asignar volumen real, pero el muted prevalece
    globalFeaturedAudioPlayer.loop = true; // Que se reproduzca en bucle silenciada

    try {
        await globalFeaturedAudioPlayer.play();
        console.log("Reproduciendo canción destacada aleatoria (silenciada). Haz click en una canción para activar el audio.");
        // No actualizamos la UI con un icono de "pausa" si está silenciado y no interactúa el usuario
        document.querySelectorAll('.full-song-item').forEach(item => {
            item.classList.remove('playing');
            const icon = item.querySelector('.play-pause-overlay .icon');
            if (icon) icon.textContent = '▶';
        });
    } catch (e) {
        console.warn("Autoplay de canción destacada bloqueado o fallido (esperado si no hay interacción):", e);
    }
}

/**
 * Reproduce y selecciona una pista aleatoria en las páginas de selección de base/voz.
 * Esta es la reproducción "de fondo" que no se puede parar.
 * @param {string} type - 'base' o 'vocal'.
 */
async function playRandomSelectionTrack(type) {
    stopAllAudio(); // Detener cualquier otro audio antes de iniciar el de fondo

    let tracks;
    let player;
    let targetGrid;
    let selectionButton;
    let selectedTrackVar; // Para acceder a selectedBaseTrack o selectedVocalTrack

    if (type === 'base') {
        tracks = songs.map(s => ({ id: s.id, title: s.title, artist: s.artist, image: s.image, audio: s.baseAudio }));
        player = baseSelectionPageAudio;
        targetGrid = baseTrackSelectionGrid;
        selectionButton = nextToVocalSelectionButton;
        selectedTrackVar = 'selectedBaseTrack';
    } else { // type === 'vocal'
        tracks = songs.map(s => ({ id: s.id, title: s.title, artist: s.artist, image: s.image, audio: s.vocalAudio }));
        player = vocalSelectionPageAudio;
        targetGrid = vocalTrackSelectionGrid;
        selectionButton = nextToMixResultButton;
        selectedTrackVar = 'selectedVocalTrack';
    }

    const randomIndex = Math.floor(Math.random() * tracks.length);
    const randomTrack = tracks[randomIndex];

    player.src = randomTrack.audio;
    player.loop = true; // Reproducir en bucle
    player.volume = volumeSlider.value / 100; // Aplicar volumen global
    player.muted = false; // Asegurarse de que no esté silenciado para estas reproducciones de fondo

    // Cargar metadatos para obtener la duración y luego iniciar la reproducción en un punto medio
    player.addEventListener('loadedmetadata', () => {
        if (player.duration > 0) {
            const startPoint = player.duration / 2 + (Math.random() * player.duration / 4 - player.duration / 8); // Random point in the middle 50% of the track
            player.currentTime = Math.max(0, startPoint); // Ensure it's not negative
        }
        player.play().catch(e => console.warn(`Autoplay de ${type} aleatoria bloqueado o fallido:`, e));
    }, { once: true }); // Use { once: true } to remove the listener after it fires

    player.load(); // Load the audio to trigger 'loadedmetadata'

    console.log(`Reproduciendo ${type} aleatoria: ${randomTrack.title}`);

    // Deseleccionar todas las opciones y seleccionar la aleatoria
    targetGrid.querySelectorAll('.song-option').forEach(option => {
        option.classList.remove('selected');
        // Asegurarse de que los iconos estén en 'play' si no están activos
        const icon = option.querySelector('.fa-play, .fa-pause');
        if (icon && icon.classList.contains('fa-pause')) {
            icon.classList.replace('fa-pause', 'fa-play');
        }
    });
    const selectedOption = targetGrid.querySelector(`.song-option[data-song-id="${randomTrack.id}"]`);
    if (selectedOption) {
        selectedOption.classList.add('selected');
        // Almacenar la pista seleccionada (tanto UI como internamente)
        window[selectedTrackVar] = songs.find(s => s.id === randomTrack.id);
        selectionButton.disabled = false; // Habilitar el botón de siguiente
    }
}


/** Configura y reproduce la mezcla final de base y voz. */
async function setupAndPlayFinalMix() {
    stopAllAudio(); // Asegurar que otros reproductores estén detenidos

    if (!selectedBaseTrack || !selectedVocalTrack) {
        console.error("No se ha seleccionado la base o la voz para la mezcla final.");
        alert("Por favor, selecciona una base y una voz antes de ver la mezcla.");
        showPage(homePage);
        return;
    }

    // Configurar los reproductores de audio ocultos
    finalBaseAudio.src = selectedBaseTrack.baseAudio;
    finalVocalAudio.src = selectedVocalTrack.vocalAudio;

    // Reiniciar sliders de volumen individuales en la mezcla final a 100%
    baseVolumeSlider.value = 100;
    vocalVolumeSlider.value = 100;

    // AHORA APLICAMOS EL VOLUMEN DESPUÉS DE ASIGNAR EL SRC
    applyGlobalVolume();


    // Actualizar UI de la mezcla final
    finalBaseArtwork.src = selectedBaseTrack.image;
    finalBaseTitle.textContent = selectedBaseTrack.title;
    finalVocalArtwork.src = selectedVocalTrack.image;
    finalVocalTitle.textContent = selectedVocalTrack.title;

    // Configurar el reproductor visible (finalMixedTrackPlayer) para controlar a los ocultos
    // Establecemos una de las fuentes para que muestre la duración y los metadatos correctos
    finalMixedTrackPlayer.src = finalBaseAudio.src; // o finalVocalAudio.src
    finalMixedTrackPlayer.load(); // Cargar metadata

    // Sincronizar eventos de reproducción
    finalMixedTrackPlayer.onplay = () => {
        finalBaseAudio.play().catch(e => console.error("Error reproduciendo base:", e));
        finalVocalAudio.play().catch(e => console.error("Error reproduciendo vocal:", e));
    };

    finalMixedTrackPlayer.onpause = () => {
        finalBaseAudio.pause();
        finalVocalAudio.pause();
    };

    finalMixedTrackPlayer.onseeking = () => {
        finalBaseAudio.currentTime = finalMixedTrackPlayer.currentTime;
        finalVocalAudio.currentTime = finalMixedTrackPlayer.currentTime;
    };
    finalMixedTrackPlayer.onseeked = () => {
        // En caso de que se haya cargado antes uno que otro, resincronizar
        finalBaseAudio.currentTime = finalMixedTrackPlayer.currentTime;
        finalVocalAudio.currentTime = finalMixedTrackPlayer.currentTime;
    };

    // Al finalizar el reproductor maestro, parar y resetear ambos
    finalMixedTrackPlayer.onended = () => {
        stopAllAudio();
        // Opcional: Volver a la página de inicio o a la selección
        // showPage(homePage);
    };

    // Intentar reproducir automáticamente la mezcla
    try {
        await finalMixedTrackPlayer.play();
    } catch (e) {
        console.warn("Autoplay de mezcla final bloqueado o fallido:", e);
        // Si el autoplay falla, el usuario tendrá que hacer clic en el botón de play
    }
}

/**
 * Función para barajar un array usando el algoritmo Fisher-Yates (Knuth shuffle).
 * @param {Array} array - El array a barajar.
 * @returns {Array} Un nuevo array barajado.
 */
function shuffleArray(array) {
    const shuffled = [...array]; // Crear una copia para no modificar el array original
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; // Intercambiar elementos
    }
    return shuffled;
}

// --- Funciones de Interfaz (UI) ---

/**
 * Renderiza dinámicamente las canciones completas en la página de inicio.
 */
function renderFullSongs() {
    fullSongGrid.innerHTML = ''; // Limpiar contenido existente
    const shuffledSongs = shuffleArray(songs); // Barajar las canciones
    shuffledSongs.forEach(song => {
        const songItem = document.createElement('div');
        songItem.classList.add('full-song-item');
        songItem.dataset.songId = song.id;
        songItem.innerHTML = `
            <img src="${song.image}" alt="Portada de ${song.title}">
            <h3>${song.title}</h3>
            <p>${song.artist}</p>
            <div class="play-pause-overlay">
                <span class="icon">▶</span>
            </div>
        `;
        fullSongGrid.appendChild(songItem);
    });
}

/**
 * Renderiza dinámicamente las opciones de bases y voces.
 * @param {string} type - 'base' o 'vocal'.
 * @param {Array}  [filteredSongs=songs] - Array de canciones a renderizar (por defecto, todas las canciones).
 */
function renderSelectionOptions(type, filteredSongs = songs) {
    let targetGrid;
    let tracks;

    // Solo barajar si no estamos aplicando un filtro de búsqueda (es decir, si filteredSongs es el array completo)
    const songsToRender = filteredSongs.length === songs.length ? shuffleArray(filteredSongs) : filteredSongs;

    if (type === 'base') {
        targetGrid = baseTrackSelectionGrid;
        tracks = songsToRender.map(s => ({ id: s.id, title: s.title, artist: s.artist, image: s.image, audio: s.baseAudio }));
    } else { // type === 'vocal'
        targetGrid = vocalTrackSelectionGrid;
        tracks = songsToRender.map(s => ({ id: s.id, title: s.title, artist: s.artist, image: s.image, audio: s.vocalAudio }));
    }

    targetGrid.innerHTML = ''; // Limpiar contenido existente
    if (tracks.length === 0) {
        targetGrid.innerHTML = '<p class="no-results">No se encontraron resultados para tu búsqueda.</p>';
        // Deshabilitar el botón de siguiente si no hay resultados y nada seleccionado
        if (type === 'base') nextToVocalSelectionButton.disabled = true;
        else nextToMixResultButton.disabled = true;
        return;
    }

    tracks.forEach(track => {
        const songOption = document.createElement('div');
        songOption.classList.add('song-option');
        songOption.dataset.trackType = type;
        songOption.dataset.songId = track.id;
        songOption.innerHTML = `
            <img src="${track.image}" alt="Portada de ${track.title}">
            <p>${track.title}</p>
            <div class="play-button" data-track-id="${track.id}">
                <i class="fas fa-play"></i>
            </div>
        `;
        targetGrid.appendChild(songOption);
    });

    // Restaurar el estado de selección si ya había una pista seleccionada antes de la búsqueda
    if (type === 'base' && selectedBaseTrack) {
        const currentSelectedOption = targetGrid.querySelector(`.song-option[data-song-id="${selectedBaseTrack.id}"]`);
        if (currentSelectedOption) {
            currentSelectedOption.classList.add('selected');
            nextToVocalSelectionButton.disabled = false;
        } else {
            // Si la canción seleccionada no está en los resultados de la búsqueda, deseleccionarla
            selectedBaseTrack = null;
            nextToVocalSelectionButton.disabled = true;
        }
    } else if (type === 'vocal' && selectedVocalTrack) {
        const currentSelectedOption = targetGrid.querySelector(`.song-option[data-song-id="${selectedVocalTrack.id}"]`);
        if (currentSelectedOption) {
            currentSelectedOption.classList.add('selected');
            nextToMixResultButton.disabled = false;
        } else {
            // Si la canción seleccionada no está en los resultados de la búsqueda, deseleccionarla
            selectedVocalTrack = null;
            nextToMixResultButton.disabled = true;
        }
    }
}

/**
 * Muestra la página deseada y gestiona el audio de fondo.
 * @param {HTMLElement} pageToShow - El elemento de la sección (página) a mostrar.
 */
function showPage(pageToShow) {
    // Al cambiar de página, detener todos los audios excepto la gestión específica de globalFeaturedAudioPlayer
    stopAllAudio(); // Detiene todos los audios y limpia sus SRCs (excepto globalFeaturedAudioPlayer que se gestiona diferente)

    // Restablecer el icono de reproducción en la página de inicio
    document.querySelectorAll('.full-song-item.playing').forEach(item => {
        item.classList.remove('playing');
        const icon = item.querySelector('.play-pause-overlay .icon');
        if (icon) icon.textContent = '▶';
    });

    // Ocultar todas las páginas y mostrar la deseada
    const pages = [homePage, baseSelectionPage, vocalSelectionPage, mixResultPage];
    pages.forEach(page => {
        page.classList.remove('active');
        page.classList.add('hidden');
    });
    pageToShow.classList.add('active');
    pageToShow.classList.remove('hidden');

    // Limpiar campos de búsqueda al cambiar de página de selección
    if (pageToShow !== baseSelectionPage) {
        searchInputBase.value = '';
    }
    if (pageToShow !== vocalSelectionPage) {
        searchInputVocal.value = '';
    }


    // Iniciar audio específico de la página
    if (pageToShow === homePage) {
        playRandomFeaturedSong(); // Esto iniciará el audio silenciado si no hay interacción
    } else if (pageToShow === baseSelectionPage) {
        // Al entrar a la página de selección, renderizar todas las opciones y luego reproducir un random
        renderSelectionOptions('base');
        playRandomSelectionTrack('base'); // Autoplay random al entrar
    } else if (pageToShow === vocalSelectionPage) {
        // Al entrar a la página de selección, renderizar todas las opciones y luego reproducir un random
        renderSelectionOptions('vocal');
        playRandomSelectionTrack('vocal'); // Autoplay random al entrar
    } else if (pageToShow === mixResultPage) {
        setupAndPlayFinalMix();
    }
}

/**
 * Función de búsqueda para filtrar canciones por título o artista.
 * @param {string} query - El texto de búsqueda.
 * @returns {Array} Un array de canciones que coinciden con la búsqueda.
 */
function searchSongs(query) {
    const lowerCaseQuery = query.toLowerCase();
    return songs.filter(song =>
        song.title.toLowerCase().includes(lowerCaseQuery) ||
        song.artist.toLowerCase().includes(lowerCaseQuery)
    );
}


// --- Event Listeners ---
document.addEventListener('DOMContentLoaded', () => {
    // 1. Renderizar el contenido dinámico al cargar la página
    renderFullSongs();
    renderSelectionOptions('base'); // Inicialmente renderizar todas las opciones
    renderSelectionOptions('vocal'); // Inicialmente renderizar todas las opciones

    // 2. Inicializar volumen global y sus listeners
    applyGlobalVolume(); // Establece el volumen inicial al 100%

    volumeSlider.addEventListener('input', applyGlobalVolume); // Cada vez que cambia el slider global
    let previousGlobalVolume = 100; // Para almacenar el volumen global antes de silenciar
    muteButton.addEventListener('click', () => {
        if (volumeSlider.value > 0) {
            previousGlobalVolume = volumeSlider.value;
            volumeSlider.value = 0;
            // Si el globalFeaturedAudioPlayer está reproduciendo (y no estaba silenciado por el navegador), silenciarlo.
            if (globalFeaturedAudioPlayer && !globalFeaturedAudioPlayer.paused && !globalFeaturedAudioPlayer.muted) {
                globalFeaturedAudioPlayer.muted = true;
            }
        } else {
            volumeSlider.value = previousGlobalVolume;
            // Si el globalFeaturedAudioPlayer estaba silenciado por el botón, desmutearlo.
            if (globalFeaturedAudioPlayer && globalFeaturedAudioPlayer.muted) {
                globalFeaturedAudioPlayer.muted = false;
            }
        }
        applyGlobalVolume(); // Aplicar el nuevo volumen (0 o previo)
    });

    // NUEVOS: Listeners para los sliders de volumen individuales en la mezcla final
    baseVolumeSlider.addEventListener('input', () => {
        if (finalBaseAudio) {
            finalBaseAudio.volume = (volumeSlider.value / 100) * (baseVolumeSlider.value / 100);
        }
    });
    vocalVolumeSlider.addEventListener('input', () => {
        if (finalVocalAudio) {
            finalVocalAudio.volume = (volumeSlider.value / 100) * (vocalVolumeSlider.value / 100);
        }
    });


    // 3. Autoplay random en la página de inicio (silenciada inicialmente)
    playRandomFeaturedSong();


    // 4. Listeners para la navegación entre páginas
    createButton.addEventListener('click', () => showPage(baseSelectionPage));

    backFromBaseSelectionButton.addEventListener('click', () => {
        selectedBaseTrack = null; // Limpiar selección
        nextToVocalSelectionButton.disabled = true; // Deshabilitar el botón de siguiente
        showPage(homePage);
    });

    nextToVocalSelectionButton.addEventListener('click', () => {
        if (selectedBaseTrack) showPage(vocalSelectionPage);
        else alert("Por favor, selecciona una base primero.");
    });

    backToVocalSelectionButton.addEventListener('click', () => {
        selectedVocalTrack = null; // Limpiar selección
        nextToMixResultButton.disabled = true; // Deshabilitar el botón de siguiente
        showPage(baseSelectionPage);
    });

    nextToMixResultButton.addEventListener('click', () => {
        if (selectedVocalTrack) showPage(mixResultPage);
        else alert("Por favor, selecciona una voz primero.");
    });

    createNewMixButton.addEventListener('click', () => {
        selectedBaseTrack = null;
        selectedVocalTrack = null;
        nextToVocalSelectionButton.disabled = true;
        nextToMixResultButton.disabled = true;
        showPage(baseSelectionPage); // Volver a iniciar el proceso de mezcla
    });

    backFromMixResultButton.addEventListener('click', () => {
        selectedBaseTrack = null;
        selectedVocalTrack = null;
        nextToVocalSelectionButton.disabled = true;
        nextToMixResultButton.disabled = true;
        showPage(homePage); // Volver a la página de inicio
    });

    // 5. Listeners para la selección de bases y voces (con reproducción al hacer click)
    baseTrackSelectionGrid.addEventListener('click', (event) => {
        const songOption = event.target.closest('.song-option');
        if (!songOption) return;

        const songId = songOption.dataset.songId;
        const clickedTrack = songs.find(s => s.id === songId);
        if (!clickedTrack) return;

        // Si se hace clic en una opción, paramos la reproducción de fondo y la actual clickeada
        baseSelectionPageAudio.pause(); // Detener la reproducción random de fondo
        baseSelectionPageAudio.currentTime = 0; // Resetear tiempo
        baseSelectionPageAudio.src = ''; // Limpiar SRC

        // Gestión de la reproducción individual al hacer click
        if (!currentPlayingSelectionAudio) {
            currentPlayingSelectionAudio = new Audio();
        }

        const playButtonIcon = songOption.querySelector('.fa-play, .fa-pause');

        if (currentPlayingSelectionAudio.src.includes(clickedTrack.baseAudio) && !currentPlayingSelectionAudio.paused) {
            // Si ya estaba reproduciendo esta misma canción Y ESTÁ SONANDO, pausarla
            currentPlayingSelectionAudio.pause();
            if (playButtonIcon) playButtonIcon.classList.replace('fa-pause', 'fa-play');
        } else {
            // Detener cualquier otra reproducción individual previa
            if (!currentPlayingSelectionAudio.paused) {
                currentPlayingSelectionAudio.pause();
                currentPlayingSelectionAudio.currentTime = 0;
                // Buscar el icono 'pause' y cambiarlo a 'play' en todas las opciones
                baseTrackSelectionGrid.querySelectorAll('.song-option .fa-pause').forEach(icon => {
                    icon.classList.replace('fa-pause', 'fa-play');
                });
            }

            // Si no estaba reproduciendo esta, la preparamos y reproducimos
            currentPlayingSelectionAudio.src = clickedTrack.baseAudio;
            currentPlayingSelectionAudio.volume = volumeSlider.value / 100;
            currentPlayingSelectionAudio.muted = false; // Asegurarse de que no esté silenciado al hacer click
            currentPlayingSelectionAudio.loop = true; // Loop la pista seleccionada individualmente

            // Load metadata to get duration, then play from a random middle point
            currentPlayingSelectionAudio.addEventListener('loadedmetadata', () => {
                if (currentPlayingSelectionAudio.duration > 0) {
                    const startPoint = currentPlayingSelectionAudio.duration / 2 + (Math.random() * currentPlayingSelectionAudio.duration / 4 - currentPlayingSelectionAudio.duration / 8);
                    currentPlayingSelectionAudio.currentTime = Math.max(0, startPoint);
                }
                currentPlayingSelectionAudio.play().catch(e => console.error("Error reproduciendo base individual:", e));
            }, { once: true }); // Use { once: true } to remove the listener after it fires

            currentPlayingSelectionAudio.load(); // Load the audio to trigger 'loadedmetadata'

            // Actualizar icono de play/pause
            if (playButtonIcon) playButtonIcon.classList.replace('fa-play', 'fa-pause');
        }

        // Marcar visualmente la opción seleccionada
        baseTrackSelectionGrid.querySelectorAll('.song-option').forEach(option => {
            option.classList.remove('selected');
        });
        songOption.classList.add('selected');
        selectedBaseTrack = clickedTrack; // Almacenar la selección
        nextToVocalSelectionButton.disabled = false;
    });

    vocalTrackSelectionGrid.addEventListener('click', (event) => {
        const songOption = event.target.closest('.song-option');
        if (!songOption) return;

        const songId = songOption.dataset.songId;
        const clickedTrack = songs.find(s => s.id === songId);
        if (!clickedTrack) return;

        // Si se hace clic en una opción, paramos la reproducción de fondo y la actual clickeada
        vocalSelectionPageAudio.pause(); // Detener la reproducción random de fondo
        vocalSelectionPageAudio.currentTime = 0; // Resetear tiempo
        vocalSelectionPageAudio.src = ''; // Limpiar SRC

        // Gestión de la reproducción individual al hacer click
        if (!currentPlayingSelectionAudio) {
            currentPlayingSelectionAudio = new Audio();
        }

        const playButtonIcon = songOption.querySelector('.fa-play, .fa-pause');

        if (currentPlayingSelectionAudio.src.includes(clickedTrack.vocalAudio) && !currentPlayingSelectionAudio.paused) {
            // Si ya estaba reproduciendo esta misma canción Y ESTÁ SONANDO, pausarla
            currentPlayingSelectionAudio.pause();
            if (playButtonIcon) playButtonIcon.classList.replace('fa-pause', 'fa-play');
        } else {
            // Detener cualquier otra reproducción individual previa
            if (!currentPlayingSelectionAudio.paused) {
                currentPlayingSelectionAudio.pause();
                currentPlayingSelectionAudio.currentTime = 0;
                // Buscar el icono 'pause' y cambiarlo a 'play' en todas las opciones
                vocalTrackSelectionGrid.querySelectorAll('.song-option .fa-pause').forEach(icon => {
                    icon.classList.replace('fa-pause', 'fa-play');
                });
            }

            // Si no estaba reproduciendo esta, la preparamos y reproducimos
            currentPlayingSelectionAudio.src = clickedTrack.vocalAudio;
            currentPlayingSelectionAudio.volume = volumeSlider.value / 100;
            currentPlayingSelectionAudio.muted = false; // Asegurarse de que no esté silenciado al hacer click
            currentPlayingSelectionAudio.loop = true; // Loop la pista seleccionada individualmente

            // Load metadata to get duration, then play from a random middle point
            currentPlayingSelectionAudio.addEventListener('loadedmetadata', () => {
                if (currentPlayingSelectionAudio.duration > 0) {
                    const startPoint = currentPlayingSelectionAudio.duration / 2 + (Math.random() * currentPlayingSelectionAudio.duration / 4 - currentPlayingSelectionAudio.duration / 8);
                    currentPlayingSelectionAudio.currentTime = Math.max(0, startPoint);
                }
                currentPlayingSelectionAudio.play().catch(e => console.error("Error reproduciendo vocal individual:", e));
            }, { once: true }); // Use { once: true } to remove the listener after it fires

            currentPlayingSelectionAudio.load(); // Load the audio to trigger 'loadedmetadata'

            // Actualizar icono de play/pause
            if (playButtonIcon) playButtonIcon.classList.replace('fa-play', 'fa-pause');
        }

        // Marcar visualmente la opción seleccionada
        vocalTrackSelectionGrid.querySelectorAll('.song-option').forEach(option => {
            option.classList.remove('selected');
        });
        songOption.classList.add('selected');
        selectedVocalTrack = clickedTrack; // Almacenar la selección
        nextToMixResultButton.disabled = false;
    });

    // NUEVOS: Listeners para los campos de búsqueda
    searchInputBase.addEventListener('input', (event) => {
        const query = event.target.value;
        const filtered = searchSongs(query);
        renderSelectionOptions('base', filtered);
    });

    searchInputVocal.addEventListener('input', (event) => {
        const query = event.target.value;
        const filtered = searchSongs(query);
        renderSelectionOptions('vocal', filtered);
    });
});
