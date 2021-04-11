export default class SearchBar{
    constructor({$target}){
        this.searchContainer = document.createElement("section");
        this.searchContainer.className = "flex";
        $target.appendChild(this.searchContainer);
        this.render();
    }
    render(){
        const submitForm = document.createElement("form");
        submitForm.className = "flex";
        submitForm.id = "submit";

        const searchBar = document.createElement("input");
        searchBar.type = "text";
        searchBar.id = "search";
        searchBar.placeholder = "Search for meals or keywords";
        submitForm.appendChild(searchBar);

        const searchBtn = document.createElement("button");
        searchBtn.className = "search-btn";
        searchBtn.type = "submit";

        const searchBtnIcon = document.createElement("i");
        searchBtnIcon.className = "fas fa-search";
        searchBtn.appendChild(searchBtnIcon);
        submitForm.appendChild(searchBtn);

        this.searchContainer.appendChild(submitForm);
        //

        const randomBtn = document.createElement("button");
        randomBtn.className = "random-btn";
        randomBtn.id = "random";
        
        const randomBtnIcon = document.createElement("i");
        randomBtnIcon.className = "fas fa-random";
        randomBtn.appendChild(randomBtnIcon);

        this.searchContainer.appendChild(randomBtn);
    }
}