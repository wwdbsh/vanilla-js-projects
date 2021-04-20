export default class Form{
    constructor({$target}) {
        this.form = document.createElement("form");
        this.form.id = "form";
        $target.appendChild(this.form);
        this.render();
    }
    render(){
        const formCtrl1 = document.createElement("article");
        formCtrl1.className = "form-control";

        const label1 = document.createElement("label");
        label1.htmlFor = "text";
        label1.innerText = "Text";
        formCtrl1.appendChild(label1);

        const textInput = document.createElement("input");
        textInput.type = "text";
        textInput.id = "text";
        textInput.placeholder = "Enter text...";
        formCtrl1.appendChild(textInput);

        this.form.appendChild(formCtrl1);
        //
        const formCtrl2 = document.createElement("article");
        formCtrl2.className = "form-control";

        const label2 = document.createElement("label");
        label2.htmlFor = "amount";
        label2.innerHTML = "Amount <br/> (negative - expense, positive - income)";
        formCtrl2.appendChild(label2);

        const amountInput = document.createElement("input");
        amountInput.type = "number";
        amountInput.id = "amount";
        amountInput.placeholder = "Enter amount...";
        formCtrl2.appendChild(amountInput);

        this.form.appendChild(formCtrl2);
        //
        const formBtn = document.createElement("button");
        formBtn.className = "btn";
        formBtn.innerText = "Add transaction";
        this.form.appendChild(formBtn);
    }
}