export default class HeaderSection{
    constructor({$target}){
        this.section = document.createElement("section");
        this.section.className = "header-section";
        $target.appendChild(this.section);
        this.render();
    }
    render(){
        const img = document.createElement("img");
        img.src = "./assets/img/money.png";
        img.alt = "";
        img.className = "money-img";
        this.section.appendChild(img);
        //

        const h1 = document.createElement("h1")
        h1.innerText = "Exchange Rate Calculator";
        this.section.appendChild(h1);
        //

        const p = document.createElement("p");
        p.innerText = "Choose the currency and the amounts to get the exchange rate";
        this.section.appendChild(p);
    }
}