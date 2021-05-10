import { loadLogs, updateActiveUserList, updateLogBoard } from "./commFunc.js";

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
        if(g.userList.includes(name)){
            alert(`"${name}" has already used by another user.\nPlease try other one.`);
        }else{
            g.me = name;
            g.userList.push(name);
            g.connectModalContainer.classList.remove("show");
            loadLogs();
            updateLogBoard();
            g.socket.emit("adduser", name);
        }
    }
};