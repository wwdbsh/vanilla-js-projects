let msgEl = null;
let randomNum = null;

export const runScript = () => {
    msgEl = document.getElementById("msg");
    randomNum = getRandomNumber();
    console.log(randomNum);
    window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new window.SpeechRecognition;
    // start recognition and game
    recognition.start();
    // speak result
    recognition.addEventListener("result", onSpeak);
    // end SR service
    recognition.addEventListener("end", () => recognition.start());
    
    document.querySelector(".app").addEventListener("click", e => {
        if(e.target.id == "play-again"){
            window.location.reload();
        }
    });
};

// capture user speak
const onSpeak = e => {
    const msg = e.results[0][0].transcript;
    writeMessage(msg);
    checkNumber(msg);
};

// write what user speaks
const writeMessage = msg => {
    msgEl.innerHTML = `
        <div>You said: </div>
        <span class="box">${msg}</span>
    `;
};

// check msg against number
const checkNumber = msg => {
    const num = +msg;
    // check if valid number
    if(Number.isNaN(num)){
        msgEl.innerHTML += "<div>That is not a valid number</div>";
        return;
    }
    // check in range
    if(num > 100 || num < 1){
        msgEl.innerHTML += "<div>Number must be between 1 and 100</div>";
        return;
    }
    // check number
    if(num === randomNum){
        document.querySelector(".app").innerHTML = `
            <h2>Congrats! You have guessed the number! <br><br>
            It was ${num}</h2>
            <button class="play-again" id="play-again">Play Again</button>
        `;
    }else if(num > randomNum){
        msgEl.innerHTML += "<div>GO LOWER</div>";
    }else{
        msgEl.innerHTML += "<div>GO HIGHER</div>";
    }
};

// generate random number
const getRandomNumber = () => {
    return Math.floor(Math.random()*100)+1;
};
