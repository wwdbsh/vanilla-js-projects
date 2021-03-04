let userData = [];
let main = null;
let addUserBtn = null;
let doubleBtn = null;
let showMillionairesBtn = null;
let sortBtn = null;
let calculateWealthBtn = null;
let section = null;


export const setSection = s => {
    section = s;
    main = section.childNodes[1].childNodes[1];
    [
        addUserBtn,
        doubleBtn,
        showMillionairesBtn,
        sortBtn,
        calculateWealthBtn
    ] = section.childNodes[1].childNodes[0].childNodes;
};

export const getRandomUser = async () => {
    const res = await fetch("https://randomuser.me/api");
    const data = await res.json();
    const user = data.results[0];
    const newUser = {
        name:`${user.name.first} ${user.name.last}`,
        money:Math.floor(Math.random()*1000000)
    };
    addData(newUser);
};

const addData = obj => {
    userData.push(obj);
    updateDOM();
};

const updateDOM = (providedData=userData) => {
    main.innerHTML = "<h2><strong>Person</strong> Wealth</h2>";
    providedData.forEach(item => {
        const element = document.createElement("article");
        element.classList.add("person");
        element.innerHTML = `<strong>${item.name}</strong> ${formatMoney(item.money)}`;
        main.appendChild(element);
    });

};

const formatMoney = (number) => {
    return '$' + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
};

export const doubleMoney = () => {
    userData = userData.map(user => ({...user, money:user.money*2}));
    updateDOM();
};

export const sortByRichest = () => {
    userData.sort((a, b) => b.money - a.money);
    updateDOM();
};

export const showMillionaires = () => {
    userData = userData.filter(user => user.money > 1000000);
    updateDOM();
};

export const calculateWealth = () => {
    const wealth = userData.reduce((acc, user) => (acc+=user.money), 0);
    const wealthEl = document.createElement("article");
    wealthEl.innerHTML = `<h3>Total Wealth: <strong>${formatMoney(wealth)}</strong></h3>`;
    main.appendChild(wealthEl);
};