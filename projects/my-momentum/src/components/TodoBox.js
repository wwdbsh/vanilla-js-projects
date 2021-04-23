import Button from "./Button.js";

export default class TodoBox{
    constructor({$target}){
        this.container = document.createElement("div");
        this.container.className = "todo-container";
        this.container.id = "todo-container";
        $target.appendChild(this.container);

        const nav = document.createElement("div");
        nav.className = "todo-nav";
        nav.id = "todo-nav";
        this.container.appendChild(nav);

        const navTable = document.createElement("table");
        nav.appendChild(navTable);

        const tr = document.createElement("tr");
        navTable.appendChild(tr);

        const pending = document.createElement("td");
        pending.innerText = "Pending";
        pending.className = "pending-nav";
        pending.id = "pending-nav";
        tr.appendChild(pending);
        
        const completed = document.createElement("td");
        completed.innerText = "Completed"
        completed.className = "completed-nav";
        completed.id = "completed-nav";
        tr.appendChild(completed);

        const enterLine = document.createElement("div");
        enterLine.className = "enter-line";
        enterLine.id = "enter-line";
        this.container.appendChild(enterLine);

        const enter = document.createElement("input");
        enter.type = "text";
        enter.className = "todo-input";
        enter.id = "todo-input";
        enter.placeholder = "New todo";
        enterLine.appendChild(enter);

        const addBtn = new Button({$target:enterLine});
        addBtn.setState({
            className:"todo-add-btn",
            content:"add"
        });
    }
}