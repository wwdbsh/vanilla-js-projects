import { setItem } from "../util/LocalStorage.js";

export default class Search{
    constructor({$target, data, keywords, onSearch}) {
        this.container = document.createElement("section");
        this.container.className = "search-container";
        this.data = data;
        this.onSearch = onSearch;
        this.searchedKeywords = [];
        $target.appendChild(this.container);
        this.render();
    }
    setState(nextData){
        this.data = nextData;
        this.render();
    }
    render(){
        const searchBar = document.createElement("input");
        searchBar.type = "text";
        searchBar.className = "search";
        searchBar.id = "search";
        searchBar.placeholder = "고양이를 검색하세요."
        this.container.appendChild(searchBar);

        const searched = document.createElement("article");
        searched.className = "searched";
        searched.id = "searched";
        this.container.appendChild(searched);

        // events
        searchBar.onkeyup = (e)=> {
            if(e.key === "Enter"){
                setItem("keywords", e.target.value);
                if(e.target.value !== ""){
                    if(this.searchedKeywords.length == 5){
                        this.searchedKeywords.shift();
                    }
                    if(!this.searchedKeywords.includes(e.target.value)){
                        this.searchedKeywords.push(e.target.value);
                    }
                    searched.innerHTML = "";
                    this.searchedKeywords.map(kw => {
                        const btn = document.createElement("button");
                        btn.innerText = kw;
                        btn.addEventListener("click", () => this.onSearch(kw));
                        searched.appendChild(btn);
                    });
                }
                this.onSearch(e.target.value)
            }
        };
    }
}