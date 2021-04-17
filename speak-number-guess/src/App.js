export default class App{
    constructor($target){
        const img = document.createElement("img");
        img.src = "img/mic.png";
        img.alt = "Speak";
        $target.appendChild(img);

        const h1 = document.createElement("h1");
        h1.innerText = "Guess a Number Between 1 - 100";
        $target.appendChild(h1);

        const h3 = document.createElement("h3");
        h3.innerText = "Speak the number into your microphone";
        $target.appendChild(h3);

        const msg = document.createElement("div");
        msg.id = "msg";
        msg.className = "msg";
        $target.appendChild(msg);
    }
}