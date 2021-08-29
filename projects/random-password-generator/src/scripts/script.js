const settingBtns = []; // 0: upper, 1: lower, 2: numbers, 3: symbols
let rangeCtrl = null;
let lenDisplay = null;
let genBtn = null;
let displayContent = null;

let passwordLength = 18;

const options = [
    { // upper
        ascii:[65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90],
        turnOn:false
    },
    { // lower
        ascii:[97, 98 , 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122],
        turnOn:false
    },
    { // number
        ascii:[48, 49, 50, 51, 52, 53, 54, 55, 56, 57],
        turnOn:false
    },
    { // symbol
        ascii:[33, 35, 36, 37, 38, 40, 41, 42, 43, 44, 45, 46, 47, 64, 58, 59, 60, 61, 62, 63, 91, 92, 93, 94, 95, 96, 123, 124, 125, 126],
        turnOn:false
    }
];


export const runScript = () => {
    init();
};

const init = () => {
    [   document.getElementById("upper-btn"),
        document.getElementById("lower-btn"),
        document.getElementById("number-btn"),
        document.getElementById("symbol-btn"),
    ].forEach(btn => settingBtns.push(btn));
    rangeCtrl = document.getElementById("range-controller");
    lenDisplay = document.getElementById("length-value");
    genBtn = document.getElementById("gen-btn");
    displayContent = document.getElementById("display-content");
    addEventListeners();
};

const addEventListeners = () => {
    settingBtns.forEach((btn, index) => {
        btn.addEventListener("click", e => {
            if(btn.classList.contains("active")){
                btn.childNodes[0].classList.remove("active");
                btn.classList.remove("active");
                options[index].turnOn = false;
            }else{
                btn.childNodes[0].classList.add("active");
                btn.classList.add("active");
                options[index].turnOn = true;
            }
        });
    });
    rangeCtrl.addEventListener("change", () => {
        lenDisplay.innerText = rangeCtrl.value;
        passwordLength = rangeCtrl.value;
    });
    genBtn.addEventListener("click", () => displayContent.innerText = generatePassword());
};

const generatePassword = () => {
    let pwd = "";
    if(!options[0].turnOn && !options[1].turnOn && !options[2].turnOn && !options[3].turnOn){
        return "Choose Password Options";
    }
    while(pwd.length < passwordLength){
        const op = Math.floor((Math.random()*4));
        if(options[op].turnOn){
            pwd += String.fromCharCode(options[op].ascii[Math.floor((Math.random()*(options[op].ascii.length)))]);
        }
    }
    return pwd;
};
