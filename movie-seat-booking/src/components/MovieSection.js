import Option from "./Option.js";

export default class MovieSection{
    constructor({$target}){
        this.section = document.createElement("section");
        this.options = [
            {value:"10", title:"Avengers: Endgame ($10)"},
            {value:"12", title:"Joker ($12)"},
            {value:"8", title:"Toy Story 4 ($8)"},
            {value:"9", title:"The Lion King ($9)"},
        ];
        $target.appendChild(this.section);
        this.render();
    }
    setMovieData(movieIndex, moviePrice){
        localStorage.setItem("selectedMovieIndex", movieIndex);
        localStorage.setItem("selectedMoviePrice", moviePrice);
    }
    render(){
        const movieContainer = document.createElement("article");
        movieContainer.className = "movie-container";

        const label = document.createElement("label");
        label.innerText = "Pick a movie:"

        const select = document.createElement("select");
        select.id = "movie";

        this.options.forEach((movie) => {
            new Option({...movie, $target:select})
        });

        movieContainer.appendChild(label);
        movieContainer.appendChild(select);

        select.addEventListener("change", e => {
            this.setMovieData(e.target.selectedIndex, e.target.value);
        });

        this.section.appendChild(movieContainer);
    }
}