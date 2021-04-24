import { BACKGROUND_IMAGES, GREETING_EXPR, PROVERBS_COLLECTION } from "./components/Common.js";

// dom elements
let body = null; // body
let clock = null; // clock
let greet = null; // greeting part
let innerGreet = null; // inner element of greet
let resetBtn = null; // reset button
let todoBtn = null; // todo button
let date = null; // date

// name modal
let nameModalContainer = null;
let nameModalInput = null;
let nameModalBtn = null;

// todo
let todoContainer = null;

// greeting based on current time
let greetText = null;

// reset modal
let resetModalContainer = null;
let resetModalSubmit = null;
let resetModalCancel = null;


export const runScript = () => {
    body = document.getElementsByTagName("body")[0];
    clock = document.getElementById("clock");
    date = document.getElementById("date");
    greet = document.getElementById("greet");
    nameModalContainer = document.getElementById("name-modal-container");
    nameModalInput = document.getElementById("name-input");
    nameModalBtn = document.getElementById("name-submit-btn");
    resetBtn = document.getElementById("reset-btn");
    todoBtn = document.getElementById("todo-btn");
    resetModalContainer = document.getElementById("reset-modal-container");
    resetModalSubmit = document.getElementById("reset-submit");
    resetModalCancel = document.getElementById("reset-cancel");
    todoContainer = document.getElementById("todo-container");
    
    updateCurrentTime();
    generateRandomBgImage();
    checkRegisteredUser();
    addEventListeners(); // add events
};

// add events
const addEventListeners = () => {
    // reset modal events
    resetBtn.addEventListener("click", () => resetModalContainer.classList.add("show-modal")); // reset button
    resetModalCancel.addEventListener("click", () => resetModalContainer.classList.remove("show-modal")); // reset cancel
    resetModalContainer.addEventListener("click", () => resetModalContainer.classList.remove("show-modal"));
    resetModalSubmit.addEventListener("click", resetLocalStorage); // reset confirm

    // name modal events
    nameModalBtn.addEventListener("click", registerUser); // name modal btn
    nameModalInput.addEventListener("keyup", e => {if(e.keyCode === 13){registerUser()}});

    // todo events
    todoBtn.addEventListener("click", () => todoContainer.classList.toggle("show")); // todo button

    // window events
    window.addEventListener("keyup", e => {
        if(todoContainer.classList.contains("show")){ // todo box
            if(e.key === "Escape"){
                todoContainer.classList.remove("show");
            }
        }
        if(resetModalContainer.classList.contains("show-modal")){ // reset modal
            if(e.key === "Escape"){
                resetModalContainer.classList.remove("show-modal");
            }
        }
    });
};

// reset local storage
const resetLocalStorage = () => {
    localStorage.clear();
    innerGreet.innerText = "";
    resetBtn.classList.remove("show");
    todoBtn.classList.remove("show");
    todoContainer.classList.remove("show");
    resetModalContainer.classList.remove("show-modal");
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
        todoBtn.classList.add("show");
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
        todoBtn.classList.add("show");
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
    const dateString = currentTime.toDateString().split(" ");
    clock.innerText = `${h < 10 ? "0" + h : h}:${m < 10 ? "0" + m : m}:${s < 10 ? "0"+s : s}`;
    date.innerText = `${dateString[1].toUpperCase()} ${dateString[2]}, ${dateString[3]}`;
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