import Screen from "./Screen.js";
import Row from "./Row.js";
import { updateSelectedCount, populateUI } from "../util/CommonFunc.js";

export default class TheaterSection{
    constructor({$target}){
        this.section = document.createElement("section");
        $target.appendChild(this.section);
        this.render();
        populateUI();
    }
    render(){
        const container = document.createElement("article");
        container.className = "container";

        const screen = new Screen({$target:container});

        for(let index = 0; index < 6; index++){
            const row = new Row({$target:container});
        }

        container.addEventListener("click", e => {
            if(e.target.classList.contains("seat") &&
             !e.target.classList.contains("occupied")){
                 e.target.classList.toggle("selected");
            }
            updateSelectedCount();

        });

        this.section.appendChild(container);
    }
}