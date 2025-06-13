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

let baseSelectionPageAudio = new Audio();
let vocalSelectionPageAudio = new Audio();

let currentPlayingSelectionAudio = null;

let finalBaseAudio = new Audio();
let finalVocalAudio = new Audio();

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
    [globalFeaturedAudioPlayer, baseSelectionPageAudio, vocalSelectionPageAudio,
      currentPlayingSelectionAudio, finalBaseAudio, finalVocalAudio].forEach(player => {
        if (player) {
            player.pause();
            player.currentTime = 0;

            if (player !== globalFeaturedAudioPlayer) {
                player.src = '';
                player.load(); // Llama a load() para resetear completamente el reproductor
            }
        }
    });

    if (finalMixedTrackPlayer) {
        finalMixedTrackPlayer.onplay = null;
        finalMixedTrackPlayer.onpause = null;
        finalMixedTrackPlayer.onseeking = null;
        finalMixedTrackPlayer.onseeked = null;
        finalMixedTrackPlayer.onended = null;
        finalMixedTrackPlayer.src = '';
        finalMixedTrackPlayer.load();
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

    [globalFeaturedAudioPlayer, baseSelectionPageAudio, vocalSelectionPageAudio,
      currentPlayingSelectionAudio].forEach(player => {
        if (player) {
            if (player === globalFeaturedAudioPlayer && newGlobalVolume > 0 && player.muted && !player.paused) {
                 player.muted = false;
                 console.log("Global player desmuteado por ajuste de volumen.");
            }
            player.volume = newGlobalVolume;
        }
    });

    if (finalBaseAudio && baseVolumeSlider) {
        finalBaseAudio.volume = newGlobalVolume * (baseVolumeSlider.value / 100);
    }
    if (finalVocalAudio && vocalVolumeSlider) {
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
 * Reproduce una canción aleatoria completa en la página de inicio.
 * Se inicia SILENCIADA para cumplir con las políticas de autoplay.
 * El usuario debe hacer clic en una canción para escuchar el audio con sonido.
 */
async function playRandomFeaturedSong() {
    globalFeaturedAudioPlayer.pause();
    globalFeaturedAudioPlayer.currentTime = 0;
    globalFeaturedAudioPlayer.src = '';

    const randomIndex = Math.floor(Math.random() * songs.length);
    const randomSong = songs[randomIndex];

    globalFeaturedAudioPlayer.src = randomSong.fullAudio;
    globalFeaturedAudioPlayer.muted = true;
    globalFeaturedAudioPlayer.volume = volumeSlider.value / 100;
    globalFeaturedAudioPlayer.loop = true;

    try {
        await globalFeaturedAudioPlayer.play();
        console.log("Reproduciendo canción destacada aleatoria (silenciada). Haz click en una canción para activar el audio.");

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
 * Reproduce una pista de selección (base o vocal) aleatoria.
 * @param {string} type - 'base' o 'vocal'.
 */
async function playRandomSelectionTrack(type) {
    stopAllAudio(); // Detiene cualquier audio en curso, incluyendo el currentPlayingSelectionAudio

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
    player.muted = false;

    try {
        // Espera a que los metadatos del audio se carguen para poder acceder a 'duration'
        await new Promise((resolve, reject) => {
            player.onloadedmetadata = () => resolve();
            player.onerror = () => reject(new Error('Error al cargar metadatos del audio.'));
            player.load(); // Carga el audio
        });

        player.currentTime = getRandomMiddleTime(player); // Establece el tiempo de inicio aleatorio
        await player.play(); // Reproduce el audio
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
        // Asegúrate de que el icono de play/pause refleje el estado de reproducción
        const icon = selectedOption.querySelector('.fa-play, .fa-pause');
        if (icon) icon.classList.replace('fa-play', 'fa-pause');

        window[selectedTrackVar] = songs.find(s => s.id === randomTrack.id);
        selectionButton.disabled = false;
    }
}


/** Configura y reproduce la mezcla final de base y voz. */
async function setupAndPlayFinalMix() {
    stopAllAudio();

    if (!selectedBaseTrack || !selectedVocalTrack) {
        console.error("No se ha seleccionado la base o la voz para la mezcla final.");
        alert("Por favor, selecciona una base y una voz antes de ver la mezcla.");
        showPage(homePage);
        return;
    }

    finalBaseAudio.src = selectedBaseTrack.baseAudio;
    finalVocalAudio.src = selectedVocalTrack.vocalAudio;

    baseVolumeSlider.value = 100;
    vocalVolumeSlider.value = 100;

    applyGlobalVolume();

    finalBaseArtwork.src = selectedBaseTrack.image;
    finalBaseTitle.textContent = selectedBaseTrack.title;
    finalVocalArtwork.src = selectedVocalTrack.image;
    finalVocalTitle.textContent = selectedVocalTrack.title;

    finalMixedTrackPlayer.src = finalBaseAudio.src;
    finalMixedTrackPlayer.load();

    // Actualizar la barra de progreso personalizada
    finalMixedTrackPlayer.onloadedmetadata = () => {
        seekSlider.max = finalMixedTrackPlayer.duration;
        durationTimeDisplay.textContent = formatTime(finalMixedTrackPlayer.duration);
    };

    finalMixedTrackPlayer.ontimeupdate = () => {
        // Solo actualiza el slider si el usuario no lo está arrastrando
        if (!seekSlider.dragging) {
            seekSlider.value = finalMixedTrackPlayer.currentTime;
        }
        currentTimeDisplay.textContent = formatTime(finalMixedTrackPlayer.currentTime);
    };

    seekSlider.oninput = () => {
        // Mueve el audio a la posición del slider
        finalMixedTrackPlayer.currentTime = seekSlider.value;
    };

    // Flag para saber si el usuario está arrastrando el slider
    seekSlider.onmousedown = () => { seekSlider.dragging = true; };
    seekSlider.onmouseup = () => { seekSlider.dragging = false; };


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


    finalMixedTrackPlayer.onended = () => {
        stopAllAudio();
    };


    try {
        await finalMixedTrackPlayer.play();
    } catch (e) {
        console.warn("Autoplay de mezcla final bloqueado o fallido:", e);
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
    // Es crucial que audioPlayer.duration sea un número válido y mayor que 0
    if (!audioPlayer || isNaN(audioPlayer.duration) || audioPlayer.duration === 0 || audioPlayer.duration === Infinity) {
        console.warn("Duración del audio no disponible o inválida, iniciando desde 0.");
        return 0;
    }

    const duration = audioPlayer.duration;
    const startMiddle = duration * 0.3;
    const endMiddle = duration * 0.7;

    if (endMiddle <= startMiddle) {
        return 0; // Si el rango es inválido o muy corto, inicia desde el principio
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
 * Muestra la página deseada y gestiona el audio de fondo.
 * @param {HTMLElement} pageToShow - El elemento de la sección (página) a mostrar.
 */
function showPage(pageToShow) {
    stopAllAudio(); // Detiene todos los audios al cambiar de página

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

    // Inicia la reproducción de fondo para la nueva página
    if (pageToShow === homePage) {
        playRandomFeaturedSong();
    } else if (pageToShow === baseSelectionPage) {
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

    applyGlobalVolume();

    volumeSlider.addEventListener('input', applyGlobalVolume);
    let previousGlobalVolume = 100;
    muteButton.addEventListener('click', () => {
        if (volumeSlider.value > 0) {
            previousGlobalVolume = volumeSlider.value;
            volumeSlider.value = 0;

            // Asegurarse de mutear/desmutear el reproductor global destacado si está activo
            if (globalFeaturedAudioPlayer && !globalFeaturedAudioPlayer.paused) {
                globalFeaturedAudioPlayer.muted = true;
            }
        } else {
            volumeSlider.value = previousGlobalVolume;

            // Asegurarse de mutear/desmutear el reproductor global destacado si está activo
            if (globalFeaturedAudioPlayer && globalFeaturedAudioPlayer.muted) {
                globalFeaturedAudioPlayer.muted = false;
            }
        }
        applyGlobalVolume();
    });

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

    playRandomFeaturedSong(); // Inicia la reproducción aleatoria en la home al cargar la página

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
        selectedVocalTrack = null;
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
        showPage(baseSelectionPage);
    });

    backFromMixResultButton.addEventListener('click', () => {
        selectedBaseTrack = null;
        selectedVocalTrack = null;
        nextToVocalSelectionButton.disabled = true;
        nextToMixResultButton.disabled = true;
        showPage(homePage);
    });

    // Listeners para la selección de bases y voces (con reproducción al hacer click)
    baseTrackSelectionGrid.addEventListener('click', async (event) => {
        const songOption = event.target.closest('.song-option');
        if (!songOption) return;

        const songId = songOption.dataset.songId;
        const clickedTrack = songs.find(s => s.id === songId);
        if (!clickedTrack) return;

        // Si se hace clic en una opción, paramos la reproducción de fondo y la actual clickeada
        baseSelectionPageAudio.pause(); // Detener la reproducción random de fondo
        baseSelectionPageAudio.currentTime = 0;
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

            // Esperar a que los metadatos se carguen antes de establecer currentTime
            await new Promise((resolve, reject) => {
                currentPlayingSelectionAudio.onloadedmetadata = () => resolve();
                currentPlayingSelectionAudio.onerror = () => reject(new Error('Error al cargar metadatos de la base individual.'));
                currentPlayingSelectionAudio.load();
            });

            currentPlayingSelectionAudio.currentTime = getRandomMiddleTime(currentPlayingSelectionAudio);

            currentPlayingSelectionAudio.play().catch(e => console.error("Error reproduciendo base individual:", e));

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

    vocalTrackSelectionGrid.addEventListener('click', async (event) => {
        const songOption = event.target.closest('.song-option');
        if (!songOption) return;

        const songId = songOption.dataset.songId;
        const clickedTrack = songs.find(s => s.id === songId);
        if (!clickedTrack) return;

       // Si se hace clic en una opción, paramos la reproducción de fondo y la actual clickeada
        vocalSelectionPageAudio.pause(); // Detener la reproducción random de fondo
        vocalSelectionPageAudio.currentTime = 0;
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

            // Esperar a que los metadatos se carguen antes de establecer currentTime
            await new Promise((resolve, reject) => {
                currentPlayingSelectionAudio.onloadedmetadata = () => resolve();
                currentPlayingSelectionAudio.onerror = () => reject(new Error('Error al cargar metadatos de la vocal individual.'));
                currentPlayingSelectionAudio.load();
            });

            currentPlayingSelectionAudio.currentTime = getRandomMiddleTime(currentPlayingSelectionAudio);

            currentPlayingSelectionAudio.play().catch(e => console.error("Error reproduciendo vocal individual:", e));

            // Actualizar icono de play/pause
            if (playButtonIcon) playButtonIcon.classList.replace('fa-play', 'fa-pause');
        }

        // Marcar visualmente la opción seleccionada
        vocalTrackSelectionGrid.querySelectorAll('.song-option').forEach(option => {
            option.classList.remove('selected');
        });
        songOption.classList.add('selected');
        selectedVocalTrack = clickedTrack;
        nextToMixResultButton.disabled = false;
    });
});
