export default class FormItem{
    constructor({
        $target,
        title,
        id,
        type,
        placeHolder,
        errorMsg
    }){
        this.formItem = document.createElement("article");
        this.formItem.className = "form-control";

        this.title = title;
        this.id = id;
        this.type = type;
        this.placeHolder = placeHolder;
        this.errorMsg = errorMsg;

        $target.appendChild(this.formItem);

        this.render();
    }

    render(){
        const label = document.createElement("label");
        label.htmlFor = this.id;
        label.innerHTML = this.title;

        const input = document.createElement("input");
        input.type = this.type;
        input.id = this.id;
        input.placeholder = this.placeHolder;

        const error = document.createElement("small");
        error.innerHTML = this.errorMsg;

        this.formItem.appendChild(label);
        this.formItem.appendChild(input);
        this.formItem.appendChild(error);
    }
}