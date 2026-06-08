const songs = [
  {
    id: "hawaiian",
    title: "Hawaiian Roller Coaster Ride",
    artist: "Mark Keali'i Ho'omalu",
    image: "assets/images/hawaiian-roller-coaster-ride.jpg",
    fullAudio: "assets/audio/full-tracks/hawaiian-roller-coaster-ride-full.mp3",
    baseAudio: "assets/audio/bases/hawaiian-roller-coaster-ride-base.mp3",
    vocalAudio: "assets/audio/vocals/hawaiian-roller-coaster-ride-vocals.mp3",
    genre: "Soundtrack",
    year: 2002
  },
  {
    id: "love-me-again",
    title: "Love Me Again",
    artist: "John Newman",
    image: "assets/images/love-me-again.jpg",
    fullAudio: "assets/audio/full-tracks/love-me-again-full.mp3",
    baseAudio: "assets/audio/bases/love-me-again-base.mp3",
    vocalAudio: "assets/audio/vocals/love-me-again-vocals.mp3",
    genre: "Soul/Pop",
    year: 2013
  },
  {
    id: "olimpo",
    title: "OLIMPO",
    artist: "Milo J",
    image: "assets/images/olimpo.jpg",
    fullAudio: "assets/audio/full-tracks/olimpo-full.mp3",
    baseAudio: "assets/audio/bases/olimpo-base.mp3",
    vocalAudio: "assets/audio/vocals/olimpo-vocals.mp3",
    genre: "Trap",
    year: 2023
  },
  {
    id: "counting-stars",
    title: "Counting Stars",
    artist: "OneRepublic",
    image: "assets/images/counting-stars.jpg",
    fullAudio: "assets/audio/full-tracks/counting-stars-full.mp3",
    baseAudio: "assets/audio/bases/counting-stars-base.mp3",
    vocalAudio: "assets/audio/vocals/counting-stars-vocals.mp3",
    genre: "Pop Rock",
    year: 2013
  },
  {
    id: "rosa-de-trigo",
    title: "Rosa De Trigo",
    artist: "H.A.",
    image: "assets/images/Rosa-de-trigo.PNG",
    fullAudio: "assets/audio/full-tracks/Rosa-full.mp3",
    baseAudio: "assets/audio/bases/Rosa-base.mp3",
    vocalAudio: "assets/audio/vocals/Rosa-vocals.mp3",
    genre: "Pop",
    year: 2020
  },
  {
    id: "claro-y-oscuro",
    title: "Claro y Oscuro",
    artist: "H.A.",
    image: "assets/images/Claro.PNG",
    fullAudio: "assets/audio/full-tracks/Claro-full.mp3",
    baseAudio: "assets/audio/bases/Claro-base.mp3",
    vocalAudio: "assets/audio/vocals/Claro-vocal.mp3",
    genre: "Pop Urbano",
    year: 2021
  },
  {
    id: "meltdown",
    title: "Meltdown",
    artist: "Hookme",
    image: "assets/images/Meltdown.jpg",
    fullAudio: "assets/audio/full-tracks/meltdown-full.mp3",
    baseAudio: "assets/audio/bases/meltdown-base.mp3",
    vocalAudio: "assets/audio/vocals/meltdown-vocals.mp3",
    genre: "Electronic",
    year: 2022
  },
  {
    id: "washing-machine-heart",
    title: "Washing Machine Heart",
    artist: "Mitski",
    image: "assets/images/Washing.jpg",
    fullAudio: "assets/audio/full-tracks/washing-full.mp3",
    baseAudio: "assets/audio/bases/washing-base.mp3",
    vocalAudio: "assets/audio/vocals/washing-vocals.mp3",
    genre: "Indie Pop",
    year: 2018
  },
  {
    id: "espresso-macchiato",
    title: "Espresso Macchiato",
    artist: "Tommy Cash",
    image: "assets/images/tommy.jpg",
    fullAudio: "assets/audio/full-tracks/Tommy-full.mp3",
    baseAudio: "assets/audio/bases/Tommy-base.mp3",
    vocalAudio: "assets/audio/vocals/Tommy-vocals.mp3",
    genre: "Hip Hop",
    year: 2020
  },
  {
    id: "patapim-funk",
    title: "PATAPIM FUNK",
    artist: "SXYGX",
    image: "assets/images/patapim.PNG",
    fullAudio: "assets/audio/full-tracks/patapim-full.mp3",
    baseAudio: "assets/audio/bases/patapim-base.mp3",
    vocalAudio: "assets/audio/vocals/patapim-vocals.mp3",
    genre: "Funk",
    year: 2023
  },
  {
    id: "rosa-de-trigo-drill",
    title: "Rosa De Trigo Drill",
    artist: "Hodely - H.A.",
    image: "assets/images/Rosadrill.PNG",
    fullAudio: "assets/audio/full-tracks/Rosadrill-full.mp3",
    baseAudio: "assets/audio/bases/Rosadrill-base.mp3",
    vocalAudio: "assets/audio/vocals/Rosadrill-vocals.mp3",
    genre: "Drill",
    year: 2024
  },
  {
    id: "here",
    title: "Here",
    artist: "Alessia Cara",
    image: "assets/images/Here.png",
    fullAudio: "assets/audio/full-tracks/Here-full.mp3",
    baseAudio: "assets/audio/bases/Here-base.mp3",
    vocalAudio: "assets/audio/vocals/Here-vocals.mp3",
    genre: "R&B/Pop",
    year: 2015
  },
  {
    id: "rock-that-body",
    title: "Rock That Body",
    artist: "Black Eyed Peas",
    image: "assets/images/Rockbody.jpg",
    fullAudio: "assets/audio/full-tracks/Rockbody-full.mp3",
    baseAudio: "assets/audio/bases/Rockbody-base.mp3",
    vocalAudio: "assets/audio/vocals/RockBody-vocals.mp3",
    genre: "Hip Hop/Pop",
    year: 2009
  },
  {
    id: "sin-tanto-royo",
    title: "Sin Tanto Royo",
    artist: "Luis R Conriquez x Tito Double P",
    image: "assets/images/Sinrollos.PNG",
    fullAudio: "assets/audio/full-tracks/sinrollos-full.mp3",
    baseAudio: "assets/audio/bases/sinrollo-base.mp3",
    vocalAudio: "assets/audio/vocals/Sinrollo-vocal.mp3",
    genre: "Regional Mexicano",
    year: 2023
  },
  {
    id: "noid",
    title: "Noid",
    artist: "Tyler, the Creator",
    image: "assets/images/Noid.jpg",
    fullAudio: "assets/audio/full-tracks/Noid.mp3",
    baseAudio: "assets/audio/bases/poppop.ai - videoplayback_instrumental.mp3",
    vocalAudio: "assets/audio/vocals/poppop.ai - videoplayback_vocals.mp3",
    genre: "Hip Hop/Jazz Rap",
    year: 2017
  }
];

