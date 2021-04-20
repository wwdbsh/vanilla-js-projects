export default class Hangman{
    constructor({$target}){
        this.gameContainer = document.createElement("section");
        this.gameContainer.className = "game-container";
        $target.appendChild(this.gameContainer);
        this.render();
    }
    render(){
        const figureContainer = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        figureContainer.setAttribute("width", "200");
        figureContainer.setAttribute("height", "250");
        figureContainer.setAttribute("class", "figure-container");

        // hanger
        const line1 = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line1.setAttribute("x1", "60");
        line1.setAttribute("y1", "20");
        line1.setAttribute("x2", "140");
        line1.setAttribute("y2", "20");
        figureContainer.appendChild(line1);
        
        const line2 = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line2.setAttribute("x1", "140");
        line2.setAttribute("y1", "20");
        line2.setAttribute("x2", "140");
        line2.setAttribute("y2", "50");
        figureContainer.appendChild(line2);
        
        const line3 = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line3.setAttribute("x1", "60");
        line3.setAttribute("y1", "20");
        line3.setAttribute("x2", "60");
        line3.setAttribute("y2", "230");
        figureContainer.appendChild(line3);
        
        const line4 = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line4.setAttribute("x1", "20");
        line4.setAttribute("y1", "230");
        line4.setAttribute("x2", "100");
        line4.setAttribute("y2", "230");
        figureContainer.appendChild(line4);

        // head
        const head = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        head.setAttribute("cx","140");
        head.setAttribute("cy","70");
        head.setAttribute("r","20");
        head.setAttribute("class","figure-part");
        figureContainer.appendChild(head);

        // body
        const body = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        body.setAttribute("x1", "140");
        body.setAttribute("y1", "90");
        body.setAttribute("x2", "140");
        body.setAttribute("y2", "150");
        body.setAttribute("class","figure-part");
        figureContainer.appendChild(body);

        // arms
        const leftA = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        leftA.setAttribute("x1", "140");
        leftA.setAttribute("y1", "120");
        leftA.setAttribute("x2", "120");
        leftA.setAttribute("y2", "100");
        leftA.setAttribute("class","figure-part");
        figureContainer.appendChild(leftA);
        
        const rightA = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        rightA.setAttribute("x1", "140");
        rightA.setAttribute("y1", "120");
        rightA.setAttribute("x2", "160");
        rightA.setAttribute("y2", "100");
        rightA.setAttribute("class","figure-part");
        figureContainer.appendChild(rightA);

        // legs
        const leftL = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        leftL.setAttribute("x1", "140");
        leftL.setAttribute("y1", "150");
        leftL.setAttribute("x2", "120");
        leftL.setAttribute("y2", "180");
        leftL.setAttribute("class","figure-part");
        figureContainer.appendChild(leftL);
        
        const rightL = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        rightL.setAttribute("x1", "140");
        rightL.setAttribute("y1", "150");
        rightL.setAttribute("x2", "160");
        rightL.setAttribute("y2", "180");
        rightL.setAttribute("class","figure-part");
        figureContainer.appendChild(rightL);
        

        this.gameContainer.appendChild(figureContainer);
    }
}