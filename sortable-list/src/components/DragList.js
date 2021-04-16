export default class DragList{
    constructor({$target}){
        this.list = document.createElement("ul");
        $target.appendChild(this.list);
    }
    setState(props){
        this.list.className = props.id;
        this.list.id = props.id;
    }
}