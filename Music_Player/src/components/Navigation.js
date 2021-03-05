export default class Navigation{
    constructor({$target}) {
        this.container = document.createElement("section");
        this.container.className = "navigation";
        $target.appendChild(this.container);
        this.render();
    }
    render(){
        const prevBtn = document.createElement("button");
        prevBtn.id = "prev";
        prevBtn.className = "action-btn";

        const prevBtnIcon = document.createElement("i");
        prevBtnIcon.className = "fas fa-backward";
        prevBtn.appendChild(prevBtnIcon);
        this.container.appendChild(prevBtn);
        
        const playBtn = document.createElement("button");
        playBtn.id = "play";
        playBtn.className = "action-btn action-btn-big";

        const playBtnIcon = document.createElement("i");
        playBtnIcon.className = "fas fa-play";
        playBtn.appendChild(playBtnIcon);
        this.container.appendChild(playBtn);
        
        const nextBtn = document.createElement("button");
        nextBtn.id = "next";
        nextBtn.className = "action-btn";

        const nextBtnIcon = document.createElement("i");
        nextBtnIcon.className = "fas fa-forward";
        nextBtn.appendChild(nextBtnIcon);
        this.container.appendChild(nextBtn);
    }
}