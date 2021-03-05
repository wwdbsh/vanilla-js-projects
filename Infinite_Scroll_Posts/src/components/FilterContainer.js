export default class FilterContainer{
    constructor({$target}) {
        this.container = document.createElement("section");
        this.container.className = "filter-container";
        $target.appendChild(this.container);
        this.render();
    }
    render(){
        const fInput = document.createElement("input");
        fInput.type ="text";
        fInput.id = "filter";
        fInput.className = "filter";
        fInput.placeholder = "Filter posts...";
        this.container.appendChild(fInput);
    }
}