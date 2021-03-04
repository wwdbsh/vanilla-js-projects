export default class Notification{
    constructor({$target}){
        this.notificationContainer = document.createElement("section");
        this.notificationContainer.className = "notification-container";
        this.notificationContainer.id = "notification-container";
        $target.appendChild(this.notificationContainer);
        this.render();
    }
    render(){
        const notifi = document.createElement("p");
        notifi.innerText = "You have already entered this letter";
        this.notificationContainer.appendChild(notifi);
    }
}