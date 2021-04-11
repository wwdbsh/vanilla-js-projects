export default class Result{
    constructor({$target}){
        this.container = document.createElement("div");
        this.container.id = "result";
        this.container.className = "container";
        $target.appendChild(this.container);

        const result = document.createElement("p");
        result.innerText = "Results will be displayed here";
        this.container.appendChild(result);
    }
}