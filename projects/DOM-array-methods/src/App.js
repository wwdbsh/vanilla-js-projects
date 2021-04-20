import BodySection from "./components/BodySection.js";

export default class App{
    constructor($target){
        const bodySection = new BodySection({$target});
    }
}