import { BACKGROUND_IMAGES, GREETING_EXPR } from "./components/Common.js";

// dom elements
let body = null; // body
let clock = null; // clock
let greet = null; // greeting part

export const runScript = () => {
    body = document.getElementsByTagName("body")[0];
    clock = document.getElementById("clock");
    greet = document.getElementById("greet");

    // greet.innerText = GREETING_EXPR[0] + "Sangheon";
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