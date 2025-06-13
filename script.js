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

// Función para desordenar un array (Algoritmo de Fisher-Yates)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Intercambia elementos
    }
    return array;
}

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

// Sliders de volumen individuales en la mezcla final
const baseVolumeSlider = document.getElementById('baseVolumeSlider');
const vocalVolumeSlider = document.getElementById('vocalVolumeSlider');

// Reproductores de Audio Globales
const globalFeaturedAudioPlayer = new Audio(); // Instancia única para la home page

// Estos se usarán para la reproducción de fondo continua en las páginas de selección
let baseSelectionPageAudio = new Audio();
let vocalSelectionPageAudio = new Audio();

// Para la reproducción individual temporal en las páginas de selección (cuando el usuario hace click)
// Se inicializa una vez para reutilizarlo y evitar múltiples instancias de Audio
let currentPlayingSelectionAudio = new Audio();

// Para la mezcla final, dos audios reproduciéndose a la vez
let finalBaseAudio = new Audio();
let finalVocalAudio = new Audio();

// Variables para los sliders de volumen en las páginas de selección
let selectionBaseVolumeSlider = null;
let selectionVocalVolumeSlider = null;

// Variables para almacenar las selecciones
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
            // Solo para currentPlayingSelectionAudio, limpiar su src si no se va a usar activamente
            if (player === currentPlayingSelectionAudio) {
                 player.src = '';
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
}

/** Aplica el volumen actual del slider global a todos los reproductores y sus componentes. */
function applyGlobalVolume() {
    const newGlobalVolume = volumeSlider.value / 100;

    // Aplicar volumen global a los reproductores principales
    globalFeaturedAudioPlayer.volume = newGlobalVolume;

    // Estos son los audios de fondo/random en las páginas de selección
    // Su volumen es Global * Individual (si el slider individual existe y se usa)
    baseSelectionPageAudio.volume = newGlobalVolume * (selectionBaseVolumeSlider ? selectionBaseVolumeSlider.value / 100 : 1);
    vocalSelectionPageAudio.volume = newGlobalVolume * (selectionVocalVolumeSlider ? selectionVocalVolumeSlider.value / 100 : 1);

    // currentPlayingSelectionAudio tiene el volumen global multiplicado por el slider de selección de la página activa
    currentPlayingSelectionAudio.volume = newGlobalVolume * (
        (baseSelectionPage.classList.contains('active') && selectionBaseVolumeSlider ? selectionBaseVolumeSlider.value / 100 : 1) ||
        (vocalSelectionPage.classList.contains('active') && selectionVocalVolumeSlider ? selectionVocalVolumeSlider.value / 100 : 1) || 1
    );


    // Para los audios de la mezcla final, su volumen es global * individual
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
 * Intentará reproducir automáticamente.
 */
async function playRandomFeaturedSong() {
    stopAllAudio(); // Asegurarse de parar todo antes de iniciar

    const shuffledSongs = shuffleArray([...songs]); // Mezclar una copia del array de canciones
    const randomSong = shuffledSongs[0]; // Tomar la primera de la lista mezclada

    globalFeaturedAudioPlayer.src = randomSong.fullAudio;
    globalFeaturedAudioPlayer.volume = volumeSlider.value / 100;

    try {
        await globalFeaturedAudioPlayer.play();
        console.log(`Reproduciendo aleatoriamente en Home: ${randomSong.title}`);
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
            if (playIcon) playIcon.textContent = '⏸';
        }
    } catch (e) {
        console.warn("Autoplay de canción destacada bloqueado o fallido. El usuario deberá hacer clic:", e);
        // Si el autoplay es bloqueado, no hacer nada visualmente o mostrar un mensaje
        // El usuario podrá hacer clic para iniciar la reproducción
        document.querySelectorAll('.full-song-item').forEach(item => {
            item.classList.remove('playing');
            const icon = item.querySelector('.play-pause-overlay .icon');
            if (icon) icon.textContent = '▶';
        });
    }
}

/**
 * Reproduce y selecciona una pista aleatoria 'perf' (o normal si no hay perf)
 * en las páginas de selección de base/voz. Esta es la reproducción "de fondo" que no se puede parar.
 * @param {string} type - 'base' o 'vocal'.
 */
