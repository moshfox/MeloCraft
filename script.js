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
    },
     {
        id: 'Noid',
        title: 'Noid',
        artist: 'Tyler, the creator',
        image: 'assets/images/Noid.jpg',
        fullAudio: 'assets/audio/full/Noid.mp3',
        baseAudio: 'assets/audio/bases/poppop.ai - videoplayback_instrumental.mp3',
        vocalAudio: 'assets/audio/vocals/Noid-vocals.mp3',
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
}

/** Aplica el volumen actual del slider global a todos los reproductores. */
function applyGlobalVolume() {
    const newGlobalVolume = volumeSlider.value / 100;

    // Aplicar al reproductor de la página principal (si está activo)
    if (globalFeaturedAudioPlayer) {
        globalFeaturedAudioPlayer.volume = newGlobalVolume;
    }

    // Aplicar a los reproductores de fondo de las páginas de selección
    if (baseSelectionPageAudio) {
        baseSelectionPageAudio.volume = newGlobalVolume;
    }
    if (vocalSelectionPageAudio) {
        vocalSelectionPageAudio.volume = newGlobalVolume;
    }

    // Aplicar al reproductor individual de selección (si está activo)
    if (currentPlayingSelectionAudio) {
        currentPlayingSelectionAudio.volume = newGlobalVolume;
    }

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
 * Esta función es susceptible al bloqueo de autoplay, por lo que el clic del usuario es clave.
 */
async function playRandomFeaturedSong() {
    stopAllAudio(); // Asegurarse de parar todo antes de iniciar

    const randomIndex = Math.floor(Math.random() * songs.length);
    const randomSong = songs[randomIndex];

    globalFeaturedAudioPlayer.src = randomSong.fullAudio;
    globalFeaturedAudioPlayer.volume = volumeSlider.value / 100; // Aplicar volumen global

    try {
        // Intentar reproducir. La promesa será rechazada si el autoplay está bloqueado.
        await globalFeaturedAudioPlayer.play();
        console.log(`Reproduciendo aleatoria en Home: ${randomSong.title}`);
        // Actualizar UI para mostrar qué canción está reproduciéndose
        document.querySelectorAll('.full-song-item').forEach(item => {
            item.classList.remove('playing');
            const icon = item.querySelector('.play-pause-overlay .icon');
            if (icon) icon.textContent = '▶';
        });
        const playingItem = document.querySelector(`.full-song-item[data-song-id="${randomSong.id}"]`);
        if (playingItem) {
            playingItem.classList.add('playing');
            const playIcon = playingItem.querySelector('.play-pause-overlay .icon');
            if (playIcon) playIcon.textContent = '⏸'; // Establecer icono de pausa
        }
    } catch (e) {
        console.warn("Autoplay de canción destacada bloqueado o fallido (Home Page):", e);
        // Si el autoplay es bloqueado, no hacer nada visualmente o mostrar un mensaje
        // El usuario **deberá hacer clic en una canción** para iniciar la reproducción.
        // Asegurarse de que no quede ningún "playing" activo si no se reprodujo.
        document.querySelectorAll('.full-song-item.playing').forEach(item => {
            item.classList.remove('playing');
            const icon = item.querySelector('.play-pause-overlay .icon');
            if (icon) icon.textContent = '▶';
        });
    }
}

/**
 * Reproduce y selecciona una pista aleatoria en las páginas de selección de base/voz.
 * Esta es la reproducción "de fondo" que no se puede parar fácilmente por el usuario
 * (solo al cambiar de página o al hacer clic en otra opción).
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

    try {
        await player.play();
        console.log(`Reproduciendo ${type} aleatoria de fondo: ${randomTrack.title}`);
    } catch (e) {
        console.warn(`Autoplay de ${type} aleatoria bloqueado o fallido:`, e);
        // Aquí no necesitamos cambiar la UI, ya que el usuario puede hacer clic para probar las pistas
    }

    // Deseleccionar todas las opciones y seleccionar la aleatoria
    targetGrid.querySelectorAll('.song-option').forEach(option => option.classList.remove('selected'));
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
    
    // APLICAR VOLUMEN INICIAL: es crucial que finalBaseAudio y finalVocalAudio tengan src asignada ANTES de esta llamada.
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


// --- Funciones de Interfaz (UI) ---

/**
 * Renderiza dinámicamente las canciones completas en la página de inicio.
 */
function renderFullSongs() {
    fullSongGrid.innerHTML = ''; // Limpiar contenido existente
    songs.forEach(song => {
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
 */
function renderSelectionOptions(type) {
    let targetGrid;
    let tracks;

    if (type === 'base') {
        targetGrid = baseTrackSelectionGrid;
        tracks = songs.map(s => ({ id: s.id, title: s.title, artist: s.artist, image: s.image, audio: s.baseAudio }));
    } else { // type === 'vocal'
        targetGrid = vocalTrackSelectionGrid;
        tracks = songs.map(s => ({ id: s.id, title: s.title, artist: s.artist, image: s.image, audio: s.vocalAudio }));
    }

    targetGrid.innerHTML = ''; // Limpiar contenido existente
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
}

/**
 * Muestra la página deseada y gestiona el audio de fondo.
 * @param {HTMLElement} pageToShow - El elemento de la sección (página) a mostrar.
 */
function showPage(pageToShow) {
    // Es crucial detener todo el audio ANTES de cambiar de página
    stopAllAudio();

    const pages = [homePage, baseSelectionPage, vocalSelectionPage, mixResultPage];
    pages.forEach(page => {
        page.classList.remove('active');
        page.classList.add('hidden');
    });
    pageToShow.classList.add('active');
    pageToShow.classList.remove('hidden');

    // Iniciar audio específico de la página
    if (pageToShow === homePage) {
        // En la home, solo se intentará reproducir una canción aleatoria.
        // Si el navegador lo bloquea (autoplay sin interacción), no sonará hasta el clic del usuario.
        playRandomFeaturedSong(); 
    } else if (pageToShow === baseSelectionPage) {
        playRandomSelectionTrack('base'); // Autoplay random al entrar
    } else if (pageToShow === vocalSelectionPage) {
        playRandomSelectionTrack('vocal'); // Autoplay random al entrar
    } else if (pageToShow === mixResultPage) {
        setupAndPlayFinalMix();
    }
}

// --- Event Listeners ---
document.addEventListener('DOMContentLoaded', () => {
    // 1. Renderizar el contenido dinámico al cargar la página
    renderFullSongs();
    renderSelectionOptions('base');
    renderSelectionOptions('vocal');

    // 2. Inicializar volumen global y sus listeners
    applyGlobalVolume(); // Establece el volumen inicial al 100%

    volumeSlider.addEventListener('input', applyGlobalVolume); // Cada vez que cambia el slider global
    let previousGlobalVolume = 100; // Para almacenar el volumen global antes de silenciar
    muteButton.addEventListener('click', () => {
        if (volumeSlider.value > 0) {
            previousGlobalVolume = volumeSlider.value;
            volumeSlider.value = 0;
        } else {
            volumeSlider.value = previousGlobalVolume;
        }
        applyGlobalVolume(); // Aplicar el nuevo volumen (0 o previo)
    });

    // NUEVOS: Listeners para los sliders de volumen individuales en la mezcla final
    // Estos se encargan de ajustar el volumen de finalBaseAudio y finalVocalAudio
    // El applyGlobalVolume() ya los tiene en cuenta.
    baseVolumeSlider.addEventListener('input', () => {
        if (finalBaseAudio) {
            // El volumen del track es (volumen global * volumen individual)
            finalBaseAudio.volume = (volumeSlider.value / 100) * (baseVolumeSlider.value / 100);
        }
    });
    vocalVolumeSlider.addEventListener('input', () => {
        if (finalVocalAudio) {
            // El volumen del track es (volumen global * volumen individual)
            finalVocalAudio.volume = (volumeSlider.value / 100) * (vocalVolumeSlider.value / 100);
        }
    });


    // 3. Autoplay random en la página de inicio (puede ser bloqueado por el navegador)
    // El usuario deberá hacer clic en una canción para garantizar la reproducción.
    playRandomFeaturedSong();


    // 4. Listeners para la navegación entre páginas
    createButton.addEventListener('click', () => showPage(baseSelectionPage));

    backFromBaseSelectionButton.addEventListener('click', () => {
        selectedBaseTrack = null; // Limpiar selección
        nextToVocalSelectionButton.disabled = true;
        showPage(homePage);
    });

    nextToVocalSelectionButton.addEventListener('click', () => {
        if (selectedBaseTrack) showPage(vocalSelectionPage);
        else alert("Por favor, selecciona una base primero.");
    });

    backToVocalSelectionButton.addEventListener('click', () => {
        selectedVocalTrack = null; // Limpiar selección
        nextToMixResultButton.disabled = true;
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

        // Gestión de la reproducción individual al hacer click
        if (!currentPlayingSelectionAudio) {
            currentPlayingSelectionAudio = new Audio();
            document.body.appendChild(currentPlayingSelectionAudio); // Añadir al DOM para control visual si fuera necesario, aunque será oculto
        }

        if (currentPlayingSelectionAudio.src.includes(clickedTrack.baseAudio) && !currentPlayingSelectionAudio.paused) {
            // Si ya estaba reproduciendo esta, la pausamos
            currentPlayingSelectionAudio.pause();
            songOption.querySelector('.fa-pause')?.classList.replace('fa-pause', 'fa-play');
        } else {
            // Detener cualquier reproducción individual anterior antes de iniciar una nueva
            if (currentPlayingSelectionAudio && !currentPlayingSelectionAudio.paused) {
                currentPlayingSelectionAudio.pause();
                // Resetear iconos de play/pause de todas las opciones
                baseTrackSelectionGrid.querySelectorAll('.song-option .fa-pause').forEach(icon => {
                    icon.classList.replace('fa-pause', 'fa-play');
                });
            }

            // Si no estaba reproduciendo esta, la preparamos y reproducimos
            currentPlayingSelectionAudio.src = clickedTrack.baseAudio;
            currentPlayingSelectionAudio.volume = volumeSlider.value / 100;
            currentPlayingSelectionAudio.loop = true; // Loop la pista seleccionada individualmente

            currentPlayingSelectionAudio.play().catch(e => console.error("Error reproduciendo base individual:", e));

            // Actualizar iconos de play/pause de la opción clickeada
            songOption.querySelector('.fa-play')?.classList.replace('fa-play', 'fa-pause');
        }

        // Marcar visualmente la opción seleccionada (solo una a la vez)
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

        // Gestión de la reproducción individual al hacer click
        if (!currentPlayingSelectionAudio) {
            currentPlayingSelectionAudio = new Audio();
            document.body.appendChild(currentPlayingSelectionAudio);
        }

        if (currentPlayingSelectionAudio.src.includes(clickedTrack.vocalAudio) && !currentPlayingSelectionAudio.paused) {
            // Si ya estaba reproduciendo esta, la pausamos
            currentPlayingSelectionAudio.pause();
            songOption.querySelector('.fa-pause')?.classList.replace('fa-pause', 'fa-play');
        } else {
            // Detener cualquier reproducción individual anterior antes de iniciar una nueva
            if (currentPlayingSelectionAudio && !currentPlayingSelectionAudio.paused) {
                currentPlayingSelectionAudio.pause();
                // Resetear iconos de play/pause de todas las opciones
                vocalTrackSelectionGrid.querySelectorAll('.song-option .fa-pause').forEach(icon => {
                    icon.classList.replace('fa-pause', 'fa-play');
                });
            }

            // Si no estaba reproduciendo esta, la preparamos y reproducimos
            currentPlayingSelectionAudio.src = clickedTrack.vocalAudio;
            currentPlayingSelectionAudio.volume = volumeSlider.value / 100;
            currentPlayingSelectionAudio.loop = true; // Loop la pista seleccionada individualmente

            currentPlayingSelectionAudio.play().catch(e => console.error("Error reproduciendo vocal individual:", e));

            // Actualizar iconos de play/pause de la opción clickeada
            songOption.querySelector('.fa-play')?.classList.replace('fa-play', 'fa-pause');
        }

        // Marcar visualmente la opción seleccionada (solo una a la vez)
        vocalTrackSelectionGrid.querySelectorAll('.song-option').forEach(option => {
            option.classList.remove('selected');
        });
        songOption.classList.add('selected');
        selectedVocalTrack = clickedTrack; // Almacenar la selección
        nextToMixResultButton.disabled = false;
    });


    // 6. Listener para el play/pause individual en la Home Page (este es el que el usuario usará para iniciar el audio)
    fullSongGrid.addEventListener('click', (event) => {
        const songItem = event.target.closest('.full-song-item');
        if (!songItem) return;

        const songId = songItem.dataset.songId;
        const clickedSong = songs.find(s => s.id === songId);
        if (!clickedSong) return;

        const isPlayingThisSong = songItem.classList.contains('playing');
        const wasGlobalPlayerPlayingThisSrc = globalFeaturedAudioPlayer.src.includes(clickedSong.fullAudio);


        if (isPlayingThisSong && wasGlobalPlayerPlayingThisSrc && !globalFeaturedAudioPlayer.paused) {
            // Si ya estaba reproduciendo esta misma canción Y ESTÁ SONANDO, pausarla
            globalFeaturedAudioPlayer.pause();
            songItem.classList.remove('playing');
            songItem.querySelector('.play-pause-overlay .icon').textContent = '▶';
        } else {
            // Si no estaba reproduciendo esta, o estaba pausada, la preparamos y reproducimos
            stopAllAudio(); // Detener cualquier otra reproducción
            globalFeaturedAudioPlayer.src = clickedSong.fullAudio;
            globalFeaturedAudioPlayer.volume = volumeSlider.value / 100; // Aplicar volumen global

            globalFeaturedAudioPlayer.play().catch(e => console.error("Error reproduciendo canción completa:", e));

            // Actualizar UI para la nueva canción reproduciéndose
            document.querySelectorAll('.full-song-item').forEach(item => {
                item.classList.remove('playing');
                const icon = item.querySelector('.play-pause-overlay .icon');
                if (icon) icon.textContent = '▶';
            });
            songItem.classList.add('playing');
            songItem.querySelector('.play-pause-overlay .icon').textContent = '⏸';
        }
    });

    // 7. Sincronizar el icono de play/pausa de la home page con el estado del reproductor
    globalFeaturedAudioPlayer.addEventListener('play', () => {
        // Encontrar el item de canción que está actualmente reproduciéndose por su SRC
        const currentSong = songs.find(s => globalFeaturedAudioPlayer.src.includes(s.fullAudio));
        if (currentSong) {
            const currentlyPlayingItem = document.querySelector(`.full-song-item[data-song-id="${currentSong.id}"]`);
            if (currentlyPlayingItem) {
                currentlyPlayingItem.classList.add('playing');
                const icon = currentlyPlayingItem.querySelector('.play-pause-overlay .icon');
                if (icon) icon.textContent = '⏸';
            }
        }
    });
    globalFeaturedAudioPlayer.addEventListener('pause', () => {
        const currentlyPlayingItem = document.querySelector('.full-song-item.playing');
        if (currentlyPlayingItem && globalFeaturedAudioPlayer.paused) {
            currentlyPlayingItem.classList.remove('playing');
            const icon = currentlyPlayingItem.querySelector('.play-pause-overlay .icon');
            if (icon) icon.textContent = '▶';
        }
    });
    globalFeaturedAudioPlayer.addEventListener('ended', () => {
        const currentlyPlayingItem = document.querySelector('.full-song-item.playing');
        if (currentlyPlayingItem) {
            currentlyPlayingItem.classList.remove('playing');
            const icon = currentlyPlayingItem.querySelector('.play-pause-overlay .icon');
            if (icon) icon.textContent = '▶';
        }
    });
});
