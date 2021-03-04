export default class PopUp{
    constructor({$target}){
        this.popupContainer = document.createElement("section");
        this.popupContainer.className = "popup-container";
        this.popupContainer.id = "popup-container";
        $target.appendChild(this.popupContainer);
        this.render();
    }
    render(){
        const popup = document.createElement("article");
        popup.className = "popup";

        const finalMsg = document.createElement("h2");
        finalMsg.id = "final-message";
        popup.appendChild(finalMsg);

        const playBtn = document.createElement("button");
        playBtn.id = "play-button";
        playBtn.innerText = "Play Again";
        popup.appendChild(playBtn);

        this.popupContainer.appendChild(popup);
    }
}