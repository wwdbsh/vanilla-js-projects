let g = null;

export const commFuncInit = g_ => g = g_;

export const updateActiveUserList = () => {
    g.activeUserDisplay.innerHTML = "ACTIVE USERS";
    g.userList.forEach(name => {
        g.activeUserDisplay.innerHTML += (
            name === g.me ?
            `<li class="me">${name}</li>`:
            `<li>${name}</li>`
        );
    });
};

export const saveLogs = () => {
    localStorage.setItem("logs", JSON.stringify(g.logList));
};

export const addLog = log => {
    g.logList.push(log);
    g.logList.sort((a, b) => a.createdAt > b.createdAt);
    if(g.logList.length > 10){
        g.logList = g.logList.slice(1, 11);
    }
    saveLogs();
};

export const updateLogBoard = () => {
    g.logBoard.innerHTML = "";
    g.logList.forEach((item, idx) => {
        const dateObj = new Date(item.createdAt);
        const h = dateObj.getHours();
        const m = dateObj.getMinutes();
        const s = dateObj.getSeconds();
        const dateString = dateObj.toDateString().split(" ");
        const time = `${h < 10 ? "0" + h : h}:${m < 10 ? "0" + m : m}:${s < 10 ? "0"+s : s}`;
        const date = `${dateString[1]} ${dateString[2]}, ${dateString[3]}`;
        g.logBoard.innerHTML += `
            <li>
                <div>${idx+1}. ${item.log}</div>
                created at ${date} ${time}
            </li>
        `;
    });
};

export const loadLogs = () => {
    const loadedLogs = localStorage.getItem("logs");
    localStorage.removeItem("logs");
    if(loadedLogs !== null){
        const parsedLoadedLogs = JSON.parse(loadedLogs);
        parsedLoadedLogs.forEach(item => addLog(item));
    }
};