import { commFuncInit } from "./commFunc.js";
import { connectInit } from "./connect.js";

const global = {
    userList:[],
    logList:[],
    // connect modal
    connectModalContainer:null,
    connectInput:null,
    connectBtn:null,
    // disconnect modal
    disconnectBtn:null,
    // active user list
    activeUserDisplay:null,
};

export const init = () => {
    global.connectModalContainer = document.getElementById("connect-modal-container");
    global.connectInput = document.getElementById("connect-input");
    global.connectBtn = document.getElementById("connect-btn");
    global.disconnectBtn = document.getElementById("disconnect-btn");
    global.activeUserDisplay = document.getElementById("user-list");
    commFuncInit(global);
    connectInit(global);
};