async function playRandomSelectionTrack(type) {
    stopAllAudio(); // Detener cualquier otro audio antes de iniciar el de fondo

    let tracks;
    let player;
    let targetGrid;
    let selectionButton;
    let selectedTrackVar;

    if (type === 'base') {
        tracks = songs.map(s => ({
            id: s.id,
            title: s.title,
            artist: s.artist,
            image: s.image,
            audio: s.baseAudio,
            perfAudio: s.basePerfAudio // Propiedad 'perf'
        }));
        player = baseSelectionPageAudio;
        targetGrid = baseTrackSelectionGrid;
        selectionButton = nextToVocalSelectionButton;
        selectedTrackVar = 'selectedBaseTrack';
    } else { // type === 'vocal'
        tracks = songs.map(s => ({
            id: s.id,
            title: s.title,
            artist: s.artist,
            image: s.image,
            audio: s.vocalAudio,
            perfAudio: s.vocalPerfAudio // Propiedad 'perf'
        }));
        player = vocalSelectionPageAudio;
        targetGrid = vocalTrackSelectionGrid;
        selectionButton = nextToMixResultButton;
        selectedTrackVar = 'selectedVocalTrack';
    }

    const shuffledTracks = shuffleArray([...tracks]); // Mezclar para la selección de bases/vocales
    const randomTrack = shuffledTracks[0];

    // Usar la versión 'perf' si existe, de lo contrario, usar la versión normal
    player.src = randomTrack.perfAudio || randomTrack.audio;
    player.loop = true; // Reproducir en bucle

    // Aplicar el volumen del slider de selección si existe, sino el global
    if (type === 'base' && selectionBaseVolumeSlider) {
        player.volume = (volumeSlider.value / 100) * (selectionBaseVolumeSlider.value / 100);
    } else if (type === 'vocal' && selectionVocalVolumeSlider) {
        player.volume = (volumeSlider.value / 100) * (selectionVocalVolumeSlider.value / 100);
    } else {
        player.volume = volumeSlider.value / 100;
    }

    try {
        await player.play();
        console.log(`Reproduciendo ${type} aleatoria de fondo: ${randomTrack.title}`);
    } catch (e) {
        console.warn(`Autoplay de ${type} aleatoria bloqueado o fallido:`, e);
    }

    // Deseleccionar todas las opciones y seleccionar la aleatoria
    targetGrid.querySelectorAll('.song-option').forEach(option => {
        option.classList.remove('selected');
    });
    const selectedOption = targetGrid.querySelector(`.song-option[data-song-id="${randomTrack.id}"]`);
    if (selectedOption) {
        selectedOption.classList.add('selected');
        // Almacenar la pista seleccionada (la canción completa)
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
    finalBaseAudio.src = selectedBaseTrack.baseAudio; // Usar la versión NORMAL para la mezcla final
    finalVocalAudio.src = selectedVocalTrack.vocalAudio; // Usar la versión NORMAL para la mezcla final

    // Reiniciar sliders de volumen individuales en la mezcla final a 100%
    baseVolumeSlider.value = 100;
    vocalVolumeSlider.value = 100;
    applyGlobalVolume(); // Aplicar el volumen inicial y global (que ahora incluye los individuales)

    // Actualizar UI de la mezcla final
    finalBaseArtwork.src = selectedBaseTrack.image;
    finalBaseTitle.textContent = selectedBaseTrack.title;
    finalVocalArtwork.src = selectedVocalTrack.image;
    finalVocalTitle.textContent = selectedVocalTrack.title;

    // Configurar el reproductor visible (finalMixedTrackPlayer) para controlar a los ocultos
    // No le asignamos src al finalMixedTrackPlayer para que no intente reproducir nada por sí mismo.
    // Solo actuará como controlador de los audios ocultos.
    finalBaseAudio.load(); // Cargar la base para obtener su duración para el finalMixedTrackPlayer
    finalVocalAudio.load();

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
        finalBaseAudio.currentTime = finalMixedTrackPlayer.currentTime;
        finalVocalAudio.currentTime = finalMixedTrackPlayer.currentTime;
    };

    // Al finalizar el reproductor maestro (si uno de ellos termina)
    finalBaseAudio.onended = finalVocalAudio.onended = () => {
        stopAllAudio();
        // Opcional: Volver a la página de inicio o a la selección
        // showPage(homePage);
    };


    // Intentar reproducir automáticamente la mezcla
    try {
        await finalBaseAudio.play(); // Intentar reproducir la base
        await finalVocalAudio.play(); // Y la vocal
        // Si alguno falla, el finalMixedTrackPlayer tendrá que ser controlado manualmente
    } catch (e) {
        console.warn("Autoplay de mezcla final bloqueado o fallido. El usuario deberá hacer clic en los controles de la mezcla:", e);
    }
}


