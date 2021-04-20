export default class Button{
    constructor({$target}){
        this.btn = document.createElement("button");
        this.btn.innerText = "Check Order ";
        $target.appendChild(this.btn);
        
        const icon = document.createElement("i");
        icon.className = "fas fa-paper-plane";
        this.btn.appendChild(icon);
    }
    setState(props){
        this.btn.className = props.className;
        this.btn.id = props.id;
    }
}