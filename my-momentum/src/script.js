import { BACKGROUND_IMAGES } from "./components/Common.js";

let body = null;
let clock = null;

export const runScript = () => {
    body = document.getElementsByTagName("body")[0];
    clock = document.getElementById("clock");
    
    generateRandomBgImage();
    updateCurrentTime();
};

// get a random background image
const generateRandomBgImage = () => {
    const bgImage = BACKGROUND_IMAGES[Math.floor(Math.random()*BACKGROUND_IMAGES.length)];
    body.style.backgroundImage = `url(./src/img/${bgImage})`;
};

// update current time 
const updateCurrentTime = () => {
    const currentTime = new Date();
    const h = currentTime.getHours();
    const m = currentTime.getMinutes();
    const s = currentTime.getSeconds();
    clock.innerText = `${h < 10 ? "0" + h : h}:${m < 10 ? "0" + m : m}:${s < 10 ? "0"+s : s}`;
};

// perform updateCurrentTime func every second
setInterval(() => {
    updateCurrentTime();
}, 1000);