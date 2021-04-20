export default class ShowCaseSection{
    constructor({$target}){
        this.section = document.createElement("section");
        $target.appendChild(this.section);
        this.render();
    }
    render(){
        const showcaseUl = document.createElement("ul");
        showcaseUl.className = "showcase";

        const li1 = document.createElement("li");
        const div1 = document.createElement("div");
        div1.className = "seat";
        li1.appendChild(div1);
        const small1 = document.createElement("small")
        small1.innerText = "N/A";
        li1.appendChild(small1);

        const li2 = document.createElement("li");
        const div2 = document.createElement("div");
        div2.className = "seat selected";
        li2.appendChild(div2);
        const small2 = document.createElement("small")
        small2.innerText = "Selected";
        li2.appendChild(small2);

        const li3 = document.createElement("li");
        const div3 = document.createElement("div");
        div3.className = "seat occupied";
        li3.appendChild(div3);
        const small3 = document.createElement("small")
        small3.innerText = "Occupied";
        li3.appendChild(small3);

        showcaseUl.appendChild(li1);
        showcaseUl.appendChild(li2);
        showcaseUl.appendChild(li3);

        this.section.appendChild(showcaseUl);
    }
}