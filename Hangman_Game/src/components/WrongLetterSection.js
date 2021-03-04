export default class WrongLetterSection{
    constructor({$target}){
        this.wlContainer = document.createElement("section");
        this.wlContainer.className = "wrong-letters-container";
        $target.appendChild(this.wlContainer);
        this.render();
    }
    render(){
        const wrongLetters = document.createElement("article");
        wrongLetters.id = "wrong-letters";

        this.wlContainer.appendChild(wrongLetters);
    }
}