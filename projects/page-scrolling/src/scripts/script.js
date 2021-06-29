let date = null;
let navToggle = null;
let linksContainer = null;
let links = null;
let navbar = null;
let topLink = null;
let scrollLinks = null;

export const runScript = () => {
    date = document.getElementById("date");
    navToggle = document.querySelector(".nav-toggle");
    linksContainer = document.querySelector(".links-container");
    links = document.querySelector(".links");
    navbar = document.getElementById("nav");
    topLink = document.querySelector(".top-link");
    scrollLinks = document.querySelectorAll(".scroll-link");

    date.innerHTML = new Date().getFullYear();

    addEventListeners();
};

const addEventListeners = () => {
    navToggle.addEventListener("click", () => {
        const linksHeight = links.getBoundingClientRect().height;
        const containerHeight = linksContainer.getBoundingClientRect().height;
        if(containerHeight === 0){
            linksContainer.style.height = `${linksHeight}px`;
        }else{
            linksContainer.style.height = 0;
        }
    });

    window.addEventListener("scroll", () => {
        const scrollHeight = window.pageYOffset;
        const navHeight = navbar.getBoundingClientRect().height;
        if(scrollHeight > navHeight){
            navbar.classList.add("fixed-nav");
        }else{
            navbar.classList.remove("fixed-nav");
        }
        if(scrollHeight > 500){
            topLink.classList.add("show-link");
        }else{
            topLink.classList.remove("show-link");
        }
    });
    scrollLinks.forEach(link => {
        link.addEventListener("click", e => {
            e.preventDefault();
            const id = e.currentTarget.getAttribute("href").slice(1);
            const element = document.getElementById(id);

            const navHeight = navbar.getBoundingClientRect().height;
            const containerHeight = linksContainer.getBoundingClientRect().height;
            const fixedNav = navbar.classList.contains("fixed-nav");
            let position = element.offsetTop - navHeight;

            if(!fixedNav){
                position = position - navHeight;
            }
            if(navHeight > 82){
                position = position + containerHeight;
            }

            window.scrollTo({
                left:0,
                top:position
            });
            linksContainer.style.height = 0;
        });
    });
};