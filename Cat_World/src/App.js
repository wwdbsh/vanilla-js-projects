import { api } from "./components/API.js";
import CardContainer from "./components/Card/CardContainer.js";
import Modal from "./components/Modal.js";
import Search from "./components/Search/Search.js";
import Loader from "./components/util/Loader.js";
import { getItem, setItem } from "./components/util/LocalStorage.js";

export default class App{
    constructor($target) {
        const keywords = getItem("keywords");
        const data = getItem("data");

        const titleContainer = document.createElement("article");
        titleContainer.className = "title-container";
        $target.appendChild(titleContainer);

        const appTitle = document.createElement("h1");
        appTitle.innerText = "Cat World";
        titleContainer.appendChild(appTitle);

        const darkBtn = document.createElement("button");
        darkBtn.className = "dark-btn";
        darkBtn.innerText = "DARK";
        titleContainer.appendChild(darkBtn);

        darkBtn.addEventListener("click", () => {
            $target.classList.toggle("toggle-active");
        });

        const search = new Search({
            $target,
            data,
            keywords,
            onSearch: async (keyword) => {
                cardContainer.container.innerHTML = "";
                loader.container.classList.toggle("active");
                const response = await api.fetchCat(keyword);
                if(!response.isError){
                    setItem("data", response.data);
                    cardContainer.setState(response.data);
                    loader.container.classList.toggle("active");
                    console.log(loader);
                }else{ // error page
                    
                }
            }
        });
        
        const cardContainer = new CardContainer({
            $target,
            data,
            setModal:(data) => {
                modal.setState(data);
            }
        });

        const modal = new Modal({$target});

        const loader = new Loader({$target});
    }
}