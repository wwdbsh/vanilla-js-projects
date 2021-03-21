import TextBox from "./TextBox.js";

export default class Container{
    constructor({$target}){
        this.container = document.createElement("div");
        this.container.className = "container";
        $target.appendChild(this.container);
        this.render();
    }
    render(){
        const h1 = document.createElement("h1");
        h1.innerText = "Speech Text Reader";
        this.container.appendChild(h1);

        const toggleBtn = document.createElement("button");
        toggleBtn.id = "toggle";
        toggleBtn.className = "btn btn-toggle";
        toggleBtn.innerText = "Toggle Text Box";
        this.container.appendChild(toggleBtn);

        const textBox = new TextBox({$target:this.container});

        const main = document.createElement("main");
        this.container.appendChild(main);
    }
}