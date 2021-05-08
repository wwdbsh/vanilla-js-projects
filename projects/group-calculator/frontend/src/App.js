import Calculator from "./components/Calculator/Calculator.js";
import ConnectionList from "./components/ConnectionList/ConnectionList.js";
import LogBoard from "./components/LogBoard/LogBoard.js";

export default class App{
    constructor($target){
        const participants = new ConnectionList({$target});
        
        const disconnectBtn = document.createElement("div");
        disconnectBtn.className = "disconnect-btn";
        disconnectBtn.id = "disconnect-btn";
        disconnectBtn.innerText = "disconnect";
        $target.appendChild(disconnectBtn);

        const calculator = new Calculator({$target});

        const logBoard = new LogBoard({$target});
    }
}