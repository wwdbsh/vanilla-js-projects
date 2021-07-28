export default class DisplayPanel{
    constructor({$target}){
        this.container = document.createElement("div");
        this.container.id = "display-panel";
        this.container.className = "square-box";
        $target.appendChild(this.container);

        const content = document.createElement("span");
        content.id = "display-content";
        content.className = "display-content";
        content.innerText = "CLICK GENERATE";
        this.container.appendChild(content);
    }
}