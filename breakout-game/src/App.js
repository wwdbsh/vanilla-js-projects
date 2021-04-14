import Button from "./components/Button.js";
import Canvas from "./components/Canvas.js";
import RulesContainer from "./components/RulesContainer.js";

export default class App{
    constructor($target){
        const header = document.createElement("h1");
        header.innerText = "Breakout!";
        $target.appendChild(header);

        const showBtn = new Button({$target});
        showBtn.setState({
            id:"rules-btn",
            className:"btn rules-btn",
            content:"Show Rules"
        });

        const rules = new RulesContainer({$target});
        rules.setState({
            id:"rules",
            className:"rules"
        });

        const canvas = new Canvas({$target});
        canvas.setState({
            id:"canvas",
            width:"800",
            height:"600"
        });
    }
}