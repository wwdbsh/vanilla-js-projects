let word = null;
let text = null;
let scoreEl = null;
let timeEl = null;
let endgameEl = null;
let settingsBtn = null;
let settings = null;
let settingsForm = null;
let difficultySelect = null;

const words = [
    'sigh',
    'tense',
    'airplane',
    'ball',
    'pies',
    'juice',
    'warlike',
    'bad',
    'north',
    'dependent',
    'steer',
    'silver',
    'highfalutin',
    'superficial',
    'quince',
    'eight',
    'feeble',
    'admit',
    'drag',
    'loving'
];

let randomWord;
let score = 0;
let time = 10;
let difficulty =
 localStorage.getItem("difficulty") !== null
  ? localStorage.getItem("difficulty") 
  : "medium";

const getRandomWord = () => {
    return words[Math.floor(Math.random()*words.length)];
};

const addWordToDOM = () => {
    randomWord = getRandomWord();
    word.innerHTML = randomWord;
};

const updateScore = () => {
    score++;
    scoreEl.innerHTML = score;
};

const gameOver = () => {
    endgameEl.innerHTML = `
        <h1>Time ran out</h1>
        <p>Your final score is ${score}</p>
        <button onclick="location.reload()">Reload</button>
    `;
    endgameEl.style.display = "flex";
};

const updateTime = () => {
    time--;
    timeEl.innerText = time + "s";
    if(time === 0){
        clearInterval(timeInterval);
        gameOver();
    }
};

const timeInterval = setInterval(updateTime, 1000);

export const setVariables = () => {
    word = document.getElementById("word");
    text = document.getElementById("text");
    scoreEl = document.getElementById("score");
    timeEl = document.getElementById("time");
    endgameEl = document.getElementById("end-game-container");
    settingsBtn = document.getElementById("settings-btn");
    settings = document.getElementById("settings");
    settingsForm = document.getElementById("settings-form");
    difficultySelect = document.getElementById("difficulty");
    difficultySelect.value = difficulty;
    text.focus();
    addWordToDOM();
};

export const bindEvents = () => {
    text.addEventListener("input", e => {
        const insertedText = e.target.value;
        if(insertedText === randomWord){
            addWordToDOM();
            updateScore();
            e.target.value = "";
            if(difficulty === "hard"){
                time += 2;
            }else if(difficulty === "medium"){
                time += 3;
            }else{
                time += 5;
            }
            updateTime();
        }
    });
    settingsBtn.addEventListener("click", () => {
        settings.classList.toggle("hide");
    });
    settingsForm.addEventListener("change", (e) => {
        difficulty = e.target.value;
        localStorage.setItem("difficulty", difficulty);
    });
};
