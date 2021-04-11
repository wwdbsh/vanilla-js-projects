let container = null;
let text = null;

const totalTime = 7500;
const breatheTime = (totalTime/5)*2;
const holdTime = totalTime/5;

export const setDOMInstances = () => {
    container = document.getElementById("container");
    text = document.getElementById("text");
    breathAnimation();
    setInterval(breathAnimation, totalTime);
};

const breathAnimation = () => {
    text.innerText = "Breathe In!";
    container.className = "container grow";

    setTimeout(() => {
        text.innerText = "Hold";

        setTimeout(() => {
            text.innerText = "Breathe Out!";
            container.className = "container shrink";
        }, holdTime);
    }, breatheTime);
};