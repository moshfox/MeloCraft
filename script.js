// script.js

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
        vocalAudio: 'assets/audio/vocals/Claro-vocal.mp3', // Verificado que terminaba en .mp3
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
        vocalAudio: 'assets/audio/vocals/Sinrollo-vocal.mp3', // Verificado que terminaba en .mp3
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

// Elementos del reproductor de mezcla final
const finalMixedTrackPlayerControls = document.getElementById('finalMixedTrackPlayerControls'); // Contenedor de controles
const playPauseMixButton = document.getElementById('playPauseMixButton'); // Nuevo botón de play/pause para la mezcla final
const finalBaseArtwork = document.getElementById('finalBaseArtwork');
const finalBaseTitle = document.getElementById('finalBaseTitle');
const finalVocalArtwork = document.getElementById('finalVocalArtwork');
const finalVocalTitle = document.getElementById('finalVocalTitle');

const volumeSlider = document.getElementById('volumeSlider');
const muteButton = document.getElementById('muteButton');

// Sliders de volumen individuales en la mezcla final
const baseVolumeSlider = document.getElementById('baseVolumeSlider');
const vocalVolumeSlider = document.getElementById('vocalVolumeSlider');

const globalFeaturedAudioPlayer = document.getElementById('globalFeaturedAudioPlayer');

let baseSelectionPageAudio = new Audio(); // Audio para la reproducción aleatoria en la página de selección de bases
let vocalSelectionPageAudio = new Audio(); // Audio para la reproducción aleatoria en la página de selección de voces

let currentPlayingSelectionAudio = null; // Para la reproducción individual al hacer clic en un item (sea full, base o vocal)

let finalBaseAudio = new Audio(); // Instancia de Audio para la pista base en la mezcla final
let finalVocalAudio = new Audio(); // Instancia de Audio para la pista vocal en la mezcla final

let selectedBaseTrack = null;
let selectedVocalTrack = null;

// Elementos para la barra de progreso personalizada
const seekSlider = document.getElementById('seekSlider');
const currentTimeDisplay = document.getElementById('currentTime');
const durationTimeDisplay = document.getElementById('durationTime');


function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
}

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
        if (player instanceof Audio && !player.paused) { // Verificar si es una instancia de Audio y está reproduciendo
            player.pause();
            player.currentTime = 0;
            // Para reproductores que no sean el maestro principal de la página,
            // limpiamos su src para asegurar que no haya conflictos.
            if (player !== globalFeaturedAudioPlayer) { // Removed finalMixedTrackPlayer as it's not an Audio object anymore
                player.src = '';
                player.load(); // Carga de nuevo para resetear completamente
            }
        }
    });

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
        if (icon) icon.textContent = '▶';
    });

    document.querySelectorAll('.song-option .fa-pause').forEach(icon => {
        icon.classList.replace('fa-pause', 'fa-play');
    });

    // Resetear el botón de play/pause de la mezcla final
    if (playPauseMixButton) {
        playPauseMixButton.innerHTML = '<i class="fas fa-play"></i>';
    }
}


function applyGlobalVolume() {
    const newGlobalVolume = volumeSlider.value / 100;

    [globalFeaturedAudioPlayer, baseSelectionPageAudio, vocalSelectionPageAudio].forEach(player => {
        if (player) {
            // Si el volumen global se sube de 0, y el reproductor destacado está muteado, lo desmuteamos
            if (player === globalFeaturedAudioPlayer && newGlobalVolume > 0 && player.muted && !player.paused) {
                player.muted = false;
            }
            player.volume = newGlobalVolume;
        }
    });

    // currentPlayingSelectionAudio debe actualizar su volumen también
    if (currentPlayingSelectionAudio) {
        currentPlayingSelectionAudio.volume = newGlobalVolume;
        // Si el volumen se sube de 0 y estaba muteado, lo desmutea
        if (newGlobalVolume > 0 && currentPlayingSelectionAudio.muted && !currentPlayingSelectionAudio.paused) {
            currentPlayingSelectionAudio.muted = false;
        }
    }

    // Asegurarse de que los audios de la mezcla final también ajusten su volumen si están cargados
    // Se aplica el volumen global al máximo posible de los sliders individuales (100)
    finalBaseAudio.volume = newGlobalVolume * (baseVolumeSlider ? baseVolumeSlider.value / 100 : 1);
    finalVocalAudio.volume = newGlobalVolume * (vocalVolumeSlider ? vocalVolumeSlider.value / 100 : 1);


    if (newGlobalVolume === 0) {
        muteButton.classList.remove('fa-volume-up');
        muteButton.classList.add('fa-volume-mute');
    } else {
        muteButton.classList.remove('fa-volume-mute');
        muteButton.classList.add('fa-volume-up');
    }
}

