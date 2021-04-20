import Clock from "./components/Clock.js";
import Greeting from "./components/Greeting.js";
import NameModal from "./components/NameModal.js";
import { runScript } from "./script.js";

export default class App{
    constructor($target){
        const clockContainer = new Clock({$target});
        clockContainer.setState({className:"clock-container"});

        const greeting = new Greeting({$target});
        greeting.setState({className:"greet"});

        const nameModal = new NameModal({$target});

        runScript();
    }
}