export default class Screen{
    constructor({$target}){
        this.screen = document.createElement("article");
        $target.appendChild(this.screen);
        this.render();
    }
    render(){
        this.screen.className = "screen";
    }
}