export default class IncExpContainer{
    constructor({$target}) {
        this.container = document.createElement("section");
        this.container.className = "inc-exp-container";
        $target.appendChild(this.container);
        this.render();
    }
    render(){
        const block1 = document.createElement("article");
        
        const incomeTitle = document.createElement("h4");
        incomeTitle.innerText = "Income";
        block1.appendChild(incomeTitle);

        const moneyPlus = document.createElement("p");
        moneyPlus.id = "money-plus";
        moneyPlus.className = "money plus";
        moneyPlus.innerText = "+$0.00";
        block1.appendChild(moneyPlus);

        this.container.appendChild(block1);
        
        const block2 = document.createElement("article");
        
        const expenseTitle = document.createElement("h4");
        expenseTitle.innerText = "Expense";
        block2.appendChild(expenseTitle);

        const moneyMinus = document.createElement("p");
        moneyMinus.id = "money-minus";
        moneyMinus.className = "money minus";
        moneyMinus.innerText = "-$0.00";
        block2.appendChild(moneyMinus);

        this.container.appendChild(block2);
    }
}