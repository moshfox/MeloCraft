// --- script.js
// Tu array de canciones existente con nuevas propiedades para el DJ
const songs = [
    {
        id: 'hawaiian',
        title: 'Hawaiian Roller Coaster Ride',
        artist: 'Mark Keali\'i Ho\'omalu',
        image: 'assets/images/hawaiian-roller-coaster-ride.jpg',
        fullAudio: 'assets/audio/full/hawaiian-roller-coaster-ride-full.mp3',
        baseAudio: 'assets/audio/bases/hawaiian-roller-coaster-ride-base.mp3',
        vocalAudio: 'assets/audio/vocals/hawaiian-roller-coaster-ride-vocals.mp3',
        genre: 'Soundtrack',
        year: 2002
    },
    {
        id: 'love-me-again',
        title: 'Love Me Again',
        artist: 'John Newman',
        image: 'assets/images/love-me-again.jpg',
        fullAudio: 'assets/audio/full/love-me-again-full.mp3',
        baseAudio: 'assets/audio/bases/love-me-again-base.mp3',
        vocalAudio: 'assets/audio/vocals/love-me-again-vocals.mp3',
        genre: 'Soul/Pop',
        year: 2013
    },
    {
        id: 'olimpo',
        title: 'OLIMPO',
        artist: 'Milo J',
        image: 'assets/images/olimpo.jpg',
        fullAudio: 'assets/audio/full/olimpo-full.mp3',
        baseAudio: 'assets/audio/bases/olimpo-base.mp3',
        vocalAudio: 'assets/audio/vocals/olimpo-vocals.mp3',
        genre: 'Trap',
        year: 2023
    },
    {
        id: 'counting-stars',
        title: 'Counting Stars',
        artist: 'OneRepublic',
        image: 'assets/images/counting-stars.jpg',
        fullAudio: 'assets/audio/full/counting-stars-full.mp3',
        baseAudio: 'assets/audio/bases/counting-stars-base.mp3',
        vocalAudio: 'assets/audio/vocals/counting-stars-vocals.mp3',
        genre: 'Pop Rock',
        year: 2013
    },
    {
        id: 'rosa-de-trigo',
        title: 'Rosa De Trigo',
        artist: 'H.A.',
        image: 'assets/images/Rosa-de-trigo.PNG',
        fullAudio: 'assets/audio/full/Rosa-full.mp3',
        baseAudio: 'assets/audio/bases/Rosa-base.mp3',
        vocalAudio: 'assets/audio/vocals/Rosa-vocals.mp3',
        genre: 'Pop',
        year: 2020
    },
    {
        id: 'claro-y-oscuro',
        title: 'Claro y Oscuro',
        artist: 'H.A.',
        image: 'assets/images/Claro.PNG',
        fullAudio: 'assets/audio/full/Claro-full.mp3',
        baseAudio: 'assets/audio/bases/Claro-base.mp3',
        vocalAudio: 'assets/audio/vocals/Claro-vocal.mp3',
        genre: 'Pop Urbano',
        year: 2021
    },
    {
        id: 'meltdown',
        title: 'Meltdown',
        artist: 'Hookme',
        image: 'assets/images/Meltdown.jpg',
        fullAudio: 'assets/audio/full/meltdown-full.mp3',
        baseAudio: 'assets/audio/bases/meltdown-base.mp3',
        vocalAudio: 'assets/audio/vocals/meltdown-vocals.mp3',
        genre: 'Electronic',
        year: 2022
    },
    {
        id: 'washing-machine-heart',
        title: 'Washing Machine Heart',
        artist: 'Mitski',
        image: 'assets/images/Washing.jpg',
        fullAudio: 'assets/audio/full/washing-full.mp3',
        baseAudio: 'assets/audio/bases/washing-base.mp3',
        vocalAudio: 'assets/audio/vocals/washing-vocals.mp3',
        genre: 'Indie Pop',
        year: 2018
    },
    {
        id: 'espresso-macchiato',
        title: 'Espresso Macchiato',
        artist: 'Tommy Cash',
        image: 'assets/images/tommy.jpg',
        fullAudio: 'assets/audio/full/Tommy-full.mp3',
        baseAudio: 'assets/audio/bases/Tommy-base.mp3',
        vocalAudio: 'assets/audio/vocals/Tommy-vocals.mp3',
        genre: 'Hip Hop',
        year: 2020
    },
    {
        id: 'patapim-funk',
        title: 'PATAPIM FUNK',
        artist: 'SXYGX',
        image: 'assets/images/patapim.PNG',
        fullAudio: 'assets/audio/full/patapim-full.mp3', // Corregido el fullAudio
        baseAudio: 'assets/audio/bases/patapim-base.mp3',
        vocalAudio: 'assets/audio/vocals/patapim-vocals.mp3',
        genre: 'Funk',
        year: 2023
    },
    {
        id: 'rosa-de-trigo-drill',
        title: 'Rosa De Trigo Drill',
        artist: 'Hodely - H.A.',
        image: 'assets/images/Rosadrill.PNG',
        fullAudio: 'assets/audio/full/Rosadrill-full.mp3',
        baseAudio: 'assets/audio/bases/Rosadrill-base.mp3',
        vocalAudio: 'assets/audio/vocals/Rosadrill-vocals.mp3',
        genre: 'Drill',
        year: 2024
    },
    {
        id: 'here',
        title: 'Here',
        artist: 'Alessia Cara',
        image: 'assets/images/Here.png',
        fullAudio: 'assets/audio/full/Here-full.mp3',
        baseAudio: 'assets/audio/bases/Here-base.mp3',
        vocalAudio: 'assets/audio/vocals/Here-vocals.mp3',
        genre: 'R&B/Pop',
        year: 2015
    },
    {
        id: 'rock-that-body',
        title: 'Rock That Body',
        artist: 'Black Eyed Peas',
        image: 'assets/images/Rockbody.jpg',
        fullAudio: 'assets/audio/full/Rockbody-full.mp3',
        baseAudio: 'assets/audio/bases/Rockbody-base.mp3',
        vocalAudio: 'assets/audio/vocals/RockBody-vocals.mp3',
        genre: 'Hip Hop/Pop',
        year: 2009
    },
    {
        id: 'sin-tanto-royo',
        title: 'Sin Tanto Royo',
        artist: 'Luis R Conriquez x Tito Double P',
        image: 'assets/images/Sinrollos.PNG',
        fullAudio: 'assets/audio/full/sinrollos-full.mp3',
        baseAudio: 'assets/audio/bases/sinrollo-base.mp3',
        vocalAudio: 'assets/audio/vocals/Sinrollo-vocal.mp3',
        genre: 'Regional Mexicano',
        year: 2023
    },
    {
        id: 'noid',
        title: 'Noid',
        artist: 'Tyler, the creator',
        image: 'assets/images/Noid.jpg',
        fullAudio: 'assets/audio/full/Noid.mp3',
        baseAudio: 'assets/audio/bases/poppop.ai - videoplayback_instrumental.mp3',
        vocalAudio: 'assets/audio/vocals/poppop.ai - videoplayback_vocals.mp3',
        genre: 'Hip Hop/Jazz Rap',
        year: 2017
    }
];

