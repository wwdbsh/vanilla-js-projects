import { BACKGROUND_IMAGES, GREETING_EXPR } from "./components/Common.js";

// dom elements
let body = null; // body
let clock = null; // clock
let greet = null; // greeting part

// name modal
let nameModalContainer = null;
let nameModalInput = null;
let nameModalBtn = null;

export const runScript = () => {
    body = document.getElementsByTagName("body")[0];
    clock = document.getElementById("clock");
    greet = document.getElementById("greet");
    nameModalContainer = document.getElementById("name-modal-container");
    nameModalInput = document.getElementById("name-input");
    nameModalBtn = document.getElementById("name-submit-btn");
    
    addEventListeners(); // add events
    checkRegisteredUser();
    generateRandomBgImage();
    updateCurrentTime();
};

// add events
const addEventListeners = () => {
    // name modal events
    nameModalBtn.addEventListener("click", registerUser); // name modal btn
    nameModalInput.addEventListener("keyup", e => {if(e.keyCode === 13) registerUser();});
    
    
};

// check if a user is registered
const checkRegisteredUser = () => {
    const user = localStorage.getItem("reg-user");
    if(user){
        nameModalContainer.classList.remove("show-modal");
        greet.innerText = GREETING_EXPR[0] + user;
    }else{
        nameModalContainer.classList.add("show-modal");
    }
};


// register an user
const registerUser = () => {
    const name = nameModalInput.value;
    if(name){
        localStorage.setItem("reg-user", name);
        greet.innerText = GREETING_EXPR[0] + name;
        nameModalContainer.classList.remove("show-modal");
    }
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