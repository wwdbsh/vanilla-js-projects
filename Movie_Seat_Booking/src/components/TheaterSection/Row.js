export default class Row{
    constructor({$target}){
        this.row = document.createElement("article");
        $target.appendChild(this.row);
        this.render();
    }
    render(){
        this.row.className = "row";
        for(let index = 0; index < 8; index++){
            const seat = document.createElement("div");
            seat.className = "seat";
            this.row.appendChild(seat);
        }
    }
}