export default class ConnectionList{
    constructor({$target}){
        this.list = document.createElement("ul");
        this.list.className = "user-list";
        this.list.id = "user-list";
        this.list.innerText = "ACTIVE USERS";
        $target.appendChild(this.list);

        const user1 = document.createElement("li");
        user1.innerText = "Sangheon";
        this.list.appendChild(user1);

        const user2 = document.createElement("li");
        user2.innerText = "Yuri";
        this.list.appendChild(user2);
    }
}