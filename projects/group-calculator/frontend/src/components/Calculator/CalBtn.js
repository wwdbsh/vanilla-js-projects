export default class CalBtn{
    constructor({$target}){
        this.button = document.createElement("div");
        $target.appendChild(this.button);
    }
    setState(props){
        this.button.className = props.className;
        this.button.innerText = props.innerText;
        this.button.id = props.id;
    }
}