/**
 * Esta función ya no se llama automáticamente al cargar la home,
 * el audio se activará solo con la interacción del usuario al hacer clic en una canción.
 */
async function playRandomFeaturedSong() {
    // Este reproductor se usará para el audio de fondo *silenciado* si se quiere
    // Aunque la estrategia ahora es que el usuario interactúe para escuchar.
    // Lo mantenemos para el caso de que la política de autoplay lo permita,
    // pero siempre muteado hasta la interacción.
    globalFeaturedAudioPlayer.pause();
    globalFeaturedAudioPlayer.currentTime = 0;
    globalFeaturedAudioPlayer.src = '';

    const randomIndex = Math.floor(Math.random() * songs.length);
    const randomSong = songs[randomIndex];

    globalFeaturedAudioPlayer.src = randomSong.fullAudio;
    globalFeaturedAudioPlayer.muted = true; // Se mantiene muteado por autoplay, el usuario lo desmuteará al interactuar
    globalFeaturedAudioPlayer.volume = volumeSlider.value / 100;
    globalFeaturedAudioPlayer.loop = true;

    try {
        await globalFeaturedAudioPlayer.play();
        console.log("Reproduciendo canción destacada aleatoria (silenciada).");

        document.querySelectorAll('.full-song-item.playing').forEach(item => {
            item.classList.remove('playing');
            const icon = item.querySelector('.play-pause-overlay .icon');
            if (icon) icon.textContent = '▶';
        });
    } catch (e) {
        console.warn("Autoplay de canción destacada bloqueado o fallido (esperado si no hay interacción):", e);
    }
}


/**
 * Reproduce una pista de selección (base o vocal) aleatoria.
 * @param {string} type - 'base' o 'vocal'.
 */
async function playRandomSelectionTrack(type) {
    stopAllAudio(); // Detiene cualquier audio en curso

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
        selectionButton.disabled = false;
    }
}


