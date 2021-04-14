import Button from "./Button.js";

export default class RulesContainer{
    constructor({$target}){
        this.container = document.createElement("div");
        $target.appendChild(this.container);

        const header = document.createElement("h2");
        header.innerText = "How To Play:";
        this.container.appendChild(header);

        const rule1 = document.createElement("p");
        rule1.innerText = "Use your right and left keys to move the paddle to bounce the ball up and break the blocks.";
        this.container.appendChild(rule1);

        const rule2 = document.createElement("p");
        rule2.innerText = "If you miss the ball, your score and the blocks will reset.";
        this.container.appendChild(rule2);

        const closeBtn = new Button({$target:this.container});
        closeBtn.setState({
            id:"close-btn",
            className:"btn",
            content:"Close",
        });
        
    }
    setState(props){
        this.container.id = props.id;
        this.container.className = props.className;
    }
}