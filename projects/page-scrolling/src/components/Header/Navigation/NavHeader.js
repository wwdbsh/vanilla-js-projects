export default class NavHeader{
    constructor({$target}){
        this.navHeader = document.createElement("div");
        $target.appendChild(this.navHeader);

        this.img = document.createElement("img");
        this.img.className = "logo";
        this.img.alt = "logo";
        this.navHeader.appendChild(this.img);

        this.navToggle = document.createElement("button");
        this.navHeader.appendChild(this.navToggle);

        this.logoIcon = document.createElement("i");
        this.logoIcon.className = "fas fa-bars";
        this.navToggle.appendChild(this.logoIcon);
    }
    setState(props){
        this.navHeader.id = props.navHeaderId;
        this.navHeader.className = props.navHeaderId;
        this.img.src = props.logoPath;
        this.logoIcon.id = props.navToggleId;
        this.logoIcon.className = props.navToggleId;
    }
}