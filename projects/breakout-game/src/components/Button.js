export default class Button{
    constructor({$target}){
        this.button = document.createElement("button");
        $target.appendChild(this.button);
    }
    setState(props){
        this.button.id = props.id;
        this.button.className = props.className;
        this.button.innerText = props.content;
    }
}