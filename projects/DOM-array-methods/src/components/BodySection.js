import SideBar from "./SiderBar.js";
import MainContent from "./MainContent.js";
import { setSection, getRandomUser } from "./API.js";

export default class BodySection{
    constructor({$target}){
        this.section = document.createElement("section");
        this.data = [];
        $target.appendChild(this.section);
        this.render();
        setSection(this.section);
    }
    render(){
        const headerTitle = document.createElement("h1");
        headerTitle.innerText = "DOM Array Method";
        this.section.appendChild(headerTitle);
        //

        const container = document.createElement("article");
        container.className = "container";

        const sideBar = new SideBar({$target:container});
        const mainContent = new MainContent({$target:container});

        this.section.appendChild(container);
        //
    }
}