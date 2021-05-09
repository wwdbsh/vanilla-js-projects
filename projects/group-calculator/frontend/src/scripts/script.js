import { commFuncInit } from "./commFunc.js";
import { connectInit } from "./connect.js";
import { disconnectInit } from "./disconnect.js";

const global = {
    me:null,
    userList:[],
    logList:[],
    // connect modal
    connectModalContainer:null,
    connectInput:null,
    connectBtn:null,
    // disconnect modal
    disconnectBtn:null,
    disconnectModalContainer:null,
    disconnectNoBtn:null,
    disconnectYesBtn:null,
    // active user list
    activeUserDisplay:null,
};

export const init = () => {
    global.connectModalContainer = document.getElementById("connect-modal-container");
    global.connectInput = document.getElementById("connect-input");
    global.connectBtn = document.getElementById("connect-btn");
    global.disconnectBtn = document.getElementById("disconnect-btn");
    global.disconnectModalContainer = document.getElementById("disconnect-modal-container");
    global.disconnectNoBtn = document.getElementById("no-btn");
    global.disconnectYesBtn = document.getElementById("yes-btn");
    global.activeUserDisplay = document.getElementById("user-list");
    commFuncInit(global);
    connectInit(global);
    disconnectInit(global);
};