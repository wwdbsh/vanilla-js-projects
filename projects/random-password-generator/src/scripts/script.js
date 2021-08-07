const settingBtns = []; // 0: upper, 1: lower, 2: numbers, 3: symbols
let rangeCtrl = null;
let lenDisplay = null;

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
    addEventListeners();
};

const addEventListeners = () => {
    settingBtns.forEach(btn => {
        btn.addEventListener("click", e => {
            if(btn.classList.contains("active")){
                btn.childNodes[0].classList.remove("active");
                btn.classList.remove("active");
            }else{
                btn.childNodes[0].classList.add("active");
                btn.classList.add("active");
            }
            switch(btn.id){
                case "upper-btn":
                    break;
                case "lower-btn":
                    break;
                case "number-btn":
                    break;
                case "symbol-btn":
            }
        });
    });
    rangeCtrl.addEventListener("change", () => lenDisplay.innerText = rangeCtrl.value);
};