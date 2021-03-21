let main = null;
let voicesSelect = null;
let textarea = null;
let readBtn = null;
let toggleBtn = null;
let closeBtn = null;

const data = [
  {
    image: './img/drink.jpg',
    text: "I'm Thirsty"
  },
  {
    image: './img/food.jpg',
    text: "I'm Hungry"
  },
  {
    image: './img/tired.jpg',
    text: "I'm Tired"
  },
  {
    image: './img/hurt.jpg',
    text: "I'm Hurt"
  },
  {
    image: './img/happy.jpg',
    text: "I'm Happy"
  },
  {
    image: './img/angry.jpg',
    text: "I'm Angry"
  },
  {
    image: './img/sad.jpg',
    text: "I'm Sad"
  },
  {
    image: './img/scared.jpg',
    text: "I'm Scared"
  },
  {
    image: './img/outside.jpg',
    text: 'I Want To Go Outside'
  },
  {
    image: './img/home.jpg',
    text: 'I Want To Go Home'
  },
  {
    image: './img/school.jpg',
    text: 'I Want To Go To School'
  },
  {
    image: './img/grandma.jpg',
    text: 'I Want To Go To Grandmas'
  }
];

export const setVariable = () => {
    main = document.querySelector('main');
    voicesSelect = document.getElementById('voices');
    textarea = document.getElementById('text');
    readBtn = document.getElementById('read');
    toggleBtn = document.getElementById('toggle');
    closeBtn = document.getElementById('close');
    data.forEach(createBox);
    getVoices();
};

export const bindEvents = () => {
    speechSynthesis.addEventListener("voiceschanged", getVoices);
    toggleBtn.addEventListener("click", () => {
        document.getElementById("text-box").classList.toggle("show");
    });
    closeBtn.addEventListener("click", () => {
        document.getElementById("text-box").classList.remove("show");
    });
    voicesSelect.addEventListener("change", setVoice);
    readBtn.addEventListener("click", () => {
        setTextMessage(textarea.value);
        speakText();
    });
};

const createBox = item => {
    const box = document.createElement("div");
    const { image, text } = item;
    box.classList.add("box");
    box.innerHTML = `
        <img src="${image}" alt="${text}" />
        <p class="info">${text}</p>
    `;
    box.addEventListener("click", () => {
        setTextMessage(text);
        speakText();
        box.classList.add("active");
        setTimeout(() => box.classList.remove("active"), 800);
    });
    main.appendChild(box);
};

const message = new SpeechSynthesisUtterance();

let voices = [];

const getVoices = () => {
    voices = speechSynthesis.getVoices();
    voices.forEach(voice => {
        const option = document.createElement("option");
        option.value = voice.name;
        option.innerText = `${voice.name} ${voice.lang}`;
        voicesSelect.appendChild(option);
    })
};

const setTextMessage = text => message.text = text;

const speakText = () => speechSynthesis.speak(message);

const setVoice = e => message.voice = voices.find(voice => voice.name === e.target.value);
