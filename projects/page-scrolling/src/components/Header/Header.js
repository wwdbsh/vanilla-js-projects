import Banner from "./Banner/Banner.js";
import Nav from "./Navigation/Nav.js";

export default class Header{
    constructor({$target}){
        this.header = document.createElement("header");
        $target.appendChild(this.header);
        this.render();
    }
    setState(props){
        this.header.id = props.headerId;
        this.header.className = props.headerId;
    }
    render(){
        const nav = new Nav({$target:this.header});
        nav.setState({
            navId:"nav",
            navCenterId:"nav-center"
        });

        const banner = new Banner({$target:this.header});
        banner.setState({
            bannerId:"banner",
            containerId:"container",
        });
    }
}