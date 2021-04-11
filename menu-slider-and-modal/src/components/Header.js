export default class Header{
    constructor({$target}){
        this.header = document.createElement("header");
        $target.appendChild(this.header);
        this.render();
    }
    render(){
        const toggle = document.createElement("button");
        toggle.id = "toggle";
        toggle.className = "toggle";

        const iBtn = document.createElement("i");
        iBtn.className = "fa fa-bars fa-2x";
        toggle.appendChild(iBtn);

        this.header.appendChild(toggle);
        //

        const h1 = document.createElement("h1");
        h1.innerText = "My Landing Page";
        this.header.appendChild(h1);
        //

        const p = document.createElement("p");
        p.innerText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, amet!";
        this.header.appendChild(p);
        //

        const ctaBtn = document.createElement("button");
        ctaBtn.className = "cta-btn";
        ctaBtn.id = "open";
        ctaBtn.innerText = "Sign Up";
        this.header.appendChild(ctaBtn);
        //
    }
}