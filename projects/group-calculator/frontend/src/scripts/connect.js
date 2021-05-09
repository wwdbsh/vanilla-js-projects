import { updateActiveUserList } from "./commFunc.js";

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
            g.userList.push(name);
            g.connectModalContainer.classList.remove("show");
            updateActiveUserList();
        }
    }
};