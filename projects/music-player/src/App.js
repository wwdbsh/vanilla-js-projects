import { bindEvents, setVariable } from "./components/API.js";
import MusicContainer from "./components/MusicContainer.js";

export default class App{
    constructor($target){
        const appTitle = document.createElement("h1");
        appTitle.innerText = "Music Player";
        $target.appendChild(appTitle);
        
        const musicContainer = new MusicContainer({$target});
        setVariable();
        bindEvents();
    }
}