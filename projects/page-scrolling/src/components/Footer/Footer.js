export default class Footer{
    constructor({$target}){
        this.footer = document.createElement("footer");
        this.footer.className = "section";
        $target.appendChild(this.footer);

        this.p = document.createElement("p");
        this.footer.appendChild(this.p);

        this.span = document.createElement("span");
        this.span.id = "date";
        this.span.className = "date";
        this.p.appendChild(this.span);

        this.p.insertAdjacentText("afterbegin", "copyright © backroads travel tours company ");
        this.span.insertAdjacentText("afterend", ". all rights reserved");
    }
}