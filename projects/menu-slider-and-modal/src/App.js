import Body from "./components/Body.js";
import { addEventGenerate, setVariable } from "./components/CommFunc.js";
import Header from "./components/Header.js";
import Modal from "./components/Modal.js";
import NavBar from "./components/NavBar.js";

export default class App{
    constructor($target){
        const navBar = new NavBar({$target});
        const header = new Header({$target});
        const body = new Body({$target});
        const modal = new Modal({$target});
        setVariable(header, modal);
        addEventGenerate();
    }
}