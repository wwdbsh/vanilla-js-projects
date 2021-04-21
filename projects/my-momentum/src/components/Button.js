export default class Button{
    constructor({$target}){
        this.btn = document.createElement("div");
        this.btn.className = "btn";
        $target.appendChild(this.btn);
    }
    setState(props){
        this.btn.classList.add(props.className);
        this.btn.id = props.className;
        this.btn.innerText = props.content;
    }
}