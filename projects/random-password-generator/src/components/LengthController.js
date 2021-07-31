export default class LenghController{
    constructor(){
        this.container = document.createElement("div");
        this.container.className = "square-box length-box";

        const lenMin = document.createElement("span");
        lenMin.innerText = "4";
        this.container.appendChild(lenMin);
        
        const range = document.createElement("input");
        range.id = "range-controller";
        range.className = "range-controller";
        range.type = "range";
        range.min = "4";
        range.max = "32";
        range.defaultValue = "18"
        this.container.appendChild(range);
        
        const lenMax = document.createElement("span");
        lenMax.innerText = "32";
        this.container.appendChild(lenMax);
    }
    setState(props){

    }
}