const $ = (id) => document.getElementById(id);

const pages = {
  home: $("homePage"),
  base: $("baseSelectionPage"),
  vocal: $("vocalSelectionPage"),
  mix: $("mixResultPage")
};

const fullSongGrid = $("fullSongGrid");
const baseTrackSelectionGrid = $("baseTrackSelectionGrid");
const vocalTrackSelectionGrid = $("vocalTrackSelectionGrid");

const searchInput = $("searchInput");
const createButton = $("createButton");
const muteButton = $("muteButton");
const volumeSlider = $("volumeSlider");

const nextToVocalSelectionButton = $("nextToVocalSelectionButton");
const nextToMixResultButton = $("nextToMixResultButton");
const backFromBaseSelectionButton = $("backFromBaseSelectionButton");
const backToBaseSelectionButton = $("backToBaseSelectionButton");
const createNewMixButton = $("createNewMixButton");
const backFromMixResultButton = $("backFromMixResultButton");

const finalBaseArtwork = $("finalBaseArtwork");
const finalVocalArtwork = $("finalVocalArtwork");
const finalBaseTitle = $("finalBaseTitle");
const finalVocalTitle = $("finalVocalTitle");

const baseVolumeSlider = $("baseVolumeSlider");
const vocalVolumeSlider = $("vocalVolumeSlider");
const mixPlayButton = $("mixPlayButton");
const mixProgress = $("mixProgress");
const currentTimeLabel = $("currentTime");
const durationTimeLabel = $("durationTime");

