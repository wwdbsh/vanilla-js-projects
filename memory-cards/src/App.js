import AddContainer from "./components/AddContainer.js";
import CardsContainer from "./components/CardsContainer.js";
import ClearBtn from "./components/ClearBtn.js";
import Header from "./components/Header.js";
import Navigation from "./components/Navigation.js";
import { setVariable } from "./script.js";

export default class App{
    constructor($target){
        const button = new ClearBtn({$target});
        const header = new Header({$target});
        const cardsContainer = new CardsContainer({$target});
        const navigation = new Navigation({$target});
        const addContainer = new AddContainer({$target});
        setVariable();
    }
}