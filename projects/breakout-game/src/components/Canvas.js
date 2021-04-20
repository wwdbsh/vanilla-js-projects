export default class Canvas{
    constructor({$target}){
        this.canvas = document.createElement("canvas");
        $target.appendChild(this.canvas);
    }
    setState(props){
        this.canvas.id = props.id;
        this.canvas.width = props.width;
        this.canvas.height = props.height;
    }
}