export default class MainTask{
    constructor({$target}){
        this.container = document.createElement("div");
        this.container.className = "main-task-container";
        this.container.id = "main-task-container";
        $target.appendChild(this.container);

        const inputContainer = document.createElement("div");
        inputContainer.className = "main-task-input-container show";
        inputContainer.id = "main-task-input-container";
        $target.appendChild(inputContainer);

        const question = document.createElement("h3");
        question.className = "main-task-question";
        question.id = "main-task-question";
        question.innerText = "What is your main focus for today?";
        inputContainer.appendChild(question);

        const input = document.createElement("input");
        input.className = "main-task-input";
        input.id = "main-task-input";
        inputContainer.appendChild(input);

        const resultContainer = document.createElement("div");;

        const mainTask = document.createElement("div");
        mainTask.className = "main-task-text";
        mainTask.className = "main-task-text";

        // const input
    }
}