/** Updates the progress bar and time displays. */
function updateProgressBar() {
    if (finalBaseAudio && !isNaN(finalBaseAudio.duration) && isFinite(finalBaseAudio.duration)) {
        const currentTime = finalBaseAudio.currentTime;
        const duration = Math.max(finalBaseAudio.duration, finalVocalAudio.duration || 0); // Use max duration for display

        if (seekSlider) {
            seekSlider.value = currentTime;
            seekSlider.max = duration; // Ensure max is set correctly
            // Update the filled portion of the slider for better visual
            const progress = (currentTime / duration) * 100;
            seekSlider.style.background = `linear-gradient(to right, #6A0DAD ${progress}%, #555 ${progress}%)`;
        }
        if (currentTimeDisplay) currentTimeDisplay.textContent = formatTime(currentTime);
        if (durationTimeDisplay) durationTimeDisplay.textContent = formatTime(duration);
    } else {
        // Reset if audio is not ready
        if (seekSlider) seekSlider.value = 0;
        if (currentTimeDisplay) currentTimeDisplay.textContent = '0:00';
        if (durationTimeDisplay) durationTimeDisplay.textContent = '0:00';
        if (seekSlider) seekSlider.style.background = `linear-gradient(to right, #6A0DAD 0%, #555 0%)`;
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
    // Esperar a que ambos carguen para asegurar que la duración sea precisa.
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
        showPage(homePage); // O volver a la página de selección
        return; // Detener la ejecución si hay un error
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
        updateProgressBar();
    };

    if (seekSlider) {
        let isDragging = false; // Flag to indicate if the slider is being dragged

        seekSlider.oninput = () => {
            // Update current time display visually as user drags
            if (currentTimeDisplay) currentTimeDisplay.textContent = formatTime(seekSlider.value);
            // Update the filled portion of the slider during drag
            const progress = (seekSlider.value / seekSlider.max) * 100;
            seekSlider.style.background = `linear-gradient(to right, #6A0DAD ${progress}%, #555 ${progress}%)`;
        };

        seekSlider.onmousedown = () => { isDragging = true; };
        seekSlider.onmouseup = () => {
            isDragging = false;
            // When mouse is released, apply the new time to both audios
            const newTime = seekSlider.value;
            finalBaseAudio.currentTime = newTime;
            finalVocalAudio.currentTime = newTime;
            console.log(`Seeked to: ${formatTime(newTime)}`);
        };
    }

    // Eventos de control de reproducción:
    finalBaseAudio.onplay = () => {
        finalVocalAudio.play().catch(e => console.error("Error reproduciendo vocal:", e));
        if (playPauseMixButton) playPauseMixButton.innerHTML = '<i class="fas fa-pause"></i>';
        console.log("Mezcla reproduciendo.");
    };

    finalBaseAudio.onpause = () => {
        finalVocalAudio.pause();
        if (playPauseMixButton) playPauseMixButton.innerHTML = '<i class="fas fa-play"></i>';
        console.log("Mezcla pausada.");
    };

    finalBaseAudio.onseeking = () => {
        finalVocalAudio.currentTime = finalBaseAudio.currentTime;
    };
    finalBaseAudio.onseeked = () => {
        finalVocalAudio.currentTime = finalBaseAudio.currentTime;
    };

    finalBaseAudio.onended = () => {
        stopAllAudio(); // Detener todo cuando la mezcla finaliza
        console.log("Mezcla finalizada.");
    };

    // Event listener for the play/pause button for the final mix
    if (playPauseMixButton) {
        playPauseMixButton.addEventListener('click', () => {
            if (finalBaseAudio.paused) {
                finalBaseAudio.play().catch(e => console.error("Error al intentar reproducir la mezcla:", e));
            } else {
                finalBaseAudio.pause();
            }
        });
    }

    // Intentar reproducir la mezcla automáticamente
    try {
        await finalBaseAudio.play();
        console.log("Autoplay de mezcla final iniciado.");
    } catch (e) {
        console.warn("Autoplay de mezcla final bloqueado o fallido:", e);
        finalBaseAudio.pause();
        finalVocalAudio.pause();
    }
    updateProgressBar(); // Initial update
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
 * Calcula un tiempo de inicio aleatorio dentro del "medio" (30%-70%) de la duración del audio.
 * @param {HTMLAudioElement} audioPlayer - El objeto Audio HTML.
 * @returns {number} El tiempo en segundos para iniciar la reproducción.
 */
function getRandomMiddleTime(audioPlayer) {
    if (!audioPlayer || isNaN(audioPlayer.duration) || audioPlayer.duration === 0 || audioPlayer.duration === Infinity) {
        console.warn("Duración del audio no disponible o inválida, iniciando desde 0.");
        return 0;
    }

    const duration = audioPlayer.duration;
    const startMiddle = duration * 0.3;
    const endMiddle = duration * 0.7;

    if (endMiddle <= startMiddle) {
        return 0;
    }

    return Math.random() * (endMiddle - startMiddle) + startMiddle;
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

    const shuffledSongs = shuffleArray(songs);

    if (type === 'base') {
        targetGrid = baseTrackSelectionGrid;
        tracks = shuffledSongs.map(s => ({ id: s.id, title: s.title, artist: s.artist, image: s.image, audio: s.baseAudio }));
    } else { // type === 'vocal'
        targetGrid = vocalTrackSelectionGrid;
        tracks = shuffledSongs.map(s => ({ id: s.id, title: s.title, artist: s.artist, image: s.image, audio: s.vocalAudio }));
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
    stopAllAudio(); // Detiene todos los audios al cambiar de página

    // Resetea visualmente todos los iconos de play/pause en la home
    document.querySelectorAll('.full-song-item.playing').forEach(item => {
        item.classList.remove('playing');
        const icon = item.querySelector('.play-pause-overlay .icon');
        if (icon) icon.textContent = '▶';
    });

    const pages = [homePage, baseSelectionPage, vocalSelectionPage, mixResultPage];
    pages.forEach(page => {
        page.classList.remove('active');
        page.classList.add('hidden');
    });
    pageToShow.classList.add('active');
    pageToShow.classList.remove('hidden');

    // Inicia la reproducción de fondo para la nueva página si aplica
    if (pageToShow === baseSelectionPage) {
        playRandomSelectionTrack('base');
    } else if (pageToShow === vocalSelectionPage) {
        playRandomSelectionTrack('vocal');
    } else if (pageToShow === mixResultPage) {
        setupAndPlayFinalMix();
    }
}


document.addEventListener('DOMContentLoaded', () => {
    renderFullSongs();
    renderSelectionOptions('base');
    renderSelectionOptions('vocal');

    applyGlobalVolume(); // Aplica el volumen inicial al cargar

    if (volumeSlider) {
        volumeSlider.addEventListener('input', applyGlobalVolume);
    }

    let previousGlobalVolume = 100;
    if (muteButton) {
        muteButton.addEventListener('click', () => {
            if (volumeSlider.value > 0) {
                previousGlobalVolume = volumeSlider.value;
                volumeSlider.value = 0;

                if (globalFeaturedAudioPlayer && !globalFeaturedAudioPlayer.paused) {
                    globalFeaturedAudioPlayer.muted = true;
                }
            } else {
                volumeSlider.value = previousGlobalVolume;

                if (globalFeaturedAudioPlayer && globalFeaturedAudioPlayer.muted) {
                    globalFeaturedAudioPlayer.muted = false;
                }
            }
            applyGlobalVolume();
        });
    }

    // Event listeners para los sliders de volumen individuales de la mezcla final
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

    if (createButton) { createButton.addEventListener('click', () => showPage(baseSelectionPage)); }

    if (backFromBaseSelectionButton) {
        backFromBaseSelectionButton.addEventListener('click', () => {
            selectedBaseTrack = null;
            if (nextToVocalSelectionButton) nextToVocalSelectionButton.disabled = true;
            showPage(homePage);
        });
    }

    if (nextToVocalSelectionButton) {
        nextToVocalSelectionButton.addEventListener('click', () => {
            if (selectedBaseTrack) showPage(vocalSelectionPage);
            else alert("Por favor, selecciona una base primero.");
        });
    }

    if (backToVocalSelectionButton) {
        backToVocalSelectionButton.addEventListener('click', () => {
            selectedVocalTrack = null;
            if (nextToMixResultButton) nextToMixResultButton.disabled = true;
            showPage(baseSelectionPage);
        });
    }

    if (nextToMixResultButton) {
        nextToMixResultButton.addEventListener('click', () => {
            if (selectedVocalTrack) showPage(mixResultPage);
            else alert("Por favor, selecciona una voz primero.");
        });
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


    // Listeners para la reproducción de canciones completas en la homePage
    if (fullSongGrid) {
        fullSongGrid.addEventListener('click', async (event) => {
            const songItem = event.target.closest('.full-song-item');
            if (!songItem) return;

            const songId = songItem.dataset.songId;
            const clickedSong = songs.find(s => s.id === songId);
            if (!clickedSong) return;

            const playPauseIcon = songItem.querySelector('.play-pause-overlay .icon');

            // Pausar el globalFeaturedAudioPlayer si está activo (la canción de fondo silenciada)
            if (globalFeaturedAudioPlayer && !globalFeaturedAudioPlayer.paused) {
                globalFeaturedAudioPlayer.pause();
                globalFeaturedAudioPlayer.currentTime = 0;
                globalFeaturedAudioPlayer.src = '';
            }

            // Si hay un audio de selección individual reproduciéndose, páusalo.
            if (currentPlayingSelectionAudio && !currentPlayingSelectionAudio.paused) {
                currentPlayingSelectionAudio.pause();
                currentPlayingSelectionAudio.currentTime = 0;
            }

            // Si la misma canción ya está reproduciéndose, la pausamos.
            if (songItem.classList.contains('playing')) {
                currentPlayingSelectionAudio.pause();
                currentPlayingSelectionAudio.currentTime = 0; // Reset for next play
                songItem.classList.remove('playing');
                if (playPauseIcon) playPauseIcon.textContent = '▶';
            } else {
                // Pausar cualquier otra canción que se esté reproduciendo en la home grid.
                document.querySelectorAll('.full-song-item.playing').forEach(item => {
                    item.classList.remove('playing');
                    const icon = item.querySelector('.play-pause-overlay .icon');
                    if (icon) icon.textContent = '▶';
                });

                // Crear un nuevo Audio o reusar si no hay uno, y reproducir.
                if (!currentPlayingSelectionAudio) {
                    currentPlayingSelectionAudio = new Audio();
                }
                currentPlayingSelectionAudio.src = clickedSong.fullAudio;
                currentPlayingSelectionAudio.volume = volumeSlider.value / 100;
                currentPlayingSelectionAudio.muted = false; // Asegurarse de que no esté silenciado

                try {
                    await currentPlayingSelectionAudio.play();
                    songItem.classList.add('playing');
                    if (playPauseIcon) playPauseIcon.textContent = '❚❚'; // Change to pause icon
                } catch (e) {
                    console.warn("Autoplay de canción completa bloqueado o fallido:", e);
                    songItem.classList.remove('playing');
                    if (playPauseIcon) playPauseIcon.textContent = '▶';
                }
            }
        });
    }


    // Listeners para la selección de bases y voces
    [baseTrackSelectionGrid, vocalTrackSelectionGrid].forEach(grid => {
        if (grid) {
            grid.addEventListener('click', async (event) => {
                const songOption = event.target.closest('.song-option');
                if (!songOption) return;

                const trackId = songOption.dataset.songId;
                const trackType = songOption.dataset.trackType;
                const clickedSong = songs.find(s => s.id === trackId);
                if (!clickedSong) return;

                const playButton = songOption.querySelector('.play-button i');

                // Detener cualquier audio de selección que se esté reproduciendo en esta página
                let currentPlayer = (trackType === 'base') ? baseSelectionPageAudio : vocalSelectionPageAudio;
                let otherPlayer = (trackType === 'base') ? vocalSelectionPageAudio : baseSelectionPageAudio;


                // Si el mismo audio ya está reproduciéndose, pausarlo
                if (songOption.classList.contains('selected') && !currentPlayer.paused && currentPlayer.src.includes(clickedSong[trackType + 'Audio'])) {
                    currentPlayer.pause();
                    currentPlayer.currentTime = 0;
                    songOption.classList.remove('selected');
                    if (playButton) playButton.classList.replace('fa-pause', 'fa-play');
                    // Deshabilitar botón Siguiente si no hay nada seleccionado
                    if (trackType === 'base') {
                        selectedBaseTrack = null;
                        if (nextToVocalSelectionButton) nextToVocalSelectionButton.disabled = true;
                    } else {
                        selectedVocalTrack = null;
                        if (nextToMixResultButton) nextToMixResultButton.disabled = true;
                    }
                    return; // Salir de la función
                }

                // Pausar el audio actualmente reproduciéndose en esta página de selección
                if (!currentPlayer.paused) {
                    currentPlayer.pause();
                    currentPlayer.currentTime = 0;
                }
                // Asegurarse de que el otro reproductor de selección también esté parado
                if (!otherPlayer.paused) {
                    otherPlayer.pause();
                    otherPlayer.currentTime = 0;
                }
                // Si el currentPlayingSelectionAudio (de la home) está activo, pararlo también
                if (currentPlayingSelectionAudio && !currentPlayingSelectionAudio.paused) {
                    currentPlayingSelectionAudio.pause();
                    currentPlayingSelectionAudio.currentTime = 0;
                }


                // Eliminar la clase 'selected' de todas las opciones en esta grid
                grid.querySelectorAll('.song-option').forEach(option => {
                    option.classList.remove('selected');
                    const icon = option.querySelector('.play-button i');
                    if (icon) icon.classList.replace('fa-pause', 'fa-play');
                });

                // Asignar el audio y reproducir
                currentPlayer.src = clickedSong[trackType + 'Audio'];
                currentPlayer.volume = volumeSlider.value / 100;
                currentPlayer.loop = true;
                currentPlayer.muted = false; // Asegurarse de que no esté silenciado

                try {
                    await currentPlayer.play();
                    songOption.classList.add('selected');
                    if (playButton) playButton.classList.replace('fa-play', 'fa-pause');

                    // Almacenar la canción seleccionada
                    if (trackType === 'base') {
                        selectedBaseTrack = clickedSong;
                        if (nextToVocalSelectionButton) nextToVocalSelectionButton.disabled = false;
                    } else {
                        selectedVocalTrack = clickedSong;
                        if (nextToMixResultButton) nextToMixResultButton.disabled = false;
                    }
                } catch (e) {
                    console.warn(`Autoplay de ${trackType} bloqueado o fallido:`, e);
                    songOption.classList.remove('selected');
                    if (playButton) playButton.classList.replace('fa-pause', 'fa-play');
                    // Deshabilitar botón Siguiente si falla la reproducción
                    if (trackType === 'base') {
                        selectedBaseTrack = null;
                        if (nextToVocalSelectionButton) nextToVocalSelectionButton.disabled = true;
                    } else {
                        selectedVocalTrack = null;
                        if (nextToMixResultButton) nextToMixResultButton.disabled = true;
                    }
                }
            });
        }
    });

    // Asegurarse de que los botones de "Siguiente" estén deshabilitados al cargar
    if (nextToVocalSelectionButton) nextToVocalSelectionButton.disabled = true;
    if (nextToMixResultButton) nextToMixResultButton.disabled = true;

    // Inicializar la página de inicio
    showPage(homePage);
});
