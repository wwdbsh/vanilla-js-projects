import Button from "./Button.js";

export default class AskingModal{
    constructor({$target, question, containerName, modalName, yes, no}){
        this.container = document.createElement("div");
        this.container.className = containerName;
        this.container.id = containerName;
        $target.appendChild(this.container);

        const modal = document.createElement("div");
        modal.className = modalName;
        modal.id = modalName;
        this.container.appendChild(modal);

        const guide = document.createElement("p");
        guide.innerText = question;
        modal.appendChild(guide);

        const btnContainer = document.createElement("div");
        btnContainer.className = "asking-modal-btn-container";
        btnContainer.id = "asking-modal-btn-container";
        modal.appendChild(btnContainer);

        const okBtn = new Button({$target:btnContainer});
        okBtn.setState({
            className:yes,
            content:"Yes"
        });

        const cancelBtn = new Button({$target:btnContainer});
        cancelBtn.setState({
            className:no,
            content:"No"
        });
    }
}