export default class Header1{
    constructor({$target}){
        this.header = document.createElement("h1");
        $target.appendChild(this.header);
    }
    setState(props){
        this.header.innerText = props.title;
    }
}