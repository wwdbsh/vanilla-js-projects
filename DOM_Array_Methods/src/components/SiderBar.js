import {
     getRandomUser,
     doubleMoney,
     sortByRichest,
     showMillionaires,
     calculateWealth
    } from "./API.js";

export default class SideBar{
    constructor({$target}){
        this.aside = document.createElement("aside");
        $target.appendChild(this.aside);
        this.render();
    }
    render(){
        const addUserBtn = document.createElement("button");
        addUserBtn.id = "add-user";
        addUserBtn.innerText = "Add User 👱‍♂️";
        this.aside.appendChild(addUserBtn);

        const doubleBtn = document.createElement("button");
        doubleBtn.id = "double";
        doubleBtn.innerText = "Double Money 💰";
        this.aside.appendChild(doubleBtn);

        const showMilBtn = document.createElement("button");
        showMilBtn.id = "show-millionaires";
        showMilBtn.innerText = "Show Only Millionaires 💵";
        this.aside.appendChild(showMilBtn);

        const sortBtn = document.createElement("button");
        sortBtn.id = "sort";
        sortBtn.innerText = "Sort by Richest ↓";
        this.aside.appendChild(sortBtn);

        const calWealthBtn = document.createElement("button");
        calWealthBtn.id = "calculate-wealth";
        calWealthBtn.innerText = "Calculate entire Wealth 🧮";
        this.aside.appendChild(calWealthBtn);

        // event listeners
        addUserBtn.addEventListener("click", getRandomUser);
        doubleBtn.addEventListener("click", doubleMoney);
        sortBtn.addEventListener("click", sortByRichest);
        showMilBtn.addEventListener("click", showMillionaires);
        calWealthBtn.addEventListener("click", calculateWealth);
    }
}