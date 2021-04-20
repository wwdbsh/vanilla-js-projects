export default class Modal{
    constructor({$target}){
        this.modalContainer = document.createElement("section");
        this.modalContainer.className = "modal-container";
        this.modalContainer.id = "modal";
        $target.appendChild(this.modalContainer);
        this.render();
    }
    render(){
        const modal = document.createElement("article");
        modal.className = "modal";
        this.modalContainer.appendChild(modal);
        //

        const closeBtn = document.createElement("button");
        closeBtn.className = "close-btn";
        closeBtn.id = "close";
        modal.appendChild(closeBtn);

        const closeBtnIcon = document.createElement("i");
        closeBtnIcon.className = "fa fa-times";
        closeBtn.appendChild(closeBtnIcon);
        //

        const modalHeader = document.createElement("article");
        modalHeader.className = "modal-header";
        modal.appendChild(modalHeader);

        const modalTitle = document.createElement("h3");
        modalTitle.innerText = "Sign Up";
        modalHeader.appendChild(modalTitle);
        //

        const modalContent = document.createElement("article");
        modalContent.className = "modal-content";
        modal.appendChild(modalContent);
        //

        const guide = document.createElement("p");
        guide.innerText = "Register with us to get offers, support and more";
        modalContent.appendChild(guide);
        //

        const modalForm = document.createElement("form");
        modalForm.className = "modal-form";
        modalContent.appendChild(modalForm);
        //

        const name = document.createElement("article");
        
        const nameLabel = document.createElement("label");
        nameLabel.htmlFor = "name";
        nameLabel.innerText = "Name";
        name.appendChild(nameLabel);
        
        const nameInput = document.createElement("input");
        nameInput.type = "text";
        nameInput.id = "name";
        nameInput.placeholder = "Enter Name";
        nameInput.className = "form-input"
        name.appendChild(nameInput);

        modalForm.appendChild(name);

        const email = document.createElement("article");
        
        const emailLabel = document.createElement("label");
        emailLabel.htmlFor = "email";
        emailLabel.innerText = "Email";
        email.appendChild(emailLabel);
        
        const emailInput = document.createElement("input");
        emailInput.type = "text";
        emailInput.id = "email";
        emailInput.placeholder = "Enter Email";
        emailInput.className = "form-input"
        email.appendChild(emailInput);

        modalForm.appendChild(email);

        const password = document.createElement("article");
        
        const passwordLabel = document.createElement("label");
        passwordLabel.htmlFor = "password";
        passwordLabel.innerText = "Password";
        password.appendChild(passwordLabel);
        
        const passwordInput = document.createElement("input");
        passwordInput.type = "text";
        passwordInput.id = "password";
        passwordInput.placeholder = "Enter Password";
        passwordInput.className = "form-input"
        password.appendChild(passwordInput);

        modalForm.appendChild(password);

        const password2 = document.createElement("article");
        
        const password2Label = document.createElement("label");
        password2Label.htmlFor = "password";
        password2Label.innerText = "Confirm Password";
        password2.appendChild(passwordLabel);
        
        const password2Input = document.createElement("input");
        password2Input.type = "text";
        password2Input.id = "password2";
        password2Input.placeholder = "Confirm Password";
        password2Input.className = "form-input"
        password2.appendChild(password2Input);

        modalForm.appendChild(password2);

        const formSubmit = document.createElement("input");
        formSubmit.type = "submit";
        formSubmit.value = "Submit";
        formSubmit.className = "submit-btn";

        modalForm.appendChild(formSubmit);
        //
    }
}