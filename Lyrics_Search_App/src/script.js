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
    // get lylics button click
    result.addEventListener("click", e => {
        const clickedEl = e.target;
        if(clickedEl.tagName === "BUTTON"){
            const artist = clickedEl.getAttribute("data-artist");
            const songTitle = clickedEl.getAttribute("data-songtitle");
            getLyrics(artist, songTitle);
        }
    });
};

// get lyrics for song
const getLyrics = async (artist, songTitle) => {
    const data = await (await fetch(`${apiURL}/v1/${artist}/${songTitle}`)).json();
    const lyrics = data.lyrics.replace(/(\r\n|\r|\n)/g, "<br>");
    result.innerHTML = `
        <h2>
            <strong>
                ${artist}
            </strong> - ${songTitle}
        </h2>
        <span>${lyrics}</span>
    `;
    more.innerHTML = "";
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
            ${data.prev ? `<button id="prev-btn" class="btn">Prev</button>` : ""}
            ${data.next ? `<button id="next-btn" class="btn">Next</button>` : ""}
        `;
        const prevBtn = document.getElementById("prev-btn");
        const nextBtn = document.getElementById("next-btn");
        if(prevBtn) prevBtn.addEventListener("click", () => getMoreSongs(data.prev));
        if(nextBtn) nextBtn.addEventListener("click", () => getMoreSongs(data.next));
    }else{
        more.innerHTML = "";
    }
};

// get prev and next songs
const getMoreSongs = async url => {
    const data = await (await fetch(`https://cors-anywhere.herokuapp.com/${url}`)).json();
    showData(data);
};
