import { addLog, updateLogBoard } from "./commFunc.js";

let g = null;
let expression = [];
let result = null;
let num = "";

export const calculatorInit = g_ => {
    g = g_;
    addEventListeners();
};

const addEventListeners = () => {
    Array.from(g.calKeys).forEach(key =>
         key.addEventListener("click", () => {
            const text = key.innerText;
            const displayText = g.calDisplay.innerText;
            switch(text){
                case "AC":
                    clearResult();
                    expression = [];
                    g.calDisplay.innerText = "";
                    num = "";
                    break;
                case "del":
                    alert("it's not working. sorry :)");
                    // clearResult();
                    // g.calDisplay.innerText = displayText.slice(0, displayText.length-1);
                    // if(expression.length > 0){
                    //     let lastEl = expression[expression.length-1];
                    //     expression.pop();
                    //     if(!isOp(lastEl)){
                    //         lastEl = lastEl.slice(0, lastEl.length-1);
                    //         console.log(lastEl);
                    //         if(lastEl !== ""){
                    //             expression.push(lastEl);
                    //         }
                    //     }
                    // }
                    break;
                case "=":
                    if(
                        displayText === "" ||
                        displayText[displayText.length-1] === "." ||
                        !isDigit(displayText[displayText.length-1])
                    ){
                        alert(`can't calcuate with this ${displayText}`);
                    }else{
                        expression.push(num);
                        num = ""; 
                        result = getResult();
                        g.calDisplay.innerText = result;
                        const logObj = {
                            log:`<strong>${g.me}</strong>: ${displayText}=${result}`,
                            createdAt:new Date()
                        };
                        addLog(logObj);
                        updateLogBoard();
                    }
                    break;
                default: // push into expression
                    clearResult();
                    if(isDigit(text)){
                        num += text;
                        g.calDisplay.innerText += text;
                    }else if(text === "."){
                        if(
                            displayText === "" ||
                            !isDigit(displayText[displayText.length-1])
                        ){
                            alert("a digit has to be positioned in front of \".\"\nso, you can't enter it now");
                        }else{
                            num += text;
                            g.calDisplay.innerText += text;
                        }                        
                    }else{ // +-/x%
                        if(
                            displayText === "" ||
                            !isDigit(displayText[displayText.length-1]) ||
                            displayText[displayText.length-1] === "."
                        ){
                            alert(`a digit has to be positioned in front of "${text}"\nso, you can't enter it now`);
                        }else{
                            if(num !== "") expression.push(num);
                            expression.push(text);
                            g.calDisplay.innerText += text;
                            num = "";
                        }
                    }
            }
        }));
};

const isDigit = c => {
    return c.charCodeAt(0) >= 48 && c.charCodeAt(0) <= 57
};

const isOp = c => {
    return (
        c === "x" ||
        c === "/" ||
        c === "%" ||
        c === "+" ||
        c === "-"
    );
};

const clearResult = () => {
    if(result !== null){
        g.calDisplay.innerText = "";
        expression = [];
        result = null;
    }
};

const getOpWeight = op => {
    switch(op){
        case "+":
        case "-":
            return 1;
        default:
            return 2;
    }
};

const compareOps = (op1, op2) => {
    const op1w = getOpWeight(op1);
    const op2w = getOpWeight(op2);
    if(op1w > op2w){
        return 1;
    }else if(op1w < op2w){
        return -1;
    }else{
        return 0;
    }
};

const getResult = () => {
    const stack = [];
    const convExpression = [];
    // convert expression to RPN expression
    for(let i = 0; i < expression.length; i++){
        const tok = expression[i];
        if(isOp(tok)){
            while(stack.length !== 0 && compareOps(stack[stack.length-1], tok) >= 0){
                convExpression.push(stack.pop());
            }
            stack.push(tok);
        }else{
            convExpression.push(tok);
        }
    }
    while(stack.length !== 0){
        convExpression.push(stack.pop());
    }
    return evalRPNExp(convExpression);
};

const evalRPNExp = expr => {
    const stack = [];
    for(let i = 0; i < expr.length; i++){
        const tok = expr[i];
        if(isOp(tok)){
            const num2 = stack.pop();
            const num1 = stack.pop();
            switch(tok){
                case "+":
                    stack.push(num1+num2);
                    break;
                case "-":
                    stack.push(num1-num2);
                    break;
                case "x":
                    stack.push(num1*num2);
                    break;
                case "/":
                    stack.push(num1/num2);
                    break;
                case "%":
                    stack.push(num1%num2);
            }
        }else{
            stack.push(parseFloat(tok));
        }
    }
    return stack.pop();
};