// Comentarios del DJ
const djComments = [
    (prevSong, nextSong) => `¡Qué temazo acabamos de escuchar con la inconfundible voz de ${prevSong.artist}! Ahora subimos el ritmo con la base de ${nextSong.title} de ${nextSong.artist}. ¡Dale al play!`,
    (prevSong, nextSong) => `Después de esa joya de ${prevSong.title}, el DJ de Melocraft tiene preparada una mezcla brutal: la base de ${nextSong.title} con una voz que te va a sorprender. ¡Prepárate!`,
    (prevSong, nextSong) => `¿Listos para el siguiente nivel? Cerramos ${prevSong.title} y abrimos paso a una nueva combinación con la base de ${nextSong.title}. ¡Subid el volumen!`,
    (prevSong, nextSong) => `¡Atención, atención! Se nos va ${prevSong.title}, pero el show debe continuar. Llega el turno de la base de ${nextSong.title}. ¡Esto no para!`,
    (prevSong, nextSong) => `¡Menuda energía nos ha dejado ${prevSong.title}! Ahora, MeloCraft DJ te trae la base de ${nextSong.title} para mantenerte en la pista.`,
    (prevSong, nextSong) => `De la maestría de ${prevSong.artist} con ${prevSong.title}, pasamos a la base de ${nextSong.title}. ¡Una transición que te hará vibrar!`,
    (prevSong, nextSong) => `¡Fin de fiesta para ${prevSong.title}! Pero no te preocupes, el beat sigue con la base de ${nextSong.title}. ¡Disfruta de la fusión!`,
    (prevSong, nextSong) => `Se despide ${prevSong.title}, una maravilla de ${prevSong.artist}. Ahora, te traemos la base de ${nextSong.title}. ¡Que no pare la música!`,
    (prevSong, nextSong) => `¡Directo desde el ${prevSong.year} con ${prevSong.title}! Y ahora, un salto temporal y sonoro con la base de ${nextSong.title}.`,
    (prevSong, nextSong) => `Este ${prevSong.genre} de ${prevSong.title} nos ha dejado con ganas de más. Por eso, el DJ te trae otra explosión de sonido con la base de ${nextSong.title}.`,
    (prevSong, nextSong) => `Bueno, después de ese hit de ${prevSong.artist} que fue ${prevSong.title}, ahora vamos con la base de ${nextSong.title} de ${nextSong.artist}. ¡Dale al play!`,
    (prevSong, nextSong) => `De la mano de ${prevSong.artist}, escuchamos ${prevSong.title}. Y para seguir, la base de ${nextSong.title}. ¡Esto es Melocraft!`,
    (prevSong, nextSong) => `Terminamos con la vibra de ${prevSong.title}. Ahora, el DJ te tiene una sorpresa con la base de ${nextSong.title}.`,
    (prevSong, nextSong) => `¡Un aplauso para ${prevSong.title} de ${prevSong.artist}! Y ahora, preparamos la pista para la base de ${nextSong.title}.`,
    (prevSong, nextSong) => `Hemos bailado con ${prevSong.title}, y ahora nos movemos al ritmo de la base de ${nextSong.title}. ¡Disfruta de la noche!`
];


