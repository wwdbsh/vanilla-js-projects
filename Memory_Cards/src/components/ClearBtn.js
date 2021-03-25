export default class ClearBtn{
    constructor({$target}){
        this.button = document.createElement("button");
        this.button.id = "clear";
        this.button.className = "clear btn";
        $target.appendChild(this.button);
        
        const icon = document.createElement("i");
        icon.className = "fas fa-trash";
        this.button.appendChild(icon);

        icon.insertAdjacentText("afterend", " Clear Cards");
    }
}