const djModeButton = $("djModeButton");
const djOverlay = $("djOverlay");
const closeDjButton = $("closeDjButton");
const nextDjMixButton = $("nextDjMixButton");
const djCommentary = $("djCommentary");
const nowPlaying = $("nowPlaying");

let selectedBaseTrack = null;
let selectedVocalTrack = null;

let fullAudio = new Audio();
let baseAudio = new Audio();
let vocalAudio = new Audio();
let djBaseAudio = new Audio();
let djVocalAudio = new Audio();

let currentFullSongId = null;
let isMuted = false;
let wasPlayingBeforeSeek = false;
let djTimer = null;

function formatTime(seconds) {
  if (!Number.isFinite(seconds)) return "0:00";
  const min = Math.floor(seconds / 60);
  const sec = Math.floor(seconds % 60).toString().padStart(2, "0");
  return `${min}:${sec}`;
}

function getGlobalVolume() {
  return Number(volumeSlider.value) / 100;
}

function applyVolumes() {
  const global = isMuted ? 0 : getGlobalVolume();

  fullAudio.volume = global;
  baseAudio.volume = global * (Number(baseVolumeSlider.value) / 100);
  vocalAudio.volume = global * (Number(vocalVolumeSlider.value) / 100);
  djBaseAudio.volume = global;
  djVocalAudio.volume = global;

  const icon = muteButton.querySelector("i");

  if (isMuted || global === 0) {
    icon.className = "fas fa-volume-xmark";
  } else if (global < 0.45) {
    icon.className = "fas fa-volume-low";
  } else {
    icon.className = "fas fa-volume-high";
  }
}

function stopAudio(audio) {
  if (!audio) return;
  audio.pause();
  audio.currentTime = 0;
}

function stopAllAudio() {
  [fullAudio, baseAudio, vocalAudio, djBaseAudio, djVocalAudio].forEach(stopAudio);

  clearTimeout(djTimer);
  djTimer = null;

  currentFullSongId = null;
  updatePlayingCards();
  updateMixButton(false);
}

function showPage(pageName) {
  stopAllAudio();

  Object.values(pages).forEach((page) => {
    page.classList.add("hidden");
    page.classList.remove("active");
  });

  pages[pageName].classList.remove("hidden");
  pages[pageName].classList.add("active");

  if (pageName === "home") renderHomeSongs();
  if (pageName === "base") renderSelectionSongs("base");
  if (pageName === "vocal") renderSelectionSongs("vocal");
  if (pageName === "mix") setupMixPage();
}

function getFilteredSongs() {
  const query = searchInput.value.trim().toLowerCase();

  if (!query) return songs;

  return songs.filter((song) => {
    return (
      song.title.toLowerCase().includes(query) ||
      song.artist.toLowerCase().includes(query) ||
      song.genre.toLowerCase().includes(query)
    );
  });
}

function createSongCard(song, options = {}) {
  const card = document.createElement("article");
  card.className = "song-card";
  card.dataset.songId = song.id;

  if (options.selected) card.classList.add("selected");
  if (currentFullSongId === song.id) card.classList.add("playing");

  card.innerHTML = `
    <img 
      src="${song.image}" 
      alt="Portada de ${song.title}" 
      loading="lazy"
      onerror="this.src='assets/images/placeholder.jpg'"
    >

    <div class="play-badge">
      <i class="fas ${currentFullSongId === song.id ? "fa-pause" : "fa-play"}"></i>
    </div>

    <h3 title="${song.title}">${song.title}</h3>
    <p title="${song.artist}">${song.artist}</p>
  `;

  return card;
}

