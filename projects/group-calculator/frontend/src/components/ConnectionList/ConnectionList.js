export default class ConnectionList{
    constructor({$target}){
        this.list = document.createElement("ul");
        this.list.className = "user-list";
        this.list.id = "user-list";
        this.list.innerText = "ACTIVE USERS";
        $target.appendChild(this.list);
    }
}