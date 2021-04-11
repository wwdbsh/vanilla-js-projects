export default class Navigation{
    constructor({$target}){
        this.container = document.createElement("div");
        this.container.className = "navigation";
        $target.appendChild(this.container);

        const prevBtn = document.createElement("button");
        prevBtn.id = "prev";
        prevBtn.className = "nav-button";
        this.container.appendChild(prevBtn);

        const prevIcon = document.createElement("i");
        prevIcon.className = "fas fa-arrow-left";
        prevBtn.appendChild(prevIcon);

        const current = document.createElement("p");
        current.id = "current";
        this.container.appendChild(current);

        const nextBtn = document.createElement("button");
        nextBtn.id = "next";
        nextBtn.className = "nav-button";
        this.container.appendChild(nextBtn);

        const nextIcon = document.createElement("i");
        nextIcon.className = "fas fa-arrow-right";
        nextBtn.appendChild(nextIcon);
    }
}