function renderHomeSongs() {
  const filtered = getFilteredSongs();
  fullSongGrid.innerHTML = "";

  if (!filtered.length) {
    fullSongGrid.innerHTML = `<p class="empty">No se encontró ninguna canción.</p>`;
    return;
  }

  filtered.forEach((song) => {
    const card = createSongCard(song);
    card.addEventListener("click", () => toggleFullSong(song));
    fullSongGrid.appendChild(card);
  });
}

function renderSelectionSongs(type) {
  const grid = type === "base" ? baseTrackSelectionGrid : vocalTrackSelectionGrid;
  const selected = type === "base" ? selectedBaseTrack : selectedVocalTrack;

  grid.innerHTML = "";

  songs.forEach((song) => {
    const card = createSongCard(song, {
      selected: selected?.id === song.id
    });

    card.addEventListener("click", () => {
      if (type === "base") {
        selectedBaseTrack = song;
        nextToVocalSelectionButton.disabled = false;
      } else {
        selectedVocalTrack = song;
        nextToMixResultButton.disabled = false;
      }

      previewStem(song, type);
      renderSelectionSongs(type);
    });

    grid.appendChild(card);
  });
}

async function toggleFullSong(song) {
  if (currentFullSongId === song.id && (!baseAudio.paused || !vocalAudio.paused)) {
    stopAudio(baseAudio);
    stopAudio(vocalAudio);
    currentFullSongId = null;
    updatePlayingCards();
    return;
  }

  stopAllAudio();

  currentFullSongId = song.id;

  baseAudio.src = song.baseAudio;
  vocalAudio.src = song.vocalAudio;

  baseAudio.loop = false;
  vocalAudio.loop = false;

  baseAudio.currentTime = 0;
  vocalAudio.currentTime = 0;

  applyVolumes();

  try {
    await Promise.all([
      loadAudio(baseAudio),
      loadAudio(vocalAudio)
    ]);

    await Promise.all([
      baseAudio.play(),
      vocalAudio.play()
    ]);
  } catch (error) {
    console.error("Error reproduciendo canción normal:", error);
    alert("No se pudo reproducir esta canción con base + voz.");
  }

  updatePlayingCards();
}
function updatePlayingCards() {
  document.querySelectorAll(".song-card").forEach((card) => {
    const icon = card.querySelector(".play-badge i");
    const isPlaying = card.dataset.songId === currentFullSongId;

    card.classList.toggle("playing", isPlaying);

    if (icon) {
      icon.className = `fas ${isPlaying ? "fa-pause" : "fa-play"}`;
    }
  });
}

async function previewStem(song, type) {
  stopAudio(fullAudio);

  if (type === "base") {
    stopAudio(vocalAudio);
    baseAudio.src = song.baseAudio;
    baseAudio.loop = true;
    applyVolumes();

    try {
      await baseAudio.play();
    } catch {
      console.warn("No se pudo previsualizar la base.");
    }
  } else {
    stopAudio(baseAudio);
    vocalAudio.src = song.vocalAudio;
    vocalAudio.loop = true;
    applyVolumes();

    try {
      await vocalAudio.play();
    } catch {
      console.warn("No se pudo previsualizar la voz.");
    }
  }
}

