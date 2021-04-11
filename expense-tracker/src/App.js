import { bindEvents, init, setVariable } from "./components/API.js";
import Container from "./components/Container.js";

export default class App{
    constructor($target){
        const title = document.createElement("h2");
        title.innerText = "Expense Tracker";
        $target.appendChild(title);

        const container = new Container({$target});
        setVariable();
        bindEvents();
        init();
    }
}