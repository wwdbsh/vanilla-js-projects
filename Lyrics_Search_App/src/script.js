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
const showData = (data) => {
    // let output = "";
    // data.data.forEach(song => {
    //     output += `
    //         <li>
    //             <span><strong>${song.artist.name}</strong> - ${song.title}</span>
    //             <button class="btn" data-artist="${song.artist.name}" data-songtitle="${song.title}">Get Lyrics</button>
    //         </li>
    //     `;
    // });
    // result.innerHTML = `
    //     <ul class="songs">
    //         ${output}
    //     </ul>
    // `;
    result.innerHTML = `
        <ul class="songs">
            ${data.data.map(song => `
                <li>
                    <span><strong>${song.artist.name}</strong> - ${song.title}</span>
                    <button class="btn" data-artist="${song.artist.name}" data-songtitle="${song.title}">Get Lyrics</button>
                </li>
            `).join("")}
        </ul>
    `;
    if(data.prev || data.next){
        more.innerHTML = `
            ${data.prev ?
                 `<button
                   class="btn"
                   onclick="${getMoreSongs(data.prev)}"
                   >
                    Prev
                   </button>`
                    : ""}
            ${data.next ?
                 `<button
                  class="btn"
                  onclick="${getMoreSongs(data.next)}"
                  >
                    Next
                  </button>`
                   : ""}
        `;
    }else{
        more.innerHTML = "";
    }
};

// get prev and next songs
const getMoreSongs = async url => {
    const data = await (await fetch(`https://cors-anywhere.herokuapp.com/${url}`)).json();
    showData(data);
};