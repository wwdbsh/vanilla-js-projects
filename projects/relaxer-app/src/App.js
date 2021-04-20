import Container from "./components/Container.js";
import Header from "./components/Header.js";
import { setDOMInstances } from "./script.js";

export default class App{
    constructor($target){
        const header = new Header({$target});
        const container = new Container({$target});
        setDOMInstances();
    }
}