import CalBtn from "./CalBtn.js";

export default class Calculator{
    constructor({$target}){
        this.container = document.createElement("div");
        this.container.className = "cal-container";
        this.container.id = "cal-container";
        $target.appendChild(this.container);

        const calculator = document.createElement("div");
        calculator.className = "cal";
        calculator.id = "cal";
        this.container.appendChild(calculator);

        const display = document.createElement("div");
        display.className = "cal-display";
        display.id = "cal-display";
        calculator.appendChild(display);

        /*****************************************/
        const row1 = document.createElement("div");
        row1.className = "cal-row";
        calculator.appendChild(row1);

        const row1Btn1 = new CalBtn({$target:row1});
        row1Btn1.setState({
            className:"cal-btn",
            innerText:"AC",
            id:"ac-btn"
        });
        const row1Btn2 = new CalBtn({$target:row1});
        row1Btn2.setState({
            className:"cal-btn",
            innerText:"DEL",
            id:"del-btn"
        });
        const row1Btn3 = new CalBtn({$target:row1});
        row1Btn3.setState({
            className:"cal-btn",
            innerText:"%",
            id:"mode-btn"
        });
        const row1Btn4 = new CalBtn({$target:row1});
        row1Btn4.setState({
            className:"cal-btn",
            innerText:"/",
            id:"divide-btn"
        });
        /*****************************************/

        /*****************************************/
        const row2 = document.createElement("div");
        row2.className = "cal-row";
        calculator.appendChild(row2);
        
        const row2Btn1 = new CalBtn({$target:row2});
        row2Btn1.setState({
            className:"cal-btn digit",
            innerText:"7",
            id:"seven-btn"
        });
        const row2Btn2 = new CalBtn({$target:row2});
        row2Btn2.setState({
            className:"cal-btn digit",
            innerText:"8",
            id:"eight-btn"
        });
        const row2Btn3 = new CalBtn({$target:row2});
        row2Btn3.setState({
            className:"cal-btn digit",
            innerText:"9",
            id:"nine-btn"
        });
        const row2Btn4 = new CalBtn({$target:row2});
        row2Btn4.setState({
            className:"cal-btn",
            innerText:"x",
            id:"multiply-btn"
        });
        /*****************************************/

        /*****************************************/
        const row3 = document.createElement("div");
        row3.className = "cal-row";
        calculator.appendChild(row3);
        
        const row3Btn1 = new CalBtn({$target:row3});
        row3Btn1.setState({
            className:"cal-btn digit",
            innerText:"4",
            id:"four-btn"
        });
        const row3Btn2 = new CalBtn({$target:row3});
        row3Btn2.setState({
            className:"cal-btn digit",
            innerText:"5",
            id:"five-btn"
        });
        const row3Btn3 = new CalBtn({$target:row3});
        row3Btn3.setState({
            className:"cal-btn digit",
            innerText:"6",
            id:"six-btn"
        });
        const row3Btn4 = new CalBtn({$target:row3});
        row3Btn4.setState({
            className:"cal-btn",
            innerText:"-",
            id:"subtract-btn"
        });
        /*****************************************/

        /*****************************************/
        const row4 = document.createElement("div");
        row4.className = "cal-row";
        calculator.appendChild(row4);
        
        const row4Btn1 = new CalBtn({$target:row4});
        row4Btn1.setState({
            className:"cal-btn digit",
            innerText:"1",
            id:"one-btn"
        });
        const row4Btn2 = new CalBtn({$target:row4});
        row4Btn2.setState({
            className:"cal-btn digit",
            innerText:"2",
            id:"two-btn"
        });
        const row4Btn3 = new CalBtn({$target:row4});
        row4Btn3.setState({
            className:"cal-btn digit",
            innerText:"3",
            id:"three-btn"
        });
        const row4Btn4 = new CalBtn({$target:row4});
        row4Btn4.setState({
            className:"cal-btn",
            innerText:"+",
            id:"add-btn"
        });
        /*****************************************/

        /*****************************************/
        const row5 = document.createElement("div");
        row5.className = "cal-row";
        calculator.appendChild(row5);

        const row5Btn1 = new CalBtn({$target:row5});
        row5Btn1.setState({
            className:"cal-btn",
            innerText:"0",
            id:"zero-btn"
        });
        const row5Btn2 = new CalBtn({$target:row5});
        row5Btn2.setState({
            className:"cal-btn",
            innerText:".",
            id:"float-point-btn"
        });
        const row5Btn3 = new CalBtn({$target:row5});
        row5Btn3.setState({
            className:"cal-btn",
            innerText:"=",
            id:"execute-btn"
        });
        /*****************************************/
    }
}