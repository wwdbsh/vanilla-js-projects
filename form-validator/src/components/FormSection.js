import FormItem from "./FormItem.js";

export default class FormSection{
    constructor({$target}){
        this.section = document.createElement("section");
        $target.appendChild(this.section);
        
        this.render();
    }
    showError(input, message){
        const formControl = input.parentElement;
        formControl.className = "form-control error";

        const small = formControl.querySelector("small");
        small.innerText = message;
    }
    showSuccess(input){
        const formControl = input.parentElement;
        formControl.className = "form-control success";
    }
    checkEmail(item){
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const input = item.childNodes[1];
        if(re.test(input.value.trim())){
            this.showSuccess(input);
        }else{
            this.showError(input, "Email is not valid");
        }
    }
    checkRequired(items){
        items.forEach((item) => {
            const input = item.childNodes[1];
            const title = item.childNodes[0].innerText;
            if(input.value.trim() === ""){
                this.showError(input, `${title} is required`);
            }else{
                this.showSuccess(input);
            }
        });
    }
    checkLength(item, min, max){
        const input = item.childNodes[1]
        const title = item.childNodes[0].innerText;
        if(input.value.length < min){
            this.showError(
                input,
                `${title} must be at least ${min} characters`
            );
        }else if(input.value.length > max){
            this.showError(
                input,
                `${title} must be at less than ${max} characters`
            );
        }else{
            this.showSuccess(input);
        }
    }
    checkPasswordsMatch(item1, item2){
        const input1 = item1.childNodes[1];
        const input2 = item2.childNodes[1];
        if(input1.value !== input2.value){
            this.showError(input2, "Passwords do not match");
        }
    }
    clickSubmit(e, formObj){
        e.preventDefault();
        const items = Object.values(formObj.childNodes).slice(1, 5);
        this.checkRequired(items);
        this.checkLength(items[0], 3, 15); // username
        this.checkLength(items[2], 6, 25); // password
        this.checkEmail(items[1]) // email
        this.checkPasswordsMatch(items[2], items[3]);
    }
    render(){
        const formContainer = document.createElement("form");
        formContainer.id = "form";
        formContainer.className = "form";
        
        const formTitle = document.createElement("h2");
        formTitle.innerHTML = "Register With Us";
        formContainer.appendChild(formTitle);

        const userName = new FormItem({
            $target:formContainer,
            title:"Username",
            id:"username",
            type:"text",
            placeHolder:"Enter username",
            errorMsg:"Error message"
        });
        
        const email = new FormItem({
            $target:formContainer,
            title:"Email",
            id:"email",
            type:"text",
            placeHolder:"Enter email",
            errorMsg:"Error message"
        });
        
        const password = new FormItem({
            $target:formContainer,
            title:"Password",
            id:"password",
            type:"password",
            placeHolder:"Enter password",
            errorMsg:"Error message"
        });
        
        const confirmPasword = new FormItem({
            $target:formContainer,
            title:"Confirm Password",
            id:"password2",
            type:"password",
            placeHolder:"Enter password again",
            errorMsg:"Error message"
        });

        const submit = document.createElement("button");
        submit.innerHTML = "Submit";
        
        formContainer.appendChild(submit);
        this.section.appendChild(formContainer);
        
        formContainer.addEventListener("submit", (e) => this.clickSubmit(e, formContainer));
    }
}