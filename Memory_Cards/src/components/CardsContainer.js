export default class CardsContainer{
    constructor({$target}){
        this.container = document.createElement("div");
        this.container.id = "cards-container";
        this.container.className = "cards";
        $target.appendChild(this.container);
        this.render();
    }
    render(){
        const active = document.createElement("div");
        active.className = "card active";
        this.container.appendChild(active);

        const innerCard1 = document.createElement("div");
        innerCard1.className = "inner-card";
        active.appendChild(innerCard1);

        const innerFront = document.createElement("div");
        innerFront.className = "inner-card-front";
        innerCard1.appendChild(innerFront);

        const p1 = document.createElement("p");
        p1.innerText = "What is PHP?";
        innerFront.appendChild(p1);

        const innerBack = document.createElement("div");
        innerBack.className = "inner-card-back";
        innerCard1.appendChild(innerBack);

        const p2 = document.createElement("p");
        p2.innerText = "A programming language";
        innerBack.appendChild(p2);

        const card = document.createElement("div");
        card.className = "card";
        this.container.appendChild(card);

        const innerCard2 = document.createElement("div");
        innerCard2.className = "inner-card";
        card.appendChild(innerCard2);

        const innerFront2 = document.createElement("div");
        innerFront2.className = "inner-card-front";
        innerCard2.appendChild(innerFront2);

        const p3 = document.createElement("p");
        p3.innerText = "What is PHP?";
        innerFront2.appendChild(p3);

        const innerBack2 = document.createElement("div");
        innerBack2.className = "inner-card-back";
        innerCard2.appendChild(innerBack2);

        const p4 = document.createElement("p");
        p4.innerText = "A programming language";
        innerBack2.appendChild(p4);
    }
}