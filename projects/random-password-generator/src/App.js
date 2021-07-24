import Generator from "./components/Generator.js";

export default class App{
    constructor($target){
        const generator = new Generator({$target});
        generator.setState({
            id:"password-generator-box",
            className:"outter-box"
        });
    }
}