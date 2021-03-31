export default class Header{
    constructor({$target}){
        this.container = document.createElement("header");
        $target.appendChild(this.container);

        const h1 = document.createElement("h1");
        h1.innerText = "LyricsSearch";
        this.container.appendChild(h1);

        const form = document.createElement("form");
        form.id = "form";
        this.container.appendChild(form);

        const search = document.createElement("input");
        search.type = "text";
        search.id = "search";
        search.placeholder = "Enter artist or song name...";
        form.appendChild(search);

        const btn = document.createElement("button");
        btn.innerText = "Search";
        form.appendChild(btn)
    }
}