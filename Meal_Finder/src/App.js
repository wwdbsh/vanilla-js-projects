import { bindEvents, setVarialbe } from "./components/API.js";
import SearchBar from "./components/SearchBar.js";

export default class App{
    constructor($target){
        const title = document.createElement("h1");
        title.innerText = "Meal Finder";
        $target.appendChild(title);

        const searchBar = new SearchBar({$target});

        const resultHeading = document.createElement("article");
        resultHeading.id = "result-heading";
        $target.appendChild(resultHeading);

        const meals = document.createElement("article");
        meals.id = "meals";
        meals.className = "meals";
        $target.appendChild(meals);

        const singleMeal = document.createElement("article");
        singleMeal.id = "single-meal";
        $target.appendChild(singleMeal);

        setVarialbe();
        bindEvents();
    }
}