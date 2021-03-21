export default class TextBox{
    constructor({$target}){
        this.container = document.createElement("div");
        this.container.id = "text-box";
        this.container.className = "text-box";
        $target.appendChild(this.container);
        this.render();
    }
    render(){
        const close = document.createElement("div");
        close.id = "close";
        close.className = "close";
        close.innerText = "X";
        this.container.appendChild(close);

        const h3 = document.createElement("h3");
        h3.innerText = "Choose Voice";
        this.container.appendChild(h3);

        const voices = document.createElement("select");
        voices.id = "voices";
        this.container.appendChild(voices);

        const text = document.createElement("textarea");
        text.id = "text";
        text.placeholder = "Enter text to read...";
        this.container.appendChild(text);

        const read = document.createElement("button");
        read.className = "btn";
        read.id = "read";
        read.innerText = "Read Text";
        this.container.appendChild(read);
    }
}