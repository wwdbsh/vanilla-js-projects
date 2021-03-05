let balance = null;
let money_plus = null;
let money_minus = null;
let list = null;
let form = null;
let text = null;
let amount = null;

const localStorageTransactions = JSON.parse(
    localStorage.getItem("transactions")
);

let transactions =
 localStorage.getItem("transactions") !== null ?
  localStorageTransactions
   : [];

export const setVariable = () => {
    balance = document.getElementById("balance");
    money_plus = document.getElementById("money-plus");
    money_minus = document.getElementById("money-minus");
    list = document.getElementById("list");
    form = document.getElementById("form");
    text = document.getElementById("text");
    amount = document.getElementById("amount");
};

export const bindEvents = () => {
    form.addEventListener("submit", addTransaction);
};

export const init = () => {
    list.innerHTML = "";
    transactions.forEach(addTransactionDOM);
    updateValues();
};

const addTransaction = (e) => {
    e.preventDefault();
    if(text.value.trim() === "" || amount.value.trim() === ""){
        alert("Please add a text and amount");
    }else{
        const transaction = {
            id:generateID(),
            text:text.value,
            amount:+amount.value
        };
        transactions.push(transaction);
        addTransactionDOM(transaction);
        updateValues();
        updateLocalStorage();
        text.value = "";
        amount.value = "";
    }
};

const generateID = () => {
    return Math.floor(Math.random()*1e9);
};

const removeTransaction = (id) => {
    transactions = transactions.filter(transaction => transaction.id !== id);
    updateLocalStorage();
    init();
};

const addTransactionDOM = (transaction) => {
    const sign = transaction.amount < 0 ? "-" : "+";
    const item = document.createElement("li");
    item.classList.add(transaction.amount < 0 ? "minus" : "plus");
    item.innerHTML = `
        ${transaction.text} <span>${sign}${Math.abs(transaction.amount)}</span>
        <button class="delete-btn">x</button>
    `;
    item.childNodes[3].addEventListener("click", () => removeTransaction(transaction.id));
    list.appendChild(item);
};

const updateValues = () => {
    const amounts = transactions.map(transaction => transaction.amount);
    const total = amounts.reduce((acc, item) => (acc+=item), 0).toFixed(2);
    const income = amounts
        .filter(item => item > 0)
        .reduce((acc, item)=>(acc+=item),0)
        .toFixed(2);
    const expense = (amounts
        .filter(item => item < 0)
        .reduce((acc, item)=>(acc+=item),0)*-1)
        .toFixed(2);
    balance.innerText = `$${total}`;
    money_plus.innerText = `$${income}`;
    money_minus.innerText = `$${expense}`;
};

const updateLocalStorage = () => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
};

