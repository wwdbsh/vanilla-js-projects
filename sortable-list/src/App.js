import Button from "./components/Button.js";
import DragList from "./components/DragList.js";
import Guide from "./components/Guide.js";
import Header from "./components/Header.js";
import { getDocumentElements } from "./script.js";

export default class App{
    constructor($target){
        const title = new Header({$target});
        title.setState({text:"10 Richest People"});
        
        const guide = new Guide({$target});
        guide.setState({text:"Drag and drop the items into their corresponding spots"});

        const list = new DragList({$target});
        list.setState({id:"draggable-list"});

        const btn = new Button({$target});
        btn.setState({className:"check-btn", id:"check"});

        getDocumentElements();
    }
}