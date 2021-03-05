let musicContainer = null;
let playBtn = null;
let prevBtn = null;
let nextBtn = null;
let audio = null;
let progress = null;
let progressContainer = null;
let title = null;
let cover = null;

const songs = ["hey", "summer", "ukulele"];
let songIndex = 1;

export const setVariable = () => {
    musicContainer = document.getElementById("music-container");
    playBtn = document.getElementById("play");
    prevBtn = document.getElementById("prev");
    nextBtn = document.getElementById("next");
    audio = document.getElementById("audio");
    progress = document.getElementById("progress");
    progressContainer = document.getElementById("progress-container");
    title = document.getElementById("title");
    cover = document.getElementById("cover");
    loadSong(songs[songIndex]);
};

export const bindEvents = () => {
    playBtn.addEventListener("click", () => {
        const isPlaying = musicContainer.classList.contains("play");
        if(isPlaying){
            pauseSong();
        }else{
            playSong();
        }
    });
    prevBtn.addEventListener("click", prevSong);
    nextBtn.addEventListener("click", nextSong);
    audio.addEventListener("timeupdate", updateProgress);
    progressContainer.addEventListener("click", setProgress);
    audio.addEventListener("ended", nextSong);
};

function setProgress(e){
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;
    audio.currentTime = (clickX/width)*duration;
};

const updateProgress = (e) => {
    const {duration, currentTime} = e.srcElement;
    const progressPercent = (currentTime / duration)*100;
    progress.style.width = `${progressPercent}%`;
};

const loadSong = (song) => {
    title.innerText = song;
    audio.src = `music/${song}.mp3`;
    cover.src = `images/${song}.jpg`;
};

const playSong = () => {
    musicContainer.classList.add("play");
    playBtn.querySelector("i.fas").classList.remove("fa-play");
    playBtn.querySelector("i.fas").classList.add("fa-pause");
    audio.play();
};

const pauseSong = () => {
    musicContainer.classList.remove("play");
    playBtn.querySelector("i.fas").classList.add("fa-play");
    playBtn.querySelector("i.fas").classList.remove("fa-pause");
    audio.pause();
};

const prevSong = () => {
    songIndex--;
    if(songIndex < 0){
        songIndex = songs.length-1;
    }
    loadSong(songs[songIndex]);
    playSong();
};

const nextSong = () => {
    songIndex++;
    if(songIndex > songs.length-1){
        songIndex = 0;
    }
    loadSong(songs[songIndex]);
    playSong();
};