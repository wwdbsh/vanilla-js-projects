import DisplayPanel from "./DisplayPanel.js";

export default class Generator{
    constructor({$target}){
        this.container = document.createElement("div");
        $target.appendChild(this.container);

        const title = document.createElement("h2");
        title.id = "title";
        title.innerText = "Password Generator";
        this.container.appendChild(title);

        const innerBox = document.createElement("div");
        innerBox.className = "inner-box";
        this.container.appendChild(innerBox);

        const displayPanel = new DisplayPanel({$target:innerBox});

    }
    setState(props){
        this.container.id = props.id;
        this.container.className = props.className;
    }
}