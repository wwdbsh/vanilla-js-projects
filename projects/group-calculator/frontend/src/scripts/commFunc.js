let g = null;

export const commFuncInit = g_ => g = g_;

export const updateActiveUserList = () => {
    g.activeUserDisplay.innerHTML = "ACTIVE USERS";
    g.userList.forEach(name => g.activeUserDisplay.innerHTML += `<li>${name}</li>`);
};