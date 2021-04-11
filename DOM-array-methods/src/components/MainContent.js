export default class MainContent{
    constructor({$target}){
        this.main = document.createElement("main");
        this.main.id = "main";
        $target.appendChild(this.main);
        this.render();
    }
    render(){
        const h2 = document.createElement("h2");

        const strong = document.createElement("strong");
        strong.innerText = "Person";
        h2.appendChild(strong);
        h2.insertAdjacentText("beforeend", " Wealth");

        this.main.appendChild(h2);
    }
}