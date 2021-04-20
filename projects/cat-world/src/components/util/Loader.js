export default class Loader{
    constructor({$target}) {
        this.container = document.createElement("article");
        this.container.className = "loader-container";
        $target.appendChild(this.container);
        this.render();
    }
    render(){
        const loaderImage = document.createElement("img");
        loaderImage.className = "loader-img";
        loaderImage.src = "./src/assets/loading.gif";
        this.container.appendChild(loaderImage);
    }
}