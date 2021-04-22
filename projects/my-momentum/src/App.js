import AskingModal from "./components/AskingModal.js";
import Button from "./components/Button.js";
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

        const resetBtn = new Button({$target});
        resetBtn.setState({
            className:"reset-btn",
            content:"Reset",
        });

        const resetModal = new AskingModal({
            $target,
            question:"Are you sure you want to reset?",
            containerName:"reset-modal-container",
            modalName:"reset-modal",
            yes:"reset-submit",
            no:"reset-cancel"
        });

        runScript();
    }
}