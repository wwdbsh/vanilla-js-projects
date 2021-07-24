export default class Generator{
    constructor({$target}){
        this.container = document.createElement("div");
        $target.appendChild(this.container);

        const title = document.createElement("h2");
        title.innerText = "Password Generator";
        this.container.appendChild(title);
    }
    setState(props){
        this.container.id = props.id;
        this.container.className = props.className;
    }
}