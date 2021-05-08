export default class LogBoard{
    constructor({$target}){
        this.board = document.createElement("ul");
        this.board.className = "log-board";
        this.board.id = "log-board";
        $target.appendChild(this.board);
    }
}