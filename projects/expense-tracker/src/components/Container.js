import Form from "./Form.js";
import IncExpContainer from "./IncExpContainer.js";

export default class Container{
    constructor({$target}){
        this.container = document.createElement("section");
        this.container.className = "container";
        $target.appendChild(this.container);
        this.render();
    }
    render(){
        const balanceTitle = document.createElement("h4");
        balanceTitle.innerText = "Your Balance";
        this.container.appendChild(balanceTitle);

        const balance = document.createElement("h1");
        balance.id = "balance";
        balance.innerText = "$0.00";
        this.container.appendChild(balance);

        const incExpContainer = new IncExpContainer({$target:this.container});

        const historyTitle = document.createElement("h3");
        historyTitle.innerText = "History";
        this.container.appendChild(historyTitle);

        const list = document.createElement("ul");
        list.id = "list";
        list.className = "list"
        this.container.appendChild(list);

        const addNewTransTitle = document.createElement("h3");
        addNewTransTitle.innerText = "Add new transaction";
        this.container.appendChild(addNewTransTitle);

        const form = new Form({$target:this.container});
    }
}