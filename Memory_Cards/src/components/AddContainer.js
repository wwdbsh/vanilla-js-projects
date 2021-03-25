export default class AddContainer{
    constructor({$target}){
        this.container = document.createElement("div");
        this.container.id = "add-container";
        this.container.className = "add-container";
        $target.appendChild(this.container);

        const h1 = document.createElement("h1");
        h1.innerText = "Add New Card ";
        this.container.appendChild(h1);

        const h1Btn = document.createElement("button");
        h1Btn.id = "hide";
        h1Btn.className = "btn btn-small btn-ghost";
        h1.appendChild(h1Btn);

        const h1Icon = document.createElement("i");
        h1Icon.className = "fas fa-times";
        h1Btn.appendChild(h1Icon);

        const formGrp1 = document.createElement("div");
        formGrp1.className = "form-group";
        this.container.appendChild(formGrp1);

        const questionLabel = document.createElement("label");
        questionLabel.htmlFor = "question";
        questionLabel.innerText = "Question";
        formGrp1.appendChild(questionLabel);

        const questionTA = document.createElement("textarea");
        questionTA.id = "question";
        questionTA.placeholder = "Enter Question...";
        formGrp1.appendChild(questionTA);
        
        const formGrp2 = document.createElement("div");
        formGrp2.className = "form-group";
        this.container.appendChild(formGrp2);

        const answerLabel = document.createElement("label");
        answerLabel.htmlFor = "answer";
        answerLabel.innerText = "Answer";
        formGrp2.appendChild(answerLabel);

        const answerTA = document.createElement("textarea");
        answerTA.id = "answer";
        answerTA.placeholder = "Enter Answer...";
        formGrp2.appendChild(answerTA);

        const btn = document.createElement("button");
        btn.id = "add-card";
        btn.className = "btn";
        this.container.appendChild(btn);
        
        const btnIcon = document.createElement("i");
        btnIcon.className = "fas fa-plus";
        btn.appendChild(btnIcon);
        
        btnIcon.insertAdjacentText("afterend", " Add Card");
    }
}