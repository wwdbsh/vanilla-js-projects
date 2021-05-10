import { updateActiveUserList } from "./commFunc.js";

let g = null;

export const disconnectInit = (g_) => {
    g = g_;
    addEventListeners();
};

const addEventListeners = () => {
    g.disconnectBtn.addEventListener("click", showModal);
    g.disconnectNoBtn.addEventListener("click", hideModal);
    g.disconnectModalContainer.addEventListener("click", hideModal);
    g.disconnectYesBtn.addEventListener("click", disconnect);
    window.addEventListener("keyup", (e) => {
        if(g.disconnectModalContainer.classList.contains("show")){
            if(e.key === "Escape"){
                hideModal();
            }
        }
    });
};

const disconnect = () => {
    g.userList = g.userList.filter(name => name !== g.me);
    updateActiveUserList();
    hideModal();
    g.connectModalContainer.classList.add("show");
    g.logBoard.innerHTML = "";
    g.logList = [];
};

const showModal = () => g.disconnectModalContainer.classList.add("show");
const hideModal = () => g.disconnectModalContainer.classList.remove("show");