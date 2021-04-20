export default class Container{
    constructor({$target}){
        this.container = document.createElement("div");
        this.container.className = "container";
        this.container.id = "container";
        $target.appendChild(this.container);

        const circle = document.createElement("div");
        circle.className = "circle";
        this.container.appendChild(circle);

        const text = document.createElement("p");
        text.id = "text";
        this.container.appendChild(text);

        const ptrContainer = document.createElement("div");
        ptrContainer.className = "pointer-container";
        this.container.appendChild(ptrContainer);

        const ptr = document.createElement("span");
        ptr.className = "pointer";
        ptrContainer.appendChild(ptr);

        const grCircle = document.createElement("div");
        grCircle.className = "gradient-circle";
        this.container.appendChild(grCircle);
    }
}