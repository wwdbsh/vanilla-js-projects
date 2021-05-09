export default class DisconnectModal{
    constructor({$target}){
        this.container = document.createElement("div");
        this.container.className = "modal-container";
        this.container.id = "disconnect-modal-container";
        $target.appendChild(this.container);

        const modal = document.createElement("div");
        modal.className = "modal";
        this.container.appendChild(modal);

        const question = document.createElement("div");
        question.className = "question";
        question.id = "question";
        question.innerText = "Are you sure you want to disconnect?"
        modal.appendChild(question);

        const btnLine = document.createElement("div");
        btnLine.className = "btn-line";
        btnLine.id = "btn-line";
        modal.appendChild(btnLine);

        const btn1 = document.createElement("div");
        btn1.className = "btn";
        btn1.id = "yes-btn";
        btn1.innerText = "yes";
        btnLine.appendChild(btn1);
        
        const btn2 = document.createElement("div");
        btn2.className = "btn";
        btn2.id = "no-btn";
        btn2.innerText = "no";
        btnLine.appendChild(btn2);
    }
}