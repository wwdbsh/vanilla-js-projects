export default class Header{
    constructor({$target}){
        this.header = document.createElement("h1");
        $target.appendChild(this.header);
    }
    setState(props){
        this.header.innerText = props.text;
    }
}