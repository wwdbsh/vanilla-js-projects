export default class NameModal{
    constructor({$target}){
        this.container = document.createElement("div");
        this.container.className = "name-modal-container";
        this.container.id = "name-modal-container";
        $target.appendChild(this.container);

        const modal = document.createElement("div");
        modal.className = "name-modal";
        this.container.appendChild(modal);

        const guide = document.createElement("p");
        guide.innerText = "What's your name?";
        modal.appendChild(guide);

        const nameInput = document.createElement("input");
        nameInput.type = "text";
        nameInput.className = "name-input"
        nameInput.id = "name-input";
        nameInput.placeholder = "Enter your name...";
        modal.appendChild(nameInput);

        const submitBtn = document.createElement("button");
        submitBtn.className = "name-submit-btn";
        submitBtn.id = "name-submit-btn";
        submitBtn.innerText = "Register";
        modal.appendChild(submitBtn);
    }
}