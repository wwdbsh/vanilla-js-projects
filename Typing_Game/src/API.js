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

export const setVariables = () => {
    word = document.getElementById("word");
    text = document.getElementById("text");
    scoreEl = document.getElementById("score");
    timeEl = document.getElementById("time");
    endgameEl = document.getElementById("end-game");
    settingsBtn = document.getElementById("settings-btn");
    settings = document.getElementById("settings");
    settingsForm = document.getElementById("settings-form");
    difficultySelect = document.getElementById("difficulty");
    addWordToDOM();
};

export const bindEvents = () => {
    text.addEventListener("input", e => {
        const insertedText = e.target.value;
        if(insertedText === randomWord){
            addWordToDOM();
            updateScore();
            e.target.value = "";
        }
    });
};