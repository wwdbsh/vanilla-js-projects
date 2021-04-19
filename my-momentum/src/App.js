import Clock from "./components/Clock.js";
import { runScript } from "./script.js";

export default class App{
    constructor($target){
        const clockContainer = new Clock({$target});
        clockContainer.setState({className:"clock-container"});

        runScript();
    }
}