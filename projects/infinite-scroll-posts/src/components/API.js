let postsContainer = null;
let loader = null;
let filter = null;
let toggle = null;
let wholeBody = null;

let limit = 5;
let page = 1;

let initscreen = true;

export const setVariable = () => {
    postsContainer = document.getElementById("posts-container");
    loader = document.querySelector(".loader");
    filter = document.getElementById("filter");
    toggle = document.getElementById("toggle");
    wholeBody = document.querySelector("body");
    showPosts();
};

export const bindEvents = () => {
    window.addEventListener("scroll", () => {
        const {scrollTop, scrollHeight, clientHeight} = document.documentElement;
        if(scrollTop + clientHeight >= scrollHeight - 5){
            showLoading();
        }
    });
    filter.addEventListener("input", filterPosts);
    toggle.addEventListener("click", changeTheme);
};

const changeTheme = () => {
    if(initscreen){
        initscreen = false;
        wholeBody.classList.add("toggle-inactive");
    }
    wholeBody.classList.toggle("toggle-active");
    toggle.classList.toggle("active");
};

const filterPosts = (e) => {
    const term = e.target.value.toUpperCase();
    const posts = document.querySelectorAll(".post");
    posts.forEach(post => {
        const title = post.querySelector(".post-title").innerText.toUpperCase();
        const body = post.querySelector(".post-body").innerText.toUpperCase();
        if(title.indexOf(term) > -1 || body.indexOf(term) > -1){
            post.style.display = "flex";
        }else{
            post.style.display = "none";
        }
    });
};

const getPosts = async () => {
    const data = await (await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`)).json();
    return data;
};

const showPosts = async () => {
    const posts = await getPosts();
    posts.forEach(post => {
        const postEl = document.createElement("div");
        postEl.classList.add("post");
        postEl.innerHTML = `
            <div class="number">${post.id}</div>
            <div class="post-info">
                <h2 class="post-title">${post.title}</h2>
                <p class="post-body">${post.body}</p>
            </div>
        `;
        postsContainer.appendChild(postEl);
    });
};

const showLoading = () => {
    loader.classList.add("show");
    setTimeout(() => {
        loader.classList.remove("show");
        setTimeout(() => {
            page++;
            showPosts();
        }, 300);
    }, 1000);
};