export default class Settings{
    constructor({$target}){
        this.container = document.createElement("section");
        this.container.id = "settings";
        this.container.className = "settings";
        $target.appendChild(this.container);
        this.render();
    }
    render(){
        const form = document.createElement("form");
        form.id = "settings-form";
        
        const div = document.createElement("article");

        const label = document.createElement("label");
        label.htmlFor = "difficulty";
        label.innerText = "Difficulty";
        div.appendChild(label);

        const select = document.createElement("select");
        select.id = "difficulty";

        const easy = document.createElement("option");
        easy.value = "easy";
        easy.innerText = "Easy";
        select.appendChild(easy);
        
        const medium = document.createElement("option");
        medium.value = "medium";
        medium.innerText = "Medium";
        select.appendChild(medium);
        
        const hard = document.createElement("option");
        hard.value = "hard";
        hard.innerText = "Hard";
        select.appendChild(hard);

        div.appendChild(select);
        form.append(div);
        this.container.appendChild(form);
    }
}