export default class Option{
    constructor({$target, value, title}){
        this.option = document.createElement("option");
        this.value = value;
        this.title = title;
        $target.appendChild(this.option);
        this.render();
    }
    render(){
        this.option.value = this.value;
        this.option.innerText = this.title;
    }
}