import Container from "./Container.js";
import { bindEvents, setVariable } from "./script.js";

export default class App{
    constructor($target){
        const container = new Container({$target});
        setVariable();
        bindEvents();
    }
}