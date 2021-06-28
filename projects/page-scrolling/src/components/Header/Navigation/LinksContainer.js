export default class LinksContainer{
    constructor({$target}){
        this.container = document.createElement("div");
        this.container.id = "links-container";
        this.container.className = "links-container";
        $target.appendChild(this.container);

        this.links = document.createElement("ul");
        this.links.id = "links";
        this.links.className = "links";
        this.container.appendChild(this.links);

        
        this.home = document.createElement("li");
        this.homeA = document.createElement("a");
        this.homeA.href = "#home";
        this.homeA.className = "scroll-link";
        this.homeA.innerText = "home";

        this.about = document.createElement("li");
        this.aboutA = document.createElement("a");
        this.aboutA.href = "#about";
        this.aboutA.className = "scroll-link";
        this.aboutA.innerText = "about";

        this.services = document.createElement("li");
        this.servicesA = document.createElement("a");
        this.servicesA.href = "#services";
        this.servicesA.className = "scroll-link";
        this.servicesA.innerText = "services";

        this.tours = document.createElement("li");
        this.toursA = document.createElement("a");
        this.toursA.href = "#tours";
        this.toursA.className = "scroll-link";
        this.toursA.innerText = "tours";

        this.home.appendChild(this.homeA);
        this.about.appendChild(this.aboutA);
        this.services.appendChild(this.servicesA);
        this.tours.appendChild(this.toursA);

        this.links.appendChild(this.home);
        this.links.appendChild(this.about);
        this.links.appendChild(this.services);
        this.links.appendChild(this.tours);
    }
}