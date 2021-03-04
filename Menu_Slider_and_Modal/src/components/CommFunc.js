let toggle = null;
let close = null;
let open = null;
let modal = null;


export const setVariable = (header, _modal) => {
    toggle = header.header.childNodes[0];
    close = _modal.modalContainer.childNodes[0].childNodes[0];
    open = header.header.childNodes[3];
    modal = _modal.modalContainer;
};

export const addEventGenerate = () => {
    open.addEventListener("click", () => modal.classList.add("show-modal"));
    close.addEventListener("click", () => modal.classList.remove("show-modal"));
    toggle.addEventListener("click", () => document.body.classList.toggle("show-nav"));
    window.addEventListener("click", e => {
        if(e.target === modal){
            modal.classList.remove("show-modal");
        }
    });
    window.addEventListener("keyup", (e) => {
        if(e.key === "Escape"){
            modal.classList.remove("show-modal");
        }
    });
};