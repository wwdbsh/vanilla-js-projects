export default class App{
    constructor($target){
        this.canvas = document.createElement("canvas");
        this.ctx = this.canvas.getContext("2d");
        $target.appendChild(this.canvas);

        window.addEventListener("resize", this.resize.bind(this), false);
        this.resize();

        requestAnimationFrame(this.animate.bind(this));
    }

    resize(){
        this.stageWidth = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;

        this.canvas.width = this.stageWidth*2;
        this.canvas.height = this.stageHeight*2;
        this.ctx.scale(2, 2);
    }

    animate(t){
        requestAnimationFrame(this.animate.bind(this));
        this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);
    }
}