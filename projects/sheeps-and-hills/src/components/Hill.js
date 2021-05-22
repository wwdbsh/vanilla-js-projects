export default class Hill{
    constructor(color, speed, total){
        this.color = color;
        this.speed = speed;
        this.total = total;
    }

    resize(stageWidth, stageHeight){
        this.stageWidth = stageWidth;
        this.stageHeight = stageHeight;

        this.points = [];
        this.gap = Math.ceil(this.stageWidth / (this.total-2));
        for(let i = 0; i < this.total; i++){
            this.points[i] = {
                x:i*this.gap,
                y:this.getY()
            }
        }
    }

    draw(ctx){

    }

    getY(){

    }
}