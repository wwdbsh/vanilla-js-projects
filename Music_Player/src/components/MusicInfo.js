export default class MusicInfo{
    constructor({$target}) {
        this.container = document.createElement("section");
        this.container.className = "music-info";
        $target.appendChild(this.container);
        this.render();
    }
    render(){
        const title = document.createElement("h4");
        title.id = "title";
        this.container.appendChild(title);

        const progressContainer = document.createElement("article");
        progressContainer.className = "progress-container";
        progressContainer.id = "progress-container";

        const progress = document.createElement("article");
        progress.className = "progress";
        progress.id = "progress";
        progressContainer.appendChild(progress);

        this.container.appendChild(progressContainer);
    }
}