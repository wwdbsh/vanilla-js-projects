import Calculator from "./components/Calculator/Calculator.js";

export default class App{
    constructor($target){
        const calculator = new Calculator({$target});
    }
}