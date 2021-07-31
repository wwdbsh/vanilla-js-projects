export default class GenerateButton{
    constructor({$target}){
        this.container = document.createElement("div");
        this.container.innerText = "GENERATE PASSWORD";
        $target.appendChild(this.container);
    }
    setState(props){
        
    }
}