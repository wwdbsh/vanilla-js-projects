export default class Loader{
    constructor({$target}) {
        this.container = document.createElement("section");
        this.container.className = "loader";
        $target.appendChild(this.container);
        this.render();
    }
    render(){
        const circle1 = document.createElement("article");
        circle1.className = "circle";
        this.container.appendChild(circle1);

        const circle2 = document.createElement("article");
        circle2.className = "circle";
        this.container.appendChild(circle2);

        const circle3 = document.createElement("article");
        circle3.className = "circle";
        this.container.appendChild(circle3);
    }
}