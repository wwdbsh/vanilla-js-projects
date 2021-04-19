export default class Clock{
    constructor({$target}){
        this.container = document.createElement("div");
        $target.appendChild(this.container);
        
        const clock = document.createElement("h1");
        clock.className = "clock";
        clock.id = "clock";
        clock.innerText = "00:00:00";
        this.container.appendChild(clock);
    }
    setState(props){
        this.container.className = props.className;
        this.container.id = props.className;
    }
}