export default class Card{
    constructor({$target, data}) {
        this.card = document.createElement("article");
        this.card.className = "card";
        this.data = data;
        $target.appendChild(this.card);
        this.render();
    }
    setState(nextData){
        this.data = nextData;
        this.render();
    }
    render(){
        const cardImg = document.createElement("img");
        cardImg.className = "card-image";
        this.card.appendChild(cardImg);

        const cardTitle = document.createElement("h3")
        cardTitle.className = "card-title";
        cardTitle.innerText = "none";
        this.card.appendChild(cardTitle);

        const area = document.createElement("article");
        area.className = "card-area"
        area.innerText = "none";
        this.card.appendChild(area);
    }
}