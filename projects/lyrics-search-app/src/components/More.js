export default class More{
    constructor({$target}){
        this.container = document.createElement("div");
        this.container.id = "more";
        this.container.className = "container centered";
        $target.appendChild(this.container);
    }
}