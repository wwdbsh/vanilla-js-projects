export default class Time{
    constructor({unit}){
        this.container = document.createElement("div");
        this.container.className = "time";
        
        const title = document.createElement("h2");
        title.id = unit;
        title.innerText = "00";
        this.container.appendChild(title);

        const unitStr = document.createElement("small");
        unitStr.innerText = unit;
        this.container.appendChild(unitStr);
    }
}