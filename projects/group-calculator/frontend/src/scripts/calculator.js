let g = null;
let stack = [];
let num = null;

export const calculatorInit = g_ => {
    g = g_;
    addEventListeners();
};

const addEventListeners = () => {
    Array.from(g.calKeys).forEach(key =>
         key.addEventListener("click", () => {
            const text = key.innerText;
            switch(text){
                case "AC":
                    g.calDisplay.innerText = "";
                    stack = [];
                    break;
                case "del":
                    g.calDisplay.innerText = g.calDisplay.innerText.slice(0, g.calDisplay.innerText.length-1);
                    stack.pop();
                case "=":
                    break;
                default:
                    if(text.charCodeAt(0) >= 48 && text.charCodeAt(0) <= 57){

                    }else{
                        
                    }
                    g.calDisplay.innerText += text;
                    stack.push(text);
            }
        }));
};