export default class List{
    constructor({$target}){
        this.container = document.createElement("div");
        $target.appendChild(this.container);

        const list = document.createElement("ul");
        this.container.appendChild(list);
    }
    setState(props){
        this.container.className = props.className;
        this.container.id = props.id;
    }
}