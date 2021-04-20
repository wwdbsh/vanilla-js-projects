export default class Greeting{
    constructor({$target}){
        this.container = document.createElement("div");
        this.container.innerText = "Good morning, Sangheon";
        $target.appendChild(this.container);
    }
    setState(props){
        this.container.className = props.className;
        this.container.id = props.className;
    }
}