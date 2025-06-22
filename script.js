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
        fullAudio: 'assets/audio/full/Tommy-full.mp3', // Este fullAudio es igual al de Espresso Macchiato, revisa si es intencional.
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

// Elementos de la pantalla de mezcla final
const finalBaseArtwork = document.getElementById('finalBaseArtwork');
const finalBaseTitle = document.getElementById('finalBaseTitle');
const finalVocalArtwork = document.getElementById('finalVocalArtwork');
const finalVocalTitle = document.getElementById('finalVocalTitle');
const mixPlayPauseButton = document.getElementById('mixPlayPauseButton'); // Botón de Play/Pause para la mezcla

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


// --- Variables para el Visualizador de Audio (Web Audio API) ---
let audioContext;
let analyser;
let sourceBase;
let sourceVocal;
let dataArray;
let bufferLength;
const canvas = document.getElementById('audioVisualizerCanvas');
let canvasCtx;
let animationFrameId; // Para controlar el requestAnimationFrame


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
        currentPlayingSelectionAudio,
        finalBaseAudio,
        finalVocalAudio
    ];

    allPlayers.forEach(player => {
        if (player instanceof Audio && !player.paused) {
            player.pause();
            player.currentTime = 0;
            // Limpiar SRC solo si no es el reproductor que se usará inmediatamente después
            // (ej: en la mezcla final, finalBaseAudio y finalVocalAudio se recargan en setupAndPlayFinalMix)
            if (player !== finalBaseAudio && player !== finalVocalAudio) {
                player.src = '';
                player.load();
            }
        }
    });

    // Detener la animación del visualizador
    if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
        animationFrameId = null;
    }
    if (canvasCtx && canvas) { // Asegurarse de que canvas y su contexto existen
        canvasCtx.clearRect(0, 0, canvas.width, canvas.height); // Limpiar el canvas
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
        if (icon) icon.textContent = '▶';
    });

    document.querySelectorAll('.song-option .fa-pause').forEach(icon => {
        icon.classList.replace('fa-pause', 'fa-play');
    });

    // Resetear el botón de play/pause de la mezcla
    if (mixPlayPauseButton) {
        mixPlayPauseButton.querySelector('i').className = 'fas fa-play';
    }
}


function applyGlobalVolume() {
    const newGlobalVolume = volumeSlider.value / 100;

    // Aplicar a los reproductores de selección y destacado
    [globalFeaturedAudioPlayer, baseSelectionPageAudio, vocalSelectionPageAudio].forEach(player => {
        if (player) {
            if (player === globalFeaturedAudioPlayer && newGlobalVolume > 0 && player.muted && !player.paused) {
                 player.muted = false; // Desmutear si el usuario sube el volumen
            }
            player.volume = newGlobalVolume;
        }
    });

    // Aplicar a la canción actualmente reproduciéndose (si es una full song, base o vocal individual)
    if (currentPlayingSelectionAudio) {
        currentPlayingSelectionAudio.volume = newGlobalVolume;
        if (newGlobalVolume > 0 && currentPlayingSelectionAudio.muted && !currentPlayingSelectionAudio.paused) {
            currentPlayingSelectionAudio.muted = false;
        }
    }

    // Asegurarse de que los audios de la mezcla final también ajusten su volumen si están cargados
    if (finalBaseAudio && !finalBaseAudio.paused) {
        const baseIndividualVolume = (baseVolumeSlider ? baseVolumeSlider.value : 100) / 100;
        finalBaseAudio.volume = newGlobalVolume * baseIndividualVolume;
    }
    if (finalVocalAudio && !finalVocalAudio.paused) {
        const vocalIndividualVolume = (vocalVolumeSlider ? vocalVolumeSlider.value : 100) / 100;
        finalVocalAudio.volume = newGlobalVolume * vocalIndividualVolume;
    }

    if (muteButton) { // Asegurarse de que muteButton existe
        if (newGlobalVolume === 0) {
            muteButton.classList.remove('fa-volume-up');
            muteButton.classList.add('fa-volume-mute');
        } else {
            muteButton.classList.remove('fa-volume-mute');
            muteButton.classList.add('fa-volume-up');
        }
    }
}

