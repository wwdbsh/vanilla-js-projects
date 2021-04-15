export default class Spinner{
    constructor({$target}){
        this.spinner = document.createElement("img");
        $target.appendChild(this.spinner);
    }
    setState(props){
        this.spinner.src = props.src;
        this.spinner.alt = props.alt;
        this.spinner.id = props.id;
        this.spinner.className = props.className;
    }
}