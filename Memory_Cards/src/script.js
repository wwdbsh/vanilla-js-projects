let cardsContainer = null;
let prevBtn = null;
let nextBtn = null;
let currentEl = null;
let showBtn = null;
let hideBtn = null;
let questionEl = null;
let answerEl = null;
let addCardBtn = null;
let clearBtn = null;
let addContainer = null;

let currentActiveCard = 0; // keep track of current card
const cardsEl = []; // store DOM cards
let cardsData = null; // store card Data

// const cardsData = [
//   {
//     question: 'What must a variable begin with?',
//     answer: 'A letter, $ or _'
//   },
//   {
//     question: 'What is a variable?',
//     answer: 'Container for a piece of data'
//   },
//   {
//     question: 'Example of Case Sensitive Variable',
//     answer: 'thisIsAVariable'
//   }
// ];

export const setVariable = () => {
    cardsContainer = document.getElementById('cards-container');
    prevBtn = document.getElementById('prev');
    nextBtn = document.getElementById('next');
    currentEl = document.getElementById('current');
    showBtn = document.getElementById('show');
    hideBtn = document.getElementById('hide');
    questionEl = document.getElementById('question');
    answerEl = document.getElementById('answer');
    addCardBtn = document.getElementById('add-card');
    clearBtn = document.getElementById('clear');
    addContainer = document.getElementById('add-container');
    cardsData = getCardsData();
    bindEvents();
    createCards();
};

// event listeners
const bindEvents = () => {
    // next button
    nextBtn.addEventListener("click", () => {
        cardsEl[currentActiveCard].className = "card left";
        currentActiveCard = currentActiveCard + 1;
        if(currentActiveCard > cardsEl.length-1){
            currentActiveCard = cardsEl.length-1;
        }
        cardsEl[currentActiveCard].className = "card active";
        updateCurrentText();
    });
    // prev button
    prevBtn.addEventListener("click", () => {
        cardsEl[currentActiveCard].className = "card right";
        currentActiveCard = currentActiveCard - 1;
        if(currentActiveCard < 0){
            currentActiveCard = 0;
        }
        cardsEl[currentActiveCard].className = "card active";
        updateCurrentText();
    });
    // show add container button
    showBtn.addEventListener("click", () => {
        addContainer.classList.add("show");
    });
    // hide add container button
    hideBtn.addEventListener("click", () => {
        addContainer.classList.remove("show");
    });
    // add new card button
    addCardBtn.addEventListener("click", () => {
        const question = questionEl.value;
        const answer = answerEl.value;
        if(question.trim() && answer.trim()){
            const newCard = {question, answer};
            createCard(newCard);
            questionEl.value = "";
            answerEl.value = "";
            addContainer.classList.remove("show");
            cardsData.push(newCard);
            setCardsData(cardsData);
        }
    });
    // clear cards button
    clearBtn.addEventListener("click", () => {
        localStorage.clear();
        cardsContainer.innerHTML = "";
        window.location.reload();
    });
};

// create all cards
const createCards = () => {
    cardsData.forEach((data, index) => createCard(data, index));
};

// create a single card in DOM
const createCard = (data, index) => {
    const card = document.createElement("div");
    card.classList.add("card");
    
    if(index === 0){
        card.classList.add("active");
    }
    
    card.innerHTML = `
        <div class="inner-card">
            <div class="inner-card-front">
                <p>
                    ${data.question}
                </p>
            </div>
            <div class="inner-card-back">
                <p>
                    ${data.answer}
                </p>
            </div>
        </div>
    `;

    card.addEventListener("click", () => {
        card.classList.toggle("show-answer");
    });

    // add to DOM cards
    cardsEl.push(card);
    cardsContainer.appendChild(card);
    
    updateCurrentText();
};

// show number of cards
const updateCurrentText = () => {
    currentEl.innerText = `${currentActiveCard+1}/${cardsEl.length}`;
};

// get cards from local storage
const getCardsData = () => {
    const cards = JSON.parse(localStorage.getItem("cards"));
    return cards === null ? [] : cards;
};

// add card to local storage
const setCardsData = (cards) => {
    localStorage.setItem("cards", JSON.stringify(cards));
    window.location.reload();
};
