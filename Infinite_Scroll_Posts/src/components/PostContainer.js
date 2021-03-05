export default class PostContainer{
    constructor({$target}) {
        this.container = document.createElement("section");
        this.container.id = "posts-container";
        $target.appendChild(this.container);
    }
}