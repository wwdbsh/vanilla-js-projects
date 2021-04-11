import { bindEvents, setVariable } from "./components/CFunc.js";
import Hangman from "./components/Hangman.js";
import Notification from "./components/Notification.js";
import PopUp from "./components/PopUp.js";
import Word from "./components/Word.js";
import WrongLetterSection from "./components/WrongLetterSection.js";

export default class App{
    constructor($target){
        const title = document.createElement("h1");
        title.innerText = "Hangman";
        $target.appendChild(title);

        const order = document.createElement("p");
        order.innerText = "Find the hidden word - Enter a letter";
        $target.appendChild(order);

        const hangman = new Hangman({$target});
        const wrongLetterSection = new WrongLetterSection({$target});
        const word = new Word({$target});
        const popup = new PopUp({$target});
        const notification = new Notification({$target});
        
        setVariable(word, wrongLetterSection, popup, notification);
        bindEvents();
    }
}