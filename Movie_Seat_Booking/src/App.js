import MovieSection from "./components/MovieSection.js";
import ShowCaseSection from "./components/ShowCaseSection.js";
import TheaterSection from "./components/TheaterSection/TheaterSection.js";
import CountTotalSection from "./components/CountTotalSection.js";

export default class App{
    constructor($target){
        const movieSection = new MovieSection({$target});
        const showcaseSection = new ShowCaseSection({$target});
        const theaterSection = new TheaterSection({$target});
        const countTotalSection = new CountTotalSection({$target});
    }
}