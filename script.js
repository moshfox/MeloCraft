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
            if (player !== globalFeaturedAudioPlayer && player !== finalMixedTrackPlayer) {
                player.src = '';
                player.load(); // Carga de nuevo para resetear completamente
            }
        }
    });

    // Manejo específico para finalMixedTrackPlayer, ya que puede ser el elemento de la UI
    if (finalMixedTrackPlayer && !finalMixedTrackPlayer.paused) {
        finalMixedTrackPlayer.pause();
        finalMixedTrackPlayer.currentTime = 0;
        // Limpiar SRC si es necesario, y remover listeners para evitar fugas de memoria
        finalMixedTrackPlayer.onplay = null;
        finalMixedTrackPlayer.onpause = null;
        finalMixedTrackPlayer.onseeking = null;
        finalMixedTrackPlayer.onseeked = null;
        finalMixedTrackPlayer.onended = null;
        finalMixedTrackPlayer.src = ''; // Limpiar la fuente
        finalMixedTrackPlayer.load(); // Cargar para aplicar el src vacío
    }


    // Resetear elementos de la barra de progreso personalizada
    if (seekSlider) { // Añadida verificación null
        seekSlider.value = 0;
    }
    if (currentTimeDisplay) { // Añadida verificación null
        currentTimeDisplay.textContent = '0:00';
    }
    if (durationTimeDisplay) { // Añadida verificación null
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
    if (finalBaseAudio && !finalBaseAudio.paused) { // Solo si están cargados y posiblemente reproduciéndose
        finalBaseAudio.volume = newGlobalVolume * (baseVolumeSlider.value / 100);
    }
    if (finalVocalAudio && !finalVocalAudio.paused) { // Solo si están cargados y posiblemente reproduciéndose
        finalVocalAudio.volume = newGlobalVolume * (vocalVolumeSlider.value / 100);
    }

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
    // Esto asegura que los sliders de la mezcla final estén en su estado inicial (100%)
    if (baseVolumeSlider) baseVolumeSlider.value = 100; // Verificar null
    if (vocalVolumeSlider) vocalVolumeSlider.value = 100; // Verificar null
    applyGlobalVolume(); // Aplica el volumen global y el de los sliders individuales

    // Actualizar la información visual de las carátulas y títulos
    if (finalBaseArtwork) finalBaseArtwork.src = selectedBaseTrack.image;
    if (finalBaseTitle) finalBaseTitle.textContent = selectedBaseTrack.title;
    if (finalVocalArtwork) finalVocalArtwork.src = selectedVocalTrack.image;
    if (finalVocalTitle) finalVocalTitle.textContent = selectedVocalTrack.title;

    // Configurar el finalMixedTrackPlayer como el "maestro" para la barra de progreso
    // Usamos la duración más larga entre base y vocal como referencia para el seekSlider
    const masterDuration = Math.max(finalBaseAudio.duration, finalVocalAudio.duration);
    if (seekSlider) seekSlider.max = masterDuration;
    if (durationTimeDisplay) durationTimeDisplay.textContent = formatTime(masterDuration);


    // Sincronizar la barra de progreso con el audio "maestro"
    // Usaremos el finalBaseAudio para manejar el timeupdate principal
    finalBaseAudio.ontimeupdate = () => {
        if (!seekSlider.dragging) {
            if (seekSlider) seekSlider.value = finalBaseAudio.currentTime;
        }
        if (currentTimeDisplay) currentTimeDisplay.textContent = formatTime(finalBaseAudio.currentTime);
    };

    if (seekSlider) { // Asegurarse de que seekSlider existe
        seekSlider.oninput = () => {
            // Al arrastrar el slider, actualizamos el currentTime de ambos audios
            const newTime = seekSlider.value;
            finalBaseAudio.currentTime = newTime;
            finalVocalAudio.currentTime = newTime;
        };

        seekSlider.onmousedown = () => { seekSlider.dragging = true; };
        seekSlider.onmouseup = () => { seekSlider.dragging = false; };
    }


    // Eventos de control de reproducción:
    // Estos eventos ahora se asocian al finalBaseAudio, ya que es nuestro "maestro"
    finalBaseAudio.onplay = () => {
        // Cuando el maestro se reproduce, reproducimos los esclavos
        // finalMixedTrackPlayer no se usa para reproducir, solo para UI si se desea
        finalVocalAudio.play().catch(e => console.error("Error reproduciendo vocal:", e));
        console.log("Mezcla reproduciendo.");
    };

    finalBaseAudio.onpause = () => {
        // Cuando el maestro se pausa, pausamos los esclavos
        finalVocalAudio.pause();
        console.log("Mezcla pausada.");
    };

    finalBaseAudio.onseeking = () => {
        // Cuando el maestro se "seekea", sincronizamos los esclavos
        finalVocalAudio.currentTime = finalBaseAudio.currentTime;
    };
    finalBaseAudio.onseeked = () => {
        // Después de "seekear", nos aseguramos que estén en el mismo punto
        finalVocalAudio.currentTime = finalBaseAudio.currentTime;
    };

    finalBaseAudio.onended = () => {
        stopAllAudio(); // Detener todo cuando la mezcla finaliza
        console.log("Mezcla finalizada.");
    };


    // Intentar reproducir la mezcla automáticamente
    try {
        // Se reproduce el base y el vocal lo seguirá.
        // finalMixedTrackPlayer (el HTML audio tag) no es necesario para reproducir el audio en sí,
        // pero podría usarse para activar su propio play/pause UI. Aquí lo estamos omitiendo
        // y confiando en el finalBaseAudio para controlar el flujo.
        await finalBaseAudio.play();
        console.log("Autoplay de mezcla final iniciado.");
    } catch (e) {
        console.warn("Autoplay de mezcla final bloqueado o fallido:", e);
        // Si el autoplay falla, pausamos explícitamente los audios por si acaso
        finalBaseAudio.pause();
        finalVocalAudio.pause();
    }
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
    // En homePage, ya no se reproduce un audio de fondo por defecto (se espera la interacción).
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

    if (volumeSlider) { // Verifica si el slider de volumen existe
        volumeSlider.addEventListener('input', applyGlobalVolume);
    }

    let previousGlobalVolume = 100;
    if (muteButton) { // Verifica si el botón de mute existe
        muteButton.addEventListener('click', () => {
            if (volumeSlider.value > 0) {
                previousGlobalVolume = volumeSlider.value;
                volumeSlider.value = 0;

                // Asegurarse de mutear el reproductor global destacado si está activo
                if (globalFeaturedAudioPlayer && !globalFeaturedAudioPlayer.paused) {
                    globalFeaturedAudioPlayer.muted = true;
                }
            } else {
                volumeSlider.value = previousGlobalVolume;

                // Asegurarse de desmutear el reproductor global destacado si estaba muteado
                if (globalFeaturedAudioPlayer && globalFeaturedAudioPlayer.muted) {
                    globalFeaturedAudioPlayer.muted = false;
                }
            }
            applyGlobalVolume();
        });
    }

    // Event listeners para los sliders de volumen individuales de la mezcla final
    if (baseVolumeSlider) { // Verifica si el slider existe
        baseVolumeSlider.addEventListener('input', () => {
            if (finalBaseAudio) {
                // El volumen final es el volumen global multiplicado por el volumen individual
                finalBaseAudio.volume = (volumeSlider.value / 100) * (baseVolumeSlider.value / 100);
            }
        });
    }

    if (vocalVolumeSlider) { // Verifica si el slider existe
        vocalVolumeSlider.addEventListener('input', () => {
            if (finalVocalAudio) {
                // El volumen final es el volumen global multiplicado por el volumen individual
                finalVocalAudio.volume = (volumeSlider.value / 100) * (vocalVolumeSlider.value / 100);
            }
        });
    }

    // YA NO SE LLAMA playRandomFeaturedSong() AQUÍ AL INICIO.
    // La reproducción en la homePage ahora se activa al hacer clic en las canciones.

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
    if (fullSongGrid) { // Verificar si la grid existe
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

            // Inicializar currentPlayingSelectionAudio si es null
            if (!currentPlayingSelectionAudio) {
                currentPlayingSelectionAudio = new Audio();
            }

            if (currentPlayingSelectionAudio.src.includes(clickedSong.fullAudio) && !currentPlayingSelectionAudio.paused) {
                // Si ya estaba reproduciendo esta misma canción y está sonando, pausarla
                currentPlayingSelectionAudio.pause();
                if (playPauseIcon) playPauseIcon.textContent = '▶';
                songItem.classList.remove('playing');
            } else {
                // Detener cualquier otra reproducción individual previa
                if (!currentPlayingSelectionAudio.paused) {
                    currentPlayingSelectionAudio.pause();
                    currentPlayingSelectionAudio.currentTime = 0;
                    // Resetear iconos de todas las canciones a play
                    document.querySelectorAll('.full-song-item.playing').forEach(item => {
                        item.classList.remove('playing');
                        const icon = item.querySelector('.play-pause-overlay .icon');
                        if (icon) icon.textContent = '▶';
                    });
                }

                // Si no estaba reproduciendo esta, la preparamos y reproducimos
                currentPlayingSelectionAudio.src = clickedSong.fullAudio;
                currentPlayingSelectionAudio.volume = volumeSlider.value / 100;
                currentPlayingSelectionAudio.muted = false; // ¡Importante: desmutear al clickar!
                currentPlayingSelectionAudio.loop = true; // Loop la pista seleccionada individualmente

                try {
                    await new Promise((resolve, reject) => {
                        currentPlayingSelectionAudio.onloadedmetadata = () => resolve();
                        currentPlayingSelectionAudio.onerror = () => reject(new Error(`Error al cargar metadatos de ${clickedSong.fullAudio}.`));
                        currentPlayingSelectionAudio.load();
                    });
                    currentPlayingSelectionAudio.currentTime = getRandomMiddleTime(currentPlayingSelectionAudio); // Inicia desde el medio
                    await currentPlayingSelectionAudio.play();
                    if (playPauseIcon) playPauseIcon.textContent = '⏸';
                    songItem.classList.add('playing');
                    console.log(`Reproduciendo canción completa: ${clickedSong.title}`);
                } catch (e) {
                    console.error("Error reproduciendo canción completa individual:", e);
                    if (playPauseIcon) playPauseIcon.textContent = '▶';
                    songItem.classList.remove('playing');
                }
            }
        });
    }

    // Listeners para la selección de bases y voces (con reproducción al hacer click)
    if (baseTrackSelectionGrid) { // Verificar si la grid existe
        baseTrackSelectionGrid.addEventListener('click', async (event) => {
            const songOption = event.target.closest('.song-option');
            if (!songOption) return;

            const songId = songOption.dataset.songId;
            const clickedTrack = songs.find(s => s.id === songId);
            if (!clickedTrack) return;

            // Pausar el audio aleatorio de fondo de la página de bases
            baseSelectionPageAudio.pause();
            baseSelectionPageAudio.currentTime = 0;
            baseSelectionPageAudio.src = '';

            if (!currentPlayingSelectionAudio) {
                currentPlayingSelectionAudio = new Audio();
            }

            const playButtonIcon = songOption.querySelector('.fa-play, .fa-pause');

            if (currentPlayingSelectionAudio.src.includes(clickedTrack.baseAudio) && !currentPlayingSelectionAudio.paused) {
                currentPlayingSelectionAudio.pause();
                if (playButtonIcon) playButtonIcon.classList.replace('fa-pause', 'fa-play');
            } else {
                if (!currentPlayingSelectionAudio.paused) {
                    currentPlayingSelectionAudio.pause();
                    currentPlayingSelectionAudio.currentTime = 0;
                    baseTrackSelectionGrid.querySelectorAll('.song-option .fa-pause').forEach(icon => {
                        icon.classList.replace('fa-pause', 'fa-play');
                    });
                }

                currentPlayingSelectionAudio.src = clickedTrack.baseAudio;
                currentPlayingSelectionAudio.volume = volumeSlider.value / 100;
                currentPlayingSelectionAudio.muted = false;
                currentPlayingSelectionAudio.loop = true;

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

    if (vocalTrackSelectionGrid) { // Verificar si la grid existe
        vocalTrackSelectionGrid.addEventListener('click', async (event) => {
            const songOption = event.target.closest('.song-option');
            if (!songOption) return;

            const songId = songOption.dataset.songId;
            const clickedTrack = songs.find(s => s.id === songId);
            if (!clickedTrack) return;

            // Pausar el audio aleatorio de fondo de la página de voces
            vocalSelectionPageAudio.pause();
            vocalSelectionPageAudio.currentTime = 0;
            vocalSelectionPageAudio.src = '';

            if (!currentPlayingSelectionAudio) {
                currentPlayingSelectionAudio = new Audio();
            }

            const playButtonIcon = songOption.querySelector('.fa-play, .fa-pause');

            if (currentPlayingSelectionAudio.src.includes(clickedTrack.vocalAudio) && !currentPlayingSelectionAudio.paused) {
                currentPlayingSelectionAudio.pause();
                if (playButtonIcon) playButtonIcon.classList.replace('fa-pause', 'fa-play');
            } else {
                if (!currentPlayingSelectionAudio.paused) {
                    currentPlayingSelectionAudio.pause();
                    currentPlayingSelectionAudio.currentTime = 0;
                    vocalTrackSelectionGrid.querySelectorAll('.song-option .fa-pause').forEach(icon => {
                        icon.classList.replace('fa-pause', 'fa-play');
                    });
                }

                currentPlayingSelectionAudio.src = clickedTrack.vocalAudio;
                currentPlayingSelectionAudio.volume = volumeSlider.value / 100;
                currentPlayingSelectionAudio.muted = false;
                currentPlayingSelectionAudio.loop = true;

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
});
// ... (tus variables y código JS existente) ...

// Nuevas referencias para el DJ
const djModeButton = document.getElementById('djModeButton');
const djOverlay = document.getElementById('djOverlay');
const djArtwork = document.getElementById('djArtwork');
const djCommentary = document.getElementById('djCommentary');
const nowPlaying = document.getElementById('nowPlaying');

// Nuevas variables para el DJ
let isDjModeActive = false;
let djInterval; // Para controlar el cambio de canción del DJ
let currentDjSongIndex = -1; // Índice de la canción actual del DJ
let djCommentaryTimeout; // Para limpiar el comentario del DJ
let djArtworkPulseInterval; // Para la animación de la imagen al ritmo de la música

// Array de plantillas de comentarios del DJ
const djComments = [
    "¡Qué temazo de $ARTISTA_ANTERIOR$! Pero prepárense, que ahora llega $ARTISTA_SIGUIENTE$ con su hit: ¡$CANCION_SIGUIENTE$!",
    "Espero que hayan disfrutado de $CANCION_ANTERIOR$ de $ARTISTA_ANTERIOR$. Subimos el volumen para $CANCION_SIGUIENTE$ de $ARTISTA_SIGUIENTE$. ¡A bailar!",
    "Wow, $ARTISTA_ANTERIOR$ nos dejó con ganas de más. Pero no se preocupen, el ambiente sigue arriba con $ARTISTA_SIGUIENTE$ y su increíble $CANCION_SIGUIENTE$.",
    "Ese es el ritmo de $ARTISTA_ANTERIOR$ con $CANCION_ANTERIOR$. Ahora, un cambio de aires con $ARTISTA_SIGUIENTE$ y su enérgico $CANCION_SIGUIENTE$.",
    "¡Directo desde los estudios de Melocraft! Acabamos de escuchar a $ARTISTA_ANTERIOR$. A continuación, una joya de $ARTISTA_SIGUIENTE$: $CANCION_SIGUIENTE$."
];

// Función para obtener un comentario aleatorio con reemplazo de variables
function getRandomDjComment(prevSong, nextSong) {
    const commentTemplate = djComments[Math.floor(Math.random() * djComments.length)];
    return commentTemplate
        .replace('$ARTISTA_ANTERIOR$', prevSong.artist)
        .replace('$CANCION_ANTERIOR$', prevSong.title)
        .replace('$ARTISTA_SIGUIENTE$', nextSong.artist)
        .replace('$CANCION_SIGUIENTE$', nextSong.title);
}

// Función para alternar la animación de pulsación de la imagen del DJ
function toggleDjArtworkPulse(enable) {
    if (enable) {
        djArtwork.style.animationPlayState = 'running';
    } else {
        djArtwork.style.animationPlayState = 'paused';
    }
}

// Función principal para iniciar/detener el modo DJ
async function toggleDjMode() {
    isDjModeActive = !isDjModeActive;

    if (isDjModeActive) {
        // Entrar en modo DJ
        stopAllAudio(); // Pausar cualquier audio reproduciéndose
        djOverlay.classList.add('active'); // Mostrar el overlay
        djModeButton.classList.add('active'); // Marcar el botón como activo si quieres un estilo visual

        // Iniciar la reproducción de canciones del DJ
        startDjPlayback();

        // Iniciar animación de la imagen
        toggleDjArtworkPulse(true);

        // Opcional: Desactivar botones de navegación mientras el DJ está activo
        document.getElementById('createButton').disabled = true;
        // ... (desactivar otros botones si es necesario)
    } else {
        // Salir del modo DJ
        clearInterval(djInterval); // Detener el cambio automático de canciones
        clearTimeout(djCommentaryTimeout); // Limpiar cualquier comentario pendiente
        djOverlay.classList.remove('active'); // Ocultar el overlay
        djModeButton.classList.remove('active'); // Quitar estilo activo del botón
        stopAllAudio(); // Asegurar que todo el audio del DJ se detiene
        djCommentary.textContent = ''; // Limpiar comentario
        nowPlaying.textContent = ''; // Limpiar ahora sonando
        currentDjSongIndex = -1; // Resetear índice de canción

        // Detener animación de la imagen
        toggleDjArtworkPulse(false);

        // Opcional: Reactivar botones de navegación
        document.getElementById('createButton').disabled = false;
        // ... (reactivar otros botones si es necesario)
    }
}

// Función para reproducir la siguiente canción del DJ
async function playNextDjSong() {
    if (songs.length === 0) {
        console.warn("No hay canciones disponibles para el DJ.");
        return;
    }

    // Seleccionar una canción aleatoria que no sea la actual si es posible
    let nextSongIndex;
    do {
        nextSongIndex = Math.floor(Math.random() * songs.length);
    } while (nextSongIndex === currentDjSongIndex && songs.length > 1);

    const nextSong = songs[nextDjSongIndex];
    const prevSong = currentDjSongIndex !== -1 ? songs[currentDjSongIndex] : null;

    currentDjSongIndex = nextSongIndex; // Actualizar el índice de la canción actual

    // Reproducir comentario del DJ
    if (prevSong && djCommentary.textContent === '') { // Solo si no hay un comentario activo
        const comment = getRandomDjComment(prevSong, nextSong);
        djCommentary.textContent = comment;
        nowPlaying.textContent = ''; // Limpiar "Now Playing" mientras habla el DJ
        // Bajar el volumen de la música (si se está reproduciendo)
        if (globalFeaturedAudioPlayer && !globalFeaturedAudioPlayer.paused) {
            globalFeaturedAudioPlayer.volume = 0.1; // Volumen bajo para el fondo
        }
        // Puedes añadir un audio de voz del DJ aquí si tienes archivos de voz
        // const djVoiceAudio = new Audio('assets/audio/dj_voice.mp3'); // Ejemplo
        // await djVoiceAudio.play();

        // Esperar un tiempo (simulando duración del comentario)
        await new Promise(resolve => {
            djCommentaryTimeout = setTimeout(() => {
                djCommentary.textContent = ''; // Limpiar comentario después de un tiempo
                if (globalFeaturedAudioPlayer && !globalFeaturedAudioPlayer.paused) {
                    applyGlobalVolume(); // Restaurar volumen
                }
                resolve();
            }, 5000); // Comentario visible por 5 segundos (ajustar)
        });
    }

    // Preparar y reproducir la nueva canción
    globalFeaturedAudioPlayer.src = nextSong.fullAudio;
    globalFeaturedAudioPlayer.loop = false; // No loopear, queremos que cambie de canción
    globalFeaturedAudioPlayer.volume = volumeSlider.value / 100; // Restaurar volumen o aplicar el global
    globalFeaturedAudioPlayer.muted = false; // Asegurarse de que no esté muteado

    try {
        await new Promise((resolve, reject) => {
            globalFeaturedAudioPlayer.onloadedmetadata = () => resolve();
            globalFeaturedAudioPlayer.onerror = () => reject(new Error(`Error al cargar metadatos de ${nextSong.fullAudio}.`));
            globalFeaturedAudioPlayer.load();
        });
        await globalFeaturedAudioPlayer.play();
        console.log(`DJ reproduciendo: ${nextSong.title}`);
        nowPlaying.textContent = `Ahora sonando: ${nextSong.title} - ${nextSong.artist}`;

        // Escuchar el final de la canción para la siguiente
        globalFeaturedAudioPlayer.onended = () => {
            // Un pequeño retraso antes del siguiente comentario/canción
            setTimeout(playNextDjSong, 2000); // 2 segundos de pausa
        };

    } catch (e) {
        console.error("Error reproduciendo canción del DJ:", e);
        // Si hay un error, intentar con la siguiente canción
        setTimeout(playNextDjSong, 2000);
    }
}

// Iniciar el ciclo de reproducción del DJ (llamado cuando se activa el modo DJ)
function startDjPlayback() {
    // Asegurarse de que el globalFeaturedAudioPlayer esté listo
    if (!globalFeaturedAudioPlayer) {
        globalFeaturedAudioPlayer = new Audio();
    }
    // La primera canción se reproduce inmediatamente
    playNextDjSong();
}

// Event listener para el botón del DJ
djModeButton.addEventListener('click', toggleDjMode);


