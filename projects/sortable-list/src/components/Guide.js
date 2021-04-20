export default class Guide{
    constructor({$target}){
        this.container = document.createElement("p");
        $target.appendChild(this.container);
    }
    setState(props){
        this.container.innerText = props.text;
    }
}