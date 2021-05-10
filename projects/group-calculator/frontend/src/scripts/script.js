import { calculatorInit } from "./calculator.js";
import { addLog, commFuncInit, updateActiveUserList, updateLogBoard } from "./commFunc.js";
import { connectInit } from "./connect.js";
import { disconnectInit } from "./disconnect.js";

const globalObj = {
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
    // calculator
    calDisplay:null,
    calKeys:null,
    logBoard:null,
    // socket
    socket:io("http://127.0.0.1:4000")
};

export const init = () => {
    globalObj.connectModalContainer = document.getElementById("connect-modal-container");
    globalObj.connectInput = document.getElementById("connect-input");
    globalObj.connectBtn = document.getElementById("connect-btn");
    globalObj.disconnectBtn = document.getElementById("disconnect-btn");
    globalObj.disconnectModalContainer = document.getElementById("disconnect-modal-container");
    globalObj.disconnectNoBtn = document.getElementById("no-btn");
    globalObj.disconnectYesBtn = document.getElementById("yes-btn");
    globalObj.activeUserDisplay = document.getElementById("user-list");
    globalObj.calDisplay = document.getElementById("cal-display");
    globalObj.calKeys = document.getElementsByClassName("cal-btn");
    globalObj.logBoard = document.getElementById("log-board");
    globalObj.socket.on("sendactiveusers", activeUsers => {
        globalObj.userList = activeUsers;
        updateActiveUserList();
    });
    globalObj.socket.on("updatelog", logObj => {
        addLog(logObj);
        updateLogBoard();
    });
    commFuncInit(globalObj);
    connectInit(globalObj);
    disconnectInit(globalObj);
    calculatorInit(globalObj);
};