// Variables globales para las páginas y grids (tus declaraciones existentes)
const homePage = document.getElementById('homePage');
const baseSelectionPage = document.getElementById('baseSelectionPage');
const vocalSelectionPage = document.getElementById('vocalSelectionPage');
const mixResultPage = document.getElementById('mixResultPage');
const createButton = document.getElementById('createButton');
const fullSongGrid = document.getElementById('fullSongGrid'); // Corregido espacio
const baseTrackSelectionGrid = document.getElementById('baseTrackSelectionGrid');
const vocalTrackSelectionGrid = document.getElementById('vocalTrackSelectionGrid');
const nextToVocalSelectionButton =
    document.getElementById('nextToVocalSelectionButton');
const backFromBaseSelectionButton =
    document.getElementById('backFromBaseSelectionButton');
const nextToMixResultButton = document.getElementById('nextToMixResultButton');
const backToVocalSelectionButton =
    document.getElementById('backToVocalSelectionButton');
const createNewMixButton = document.getElementById('createNewMixButton');
const backFromMixResultButton = document.getElementById('backFromMixResultButton');
const finalMixedTrackPlayer = document.getElementById('finalMixedTrack'); // Este es el <audio> tag HTML
const finalBaseArtwork = document.getElementById('finalBaseArtwork');
const finalBaseTitle = document.getElementById('finalBaseTitle');
const finalVocalArtwork = document.getElementById('finalVocalArtwork');
const finalVocalTitle = document.getElementById('finalVocalTitle');
const volumeSlider = document.getElementById('volumeSlider');
const muteButton = document.getElementById('muteButton');
// Sliders de volumen individuales en la mezcla final
const baseVolumeSlider = document.getElementById('baseVolumeSlider');
const vocalVolumeSlider = document.getElementById('vocalVolumeSlider');

// NUEVAS VARIABLES PARA EL MODO DJ
const djModeButton = document.getElementById('djModeButton');
const djOverlay = document.getElementById('djOverlay');
const djArtwork = document.getElementById('djArtwork');
const djCommentary = document.getElementById('djCommentary');
const nowPlayingDisplay = document.getElementById('nowPlaying');

let djBaseAudio = new Audio();
let djVocalAudio = new Audio();
let djCommentaryAudio = new Audio(); // Para los comentarios hablados
let djInterval = null; // Para controlar el intervalo de cambio de canciones
const COMMENTARY_DURATION = 5000; // Duración estimada del comentario en ms
const MIX_DURATION = 30000; // Duración de cada mezcla en el modo DJ en ms (30 segundos)

// Instancias de Audio
let globalFeaturedAudioPlayer = new Audio();
globalFeaturedAudioPlayer.volume = 1; // Volumen inicial, se ajustará con el slider.

let baseSelectionPageAudio = new Audio();
let vocalSelectionPageAudio = new Audio();
let currentPlayingSelectionAudio = null; // Usado para reproducir una pista individual en las pantallas de selección

let finalBaseAudio = new Audio(); // Instancia de Audio para la base en la mezcla final
let finalVocalAudio = new Audio(); // Instancia de Audio para la vocal en la mezcla final

let selectedBaseTrack = null;
let selectedVocalTrack = null;

// --- Funciones de Utilidad
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
}

/**
 * Función para detener *todos* los audios controlados por la aplicación.
 */
