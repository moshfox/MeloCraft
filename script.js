// --- script.js ---

// Tu array de canciones existente
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
        fullAudio: 'assets/audio/full/Tommy-full.mp3', // Este fullAudio es igual al de Espresso Macchiato, verifica si es intencional.
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
        vocalAudio: 'assets/audio/vocals/poppop.ai - videoplayback_vocals.mp3',
    }
];

// Variables globales para las páginas y grids (tus declaraciones existentes)
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

// **CORRECCIÓN:** globalFeaturedAudioPlayer debe ser 'let' y una instancia de Audio, no un elemento del DOM.
let globalFeaturedAudioPlayer = new Audio();
globalFeaturedAudioPlayer.volume = 1; // Volumen inicial, se ajustará con el slider.

let baseSelectionPageAudio = new Audio();
let vocalSelectionPageAudio = new Audio();
let currentPlayingSelectionAudio = null;
let finalBaseAudio = new Audio();
let finalVocalAudio = new Audio();

let selectedBaseTrack = null;
let selectedVocalTrack = null;

const seekSlider = document.getElementById('seekSlider');
const currentTimeDisplay = document.getElementById('currentTime');
const durationTimeDisplay = document.getElementById('durationTime');

// --- Funciones de Utilidad ---

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
}

// Función para detener *todos* los audios controlados por la aplicación
function stopAllAudio() {
    // Lista de todos los reproductores de audio que podrían estar activos
    const allPlayers = [
        globalFeaturedAudioPlayer,
        baseSelectionPageAudio,
        vocalSelectionPageAudio,
        currentPlayingSelectionAudio, // Puede ser null
        finalBaseAudio, // Puede no estar cargado aún
        finalVocalAudio // Puede no estar cargado aún
    ];

    allPlayers.forEach(player => {
        if (player instanceof Audio && !player.paused) {
            player.pause();
            player.currentTime = 0;
        }
        // Para reproductores que no sean el maestro principal de la página (o del DJ),
        // limpiamos su src para asegurar que no haya conflictos.
        // No limpiar el src del globalFeaturedAudioPlayer o de finalBaseAudio/VocalAudio
        // si son los que controlan la reproducción principal en sus respectivas páginas.
        if (player !== globalFeaturedAudioPlayer && player !== finalBaseAudio && player !== finalVocalAudio) {
            player.src = ""; // Limpiar la fuente
            player.load(); // Carga de nuevo para resetear completamente
        }
    });

    // Manejo específico para finalMixedTrackPlayer, ya que puede ser el elemento de la UI (HTML audio tag)
    if (finalMixedTrackPlayer && !finalMixedTrackPlayer.paused) {
        finalMixedTrackPlayer.pause();
        finalMixedTrackPlayer.currentTime = 0;
    }
    // Limpiar SRC si es necesario, y remover listeners para evitar fugas de memoria
    if (finalMixedTrackPlayer) {
        finalMixedTrackPlayer.onplay = null;
        finalMixedTrackPlayer.onpause = null;
        finalMixedTrackPlayer.onseeking = null;
        finalMixedTrackPlayer.onseeked = null;
        finalMixedTrackPlayer.onended = null;
        finalMixedTrackPlayer.src = ""; // Limpiar la fuente
        finalMixedTrackPlayer.load(); // Cargar para aplicar el src vacío
    }

    // Resetear elementos de la barra de progreso personalizada
    if (seekSlider) {
        seekSlider.value = 0;
    }
    if (currentTimeDisplay) {
        currentTimeDisplay.textContent = '0:00';
    }
    if (durationTimeDisplay) {
        durationTimeDisplay.textContent = '0:00';
    }

    // Resetear visualmente los iconos de play/pause en la interfaz
    document.querySelectorAll('.full-song-item.playing').forEach(item => {
        item.classList.remove('playing');
        const icon = item.querySelector('.play-pause-overlay .icon');
        if (icon) icon.textContent = '▶'; // Restablecer al icono de play
    });
    document.querySelectorAll('.song-option .fa-pause').forEach(icon => {
        icon.classList.replace('fa-pause', 'fa-play');
    });
}


