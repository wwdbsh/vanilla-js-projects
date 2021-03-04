import { CURRENCY_LIST } from "../util/Comm.js";
import { calculate } from "./api/API.js";

export default class BodySection{
    constructor({$target}){
        this.section = document.createElement("section");
        this.section.className = "body-section";
        $target.appendChild(this.section);
        this.render();
    }
    render(){
        const container = document.createElement("article");
        container.className = "container";
        this.section.appendChild(container);
        //

        const currency = document.createElement("article");
        currency.className = "currency";
        container.appendChild(currency);
        //

        const currencyOne = document.createElement("select");
        currencyOne.id = "currency-one";
        CURRENCY_LIST.forEach(cur => {
            const option = document.createElement("option");
            option.value = cur;
            option.innerText = cur;
            if(cur === "USD") option.selected = true;
            currencyOne.appendChild(option);
        });
        currency.appendChild(currencyOne);
        //

        const amountOne = document.createElement("input");
        amountOne.type = "number";
        amountOne.id = "amount-one";
        amountOne.placeholder = "0";
        amountOne.value = "1";
        currency.appendChild(amountOne);
        //

        const swapRateContainer = document.createElement("article");
        swapRateContainer.className = "swap-rate-container";

        const swap = document.createElement("button");
        swap.className = "btn";
        swap.id = "swap";
        swap.innerText = "swap";
        swapRateContainer.appendChild(swap);
        
        const rate = document.createElement("article");
        rate.className = "rate";
        rate.id = "rate";
        swapRateContainer.appendChild(rate);
        
        container.appendChild(swapRateContainer);
        //

        const _currency = document.createElement("article");
        _currency.className = "currency";
        container.appendChild(_currency);
        
        const currencyTwo = document.createElement("select");
        currencyTwo.id = "currency-two";
        CURRENCY_LIST.forEach(cur => {
            const option = document.createElement("option");
            option.value = cur;
            option.innerText = cur;
            if(cur === "EUR") option.selected = true;
            currencyTwo.appendChild(option);
        });
        _currency.appendChild(currencyTwo);
        //

        const amountTwo = document.createElement("input");
        amountTwo.type = "number";
        amountTwo.id = "amount-two";
        amountTwo.placeholder = "0";
        _currency.appendChild(amountTwo);
        //

        const PARAMS = [
            currencyOne,
            currencyTwo,
            amountOne,
            amountTwo,
            rate
        ];

        // event listeners
        currencyOne.addEventListener("change", ()=>calculate(...PARAMS));
        amountOne.addEventListener("input", ()=>calculate(...PARAMS));
        currencyTwo.addEventListener("change", ()=>calculate(...PARAMS));
        amountTwo.addEventListener("input", ()=>calculate(...PARAMS));
        swap.addEventListener("click", () => {
            const temp = currencyOne.value;
            currencyOne.value = currencyTwo.value;
            currencyTwo.value = temp;
            calculate(...PARAMS);
        });
    }
}