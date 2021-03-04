import { updateSelectedCount } from "../components/util/CommonFunc.js";

export default class CountTotalSection{
    constructor({$target}){
        this.section = document.createElement("section");
        $target.appendChild(this.section);
        this.render();
        updateSelectedCount();
    }
    render(){
        const p = document.createElement("p");
        p.className = "text";

        const count = document.createElement("span");
        count.id = "count";
        count.innerText = "0";

        const total = document.createElement("span");
        total.id = "total";
        total.innerText = "0";

        p.appendChild(count);
        count.insertAdjacentHTML("beforebegin","You have selected ");
        p.appendChild(total);
        total.insertAdjacentHTML("beforebegin", " seats for a price of $");

        this.section.appendChild(p);
    }
}