function applyGlobalVolume() {
    const newGlobalVolume = volumeSlider.value / 100;

    // Aplicar a reproductores generales
    [globalFeaturedAudioPlayer, baseSelectionPageAudio, vocalSelectionPageAudio].forEach(player => {
        if (player) {
            player.volume = newGlobalVolume;
            // Si el volumen global se sube de 0 y el reproductor está muteado, lo desmuteamos
            if (newGlobalVolume > 0 && player.muted && !player.paused) {
                player.muted = false;
            }
        }
    });

    // currentPlayingSelectionAudio debe actualizar su volumen también
    if (currentPlayingSelectionAudio) {
        currentPlayingSelectionAudio.volume = newGlobalVolume;
        if (newGlobalVolume > 0 && currentPlayingSelectionAudio.muted && !currentPlayingSelectionAudio.paused) {
            currentPlayingSelectionAudio.muted = false;
        }
    }

    // Asegurarse de que los audios de la mezcla final también ajusten su volumen si están cargados
    if (finalBaseAudio && !finalBaseAudio.paused) {
        finalBaseAudio.volume = newGlobalVolume * (baseVolumeSlider ? baseVolumeSlider.value / 100 : 1);
    }
    if (finalVocalAudio && !finalVocalAudio.paused) {
        finalVocalAudio.volume = newGlobalVolume * (vocalVolumeSlider ? vocalVolumeSlider.value / 100 : 1);
    }

    // Actualizar el icono de mute
    if (muteButton) {
        if (newGlobalVolume === 0) {
            muteButton.classList.remove('fa-volume-up');
            muteButton.classList.add('fa-volume-mute');
        } else {
            muteButton.classList.remove('fa-volume-mute');
            muteButton.classList.add('fa-volume-up');
        }
    }
}

function getRandomMiddleTime(audioPlayer) {
    if (!audioPlayer || !audioPlayer.duration || isNaN(audioPlayer.duration) || audioPlayer.duration < 10) {
        return 0; // Si la duración no es válida o muy corta, empieza desde el principio
    }
    const duration = audioPlayer.duration;
    const startMiddle = duration * 0.3;
    const endMiddle = duration * 0.7;
    if (endMiddle <= startMiddle) {
        return 0;
    }
    return Math.random() * (endMiddle - startMiddle) + startMiddle;
}

function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

/**
 * Renderiza dinámicamente las canciones completas en la página de inicio.
 */
