const apiURL = "https://api.lyrics.ovh";

let form = null;
let search = null;
let result = null;
let more = null;

// set dom instances
export const setDomInstances = () => {
    form = document.getElementById("form");
    search = document.getElementById("search");
    result = document.getElementById("result");
    more = document.getElementById("more");
    addEvents();
};

// event listeners
const addEvents = () => {
    form.addEventListener("submit", e => {
        e.preventDefault();
        const searchTerm = search.value.trim();
        console.log(searchTerm);
        if(!searchTerm){
            alert("Please type in a search term");
        }else{
            searchSongs(searchTerm);
        }
    });
};

// search by song or artist
const searchSongs = async term => {
    const data = await (await fetch(`${apiURL}/suggest/${term}`)).json();
    showData(data);
};

// show song and artist in DOM
const showData = data => {
    
};