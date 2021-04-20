export default class Button{
    constructor({$target}){
        this.button = document.createElement("button");
        this.button.id = "settings-btn";
        this.button.className = "settings-btn";

        const i = document.createElement("i");
        i.className = "fas fa-cog";
        this.button.appendChild(i);

        $target.appendChild(this.button);
    }
}