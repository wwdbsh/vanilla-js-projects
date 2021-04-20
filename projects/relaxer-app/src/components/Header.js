export default class Header{
    constructor({$target}){
        this.header = document.createElement("h1");
        this.header.innerText = "Relaxer";
        $target.appendChild(this.header);
    }
}