// Función para inicializar el visualizador
function setupAudioVisualizer() {
    if (!canvas) {
        console.warn("Canvas para visualizador no encontrado (ID: audioVisualizerCanvas).");
        return;
    }
    if (!canvasCtx) { // Inicializa el contexto del canvas solo una vez
        canvasCtx = canvas.getContext('2d');
    }

    // Crea un AudioContext si no existe, o si está cerrado
    if (!audioContext || audioContext.state === 'closed') {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
    }

    // Desconectar y reconectar para evitar múltiples conexiones si la función se llama varias veces.
    // También manejar el caso donde sourceBase/sourceVocal ya existen y tienen sus conexiones.
    if (sourceBase && sourceBase.disconnect) sourceBase.disconnect();
    if (sourceVocal && sourceVocal.disconnect) sourceVocal.disconnect();
    if (analyser && analyser.disconnect) analyser.disconnect();

    try {
        sourceBase = audioContext.createMediaElementSource(finalBaseAudio);
        sourceVocal = audioContext.createMediaElementSource(finalVocalAudio);
    } catch (e) {
        console.error("Error creando MediaElementSource. Asegúrate de que los audios estén cargados y sean válidos.", e);
        return;
    }

    // Crea un AnalyserNode si no existe o si ha sido destruido
    if (!analyser) {
        analyser = audioContext.createAnalyser();
        analyser.fftSize = 256; // Define la calidad del análisis (debe ser potencia de 2)
        bufferLength = analyser.frequencyBinCount; // Número de "barras" que obtendremos
        dataArray = new Uint8Array(bufferLength); // Array para almacenar los datos de frecuencia
    }

    // Conectar las fuentes al analizador, y el analizador al destino (altavoces)
    sourceBase.connect(analyser);
    sourceVocal.connect(analyser);
    analyser.connect(audioContext.destination); // El analizador también envía el audio al destino

    // Iniciar el loop de dibujo del visualizador
    if (!animationFrameId) { // Solo si no está ya animando
        drawVisualizer();
    }
}

