import Button from "./Button.js";
import List from "./List.js";

export default class TodoBox{
    constructor({$target}){
        this.container = document.createElement("div");
        this.container.className = "todo-container";
        this.container.id = "todo-container";
        $target.appendChild(this.container);

        /****************************************/
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
        pending.className = "pending-nav fill";
        pending.id = "pending-nav";
        tr.appendChild(pending);
        
        const finished = document.createElement("td");
        finished.innerText = "Finished"
        finished.className = "finished-nav";
        finished.id = "finished-nav";
        tr.appendChild(finished);
        /****************************************/

        /****************************************/
        const listBox = document.createElement("div");
        listBox.className = "list-box";
        listBox.id = "list-box";
        this.container.appendChild(listBox);
        /****************************************/

        /****************************************/
        const pendingList = new List({$target:listBox});
        pendingList.setState({className:"pending-list show", id:"pending-list"});
        /****************************************/

        /****************************************/
        const finishedList = new List({$target:listBox});
        finishedList.setState({className:"finished-list", id:"finished-list"});
        /****************************************/

        /****************************************/
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
        /****************************************/
    }
}