async function setupMixPage() {
  if (!selectedBaseTrack || !selectedVocalTrack) {
    showPage("home");
    return;
  }

  finalBaseArtwork.src = selectedBaseTrack.image;
  finalVocalArtwork.src = selectedVocalTrack.image;
  finalBaseTitle.textContent = selectedBaseTrack.title;
  finalVocalTitle.textContent = selectedVocalTrack.title;

  baseAudio.src = selectedBaseTrack.baseAudio;
  vocalAudio.src = selectedVocalTrack.vocalAudio;

  baseAudio.loop = false;
  vocalAudio.loop = false;

  baseAudio.currentTime = 0;
  vocalAudio.currentTime = 0;

  applyVolumes();
  updateMixButton(false);

  mixProgress.value = 0;
  currentTimeLabel.textContent = "0:00";
  durationTimeLabel.textContent = "0:00";

  try {
    await Promise.all([loadAudio(baseAudio), loadAudio(vocalAudio)]);
    durationTimeLabel.textContent = formatTime(getMixDuration());
  } catch (error) {
    console.error(error);
    alert("No se pudieron cargar los audios de la mezcla. Revisa las rutas.");
  }
}

function loadAudio(audio) {
  return new Promise((resolve, reject) => {
    audio.onloadedmetadata = resolve;
    audio.onerror = reject;
    audio.load();
  });
}

function getMixDuration() {
  const durations = [baseAudio.duration, vocalAudio.duration].filter(Number.isFinite);
  return durations.length ? Math.min(...durations) : 0;
}

async function playMix() {
  applyVolumes();

  try {
    await Promise.all([baseAudio.play(), vocalAudio.play()]);
    updateMixButton(true);
    requestAnimationFrame(updateProgress);
  } catch (error) {
    console.error(error);
    alert("No se pudo reproducir la mezcla.");
  }
}

function pauseMix() {
  baseAudio.pause();
  vocalAudio.pause();
  updateMixButton(false);
}

function toggleMix() {
  if (baseAudio.paused && vocalAudio.paused) {
    playMix();
  } else {
    pauseMix();
  }
}

function updateMixButton(isPlaying) {
  if (!mixPlayButton) return;
  const icon = mixPlayButton.querySelector("i");
  if (!icon) return;
  icon.className = `fas ${isPlaying ? "fa-pause" : "fa-play"}`;
}

function updateProgress() {
  const duration = getMixDuration();

  if (!duration) return;

  const current = Math.min(baseAudio.currentTime, vocalAudio.currentTime);
  mixProgress.value = String((current / duration) * 1000);
  currentTimeLabel.textContent = formatTime(current);
  durationTimeLabel.textContent = formatTime(duration);

  if (current >= duration - 0.2) {
    stopAudio(baseAudio);
    stopAudio(vocalAudio);
    updateMixButton(false);
    mixProgress.value = 0;
    currentTimeLabel.textContent = "0:00";
    return;
  }

  if (!baseAudio.paused || !vocalAudio.paused) {
    requestAnimationFrame(updateProgress);
  }
}

function seekMix() {
  const duration = getMixDuration();
  if (!duration) return;

  const newTime = (Number(mixProgress.value) / 1000) * duration;

  baseAudio.currentTime = newTime;
  vocalAudio.currentTime = newTime;
  currentTimeLabel.textContent = formatTime(newTime);
}

function openDjMode() {
  stopAllAudio();
  djOverlay.classList.remove("hidden");
  playNextDjMix();
}

function closeDjMode() {
  djOverlay.classList.add("hidden");
  stopAllAudio();
}

function getRandomDifferentSongs() {
  let base = songs[Math.floor(Math.random() * songs.length)];
  let vocal = songs[Math.floor(Math.random() * songs.length)];

  while (base.id === vocal.id) {
    vocal = songs[Math.floor(Math.random() * songs.length)];
  }

  return { base, vocal };
}

