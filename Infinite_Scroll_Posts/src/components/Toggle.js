export default class Toggle{
    constructor({$target}) {
        this.container = document.createElement("section");
        this.container.className = "toggle-container";
        $target.appendChild(this.container);
        this.render();
    }
    render(){
        const toggle = document.createElement("article");
        toggle.className = "toggle";
        toggle.id = "toggle";
        toggle.innerText = "T";
        this.container.appendChild(toggle);
    }
}