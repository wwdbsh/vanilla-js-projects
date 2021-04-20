export default class Container{
    constructor({$target}){
        this.container = document.createElement("section");
        this.container.className = "container";
        $target.appendChild(this.container);
        this.render();
    }
    render(){
        const title = document.createElement("h2");
        title.innerText = "👩‍💻 Speed Typer 👨‍💻";
        this.container.appendChild(title);

        const guide = document.createElement("small");
        guide.innerText = "Type the following:"
        this.container.appendChild(guide);

        const word = document.createElement("h1");
        word.id = "word";
        this.container.appendChild(word);

        const input = document.createElement("input");
        input.type = "text";
        input.id = "text";
        input.autocomplete = "off";
        input.placeholder = "Type the word here...";
        input.autoFocus = true;
        this.container.appendChild(input);

        const timeContainer = document.createElement("p");
        timeContainer.className = "time-container;"
        timeContainer.innerText = "Time left: "
        const time = document.createElement("span");
        time.id = "time";
        time.innerText = "10s";
        timeContainer.appendChild(time);
        this.container.appendChild(timeContainer);
        
        const scoreContainer = document.createElement("p");
        scoreContainer.className = "score-container;"
        scoreContainer.innerText = "Score: "
        const score = document.createElement("span");
        score.id = "score";
        score.innerText = "0";
        scoreContainer.appendChild(score);
        this.container.appendChild(scoreContainer);

        const endGame = document.createElement("article");
        endGame.id = "end-game-container";
        endGame.className = "end-game-container";
        this.container.appendChild(endGame);
    }
}