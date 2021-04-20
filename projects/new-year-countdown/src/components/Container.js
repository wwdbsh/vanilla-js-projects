export default class Container{
    constructor({$target}){
        this.container = document.createElement("div");
        $target.appendChild(this.container);
    }
    setState(props){
        this.container.id = props.id;
        this.container.className = props.className;
        props.children && props.children.forEach(child => this.container.appendChild(child.container));
    }
}