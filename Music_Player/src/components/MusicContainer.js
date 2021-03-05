import MusicInfo from "./MusicInfo.js";
import Navigation from "./Navigation.js";

export default class MusicContainer{
    constructor({$target}) {
        this.container = document.createElement("section");
        this.container.className = "music-container";
        this.container.id = "music-container";
        $target.appendChild(this.container);
        this.render();
    }
    render(){
        const musicInfo = new MusicInfo({$target:this.container});

        const audio = document.createElement("audio");
        audio.src = "music/ukulele.mp3";
        audio.id = "audio";
        this.container.appendChild(audio);

        const imgContainer = document.createElement("article");
        imgContainer.className = "img-container";

        const cover = document.createElement("img");
        cover.src = "images/ukulele.jpg";
        cover.alt = "music-cover";
        cover.id = "cover";
        imgContainer.appendChild(cover);
        this.container.appendChild(imgContainer);

        const navi = new Navigation({$target:this.container});
    }
}