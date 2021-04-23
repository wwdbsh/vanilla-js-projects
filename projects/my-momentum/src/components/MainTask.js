export default class MainTask{
    constructor({$target}){
        this.container = document.createElement("div");
        this.container.className = "main-task-container";
        this.container.id = "main-task-container";
        $target.appendChild(this.container);

        const question = document.createElement("h3");
        question.className = "main-task-question";
        question.id = "main-task-question";
        question.innerText = "What is your main focus for today?";
        this.container.appendChild(question);

        const mainTask = document.createElement("div");
        mainTask.className = "main-task-text";
        mainTask.className = "main-task-text";

        // const input
    }
}