function renderFullSongs() {
    fullSongGrid.innerHTML = '';
    const shuffledSongs = shuffleArray(songs);
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

    targetGrid.innerHTML = '';
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
 * Muestra la página deseada y gestiona el audio de fondo/primer plano.
 * @param {HTMLElement} pageToShow - El elemento de la sección (página) a mostrar.
 */
function showPage(pageToShow) {
    // Si el DJ está activo, desactivarlo al cambiar de página
    if (isDjModeActive) {
        toggleDjMode();
    }

    stopAllAudio(); // Detiene todos los audios al cambiar de página

    // Ocultar todas las páginas
    homePage.classList.remove('active');
    homePage.classList.add('hidden');
    baseSelectionPage.classList.remove('active');
    baseSelectionPage.classList.add('hidden');
    vocalSelectionPage.classList.remove('active');
    vocalSelectionPage.classList.add('hidden');
    mixResultPage.classList.remove('active');
    mixResultPage.classList.add('hidden');

    // Mostrar la página deseada
    pageToShow.classList.remove('hidden');
    pageToShow.classList.add('active');

    // Lógica específica para cada página al mostrarla
    if (pageToShow === homePage) {
        // playRandomFeaturedSong(); // Desactivado para evitar problemas de autoplay, el usuario iniciará la reproducción.
        renderFullSongs(); // Asegurarse de que las canciones se renderizan cada vez
    } else if (pageToShow === baseSelectionPage) {
        playRandomSelectionTrack('base');
        renderSelectionOptions('base'); // Asegurarse de que las opciones se renderizan
    } else if (pageToShow === vocalSelectionPage) {
        playRandomSelectionTrack('vocal');
        renderSelectionOptions('vocal'); // Asegurarse de que las opciones se renderizan
    } else if (pageToShow === mixResultPage) {
        setupAndPlayFinalMix();
    }
}

/** Configura y reproduce la mezcla final de base y voz. */
async function setupAndPlayFinalMix() {
    stopAllAudio(); // Asegura que todo lo demás esté parado.

    if (!selectedBaseTrack || !selectedVocalTrack) {
        console.error("No se ha seleccionado la base o la voz para la mezcla final.");
        alert("Por favor, selecciona una base y una voz antes de ver la mezcla.");
        showPage(homePage);
        return;
    }

    // Asignar SRCs a las instancias de Audio individuales para la mezcla
    finalBaseAudio.src = selectedBaseTrack.baseAudio;
    finalVocalAudio.src = selectedVocalTrack.vocalAudio;

    // Cargar los audios para que sus metadatos estén disponibles
    await Promise.all([
        new Promise((resolve, reject) => {
            finalBaseAudio.onloadedmetadata = () => resolve();
            finalBaseAudio.onerror = () => reject(new Error('Error al cargar metadatos de la base final.'));
            finalBaseAudio.load();
        }),
        new Promise((resolve, reject) => {
            finalVocalAudio.onloadedmetadata = () => resolve();
            finalVocalAudio.onerror = () => reject(new Error('Error al cargar metadatos de la vocal final.'));
            finalVocalAudio.load();
        })
    ]).catch(error => {
        console.error("Error al cargar uno de los audios de la mezcla final:", error);
        alert("No se pudieron cargar todas las pistas de la mezcla. Verifica las rutas.");
        showPage(homePage);
        return;
    });

    // Establecer volúmenes iniciales (basados en los sliders y el volumen global)
    if (baseVolumeSlider) baseVolumeSlider.value = 100;
    if (vocalVolumeSlider) vocalVolumeSlider.value = 100;
    applyGlobalVolume(); // Aplica el volumen global y el de los sliders individuales

    // Actualizar la información visual de las carátulas y títulos
    if (finalBaseArtwork) finalBaseArtwork.src = selectedBaseTrack.image;
    if (finalBaseTitle) finalBaseTitle.textContent = selectedBaseTrack.title;
    if (finalVocalArtwork) finalVocalArtwork.src = selectedVocalTrack.image;
    if (finalVocalTitle) finalVocalTitle.textContent = selectedVocalTrack.title;

    // Configurar el finalMixedTrackPlayer como el "maestro" para la barra de progreso
    const masterDuration = Math.max(finalBaseAudio.duration, finalVocalAudio.duration);
    if (seekSlider) seekSlider.max = masterDuration;
    if (durationTimeDisplay) durationTimeDisplay.textContent = formatTime(masterDuration);

    // Sincronizar la barra de progreso con el audio "maestro"
    finalBaseAudio.ontimeupdate = () => {
        if (!seekSlider.dragging) {
            if (seekSlider) seekSlider.value = finalBaseAudio.currentTime;
        }
        if (currentTimeDisplay) currentTimeDisplay.textContent = formatTime(finalBaseAudio.currentTime);
    };

    if (seekSlider) {
        seekSlider.oninput = () => {
            const newTime = seekSlider.value;
            finalBaseAudio.currentTime = newTime;
            finalVocalAudio.currentTime = newTime;
        };
        seekSlider.onmousedown = () => { seekSlider.dragging = true; };
        seekSlider.onmouseup = () => { seekSlider.dragging = false; };
    }

    // Eventos de control de reproducción:
    finalBaseAudio.onended = () => {
        stopAllAudio();
        console.log("Mezcla finalizada.");
    };

    // Intentar reproducir la mezcla automáticamente
    try {
        await finalBaseAudio.play();
        await finalVocalAudio.play(); // Iniciar vocal también
        console.log("Autoplay de mezcla final iniciado.");
    } catch (e) {
        console.warn("Autoplay de mezcla final bloqueado o fallido:", e);
        finalBaseAudio.pause();
        finalVocalAudio.pause();
    }
}


/**
 * Reproduce una pista de selección (base o vocal) aleatoria.
 */
async function playRandomSelectionTrack(type) {
    // stopAllAudio(); // Detiene cualquier audio en curso - YA SE LLAMA EN SHOWPAGE

    let tracks;
    let player;
    let targetGrid;
    let selectionButton;
    let selectedTrackVar;

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
    player.loop = true;
    player.volume = volumeSlider.value / 100;
    player.muted = false; // Asegurarse de que no esté silenciado si se reproduce automáticamente

    try {
        await new Promise((resolve, reject) => {
            player.onloadedmetadata = () => resolve();
            player.onerror = () => reject(new Error('Error al cargar metadatos del audio aleatorio de selección.'));
            player.load();
        });
        player.currentTime = getRandomMiddleTime(player);
        await player.play();
        console.log(`Reproduciendo ${type} aleatoria desde el medio: ${randomTrack.title}`);
    } catch (e) {
        console.warn(`Autoplay de ${type} aleatoria bloqueado o fallido:`, e);
    }

    // Resalta visualmente la opción seleccionada aleatoriamente
    targetGrid.querySelectorAll('.song-option').forEach(option => {
        option.classList.remove('selected');
        const icon = option.querySelector('.fa-play, .fa-pause');
        if (icon && icon.classList.contains('fa-pause')) {
            icon.classList.replace('fa-pause', 'fa-play');
        }
    });

    const selectedOption = targetGrid.querySelector(`.song-option[data-song-id="${randomTrack.id}"]`);
    if (selectedOption) {
        selectedOption.classList.add('selected');
        const icon = selectedOption.querySelector('.fa-play, .fa-pause');
        if (icon) icon.classList.replace('fa-play', 'fa-pause'); // Si se reproduce, debe mostrar pausa
        window[selectedTrackVar] = songs.find(s => s.id === randomTrack.id);
        if (selectionButton) selectionButton.disabled = false; // Verificar si el botón existe antes de deshabilitar
    }
}


// --- DJ Mode specific elements and variables ---
const djModeButton = document.getElementById('djModeButton');
const djOverlay = document.getElementById('djOverlay');
const djCloseButton = document.getElementById('djCloseButton');
const djArtwork = document.getElementById('djArtwork');
const djCommentary = document.getElementById('djCommentary');
const nowPlaying = document.getElementById('nowPlaying');

let isDjModeActive = false;
let djTimeoutId; // For the next song timer
let djCommentaryTimeoutId; // For the DJ commentary timer
let currentDjSongIndex = -1; // Index of the current DJ song
let lastDjSongPlayed = null; // Stores the reference to the last song played for comments

// --- Array of DJ commentary templates (Improved with more variety) ---
const djComments = [
    "¡Qué temazo de $ARTISTA_ANTERIOR$ con '$CANCION_ANTERIOR$'! Pero prepárense, que ahora llega $ARTISTA_SIGUIENTE$ con su hit: ¡'$CANCION_SIGUIENTE$'! ¡Súbanle el volumen!",
    "Espero que hayan disfrutado de '$CANCION_ANTERIOR$' de $ARTISTA_ANTERIOR$. Subimos el volumen para '$CANCION_SIGUIENTE$' de $ARTISTA_SIGUIENTE$. ¡A bailar!",
    "Wow, $ARTISTA_ANTERIOR$ nos dejó con ganas de más. Pero no se preocupen, el ambiente sigue arriba con $ARTISTA_SIGUIENTE$ y su increíble '$CANCION_SIGUIENTE$'.",
    "Ese es el ritmo de $ARTISTA_ANTERIOR$ con '$CANCION_ANTERIOR}'. Ahora, un cambio de aires con $ARTISTA_SIGUIENTE$ y su enérgico '$CANCION_SIGUIENTE$'. ¡Esto es Melocraft AI DJ!",
    "¡Directo desde los estudios de Melocraft! Acabamos de escuchar a $ARTISTA_ANTERIOR$. A continuación, una joya de $ARTISTA_SIGUIENTE$: '$CANCION_SIGUIENTE}'.",
    "El micro está caliente, y los decks también. Despidiendo a $ARTISTA_ANTERIOR$, y dando la bienvenida a $ARTISTA_SIGUIENTE$ con su nueva vibra en '$CANCION_SIGUIENTE}'.",
    "¡Volumen al máximo! Después de la genialidad de $CANCION_ANTERIOR$, nos zambullimos en el mundo de $ARTISTA_SIGUIENTE$ con '$CANCION_SIGUIENTE}'. ¡No se queden sentados!",
    "Un aplauso para $ARTISTA_ANTERIOR$ y su hit '$CANCION_ANTERIOR}'. Y ahora, sin más preámbulos, $ARTISTA_SIGUIENTE$ con su explosiva '$CANCION_SIGUIENTE}'. ¡Melocraft al poder!"
];

// Function to get a random DJ comment with variable replacement
function getRandomDjComment(prevSong, nextSong) {
    const commentTemplate = djComments[Math.floor(Math.random() * djComments.length)];
    const prevArtist = prevSong ? prevSong.artist : "nuestro último genio musical";
    const prevTitle = prevSong ? prevSong.title : "esa increíble canción";

    return commentTemplate
        .replace(/\$ARTISTA_ANTERIOR\$/g, prevArtist)
        .replace(/\$CANCION_ANTERIOR\$/g, prevTitle)
        .replace(/\$ARTISTA_SIGUIENTE\$/g, nextSong.artist)
        .replace(/\$CANCION_SIGUIENTE\$/g, nextSong.title);
}

// Function to select a random DJ track from your 'songs' array
function selectRandomDjTrack() {
    if (songs.length === 0) {
        console.warn("No hay canciones disponibles en el array 'songs' para el DJ.");
        return null;
    }
    let nextSongIndex;
    do {
        nextSongIndex = Math.floor(Math.random() * songs.length);
    } while (nextSongIndex === currentDjSongIndex && songs.length > 1);

    currentDjSongIndex = nextSongIndex;
    return songs[currentDjSongIndex];
}

// Function to prepare and play the next DJ song
async function playNextDjSong() {
    clearTimeout(djCommentaryTimeoutId); // Clear any previous commentary timer

    const nextSong = selectRandomDjTrack();

    if (!nextSong || !nextSong.fullAudio) {
        console.error("No se pudo seleccionar la siguiente canción del DJ o la ruta de audio no está definida.");
        djCommentary.textContent = "El DJ se ha quedado sin canciones. ¡Necesita más hits!";
        nowPlaying.textContent = "";
        resetDjState();
        return;
    }

    const comment = getRandomDjComment(lastDjSongPlayed, nextSong);
    djCommentary.textContent = comment;
    nowPlaying.textContent = ''; // Clear "Now Playing" while DJ is speaking

    // Lower background music volume (if any)
    if (!globalFeaturedAudioPlayer.paused) {
        globalFeaturedAudioPlayer.volume = (volumeSlider.value / 100) * 0.1; // 10% of global volume
    }

    // Set timer to clear commentary and restore volume
    djCommentaryTimeoutId = setTimeout(() => {
        djCommentary.textContent = ''; // Clear commentary
        applyGlobalVolume(); // Restore volume after commentary
    }, 5000); // Commentary visible for 5 seconds (adjust)

    // Configure and play the new song
    globalFeaturedAudioPlayer.src = nextSong.fullAudio;
    globalFeaturedAudioPlayer.loop = false;
    applyGlobalVolume(); // Apply global volume when starting the song
    globalFeaturedAudioPlayer.muted = (volumeSlider.value === 0);

    try {
        await globalFeaturedAudioPlayer.play();
        console.log(`DJ reproduciendo: ${nextSong.title} de ${nextSong.artist}`);
        nowPlaying.textContent = `Ahora sonando: ${nextSong.title} - ${nextSong.artist}`;
        djArtwork.src = nextSong.image || "assets/images/DJ.png";
        djArtwork.alt = `Artwork de ${nextSong.title}`;

        lastDjSongPlayed = nextSong;

        globalFeaturedAudioPlayer.onended = () => {
            console.log("Canción del DJ terminada. Preparando la siguiente...");
            setTimeout(playNextDjSong, 2000); // 2-second pause between songs
        };

    } catch (e) {
        console.error("Error reproduciendo canción del DJ:", e);
        if (e.name === 'NotAllowedError') {
            djCommentary.textContent = "¡Necesito tu permiso! Haz clic en la pantalla para que el DJ empiece a sonar.";
            nowPlaying.textContent = "Error de reproducción automática.";
        } else {
            djCommentary.textContent = "¡Ups! El DJ se ha tropezado. Pasando a la siguiente canción...";
        }
        setTimeout(playNextDjSong, 3000);
    }
}

// Function to activate or deactivate the DJ artwork pulse animation
function toggleDjArtworkPulse(enable) {
    if (djArtwork) {
        djArtwork.style.animationPlayState = enable ? 'running' : 'paused';
    }
}

// Main function to toggle DJ mode
function toggleDjMode() {
    isDjModeActive = !isDjModeActive;

    if (isDjModeActive) {
        stopAllAudio(); // Pause any user audio currently playing
        djOverlay.classList.add('active');
        playNextDjSong();
        toggleDjArtworkPulse(true);
    } else {
        resetDjState();
        djOverlay.classList.remove('active');
    }
}

// Function to stop and reset the DJ
function resetDjState() {
    globalFeaturedAudioPlayer.pause();
    globalFeaturedAudioPlayer.currentTime = 0;
    clearTimeout(djCommentaryTimeoutId);
    djCommentary.textContent = "";
    nowPlaying.textContent = "";
    djArtwork.src = "assets/images/DJ.png"; // Default DJ artwork
    djArtwork.alt = "Artwork del DJ";
    currentDjSongIndex = -1;
    lastDjSongPlayed = null;
    toggleDjArtworkPulse(false);
}

// --- DOMContentLoaded Event Listener ---
document.addEventListener('DOMContentLoaded', () => {

    // Initial rendering of songs on the home page
    renderFullSongs();
    renderSelectionOptions('base');
    renderSelectionOptions('vocal');
    applyGlobalVolume(); // Apply initial volume on load

    // Global Volume Slider and Mute Button Listeners
    if (volumeSlider) {
        volumeSlider.addEventListener('input', applyGlobalVolume);
    }

    if (muteButton) {
        let previousGlobalVolume = volumeSlider ? volumeSlider.value : 100; // Store last volume before mute
        muteButton.addEventListener('click', () => {
            if (globalFeaturedAudioPlayer.volume > 0 || !globalFeaturedAudioPlayer.muted) {
                // Mute
                previousGlobalVolume = volumeSlider.value; // Save current volume
                volumeSlider.value = 0;
                applyGlobalVolume(); // Apply changes and update icon
                globalFeaturedAudioPlayer.muted = true; // Ensure the DJ player is muted
            } else {
                // Unmute
                volumeSlider.value = previousGlobalVolume > 0 ? previousGlobalVolume : 100; // Restore or default to 100
                applyGlobalVolume(); // Apply changes and update icon
                globalFeaturedAudioPlayer.muted = false; // Ensure the DJ player is unmuted
            }
        });
    }

    // Individual Volume Sliders for Final Mix
    if (baseVolumeSlider) {
        baseVolumeSlider.addEventListener('input', () => {
            if (finalBaseAudio) {
                finalBaseAudio.volume = (volumeSlider.value / 100) * (baseVolumeSlider.value / 100);
            }
        });
    }

    if (vocalVolumeSlider) {
        vocalVolumeSlider.addEventListener('input', () => {
            if (finalVocalAudio) {
                finalVocalAudio.volume = (volumeSlider.value / 100) * (vocalVolumeSlider.value / 100);
            }
        });
    }

    // --- Page Navigation Listeners ---
    if (createButton) {
        createButton.addEventListener('click', () => showPage(baseSelectionPage));
    }

    if (backFromBaseSelectionButton) {
        backFromBaseSelectionButton.addEventListener('click', () => {
            selectedBaseTrack = null;
            if (nextToVocalSelectionButton) nextToVocalSelectionButton.disabled = true;
            showPage(homePage);
        });
    }

    if (nextToVocalSelectionButton) {
        nextToVocalSelectionButton.addEventListener('click', () => showPage(vocalSelectionPage));
    }

    if (backToVocalSelectionButton) {
        backToVocalSelectionButton.addEventListener('click', () => {
            selectedVocalTrack = null;
            if (nextToMixResultButton) nextToMixResultButton.disabled = true;
            showPage(baseSelectionPage);
        });
    }

    if (nextToMixResultButton) {
        nextToMixResultButton.addEventListener('click', () => showPage(mixResultPage));
    }

    if (createNewMixButton) {
        createNewMixButton.addEventListener('click', () => {
            selectedBaseTrack = null;
            selectedVocalTrack = null;
            if (nextToVocalSelectionButton) nextToVocalSelectionButton.disabled = true;
            if (nextToMixResultButton) nextToMixResultButton.disabled = true;
            showPage(baseSelectionPage);
        });
    }

    if (backFromMixResultButton) {
        backFromMixResultButton.addEventListener('click', () => {
            selectedBaseTrack = null;
            selectedVocalTrack = null;
            if (nextToVocalSelectionButton) nextToVocalSelectionButton.disabled = true;
            if (nextToMixResultButton) nextToMixResultButton.disabled = true;
            showPage(homePage);
        });
    }

    // Listeners for full song playback on the homePage
    if (fullSongGrid) {
        fullSongGrid.addEventListener('click', async (event) => {
            const songItem = event.target.closest('.full-song-item');
            if (!songItem) return;

            const songId = songItem.dataset.songId;
            const clickedSong = songs.find(s => s.id === songId);
            if (!clickedSong) return;

            // Initialize currentPlayingSelectionAudio if it's null
            if (!currentPlayingSelectionAudio) {
                currentPlayingSelectionAudio = new Audio();
            }

            const playPauseIcon = songItem.querySelector('.play-pause-overlay .icon');

            if (currentPlayingSelectionAudio.src.includes(clickedSong.fullAudio) && !currentPlayingSelectionAudio.paused) {
                // If this song is already playing, pause it
                currentPlayingSelectionAudio.pause();
                if (playPauseIcon) playPauseIcon.textContent = '▶';
                songItem.classList.remove('playing');
            } else {
                // Stop any other previously playing individual audio
                if (!currentPlayingSelectionAudio.paused) {
                    currentPlayingSelectionAudio.pause();
                    currentPlayingSelectionAudio.currentTime = 0;
                }

                // Reset icons of all songs to play
                document.querySelectorAll('.full-song-item.playing').forEach(item => {
                    item.classList.remove('playing');
                    const icon = item.querySelector('.play-pause-overlay .icon');
                    if (icon) icon.textContent = '▶';
                });

                // Play the clicked song
                currentPlayingSelectionAudio.src = clickedSong.fullAudio;
                currentPlayingSelectionAudio.volume = volumeSlider.value / 100;
                currentPlayingSelectionAudio.muted = false; // Ensure it's not muted
                currentPlayingSelectionAudio.loop = false; // Play once

                try {
                    await currentPlayingSelectionAudio.play();
                    if (playPauseIcon) playPauseIcon.textContent = '⏸';
                    songItem.classList.add('playing');
                    console.log(`Reproduciendo canción completa: ${clickedSong.title}`);
                } catch (e) {
                    console.error("Error reproduciendo canción completa:", e);
                    if (playPauseIcon) playPauseIcon.textContent = '▶';
                    songItem.classList.remove('playing');
                }
            }
        });

        // Event listener for when a full song finishes playing
        if (currentPlayingSelectionAudio) {
            currentPlayingSelectionAudio.onended = () => {
                document.querySelectorAll('.full-song-item.playing').forEach(item => {
                    item.classList.remove('playing');
                    const icon = item.querySelector('.play-pause-overlay .icon');
                    if (icon) icon.textContent = '▶';
                });
            };
        }
    }


    // Listeners for base and vocal selection (with click playback)
    if (baseTrackSelectionGrid) {
        baseTrackSelectionGrid.addEventListener('click', async (event) => {
            const songOption = event.target.closest('.song-option');
            if (!songOption) return;

            const songId = songOption.dataset.songId;
            const clickedTrack = songs.find(s => s.id === songId);
            if (!clickedTrack) return;

            // Pause the random background audio for the base page
            baseSelectionPageAudio.pause();
            baseSelectionPageAudio.currentTime = 0;
            baseSelectionPageAudio.src = ''; // Clear source

            if (!currentPlayingSelectionAudio) {
                currentPlayingSelectionAudio = new Audio();
            }

            const playButtonIcon = songOption.querySelector('.fa-play, .fa-pause');

            if (currentPlayingSelectionAudio.src.includes(clickedTrack.baseAudio) && !currentPlayingSelectionAudio.paused) {
                // If this track is already playing, pause it
                currentPlayingSelectionAudio.pause();
                currentPlayingSelectionAudio.currentTime = 0;
                if (playButtonIcon) playButtonIcon.classList.replace('fa-pause', 'fa-play');
            } else {
                // Stop any other currently playing individual audio
                if (!currentPlayingSelectionAudio.paused) {
                    currentPlayingSelectionAudio.pause();
                    currentPlayingSelectionAudio.currentTime = 0;
                }

                // Reset all play/pause icons in the grid
                baseTrackSelectionGrid.querySelectorAll('.song-option .fa-pause').forEach(icon => {
                    icon.classList.replace('fa-pause', 'fa-play');
                });

                // Play the clicked base track
                currentPlayingSelectionAudio.src = clickedTrack.baseAudio;
                currentPlayingSelectionAudio.volume = volumeSlider.value / 100;
                currentPlayingSelectionAudio.muted = false;
                currentPlayingSelectionAudio.loop = true; // Loop preview

                try {
                    await new Promise((resolve, reject) => {
                        currentPlayingSelectionAudio.onloadedmetadata = () => resolve();
                        currentPlayingSelectionAudio.onerror = () => reject(new Error(`Error al cargar metadatos de ${clickedTrack.baseAudio}.`));
                        currentPlayingSelectionAudio.load();
                    });
                    currentPlayingSelectionAudio.currentTime = getRandomMiddleTime(currentPlayingSelectionAudio);
                    await currentPlayingSelectionAudio.play();
                    if (playButtonIcon) playButtonIcon.classList.replace('fa-play', 'fa-pause');
                    console.log(`Reproduciendo base individual: ${clickedTrack.title}`);
                } catch (e) {
                    console.error("Error reproduciendo base individual:", e);
                    if (playButtonIcon) playButtonIcon.classList.replace('fa-pause', 'fa-play');
                }
            }

            baseTrackSelectionGrid.querySelectorAll('.song-option').forEach(option => {
                option.classList.remove('selected');
            });
            songOption.classList.add('selected');
            selectedBaseTrack = clickedTrack;
            if (nextToVocalSelectionButton) nextToVocalSelectionButton.disabled = false;
        });
    }

    if (vocalTrackSelectionGrid) {
        vocalTrackSelectionGrid.addEventListener('click', async (event) => {
            const songOption = event.target.closest('.song-option');
            if (!songOption) return;

            const songId = songOption.dataset.songId;
            const clickedTrack = songs.find(s => s.id === songId);
            if (!clickedTrack) return;

            // Pause the random background audio for the vocal page
            vocalSelectionPageAudio.pause();
            vocalSelectionPageAudio.currentTime = 0;
            vocalSelectionPageAudio.src = ''; // Clear source

            if (!currentPlayingSelectionAudio) {
                currentPlayingSelectionAudio = new Audio();
            }

            const playButtonIcon = songOption.querySelector('.fa-play, .fa-pause');

            if (currentPlayingSelectionAudio.src.includes(clickedTrack.vocalAudio) && !currentPlayingSelectionAudio.paused) {
                // If this track is already playing, pause it
                currentPlayingSelectionAudio.pause();
                currentPlayingSelectionAudio.currentTime = 0;
                if (playButtonIcon) playButtonIcon.classList.replace('fa-pause', 'fa-play');
            } else {
                // Stop any other currently playing individual audio
                if (!currentPlayingSelectionAudio.paused) {
                    currentPlayingSelectionAudio.pause();
                    currentPlayingSelectionAudio.currentTime = 0;
                }

                // Reset all play/pause icons in the grid
                vocalTrackSelectionGrid.querySelectorAll('.song-option .fa-pause').forEach(icon => {
                    icon.classList.replace('fa-pause', 'fa-play');
                });

                // Play the clicked vocal track
                currentPlayingSelectionAudio.src = clickedTrack.vocalAudio;
                currentPlayingSelectionAudio.volume = volumeSlider.value / 100;
                currentPlayingSelectionAudio.muted = false;
                currentPlayingSelectionAudio.loop = true; // Loop preview

                try {
                    await new Promise((resolve, reject) => {
                        currentPlayingSelectionAudio.onloadedmetadata = () => resolve();
                        currentPlayingSelectionAudio.onerror = () => reject(new Error(`Error al cargar metadatos de ${clickedTrack.vocalAudio}.`));
                        currentPlayingSelectionAudio.load();
                    });
                    currentPlayingSelectionAudio.currentTime = getRandomMiddleTime(currentPlayingSelectionAudio);
                    await currentPlayingSelectionAudio.play();
                    if (playButtonIcon) playButtonIcon.classList.replace('fa-play', 'fa-pause');
                    console.log(`Reproduciendo vocal individual: ${clickedTrack.title}`);
                } catch (e) {
                    console.error("Error reproduciendo vocal individual:", e);
                    if (playButtonIcon) playButtonIcon.classList.replace('fa-pause', 'fa-play');
                }
            }

            vocalTrackSelectionGrid.querySelectorAll('.song-option').forEach(option => {
                option.classList.remove('selected');
            });
            songOption.classList.add('selected');
            selectedVocalTrack = clickedTrack;
            if (nextToMixResultButton) nextToMixResultButton.disabled = false;
        });
    }

    // --- DJ Mode Event Listeners ---
    if (djModeButton) {
        djModeButton.addEventListener('click', toggleDjMode);
    }

    if (djCloseButton) {
        djCloseButton.addEventListener('click', toggleDjMode);
    }

}); // End of DOMContentLoaded
