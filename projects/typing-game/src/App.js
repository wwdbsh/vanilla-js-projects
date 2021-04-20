import Button from "./components/Button.js";
import Container from "./components/Container.js";
import Settings from "./components/Settings.js";
import {bindEvents, setVariables} from "./API.js";

export default class App{
    constructor($target){
        const btn = new Button({$target});
        const settings = new Settings({$target});
        const container = new Container({$target});
        setVariables();
        bindEvents();
    }
}