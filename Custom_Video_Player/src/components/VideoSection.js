export default class VideoSection{
    constructor({$target}){
        this.section = document.createElement("section");
        $target.appendChild(this.section);
        this.render();
    }
    toggleVideoStatus(video){
        if(video.paused){
            video.play();
        }else{
            video.pause();
        }
    }
    updatePlayIcon(video, play){
        if(video.paused){
            play.innerHTML = '<i class="fa fa-play fa-2x"></i>';
        }else{
            play.innerHTML = '<i class="fa fa-pause fa-2x"></i>';
        }
    }
    updateProgress(progress, video, timestamp){
        progress.value = (video.currentTime / video.duration) * 100;

        let mins = Math.floor(video.currentTime/60);
        if(mins < 10){
            mins = "0" + String(mins);
        }
        
        let secs = Math.floor(video.currentTime%60);
        if(secs < 10){
            secs = "0" + String(secs);
        }

        timestamp.innerHTML = `${mins}:${secs}`;
    }
    setVideoProgress(progress, video){
        video.currentTime = (+progress.value * video.duration) / 100;
    }
    stopVideo(video){
        video.currentTime = 0;
        video.pause();
    }
    render(){
        const h1 = document.createElement("h1");
        h1.innerText = "Custom Video Player";
        this.section.appendChild(h1);
        ////

        const video = document.createElement("video");
        video.src = "./src/assets/videos/gone.mp4";
        video.id = "video";
        video.className = "screen";
        video.poster = "./src/assets/img/poster.png";
        this.section.appendChild(video);
        ////
        
        const controls = document.createElement("article");
        controls.className = "controls";
        
        const playBtn = document.createElement("button");
        playBtn.className = "btn";
        playBtn.id = "play";
        
        const playIcon = document.createElement("i");
        playIcon.className = "fa fa-play fa-2x";
        playBtn.appendChild(playIcon);
        
        
        const stopBtn = document.createElement("button");
        stopBtn.className = "btn";
        stopBtn.id = "stop";
        
        const stopIcon = document.createElement("i");
        stopIcon.className = "fa fa-stop fa-2x";
        stopBtn.appendChild(stopIcon);
        
        controls.appendChild(playBtn);
        controls.appendChild(stopBtn);
        
        const progress = document.createElement("input");
        progress.type= "range";
        progress.id = "progress";
        progress.className = "progress";
        progress.min = "0";
        progress.max = "100";
        progress.step = "0.1";
        progress.value = "0";
        controls.appendChild(progress); 
        
        const timestamp = document.createElement("span");
        timestamp.className = "timestamp";
        timestamp.id = "timestamp";
        timestamp.innerText = "00:00";
        controls.appendChild(timestamp);
        
        this.section.appendChild(controls);
        ////
        
        // event listener
        video.addEventListener("click", ()=>this.toggleVideoStatus(video));
        video.addEventListener("pause", ()=>this.updatePlayIcon(video, playBtn));
        video.addEventListener("play", ()=>this.updatePlayIcon(video, playBtn));
        video.addEventListener("timeupdate", ()=>this.updateProgress(progress, video, timestamp));
        playBtn.addEventListener("click", ()=>this.toggleVideoStatus(video));
        stopBtn.addEventListener("click", ()=>this.stopVideo(video));
        progress.addEventListener("change", ()=>this.setVideoProgress(progress, video));
    }
}