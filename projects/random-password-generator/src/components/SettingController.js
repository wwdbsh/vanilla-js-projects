export default class SettingController{
    constructor(){
        this.container = document.createElement("div");
        this.container.className = "square-box";

        this.title = document.createElement("span");
        this.container.appendChild(this.title);
    }
    setState(props){
        this.title.innerText = props.title;
    }
}