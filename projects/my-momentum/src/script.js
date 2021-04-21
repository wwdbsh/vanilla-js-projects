import { BACKGROUND_IMAGES, GREETING_EXPR, PROVERBS_COLLECTION } from "./components/Common.js";

// dom elements
let body = null; // body
let clock = null; // clock
let greet = null; // greeting part
let innerGreet = null; // inner element of greet
let resetBtn = null; // reset button

// name modal
let nameModalContainer = null;
let nameModalInput = null;
let nameModalBtn = null;

// greeting based on current time
let greetText = null; 


export const runScript = () => {
    body = document.getElementsByTagName("body")[0];
    clock = document.getElementById("clock");
    greet = document.getElementById("greet");
    nameModalContainer = document.getElementById("name-modal-container");
    nameModalInput = document.getElementById("name-input");
    nameModalBtn = document.getElementById("name-submit-btn");
    resetBtn = document.getElementById("reset-btn");
    
    generateRandomBgImage();
    updateCurrentTime();
    checkRegisteredUser();
    
    addEventListeners(); // add events
};

// add events
const addEventListeners = () => {
    resetBtn.addEventListener("click", resetLocalStorage); // reset button
    
    // name modal events
    nameModalBtn.addEventListener("click", registerUser); // name modal btn
    nameModalInput.addEventListener("keyup", e => {if(e.keyCode === 13) registerUser();});
};

// reset local storage
const resetLocalStorage = () => {
    localStorage.clear();
    innerGreet.innerText = "";
    resetBtn.classList.remove("show");
    nameModalContainer.classList.add("show-modal");
};

// check if a user is registered
const checkRegisteredUser = () => {
    const user = localStorage.getItem("reg-user");
    if(user){
        nameModalContainer.classList.remove("show-modal");
        greet.innerHTML = `<div class="inner-greet" id="inner-greet">${greetText}${user}</div>`
        innerGreet = document.getElementById("inner-greet");
        innerGreet.addEventListener("mouseover", () => innerGreet.innerText = PROVERBS_COLLECTION[Math.floor(Math.random()*PROVERBS_COLLECTION.length)]);
        innerGreet.addEventListener("mouseleave", () => innerGreet.innerText = greetText + user);
        resetBtn.classList.add("show");
    }else{
        nameModalContainer.classList.add("show-modal");
    }
};

// register an user
const registerUser = () => {
    const name = nameModalInput.value;
    nameModalInput.value = "";
    if(name){
        localStorage.setItem("reg-user", name);
        nameModalContainer.classList.remove("show-modal");
        greet.innerHTML = `<div class="inner-greet" id="inner-greet">${greetText}${name}</div>`
        innerGreet = document.getElementById("inner-greet");
        innerGreet.addEventListener("mouseover", () => innerGreet.innerText = PROVERBS_COLLECTION[Math.floor(Math.random()*PROVERBS_COLLECTION.length)]);
        innerGreet.addEventListener("mouseleave", () => innerGreet.innerText = greetText + name);
        resetBtn.classList.add("show");
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
    if(h >= 6 && h < 12){
        greetText = GREETING_EXPR[0];
    }else if(h >= 12 && h < 18){
        greetText = GREETING_EXPR[1];
    }else if(h >= 18 && h < 21){
        greetText = GREETING_EXPR[2];
    }else{
        greetText = GREETING_EXPR[3];
    }
};

// perform updateCurrentTime func every second
setInterval(() => {
    updateCurrentTime();
}, 1000);