// --- Funciones de Interfaz (UI) ---

/**
 * Renderiza dinámicamente las canciones completas en la página de inicio en orden aleatorio.
 */
function renderFullSongs() {
    fullSongGrid.innerHTML = ''; // Limpiar contenido existente
    const shuffledSongs = shuffleArray([...songs]); // Mezclar una copia del array
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
 * Renderiza dinámicamente las opciones de bases y voces en orden aleatorio.
 * @param {string} type - 'base' o 'vocal'.
 */
function renderSelectionOptions(type) {
    let targetGrid;
    let tracks;

    if (type === 'base') {
        targetGrid = baseTrackSelectionGrid;
        tracks = songs.map(s => ({
            id: s.id,
            title: s.title,
            artist: s.artist,
            image: s.image,
            audio: s.baseAudio,
            perfAudio: s.basePerfAudio || s.baseAudio // Usar perf si existe, sino normal
        }));
    } else { // type === 'vocal'
        targetGrid = vocalTrackSelectionGrid;
        tracks = songs.map(s => ({
            id: s.id,
            title: s.title,
            artist: s.artist,
            image: s.image,
            audio: s.vocalAudio,
            perfAudio: s.vocalPerfAudio || s.vocalAudio // Usar perf si existe, sino normal
        }));
    }

    targetGrid.innerHTML = ''; // Limpiar contenido existente
    const shuffledTracks = shuffleArray([...tracks]); // Mezclar para la selección
    shuffledTracks.forEach(track => {
        const songOption = document.createElement('div');
        songOption.classList.add('song-option');
        songOption.dataset.trackType = type;
        songOption.dataset.songId = track.id;
        // Quitamos el botón de play individual explícito ya que se reproducirá al seleccionar la tarjeta
        songOption.innerHTML = `
            <img src="${track.image}" alt="Portada de ${track.title}">
            <p>${track.title}</p>
            <div class="selected-overlay">
                <i class="fas fa-check-circle"></i>
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
        // Redraw songs in shuffled order
        renderFullSongs();
        playRandomFeaturedSong(); // Intentar autoplay en la home
    } else if (pageToShow === baseSelectionPage) {
        renderSelectionOptions('base'); // Redraw bases in shuffled order
        // Obtener el slider de volumen de la base de selección (solo una vez)
        if (!selectionBaseVolumeSlider) {
            selectionBaseVolumeSlider = document.getElementById('selectionBaseVolumeSlider');
            if (selectionBaseVolumeSlider) {
                selectionBaseVolumeSlider.addEventListener('input', applyGlobalVolume);
            }
        }
        playRandomSelectionTrack('base'); // Autoplay random al entrar
    } else if (pageToShow === vocalSelectionPage) {
        renderSelectionOptions('vocal'); // Redraw vocals in shuffled order
        // Obtener el slider de volumen de la vocal de selección (solo una vez)
        if (!selectionVocalVolumeSlider) {
            selectionVocalVolumeSlider = document.getElementById('selectionVocalVolumeSlider');
            if (selectionVocalVolumeSlider) {
                selectionVocalVolumeSlider.addEventListener('input', applyGlobalVolume);
            }
        }
        playRandomSelectionTrack('vocal'); // Autoplay random al entrar
    } else if (pageToShow === mixResultPage) {
        setupAndPlayFinalMix();
    }
}

// --- Event Listeners ---
document.addEventListener('DOMContentLoaded', () => {
    // 1. Inicializar los sliders de volumen de selección si existen en el HTML
    selectionBaseVolumeSlider = document.getElementById('selectionBaseVolumeSlider');
    if (selectionBaseVolumeSlider) {
        selectionBaseVolumeSlider.addEventListener('input', applyGlobalVolume);
    }
    selectionVocalVolumeSlider = document.getElementById('selectionVocalVolumeSlider');
    if (selectionVocalVolumeSlider) {
        selectionVocalVolumeSlider.addEventListener('input', applyGlobalVolume);
    }

    // 2. Renderizar el contenido dinámico al cargar la página (desordenado)
    renderFullSongs();
    renderSelectionOptions('base'); // Renderizar para que existan los elementos
    renderSelectionOptions('vocal'); // Renderizar para que existan los elementos

    // 3. Inicializar volumen global y sus listeners
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

    // Listeners para los sliders de volumen individuales en la mezcla final
    baseVolumeSlider.addEventListener('input', applyGlobalVolume);
    vocalVolumeSlider.addEventListener('input', applyGlobalVolume);

    // 4. Autoplay random en la página de inicio
    playRandomFeaturedSong();


    // 5. Listeners para la navegación entre páginas
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

    // 6. Listeners para la selección de bases y voces (reproducción al hacer click en la tarjeta)
    baseTrackSelectionGrid.addEventListener('click', async (event) => {
        const songOption = event.target.closest('.song-option');
        if (!songOption) return;

        const songId = songOption.dataset.songId;
        const clickedTrack = songs.find(s => s.id === songId);
        if (!clickedTrack) return;

        baseSelectionPageAudio.pause(); // Detener la reproducción random de fondo

        const audioToPlay = clickedTrack.basePerfAudio || clickedTrack.baseAudio;

        // Pausar cualquier otra reproducción individual activa
        if (currentPlayingSelectionAudio.src && !currentPlayingSelectionAudio.paused) {
            currentPlayingSelectionAudio.pause();
        }

        // Si la canción ya estaba seleccionada y se vuelve a hacer click, deseleccionar y detener
        if (selectedBaseTrack && selectedBaseTrack.id === songId && currentPlayingSelectionAudio.src.includes(audioToPlay)) {
            currentPlayingSelectionAudio.src = ''; // Limpiar src
            songOption.classList.remove('selected'); // Desmarcar visualmente
            selectedBaseTrack = null; // Deseleccionar
            nextToVocalSelectionButton.disabled = true; // Deshabilitar el botón
            return; // Salir de la función
        }

        // Reproducir la nueva selección
        currentPlayingSelectionAudio.src = audioToPlay;
        currentPlayingSelectionAudio.volume = (volumeSlider.value / 100) * (selectionBaseVolumeSlider ? selectionBaseVolumeSlider.value / 100 : 1);
        currentPlayingSelectionAudio.loop = true;

        try {
            await currentPlayingSelectionAudio.play();
        } catch (e) {
            console.error("Error reproduciendo base individual:", e);
        }

        // Marcar visualmente la opción seleccionada
        baseTrackSelectionGrid.querySelectorAll('.song-option').forEach(option => {
            option.classList.remove('selected');
        });
        songOption.classList.add('selected');
        selectedBaseTrack = clickedTrack; // Almacenar la selección
        nextToVocalSelectionButton.disabled = false;
    });

    vocalTrackSelectionGrid.addEventListener('click', async (event) => {
        const songOption = event.target.closest('.song-option');
        if (!songOption) return;

        const songId = songOption.dataset.songId;
        const clickedTrack = songs.find(s => s.id === songId);
        if (!clickedTrack) return;

        vocalSelectionPageAudio.pause(); // Detener la reproducción random de fondo

        const audioToPlay = clickedTrack.vocalPerfAudio || clickedTrack.vocalAudio;

        // Pausar cualquier otra reproducción individual activa
        if (currentPlayingSelectionAudio.src && !currentPlayingSelectionAudio.paused) {
            currentPlayingSelectionAudio.pause();
        }

        // Si la canción ya estaba seleccionada y se vuelve a hacer click, deseleccionar y detener
        if (selectedVocalTrack && selectedVocalTrack.id === songId && currentPlayingSelectionAudio.src.includes(audioToPlay)) {
            currentPlayingSelectionAudio.src = ''; // Limpiar src
            songOption.classList.remove('selected'); // Desmarcar visualmente
            selectedVocalTrack = null; // Deseleccionar
            nextToMixResultButton.disabled = true; // Deshabilitar el botón
            return; // Salir de la función
        }

        // Reproducir la nueva selección
        currentPlayingSelectionAudio.src = audioToPlay;
        currentPlayingSelectionAudio.volume = (volumeSlider.value / 100) * (selectionVocalVolumeSlider ? selectionVocalVolumeSlider.value / 100 : 1);
        currentPlayingSelectionAudio.loop = true;

        try {
            await currentPlayingSelectionAudio.play();
        } catch (e) {
            console.error("Error reproduciendo vocal individual:", e);
        }

        // Marcar visualmente la opción seleccionada
        vocalTrackSelectionGrid.querySelectorAll('.song-option').forEach(option => {
            option.classList.remove('selected');
        });
        songOption.classList.add('selected');
        selectedVocalTrack = clickedTrack;
        nextToMixResultButton.disabled = false;
    });


    // 7. Listener para el play/pause individual en la Home Page
    fullSongGrid.addEventListener('click', async (event) => {
        const songItem = event.target.closest('.full-song-item');
        if (!songItem) return;

        const songId = songItem.dataset.songId;
        const clickedSong = songs.find(s => s.id === songId);
        if (!clickedSong) return;

        const isPlayingThisSong = songItem.classList.contains('playing');
        const isGlobalPlayerPlayingThisSrc = globalFeaturedAudioPlayer.src.includes(clickedSong.fullAudio);


        if (isPlayingThisSong && isGlobalPlayerPlayingThisSrc && !globalFeaturedAudioPlayer.paused) {
            // Si ya estaba reproduciendo esta misma canción Y ESTÁ SONANDO, pausarla
            globalFeaturedAudioPlayer.pause();
            songItem.classList.remove('playing');
            songItem.querySelector('.play-pause-overlay .icon').textContent = '▶';
        } else {
            // Si no estaba reproduciendo esta, o estaba pausada, la preparamos y reproducimos
            stopAllAudio(); // Detener cualquier otra reproducción
            globalFeaturedAudioPlayer.src = clickedSong.fullAudio;
            globalFeaturedAudioPlayer.volume = volumeSlider.value / 100; // Aplicar volumen global

            try {
                await globalFeaturedAudioPlayer.play();
                // Actualizar UI para la nueva canción reproduciéndose
                document.querySelectorAll('.full-song-item').forEach(item => {
                    item.classList.remove('playing');
                    const icon = item.querySelector('.play-pause-overlay .icon');
                    if (icon) icon.textContent = '▶';
                });
                songItem.classList.add('playing');
                songItem.querySelector('.play-pause-overlay .icon').textContent = '⏸';
            } catch (e) {
                console.error("Error reproduciendo canción completa en Home:", e);
                // Si falla la reproducción (e.g., autoplay bloqueado), revertir UI
                songItem.classList.remove('playing');
                songItem.querySelector('.play-pause-overlay .icon').textContent = '▶';
            }
        }
    });

    // 8. Sincronizar el icono de play/pausa de la home page con el estado del reproductor
    globalFeaturedAudioPlayer.addEventListener('play', () => {
        // Encontrar el item de canción que está actualmente reproduciéndose por su SRC
        const currentSong = songs.find(s => globalFeaturedAudioPlayer.src && globalFeaturedAudioPlayer.src.includes(s.fullAudio));
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
        if (currentlyPlayingItem) { // Eliminar la condición globalFeaturedAudioPlayer.paused para que se actualice siempre
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
        // Después de que una canción termine, reproducir la siguiente aleatoria en la página principal
        if (homePage.classList.contains('active')) {
            playRandomFeaturedSong();
        }
    });
});