// Función para dibujar el visualizador
function drawVisualizer() {
    animationFrameId = requestAnimationFrame(drawVisualizer); // Llama a la función en el siguiente frame

    if (!analyser || !canvasCtx || !dataArray || !canvas) return; // Asegurarse de que todo esté inicializado

    analyser.getByteFrequencyData(dataArray); // Obtiene los datos de frecuencia

    canvasCtx.clearRect(0, 0, canvas.width, canvas.height); // Limpia el canvas

    const barWidth = (canvas.width / bufferLength) * 2.0; // Ancho de cada barra (ajustado para visualización)
    let x = 0;

    for (let i = 0; i < bufferLength; i++) {
        // Reducir la altura máxima para evitar que las barras se salgan del canvas
        const barHeight = dataArray[i] * (canvas.height / 255); // Mapea 0-255 a la altura del canvas

        // Colores de las barras (puedes personalizarlos)
        const hue = i / bufferLength * 360; // Degradado de color
        canvasCtx.fillStyle = `hsl(${hue}, 100%, 50%)`;
        // Dibuja el rectángulo (x, y, ancho, alto)
        canvasCtx.fillRect(x, canvas.height - barHeight, barWidth, barHeight);

        x += barWidth + 1; // Espacio entre barras
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
            finalBaseAudio.onerror = () => reject(new Error(`Error al cargar metadatos de la base: ${selectedBaseTrack.baseAudio}.`));
            finalBaseAudio.load();
        }),
        new Promise((resolve, reject) => {
            finalVocalAudio.onloadedmetadata = () => resolve();
            finalVocalAudio.onerror = () => reject(new Error(`Error al cargar metadatos de la vocal: ${selectedVocalTrack.vocalAudio}.`));
            finalVocalAudio.load();
        })
    ]).catch(error => {
        console.error("Error al cargar uno de los audios de la mezcla final:", error);
        alert("No se pudieron cargar todas las pistas de la mezcla. Verifica las rutas en la consola.");
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

    // Configurar el seekSlider y los displays de tiempo
    const masterDuration = Math.max(finalBaseAudio.duration, finalVocalAudio.duration);
    if (seekSlider) seekSlider.max = masterDuration;
    if (durationTimeDisplay) durationTimeDisplay.textContent = formatTime(masterDuration);

    // Sincronizar la barra de progreso con el finalBaseAudio (maestro de tiempo)
    finalBaseAudio.ontimeupdate = () => {
        if (!seekSlider.dragging && seekSlider) {
            seekSlider.value = finalBaseAudio.currentTime;
        }
        if (currentTimeDisplay) {
            currentTimeDisplay.textContent = formatTime(finalBaseAudio.currentTime);
        }
    };

    if (seekSlider) {
        seekSlider.oninput = () => {
            // Al arrastrar el slider, actualizamos el currentTime de ambos audios
            const newTime = seekSlider.value;
            finalBaseAudio.currentTime = newTime;
            finalVocalAudio.currentTime = newTime;
        };
        seekSlider.onmousedown = () => { seekSlider.dragging = true; };
        seekSlider.onmouseup = () => { seekSlider.dragging = false; };
    }

    // Eventos de control de reproducción para los audios de la mezcla (controlados por finalBaseAudio)
    finalBaseAudio.onplay = () => {
        finalVocalAudio.play().catch(e => console.error("Error reproduciendo vocal:", e));
        if (mixPlayPauseButton) mixPlayPauseButton.querySelector('i').className = 'fas fa-pause';
        // Reanudar AudioContext si es necesario al hacer play
        if (audioContext && audioContext.state === 'suspended') {
            audioContext.resume().catch(e => console.error('Error al reanudar AudioContext en onplay:', e));
        }
    };

    finalBaseAudio.onpause = () => {
        finalVocalAudio.pause();
        if (mixPlayPauseButton) mixPlayPauseButton.querySelector('i').className = 'fas fa-play';
    };

    finalBaseAudio.onseeking = () => {
        finalVocalAudio.currentTime = finalBaseAudio.currentTime;
    };
    finalBaseAudio.onseeked = () => {
        finalVocalAudio.currentTime = finalBaseAudio.currentTime;
    };

    finalBaseAudio.onended = () => {
        stopAllAudio();
        console.log("Mezcla finalizada.");
    };

    // Configuración del visualizador
    setupAudioVisualizer();

    // Intentar reproducir la mezcla automáticamente
    try {
        await finalBaseAudio.play();
        console.log("Autoplay de mezcla final iniciado.");
    } catch (e) {
        console.warn("Autoplay de mezcla final bloqueado o fallido:", e);
        finalBaseAudio.pause();
        finalVocalAudio.pause();
        if (mixPlayPauseButton) mixPlayPauseButton.querySelector('i').className = 'fas fa-play';
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
        return 0; // Inicia desde 0 si la duración no es válida
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
    if (!fullSongGrid) return;
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

    if (!targetGrid) return; // Asegurarse de que la grid existe
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
        if (page) { // Asegurarse de que la página exista
            page.classList.remove('active');
            page.classList.add('hidden');
        }
    });
    if (pageToShow) {
        pageToShow.classList.add('active');
        pageToShow.classList.remove('hidden');
    }


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

    let previousGlobalVolume = 70; // Establece un valor por defecto si no hay slider
    if (volumeSlider) previousGlobalVolume = volumeSlider.value; // Lee el valor inicial

    if (muteButton) {
        muteButton.addEventListener('click', () => {
            if (volumeSlider) {
                if (volumeSlider.value > 0) {
                    previousGlobalVolume = volumeSlider.value;
                    volumeSlider.value = 0;
                } else {
                    volumeSlider.value = previousGlobalVolume;
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

    // Listener para el botón Play/Pause de la mezcla final
    if (mixPlayPauseButton) {
        mixPlayPauseButton.addEventListener('click', async () => {
            if (finalBaseAudio.paused) {
                // Reanudar AudioContext si es necesario al hacer play
                if (audioContext && audioContext.state === 'suspended') {
                    await audioContext.resume().catch(e => console.error('Error al reanudar AudioContext:', e));
                }
                finalBaseAudio.play().catch(e => console.error("Error reproduciendo base:", e));
                finalVocalAudio.play().catch(e => console.error("Error reproduciendo vocal:", e));
            } else {
                finalBaseAudio.pause();
                finalVocalAudio.pause();
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


    // Listener para la reproducción de canciones completas en la homePage
    if (fullSongGrid) {
        fullSongGrid.addEventListener('click', async (event) => {
            const songItem = event.target.closest('.full-song-item');
            if (!songItem) return;

            const songId = songItem.dataset.songId;
            const clickedSong = songs.find(s => s.id === songId);
            if (!clickedSong) return;

            const playPauseIcon = songItem.querySelector('.play-pause-overlay .icon');

            // Pausar el globalFeaturedAudioPlayer si está activo
            if (globalFeaturedAudioPlayer && !globalFeaturedAudioPlayer.paused) {
                globalFeaturedAudioPlayer.pause();
                globalFeaturedAudioPlayer.currentTime = 0;
                globalFeaturedAudioPlayer.src = '';
            }

            if (!currentPlayingSelectionAudio || !(currentPlayingSelectionAudio instanceof Audio)) {
                currentPlayingSelectionAudio = new Audio();
            }

            if (currentPlayingSelectionAudio.src.includes(clickedSong.fullAudio) && !currentPlayingSelectionAudio.paused) {
                currentPlayingSelectionAudio.pause();
                if (playPauseIcon) playPauseIcon.textContent = '▶';
                songItem.classList.remove('playing');
            } else {
                if (!currentPlayingSelectionAudio.paused) {
                    currentPlayingSelectionAudio.pause();
                    currentPlayingSelectionAudio.currentTime = 0;
                    document.querySelectorAll('.full-song-item.playing').forEach(item => {
                        item.classList.remove('playing');
                        const icon = item.querySelector('.play-pause-overlay .icon');
                        if (icon) icon.textContent = '▶';
                    });
                }

                currentPlayingSelectionAudio.src = clickedSong.fullAudio;
                currentPlayingSelectionAudio.load(); // Cargar la nueva fuente

                currentPlayingSelectionAudio.volume = volumeSlider.value / 100;
                currentPlayingSelectionAudio.muted = false; // ¡Importante!
                currentPlayingSelectionAudio.loop = true;

                try {
                    await new Promise((resolve, reject) => {
                        currentPlayingSelectionAudio.onloadedmetadata = () => resolve();
                        currentPlayingSelectionAudio.onerror = () => reject(new Error(`Error al cargar metadatos de ${clickedSong.fullAudio}.`));
                    });

                    // Resume AudioContext si está suspendido, especialmente en la primera interacción
                    if (audioContext && audioContext.state === 'suspended') {
                        await audioContext.resume();
                    }

                    currentPlayingSelectionAudio.currentTime = getRandomMiddleTime(currentPlayingSelectionAudio);
                    await currentPlayingSelectionAudio.play();
                    if (playPauseIcon) playPauseIcon.textContent = '⏸';
                    songItem.classList.add('playing');
                    console.log(`Reproduciendo canción completa: ${clickedSong.title}`);
                } catch (e) {
                    console.error("Error reproduciendo canción completa individual:", e);
                    if (playPauseIcon) playPauseIcon.textContent = '▶';
                    songItem.classList.remove('playing');
                    alert("No se pudo reproducir la música. El navegador puede haber bloqueado el autoplay.");
                }
            }
        });
    }

    // Listeners para la selección de bases y voces (con reproducción al hacer click)
    if (baseTrackSelectionGrid) {
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

            if (!currentPlayingSelectionAudio || !(currentPlayingSelectionAudio instanceof Audio)) {
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
                currentPlayingSelectionAudio.load();

                currentPlayingSelectionAudio.volume = volumeSlider.value / 100;
                currentPlayingSelectionAudio.muted = false;
                currentPlayingSelectionAudio.loop = true;

                try {
                    await new Promise((resolve, reject) => {
                        currentPlayingSelectionAudio.onloadedmetadata = () => resolve();
                        currentPlayingSelectionAudio.onerror = () => reject(new Error(`Error al cargar metadatos de ${clickedTrack.baseAudio}.`));
                    });

                    // Resume AudioContext si está suspendido
                    if (audioContext && audioContext.state === 'suspended') {
                        await audioContext.resume();
                    }

                    currentPlayingSelectionAudio.currentTime = getRandomMiddleTime(currentPlayingSelectionAudio);

                    await currentPlayingSelectionAudio.play();
                    if (playButtonIcon) playButtonIcon.classList.replace('fa-play', 'fa-pause');
                    console.log(`Reproduciendo base individual: ${clickedTrack.title}`);
                } catch (e) {
                    console.error("Error reproduciendo base individual:", e);
                    if (playButtonIcon) playButtonIcon.classList.replace('fa-pause', 'fa-play');
                    alert("No se pudo reproducir la música. El navegador puede haber bloqueado el autoplay.");
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

            // Pausar el audio aleatorio de fondo de la página de voces
            vocalSelectionPageAudio.pause();
            vocalSelectionPageAudio.currentTime = 0;
            vocalSelectionPageAudio.src = '';

            if (!currentPlayingSelectionAudio || !(currentPlayingSelectionAudio instanceof Audio)) {
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
                currentPlayingSelectionAudio.load();

                currentPlayingSelectionAudio.volume = volumeSlider.value / 100;
                currentPlayingSelectionAudio.muted = false;
                currentPlayingSelectionAudio.loop = true;

                try {
                    await new Promise((resolve, reject) => {
                        currentPlayingSelectionAudio.onloadedmetadata = () => resolve();
                        currentPlayingSelectionAudio.onerror = () => reject(new Error(`Error al cargar metadatos de ${clickedTrack.vocalAudio}.`));
                    });

                    // Resume AudioContext si está suspendido
                    if (audioContext && audioContext.state === 'suspended') {
                        await audioContext.resume();
                    }

                    currentPlayingSelectionAudio.currentTime = getRandomMiddleTime(currentPlayingSelectionAudio);

                    await currentPlayingSelectionAudio.play();
                    if (playButtonIcon) playButtonIcon.classList.replace('fa-play', 'fa-pause');
                    console.log(`Reproduciendo vocal individual: ${clickedTrack.title}`);
                } catch (e) {
                    console.error("Error reproduciendo vocal individual:", e);
                    if (playButtonIcon) playButtonIcon.classList.replace('fa-pause', 'fa-play');
                    alert("No se pudo reproducir la música. El navegador puede haber bloqueado el autoplay.");
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

    // Inicializar AudioContext en la primera interacción del usuario en el cuerpo del documento
    // Esto es crucial para cumplir con las políticas de autoplay de los navegadores.
    document.body.addEventListener('click', () => {
        if (!audioContext) {
            audioContext = new (window.AudioContext || window.webkitAudioContext)();
        }
        if (audioContext.state === 'suspended') {
            audioContext.resume().then(() => {
                console.log('AudioContext reanudado con éxito por interacción del usuario.');
            }).catch(e => console.error('Error al reanudar AudioContext en la primera interacción:', e));
        }
    }, { once: true }); // Este listener solo se activa una vez
});
