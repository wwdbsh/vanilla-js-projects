let wordEl = null;
let wrongLetterEl = null;
let playAgainBtn = null;
let popup = null;
let notification = null;
let finalMessage = null;
let figureParts = null;

const words = ["application", "programming", "interface", "wizard"];
let selectedWord = words[Math.floor(Math.random()*words.length)];
const correctLetters = [];
const wrongLetters = [];

export const setVariable = (word, wrongLetterSection, _popup, _notification) => {
    wordEl = word.wordContainer;
    wrongLetterEl = wrongLetterSection.wlContainer.childNodes[0];
    playAgainBtn = _popup.popupContainer.childNodes[0].childNodes[1];
    popup = _popup.popupContainer;
    notification = _notification.notificationContainer;
    finalMessage = _popup.popupContainer.childNodes[0].childNodes[0];
    figureParts = document.querySelectorAll(".figure-part");
};

export const displayWord = () => {
    wordEl.innerHTML = `
        ${selectedWord
            .split("")
            .map(letter => `
                <span class="letter">
                    ${correctLetters.includes(letter) ? letter : ""}
                </span>
            `
        )
        .join("")}
    `;
    const innerWord = wordEl.innerText.replace(/\n/g, "")
    if(innerWord === selectedWord){
        finalMessage.innerText = "Congratulations! You won!";
        popup.style.display = "flex";
    }
};

const updateWrongLettersEl = () => {
    wrongLetterEl.innerHTML = `
        ${wrongLetters.length > 0 ? "<p>Wrong</p>" : ""}
        ${wrongLetters.map(letter => `<span>${letter}</span>`)}
    `;
    figureParts.forEach((part, index) => {
        const errors = wrongLetters.length;
        if(index < errors){
            part.style.display = "block";
        }else{
            part.style.display = "none"
        }
    });
    if(wrongLetters.length === figureParts.length){
        finalMessage.innerText = "Unfortunately you lost.";
        popup.style.display = "flex";
    }
};

const showNotification = () => {
    notification.classList.add("show");
    setTimeout(() => {
        notification.classList.remove("show");
    }, 2000);
};

export const bindEvents = () => {
    window.addEventListener("keydown", e => {
        if(e.keyCode >= 65 && e.keyCode <= 90){
            const letter = e.key;
            if(selectedWord.includes(letter)){
                if(!correctLetters.includes(letter)){
                    correctLetters.push(letter);
                    displayWord();
                }else{
                    showNotification();
                }
            }else{
                if(!wrongLetters.includes(letter)){
                    wrongLetters.push(letter);
                    updateWrongLettersEl();
                }else{
                    showNotification();
                }
            }
        }
    });
    playAgainBtn.addEventListener("click", () => {
        correctLetters.splice(0);
        wrongLetters.splice(0);

        selectedWord = words[Math.floor(Math.random()*words.length)];
        console.log(selectedWord);
        displayWord();
        updateWrongLettersEl();
        popup.style.display = "none";
    });
};