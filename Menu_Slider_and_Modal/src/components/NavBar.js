export default class NavBar{
    constructor({$target}){
        this.nav = document.createElement("nav");
        $target.appendChild(this.nav);
        this.render();
    }
    render(){
        const logo = document.createElement("article");
        logo.className = "logo";

        const profilePicture = document.createElement("img");
        profilePicture.src = "https://randomuser.me/api/portraits/women/11.jpg";
        profilePicture.alt = "user";
        
        logo.appendChild(profilePicture);
        this.nav.appendChild(logo);
        //

        const ul = document.createElement("ul");
        
        const li1 = document.createElement("li");
        const a1 = document.createElement("a");
        a1.href = "#";
        a1.innerText = "Home"
        li1.appendChild(a1);
        
        const li2 = document.createElement("li");
        const a2 = document.createElement("a");
        a2.href = "#";
        a2.innerText = "Portfolio"
        li2.appendChild(a2);

        const li3 = document.createElement("li");
        const a3 = document.createElement("a");
        a3.href = "#";
        a3.innerText = "Blog"
        li3.appendChild(a3);

        const li4 = document.createElement("li");
        const a4 = document.createElement("a");
        a4.href = "#";
        a4.innerText = "Contact Me"
        li4.appendChild(a4);

        ul.appendChild(li1);
        ul.appendChild(li2);
        ul.appendChild(li3);
        ul.appendChild(li4);

        this.nav.appendChild(ul);
        //
    }
}