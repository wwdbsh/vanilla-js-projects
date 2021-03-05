import { bindEvents, setVariable } from "./components/API.js";
import FilterContainer from "./components/FilterContainer.js";
import Loader from "./components/Loader.js";
import PostContainer from "./components/PostContainer.js";
import Toggle from "./components/Toggle.js";

export default class App{
    constructor($target) {
        const title = document.createElement("h1");
        title.innerText = "My Blog";
        $target.appendChild(title);

        const filterContainer = new FilterContainer({$target});

        const postContainer = new PostContainer({$target});

        const loader = new Loader({$target});

        const toggle = new Toggle({$target});

        setVariable();
        bindEvents();
    }
}