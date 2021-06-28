export default class Section{
    constructor({$target}){
        this.section = document.createElement("section");
        this.section.className = "section";
        $target.appendChild(this.section);

        this.title = document.createElement("div");
        this.title.className = "title";
        this.section.appendChild(this.title);

        this.h2 = document.createElement("h2");
        this.title.appendChild(this.h2);

        this.span = document.createElement("span");
        this.h2.appendChild(this.span);
    }
    setState(props){
        this.section.id = props.sectionId;
        this.h2.insertAdjacentText("afterbegin", props.h2Txt);
        this.span.innerText = props.spanTxt;
    }
}