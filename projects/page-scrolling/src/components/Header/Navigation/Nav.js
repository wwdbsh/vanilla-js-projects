import LinksContainer from "./LinksContainer.js";
import NavHeader from "./NavHeader.js";

export default class Nav{
    constructor({$target}){
        this.nav = document.createElement("nav");
        this.navCenter = document.createElement("div");
        this.nav.appendChild(this.navCenter);
        $target.appendChild(this.nav);
        this.render();
    }
    setState(props){
        this.nav.id = props.navId;
        this.nav.className = props.navId;
        this.navCenter.id = props.navCenterId;
        this.navCenter.className = props.navCenterId;
    }
    render(){
        const navHeader = new NavHeader({$target:this.navCenter});
        navHeader.setState({
            navHeaderId:"nav-header",
            logoPath:"src/img/logo.svg",
            navToggleId:"nav-toggle",
        });

        const linksContainer = new LinksContainer({$target:this.navCenter});
        
    }
}