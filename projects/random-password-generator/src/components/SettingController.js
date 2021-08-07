export default class SettingController{
    constructor(){
        this.container = document.createElement("div");
        this.container.className = "square-box";

        this.title = document.createElement("span");
        this.title.className = "setting-title";
        this.container.appendChild(this.title);

        this.switch = document.createElement("div");
        this.switch.className = "switch-box";
        this.container.appendChild(this.switch);

        this.switchBtn = document.createElement("div");
        this.switchBtn.className = "switch-btn";
        this.switch.appendChild(this.switchBtn);
    }
    setState(props){
        this.title.innerText = props.title;
        this.switch.id = props.switchId;
    }
}