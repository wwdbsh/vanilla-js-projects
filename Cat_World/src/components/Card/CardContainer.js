import Card from "./Card.js";

export default class CardContainer{
    constructor({$target, data, setModal}) {
        this.container = document.createElement("section");
        this.container.className ="card-container";
        this.container.id = "card-container";
        this.data = data;
        this.setModal = setModal;
        this.cardIndex = 0;
        this.chkIndex = [];
        $target.appendChild(this.container);
        if(data !== null) this.render();
    }
    setState(nextData){
        this.cardIndex = 0;
        this.data = nextData;
        this.render();
    }
    render(){
        this.data.forEach((d, index) => {
            const card = new Card({
                $target:this.container,
                data:d
            });
            if(card.card.firstChild.getBoundingClientRect().top <= window.innerHeight){
                const catInfo = card.data;
                const cardImage = card.card.childNodes[0];
                const cardTitle = card.card.childNodes[1];
                const cardArea = card.card.childNodes[2];
                card.card.id = catInfo.id;
                cardImage.src = card.data.url;
                cardTitle.innerText = catInfo.breeds[0].name;
                cardArea.innerText = catInfo.breeds[0].origin;
                this.cardIndex = index;
                this.chkIndex.push(this.cardIndex);
            }else{
                card.card.classList.add("hide");
            }
        });

        // events
        this.container.addEventListener("click", e => {
            const path = e.path;
            const card = path.find(c => c.className === "card");
            if(card){
                this.setModal(this.data.find(cat => cat.id === card.id));
            }
        });
        
        const cards = document.querySelectorAll(".card");
        window.addEventListener("scroll", () => {
            setTimeout(() => {
                // console.log(cards[this.cardIndex+1]);
                if(cards[this.cardIndex+1] !== undefined && this.chkIndex.indexOf(this.cardIndex+1) === -1
                        && cards[this.cardIndex+1].children[0].getBoundingClientRect().top <= window.innerHeight - 20
                ){
                    cards[this.cardIndex+1].classList.remove("hide");
                    const catInfo = this.data[this.cardIndex+1];
                    const cardImage = cards[this.cardIndex+1].children[0];
                    const cardTitle = cards[this.cardIndex+1].children[1];
                    const cardArea = cards[this.cardIndex+1].children[2];
                    cards[this.cardIndex+1].id = catInfo.id;
                    // console.log(cards[this.cardIndex+1].children[0])
                    cardImage.src = this.data[this.cardIndex+1].url;
                    cardTitle.innerText = catInfo.breeds[0].name;
                    cardArea.innerText = catInfo.breeds[0].origin;
                    this.cardIndex++;
                    this.chkIndex.push(this.cardIndex);
                }
            },1500);
        });
    }
}