export default class TodoBox{
    constructor({$target}){
        this.container = document.createElement("div");
        this.container.className = "todo-container";
        this.container.id = "todo-container";
        $target.appendChild(this.container);
    }
}