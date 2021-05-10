import { loadLogs, updateLogBoard } from "./commFunc.js";

let g = null;

export const connectInit = (g_) => {
    g = g_;
    addEventListeners();
};

const addEventListeners = () => {
    g.connectBtn.addEventListener("click", clickConnectBtn);
    g.connectInput.addEventListener("keyup", (e) => {if(e.key === "Enter")clickConnectBtn();});
};

const clickConnectBtn = () => {
    const name = g.connectInput.value;
    if(name){
        g.connectInput.value = "";
        g.socket.emit("adduser", name);
    }
};