import HeaderSection from "./components/HeaderSection.js";
import BodySection from "./components/BodySection.js";

export default class App{
    constructor($target){
        const headerSection = new HeaderSection({$target});
        const bodySection = new BodySection({$target});
    }
}