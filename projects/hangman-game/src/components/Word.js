export default class Word{
    constructor({$target}) {
        this.wordContainer = document.createElement("section");
        this.wordContainer.className = "word";
        this.wordContainer.id = "word";
        $target.appendChild(this.wordContainer);
        this.render();
    }
    render(){
        
    }
}