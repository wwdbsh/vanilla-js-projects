export default class Banner{
    constructor({$target}){
        this.banner = document.createElement("div");
        $target.appendChild(this.banner);

        this.container = document.createElement("div");
        this.banner.appendChild(this.container);

        this.bannerTitle = document.createElement("h1");
        this.bannerTitle.innerText = "scroll project";
        this.container.appendChild(this.bannerTitle);

        this.content = document.createElement("p");
        this.content.innerText = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas eos neque sunt in? Id, necessitatibus quos quisquam distinctiolaudantium fugiat?";
        this.container.appendChild(this.content);

        this.link = document.createElement("a");
        this.link.href = "#tours";
        this.link.id = "explore-btn";
        this.link.className = "scroll-link btn btn-white";
        this.link.innerText = "explore tours";
        this.container.appendChild(this.link);
    }
    setState(props){
        this.banner.id = props.bannerId;
        this.banner.className = props.bannerId;
        this.container.id = props.containerId;
        this.container.className = props.containerId;
    }
}