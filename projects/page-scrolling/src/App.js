import Header from "./components/Header/Header.js";

export default class App{
    constructor($target){
        const header = new Header({$target});
        header.setState({headerId:"home"});
    }
};