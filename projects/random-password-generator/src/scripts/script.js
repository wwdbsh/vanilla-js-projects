let upperBtn = null;

export const runScript = () => {
    upperBtn = document.getElementById("upper-btn");
    upperBtn.addEventListener("click", e => {
        if(e.target.parentNode.classList.contains("active")){
            e.target.parentNode.classList.remove("active");
            e.target.classList.remove("active");
        }else{
            e.target.parentNode.classList.add("active");
            e.target.classList.add("active");
        }
    });
};