export default class GenerateButton{
    constructor({$target}){
        this.container = document.createElement("div");
        this.container.id = "gen-btn";
        this.container.className = "square-box";
        this.container.innerText = "GENERATE PASSWORD";
        $target.appendChild(this.container);
    }
    setState(props){
        
    }
}