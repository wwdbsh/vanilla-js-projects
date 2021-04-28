export default class WeatherContainer{
    constructor({$target}){
        this.container = document.createElement("div");
        this.container.className = "weather-container";
        this.container.id = "weather-container";
        $target.appendChild(this.container);

        const upperBox = document.createElement("div");
        upperBox.className = "weather-upper";
        upperBox.id = "weather-upper";
        this.container.appendChild(upperBox);

        const lowerBox = document.createElement("div");
        lowerBox.className = "weather-lower";
        lowerBox.id = "weather-lower";
        this.container.appendChild(lowerBox);

        const region = document.createElement("span");
        region.className = "weather-region";
        region.id = "weather-region";
        lowerBox.appendChild(region);
    }
}