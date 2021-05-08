export default class LogBoard{
    constructor({$target}){
        this.board = document.createElement("ul");
        this.board.className = "log-board";
        this.board.id = "log-board";
        $target.appendChild(this.board);

        const log1 = document.createElement("li");
        log1.innerText = "Sangheon: 1 + 2 = 3";
        this.board.appendChild(log1);
        
        const log2 = document.createElement("li");
        log2.innerText = "Yuri: 2 x 2 = 4";
        this.board.appendChild(log2);
    }
}