function stopAllAudio() {
    // Lista de todos los reproductores de audio que podrían estar activos
    const allPlayers = [
        globalFeaturedAudioPlayer,
        baseSelectionPageAudio,
        vocalSelectionPageAudio,
        currentPlayingSelectionAudio, // Puede ser null
        finalBaseAudio,
        finalVocalAudio,
        djBaseAudio, // Incluir audios del DJ
        djVocalAudio,
        djCommentaryAudio
    ].filter(player => player instanceof Audio); // Filtrar solo instancias de Audio

    allPlayers.forEach(player => {
        if (!player.paused) {
            player.pause();
        }
        player.currentTime = 0;
        // Limpiar el src para resetear completamente el reproductor, excepto para finalMixedTrackPlayer
        // si lo usas como controlador principal y no quieres que se quede sin src
        if (player !== finalMixedTrackPlayer) {
            player.src = "";
            player.load();
        }
    });

    // Manejo específico para finalMixedTrackPlayer (el <audio> tag HTML)
    if (finalMixedTrackPlayer && !finalMixedTrackPlayer.paused) {
        finalMixedTrackPlayer.pause();
    }
    finalMixedTrackPlayer.currentTime = 0;
    // Limpiar SRC del <audio> tag y remover listeners si es necesario
    if (finalMixedTrackPlayer) {
        finalMixedTrackPlayer.src = '';
        finalMixedTrackPlayer.load();
        // Es buena práctica remover listeners si se añaden dinámicamente y se van a reemplazar
        finalMixedTrackPlayer.onplay = null;
        finalMixedTrackPlayer.onpause = null;
        finalMixedTrackPlayer.onseeking = null;
        finalMixedTrackPlayer.onseeked = null;
        finalMixedTrackPlayer.onended = null;
    }

    // Detener el intervalo del DJ si está activo
    if (djInterval) {
        clearInterval(djInterval);
        djInterval = null;
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

    // Resetear la selección visual en las páginas de selección
    document.querySelectorAll('.song-option.selected').forEach(option => {
        option.classList.remove('selected');
    });

    // Resetear el estado visual del DJ
    if (djArtwork) djArtwork.classList.remove('active');
    if (djCommentary) djCommentary.textContent = '';
    if (nowPlayingDisplay) nowPlayingDisplay.textContent = '';
}

function applyGlobalVolume() {
    const newGlobalVolume = volumeSlider.value / 100;

    // Aplicar a reproductores generales
    [globalFeaturedAudioPlayer, baseSelectionPageAudio, vocalSelectionPageAudio].forEach(player => {
        if (player) {
            player.volume = newGlobalVolume;
            if (newGlobalVolume > 0 && player.muted && !player.paused) {
                player.muted = false;
            }
        }
    });

    // currentPlayingSelectionAudio también debe actualizar su volumen
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

    // También aplicar al elemento de audio HTML de la mezcla final si está en uso
    if (finalMixedTrackPlayer) {
        finalMixedTrackPlayer.volume = newGlobalVolume * (baseVolumeSlider ? baseVolumeSlider.value / 100 : 1);
        if (newGlobalVolume > 0 && finalMixedTrackPlayer.muted && !finalMixedTrackPlayer.paused) {
            finalMixedTrackPlayer.muted = false;
        }
    }

    // Aplicar a los audios del modo DJ
    if (djBaseAudio) {
        djBaseAudio.volume = newGlobalVolume;
        if (newGlobalVolume > 0 && djBaseAudio.muted && !djBaseAudio.paused) djBaseAudio.muted = false;
    }
    if (djVocalAudio) {
        djVocalAudio.volume = newGlobalVolume;
        if (newGlobalVolume > 0 && djVocalAudio.muted && !djVocalAudio.paused) djVocalAudio.muted = false;
    }
    if (djCommentaryAudio) {
        djCommentaryAudio.volume = newGlobalVolume * 0.8; // Los comentarios un poco más bajos que la música
        if (newGlobalVolume > 0 && djCommentaryAudio.muted && !djCommentaryAudio.paused) djCommentaryAudio.muted = false;
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
    if (!audioPlayer || !audioPlayer.duration || isNaN(audioPlayer.duration) ||
        audioPlayer.duration < 10) {
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
    fullSongGrid.innerHTML = "";
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

    targetGrid.innerHTML = "";
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

    // Ocultar todas las páginas
    homePage.classList.remove('active');
    homePage.classList.add('hidden');
    baseSelectionPage.classList.remove('active');
    baseSelectionPage.classList.add('hidden');
    vocalSelectionPage.classList.remove('active');
    vocalSelectionPage.classList.add('hidden');
    mixResultPage.classList.remove('active');
    mixResultPage.classList.add('hidden');
    djOverlay.classList.remove('active'); // Ocultar el overlay del DJ
    djOverlay.classList.add('hidden');


    // Mostrar la página deseada
    pageToShow.classList.remove('hidden');
    pageToShow.classList.add('active');

    // Lógica específica para cada página al mostrarla
    if (pageToShow === homePage) {
        renderFullSongs(); // Asegurarse de que las canciones se renderizan cada vez
    } else if (pageToShow === baseSelectionPage) {
        renderSelectionOptions('base'); // Asegurarse de que las opciones se renderizan
        playRandomSelectionTrack('base'); // Reproducir una pista aleatoria de base
    } else if (pageToShow === vocalSelectionPage) {
        renderSelectionOptions('vocal'); // Asegurarse de que las opciones se renderizan
        playRandomSelectionTrack('vocal'); // Reproducir una pista aleatoria de vocal
    } else if (pageToShow === mixResultPage) {
        setupAndPlayFinalMix();
    } else if (pageToShow === djOverlay) { // Cuando se muestra el overlay del DJ
        startDjMode();
    }
}

/** Configura y reproduce la mezcla final de base y voz. */
async function setupAndPlayFinalMix() {
    stopAllAudio(); // Asegura que todo lo demás esté parado.

    if (!selectedBaseTrack || !selectedVocalTrack) {
        console.error("No se ha seleccionado la base o la voz para la mezcla final.");
        alert("Por favor, selecciona una base y una voz antes de ver la mezcla.");
        showPage(homePage); // Vuelve a la página de inicio si falta una selección
        return;
    }

    // Asignar SRCs a las instancias de Audio individuales para la mezcla
    finalBaseAudio.src = selectedBaseTrack.baseAudio;
    finalVocalAudio.src = selectedVocalTrack.vocalAudio;

    // Cargar los audios para que sus metadatos estén disponibles
    try {
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
        ]);
    } catch (error) {
        console.error("Error al cargar uno de los audios de la mezcla final:", error);
        alert("No se pudieron cargar todas las pistas de la mezcla. Verifica las rutas.");
        showPage(homePage);
        return;
    }

    // Establecer volúmenes iniciales (basados en los sliders y el volumen global)
    if (baseVolumeSlider) baseVolumeSlider.value = 100; // Por defecto al 100%
    if (vocalVolumeSlider) vocalVolumeSlider.value = 100; // Por defecto al 100%
    applyGlobalVolume(); // Aplica el volumen global y el de los sliders individuales

    // Actualizar la información visual de las carátulas y títulos
    if (finalBaseArtwork) finalBaseArtwork.src = selectedBaseTrack.image;
    if (finalBaseTitle) finalBaseTitle.textContent = selectedBaseTrack.title;

    if (finalVocalArtwork) finalVocalArtwork.src = selectedVocalTrack.image;
    if (finalVocalTitle) finalVocalTitle.textContent = selectedVocalTrack.title;

    // Configurar el finalMixedTrackPlayer como el "maestro" para la barra de progreso
    // El finalMixedTrackPlayer es el elemento <audio> HTML
    finalMixedTrackPlayer.src = finalBaseAudio.src; // Usa el src de la base para controlar el progreso
    finalMixedTrackPlayer.loop = false; // Puedes ponerlo en true si quieres que se repita

    // Esperar a que el finalMixedTrackPlayer cargue sus metadatos antes de reproducir
    try {
        await new Promise((resolve, reject) => {
            finalMixedTrackPlayer.onloadedmetadata = () => resolve();
            finalMixedTrackPlayer.onerror = () => reject(new Error('Error al cargar metadatos de la mezcla final.'));
            finalMixedTrackPlayer.load();
        });
    } catch (e) {
        console.error("Error cargando finalMixedTrackPlayer:", e);
        alert("Error cargando la pista principal de la mezcla. Verifica las rutas.");
        showPage(homePage);
        return;
    }


    // Sincronizar la reproducción entre el finalMixedTrackPlayer (maestro) y los audios individuales
    finalMixedTrackPlayer.onplay = () => {
        finalBaseAudio.currentTime = finalMixedTrackPlayer.currentTime;
        finalVocalAudio.currentTime = finalMixedTrackPlayer.currentTime;
        finalBaseAudio.play().catch(e => console.error("Error al iniciar base:", e));
        finalVocalAudio.play().catch(e => console.error("Error al iniciar vocal:", e));
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

    finalMixedTrackPlayer.onended = () => {
        finalBaseAudio.pause();
        finalVocalAudio.pause();
        finalBaseAudio.currentTime = 0;
        finalVocalAudio.currentTime = 0;
    };

    // Iniciar la reproducción
    try {
        await finalMixedTrackPlayer.play();
        console.log("Mezcla final reproduciéndose.");
    } catch (e) {
        console.error("Error al intentar reproducir la mezcla final:", e);
        alert("No se pudo iniciar la reproducción de la mezcla final. Asegúrate de que los permisos de autoplay estén configurados.");
    }
}

async function playRandomSelectionTrack(type) {
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

    if (tracks.length === 0) {
        console.warn(`No hay pistas de tipo '${type}' para reproducir.`);
        if (selectionButton) selectionButton.disabled = true;
        return;
    }

    const randomIndex = Math.floor(Math.random() * tracks.length);
    const randomTrack = tracks[randomIndex];

    player.src = randomTrack.audio;
    player.volume = volumeSlider.value / 100; // Aplicar volumen global
    player.muted = false; // Asegurarse de que no esté muteado
    player.loop = true; // Reproducir en bucle para el fondo

    try {
        await player.play();
        console.log(`Reproduciendo pista aleatoria (${type}): ${randomTrack.title}`);
    } catch (e) {
        console.error(`Error de reproducción automática para la página de ${type} selección:`, e);
        // Si hay un error de autoplay, el usuario deberá interactuar
    }

    // Resaltar visualmente la opción seleccionada aleatoriamente
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
    }

    // Establecer la pista seleccionada globalmente y habilitar el botón "Siguiente"
    window[selectedTrackVar] = songs.find(s => s.id === randomTrack.id);
    if (selectionButton) selectionButton.disabled = false;
}

// --- FUNCIONALIDAD MODO DJ ---

async function startDjMode() {
    stopAllAudio(); // Detener todo lo demás
    djOverlay.classList.remove('hidden');
    djOverlay.classList.add('active');
    djArtwork.classList.add('active'); // Iniciar animación del DJ

    await playNextDjMix(); // Iniciar la primera mezcla

    // Establecer el intervalo para cambiar de canción
    djInterval = setInterval(playNextDjMix, MIX_DURATION + COMMENTARY_DURATION);
}

let lastPrevSong = null; // Para evitar que se repita la canción anterior como la actual
async function playNextDjMix() {
    // Pausar y resetear audios anteriores si están activos
    if (!djBaseAudio.paused) djBaseAudio.pause();
    if (!djVocalAudio.paused) djVocalAudio.pause();
    if (!djCommentaryAudio.paused) djCommentaryAudio.pause();

    djBaseAudio.currentTime = 0;
    djVocalAudio.currentTime = 0;
    djCommentaryAudio.currentTime = 0;

    // Seleccionar una nueva vocal y base aleatorias
    let randomVocalSong;
    let randomBaseSong;

    // Asegurarse de que las canciones no sean las mismas y que no repita la canción anterior inmediatamente
    do {
        randomVocalSong = songs[Math.floor(Math.random() * songs.length)];
        randomBaseSong = songs[Math.floor(Math.random() * songs.length)];
    } while (randomVocalSong.id === randomBaseSong.id || randomVocalSong.id === lastPrevSong?.id || randomBaseSong.id === lastPrevSong?.id);

    const prevSong = lastPrevSong || randomVocalSong; // Si es la primera, usa la actual como "anterior" para el comentario
    lastPrevSong = randomVocalSong; // Actualiza la última canción reproducida

    // Seleccionar un comentario aleatorio
    const randomCommentIndex = Math.floor(Math.random() * djComments.length);
    const commentFunction = djComments[randomCommentIndex];
    const commentText = commentFunction(prevSong, randomBaseSong); // Pasa la canción anterior y la actual al comentario

    djCommentary.textContent = commentText;
    nowPlayingDisplay.textContent = `Ahora sonando: Voz de ${randomVocalSong.title} (de ${randomVocalSong.artist}) con Base de ${randomBaseSong.title} (de ${randomBaseSong.artist})`;


    // Puedes usar una API de Texto a Voz para generar el audio del comentario.
    // Por simplicidad, aquí solo mostramos el texto.
    // Para una implementación real, necesitarías un servicio como Web Speech API (SpeechSynthesisUtterance)
    // o un backend que genere el audio del texto.
    // Ejemplo (solo texto a voz):
    // const utterance = new SpeechSynthesisUtterance(commentText);
    // speechSynthesis.speak(utterance);


    // Cargar y reproducir comentario
    // Por ahora, asumimos que no hay un audio pre-grabado para los comentarios.
    // Si tienes audios para los comentarios, cargar djCommentaryAudio.src = 'path/to/comment.mp3'

    // Retrasar la reproducción de la música para dar tiempo al comentario
    setTimeout(async () => {
        djCommentary.textContent = ''; // Limpiar el comentario una vez que la música empieza

        djBaseAudio.src = randomBaseSong.baseAudio;
        djVocalAudio.src = randomVocalSong.vocalAudio;

        djBaseAudio.volume = volumeSlider.value / 100;
        djVocalAudio.volume = volumeSlider.value / 100;

        djBaseAudio.loop = true;
        djVocalAudio.loop = true;

        try {
            // Asegurarse de que ambas pistas se carguen antes de intentar reproducir
            await Promise.all([
                new Promise((resolve, reject) => {
                    djBaseAudio.onloadedmetadata = () => resolve();
                    djBaseAudio.onerror = () => reject(`Error al cargar base: ${randomBaseSong.baseAudio}`);
                    djBaseAudio.load();
                }),
                new Promise((resolve, reject) => {
                    djVocalAudio.onloadedmetadata = () => resolve();
                    djVocalAudio.onerror = () => reject(`Error al cargar vocal: ${randomVocalSong.vocalAudio}`);
                    djVocalAudio.load();
                })
            ]);

            // Reproducir al mismo tiempo
            await djBaseAudio.play();
            await djVocalAudio.play();

            // Establecer un timeout para detener la mezcla y preparar la siguiente
            setTimeout(() => {
                // Aquí podrías añadir una pequeña transición de volumen (fade out)
                djBaseAudio.pause();
                djVocalAudio.pause();
                djBaseAudio.currentTime = 0;
                djVocalAudio.currentTime = 0;
                // playNextDjMix() se llamará por el setInterval si está activo
            }, MIX_DURATION);

        } catch (error) {
            console.error("Error en la mezcla del DJ:", error);
            nowPlayingDisplay.textContent = 'Error al cargar una de las pistas. Saltando...';
            // Intentar la siguiente mezcla si hay un error
            // Si el error es persistente, esto podría generar un bucle. Considerar un mecanismo de fallback.
            setTimeout(playNextDjMix, 2000); // Intenta la siguiente mezcla en 2 segundos
        }
    }, COMMENTARY_DURATION); // Esperar la duración del comentario antes de que empiece la música
}

// --- DOMContentLoaded Event Listener ---
document.addEventListener('DOMContentLoaded', () => {
    // Renderizado inicial de canciones en la página de inicio
    renderFullSongs();

    applyGlobalVolume(); // Aplicar volumen inicial al cargar

    // Global Volume Slider and Mute Button Listeners
    if (volumeSlider) {
        volumeSlider.addEventListener('input', applyGlobalVolume);
    }

    if (muteButton) {
        let previousGlobalVolume = volumeSlider ? volumeSlider.value : 100; // Guardar último volumen antes de mutear
        muteButton.addEventListener('click', () => {
            if (volumeSlider.value > 0) { // Si el volumen no es cero o no está muteado
                // Mutear
                previousGlobalVolume = volumeSlider.value;
                volumeSlider.value = 0;
            } else {
                // Desmutear
                volumeSlider.value = previousGlobalVolume;
            }
            applyGlobalVolume(); // Aplicar el nuevo volumen a todos los audios
        });
    }

    // Individual Volume Sliders for Final Mix
    if (baseVolumeSlider) {
        baseVolumeSlider.addEventListener('input', () => {
            if (finalBaseAudio) {
                finalBaseAudio.volume = (volumeSlider.value / 100) * (baseVolumeSlider.value / 100);
            }
            // También ajustar el volumen del finalMixedTrackPlayer si es el controlador principal
            if (finalMixedTrackPlayer && finalMixedTrackPlayer.src.includes(selectedBaseTrack.baseAudio)) {
                finalMixedTrackPlayer.volume = (volumeSlider.value / 100) * (baseVolumeSlider.value / 100);
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
            showPage(baseSelectionPage); // Volver a la selección de bases para crear una nueva mezcla
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

            const icon = songItem.querySelector('.play-pause-overlay .icon');

            // Si la canción clickeada ya está reproduciéndose, pausarla
            if (globalFeaturedAudioPlayer.src.includes(clickedSong.fullAudio) &&
                !globalFeaturedAudioPlayer.paused) {
                globalFeaturedAudioPlayer.pause();
                songItem.classList.remove('playing');
                if (icon) icon.textContent = '▶';
            } else {
                // Detener cualquier otra canción que se esté reproduciendo
                stopAllAudio(); // Detiene todos los audios, incluyendo cualquier reproducción de selección

                // Restablecer iconos de todas las canciones a play
                document.querySelectorAll('.full-song-item.playing').forEach(item => {
                    item.classList.remove('playing');
                    const otherIcon = item.querySelector('.play-pause-overlay .icon');
                    if (otherIcon) otherIcon.textContent = '▶';
                });

                // Reproducir la canción clickeada
                globalFeaturedAudioPlayer.src = clickedSong.fullAudio;
                globalFeaturedAudioPlayer.volume = volumeSlider.value / 100;
                globalFeaturedAudioPlayer.muted = false; // Asegurarse de que no esté muteado
                globalFeaturedAudioPlayer.loop = false; // Reproducir una vez

                try {
                    await globalFeaturedAudioPlayer.play();
                    songItem.classList.add('playing');
                    if (icon) icon.textContent = '⏸';
                    console.log(`Reproduciendo canción completa: ${clickedSong.title}`);
                } catch (e) {
                    console.error("Error reproduciendo canción completa:", e);
                }
            }
        });
    }

    // Listeners for individual track selection playback (base and vocal)
    if (baseTrackSelectionGrid) {
        baseTrackSelectionGrid.addEventListener('click', async (event) => {
            const songOption = event.target.closest('.song-option');
            if (!songOption) return;

            const songId = songOption.dataset.songId;
            const clickedTrack = songs.find(s => s.id === songId);
            if (!clickedTrack) return;

            const playButtonIcon = songOption.querySelector('.fa-play, .fa-pause');

            // Pausar el audio de fondo aleatorio de la página de base
            baseSelectionPageAudio.pause();
            baseSelectionPageAudio.currentTime = 0;
            baseSelectionPageAudio.src = ''; // Limpiar fuente

            if (!currentPlayingSelectionAudio) {
                currentPlayingSelectionAudio = new Audio();
            }

            // Si esta pista ya está reproduciéndose, pausarla
            if (currentPlayingSelectionAudio.src.includes(clickedTrack.baseAudio) &&
                !currentPlayingSelectionAudio.paused) {
                currentPlayingSelectionAudio.pause();
                currentPlayingSelectionAudio.currentTime = 0;
                if (playButtonIcon) playButtonIcon.classList.replace('fa-pause', 'fa-play');
                songOption.classList.remove('selected');
                selectedBaseTrack = null;
                if (nextToVocalSelectionButton) nextToVocalSelectionButton.disabled = true;
            } else {
                // Detener cualquier otra pista individual que se esté reproduciendo en esta cuadrícula
                document.querySelectorAll('.song-option').forEach(option => {
                    if (option.classList.contains('selected')) {
                        option.classList.remove('selected');
                        const icon = option.querySelector('.fa-play, .fa-pause');
                        if (icon) icon.classList.replace('fa-pause', 'fa-play');
                    }
                });
                if (!currentPlayingSelectionAudio.paused) {
                    currentPlayingSelectionAudio.pause();
                    currentPlayingSelectionAudio.currentTime = 0;
                }

                currentPlayingSelectionAudio.src = clickedTrack.baseAudio;
                currentPlayingSelectionAudio.volume = volumeSlider.value / 100;
                currentPlayingSelectionAudio.muted = false;
                currentPlayingSelectionAudio.loop = false; // Reproducir una vez

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
                    songOption.classList.add('selected');
                    selectedBaseTrack = clickedTrack;
                    if (nextToVocalSelectionButton) nextToVocalSelectionButton.disabled = false;
                } catch (e) {
                    console.error("Error reproduciendo base individual:", e);
                    if (playButtonIcon) playButtonIcon.classList.replace('fa-pause', 'fa-play');
                }
            }
        });
    }

    if (vocalTrackSelectionGrid) {
        vocalTrackSelectionGrid.addEventListener('click', async (event) => {
            const songOption = event.target.closest('.song-option');
            if (!songOption) return;

            const songId = songOption.dataset.songId;
            const clickedTrack = songs.find(s => s.id === songId);
            if (!clickedTrack) return;

            const playButtonIcon = songOption.querySelector('.fa-play, .fa-pause');

            // Pausar el audio de fondo aleatorio de la página vocal
            vocalSelectionPageAudio.pause();
            vocalSelectionPageAudio.currentTime = 0;
            vocalSelectionPageAudio.src = ''; // Limpiar fuente

            if (!currentPlayingSelectionAudio) {
                currentPlayingSelectionAudio = new Audio();
            }

            // Si esta pista ya está reproduciéndose, pausarla
            if (currentPlayingSelectionAudio.src.includes(clickedTrack.vocalAudio) &&
                !currentPlayingSelectionAudio.paused) {
                currentPlayingSelectionAudio.pause();
                currentPlayingSelectionAudio.currentTime = 0;
                if (playButtonIcon) playButtonIcon.classList.replace('fa-pause', 'fa-play');
                songOption.classList.remove('selected');
                selectedVocalTrack = null;
                if (nextToMixResultButton) nextToMixResultButton.disabled = true;
            } else {
                // Detener cualquier otra pista individual que se esté reproduciendo
                document.querySelectorAll('.song-option').forEach(option => {
                    if (option.classList.contains('selected')) {
                        option.classList.remove('selected');
                        const icon = option.querySelector('.fa-play, .fa-pause');
                        if (icon) icon.classList.replace('fa-pause', 'fa-play');
                    }
                });
                if (!currentPlayingSelectionAudio.paused) {
                    currentPlayingSelectionAudio.pause();
                    currentPlayingSelectionAudio.currentTime = 0;
                }

                currentPlayingSelectionAudio.src = clickedTrack.vocalAudio;
                currentPlayingSelectionAudio.volume = volumeSlider.value / 100;
                currentPlayingSelectionAudio.muted = false;
                currentPlayingSelectionAudio.loop = false;
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
                    songOption.classList.add('selected');
                    selectedVocalTrack = clickedTrack;
                    if (nextToMixResultButton) nextToMixResultButton.disabled = false;
                } catch (e) {
                    console.error("Error reproduciendo vocal individual:", e);
                    if (playButtonIcon) playButtonIcon.classList.replace('fa-pause', 'fa-play');
                }
            }
        });
    }

    // --- EVENT LISTENERS PARA EL MODO DJ ---
    if (djModeButton) {
        djModeButton.addEventListener('click', () => {
            showPage(djOverlay); // Mostrar el overlay del DJ
        });
    }

    // Permitir salir del modo DJ haciendo click en el overlay
    if (djOverlay) {
        djOverlay.addEventListener('click', (event) => {
            // Asegúrate de que el clic no sea en el contenido interno para evitar cierres accidentales
            if (event.target === djOverlay) {
                stopAllAudio(); // Detener toda la música del DJ
                showPage(homePage); // Volver a la página principal
            }
        });
    }
}); // End of DOMContentLoaded