async function playNextDjMix() {
  clearTimeout(djTimer);
  stopAudio(djBaseAudio);
  stopAudio(djVocalAudio);

  const { base, vocal } = getRandomDifferentSongs();

  const comments = [
    `Ahora una mezcla extraña: la base de ${base.title} con la voz de ${vocal.title}. Esto no debería funcionar, pero funciona.`,
    `Melocraft DJ acaba de abrir una puerta morada: ${base.title} debajo y ${vocal.title} flotando arriba.`,
    `Cambio de energía. La base de ${base.artist} se cruza con la voz de ${vocal.artist}.`,
    `La pista se dobla un poco. Suena ${vocal.title} sobre la base de ${base.title}.`,
    `Esto viene raro y bonito: ${base.title} mezclado con ${vocal.title}.`,
    `Base robada del sueño de ${base.artist}, voz invocada desde ${vocal.artist}. Dale volumen.`,
    `Nueva mezcla cocinada en la cueva morada: ${base.title} más ${vocal.title}.`
  ];

  djCommentary.textContent = comments[Math.floor(Math.random() * comments.length)];
  nowPlaying.textContent = `Ahora: base de ${base.title} + voz de ${vocal.title}`;

  djBaseAudio.src = base.baseAudio;
  djVocalAudio.src = vocal.vocalAudio;
  djBaseAudio.loop = true;
  djVocalAudio.loop = true;

  applyVolumes();

  try {
    await Promise.all([loadAudio(djBaseAudio), loadAudio(djVocalAudio)]);
    await Promise.all([djBaseAudio.play(), djVocalAudio.play()]);
  } catch (error) {
    console.error(error);
    nowPlaying.textContent = "No se pudo cargar una pista. Saltando a otra mezcla...";
  }

  djTimer = setTimeout(playNextDjMix, 30000);
}

function on(id, event, callback) {
  const el = document.getElementById(id);
  if (el) el.addEventListener(event, callback);
  else console.warn("No existe el elemento:", id);
}

function bindEvents() {
  on("createButton", "click", () => {
    selectedBaseTrack = null;
    selectedVocalTrack = null;

    const nextBase = document.getElementById("nextToVocalSelectionButton");
    const nextMix = document.getElementById("nextToMixResultButton");

    if (nextBase) nextBase.disabled = true;
    if (nextMix) nextMix.disabled = true;

    showPage("base");
  });

  on("backFromBaseSelectionButton", "click", () => showPage("home"));
  on("backToBaseSelectionButton", "click", () => showPage("base"));
  on("backToVocalSelectionButton", "click", () => showPage("base"));
  on("backFromMixResultButton", "click", () => showPage("home"));

  on("nextToVocalSelectionButton", "click", () => showPage("vocal"));
  on("nextToMixResultButton", "click", () => showPage("mix"));

  on("createNewMixButton", "click", () => {
    selectedBaseTrack = null;
    selectedVocalTrack = null;
    showPage("base");
  });

  on("searchInput", "input", renderHomeSongs);

  on("volumeSlider", "input", () => {
    if (Number(volumeSlider.value) > 0) isMuted = false;
    applyVolumes();
  });

  on("muteButton", "click", () => {
    isMuted = !isMuted;
    applyVolumes();
  });

  on("baseVolumeSlider", "input", applyVolumes);
  on("vocalVolumeSlider", "input", applyVolumes);
  on("mixPlayButton", "click", toggleMix);

  on("mixProgress", "mousedown", () => {
    wasPlayingBeforeSeek = !baseAudio.paused || !vocalAudio.paused;
    pauseMix();
  });

  on("mixProgress", "input", seekMix);

  on("mixProgress", "mouseup", () => {
    if (wasPlayingBeforeSeek) playMix();
  });

  on("djModeButton", "click", openDjMode);
  on("closeDjButton", "click", closeDjMode);
  on("nextDjMixButton", "click", playNextDjMix);

  baseAudio.addEventListener("ended", pauseMix);
  vocalAudio.addEventListener("ended", pauseMix);

  fullAudio.addEventListener("ended", () => {
    currentFullSongId = null;
    updatePlayingCards();
  });
}
document.addEventListener("DOMContentLoaded", () => {
  bindEvents();
  applyVolumes();
  renderHomeSongs();
});
