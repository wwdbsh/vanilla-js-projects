export default class Header{
    constructor({$target}){
        this.header = document.createElement("h1");
        this.header.innerText = "Memory Cards ";
        $target.appendChild(this.header);

        const addBtn = document.createElement("button");
        addBtn.id = "show";
        addBtn.className = "btn btn-small";
        this.header.insertAdjacentElement("beforeend", addBtn);

        const icon = document.createElement("i");
        icon.className = "fas fa-plus";
        addBtn.appendChild(icon);
        addBtn.insertAdjacentText("beforeend", " Add New Card");
    }
}