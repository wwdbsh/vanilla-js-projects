let days = null;
let hours = null;
let minutes = null;
let seconds = null;
let countdown = null;
let year = null;
let loading = null;

const currentYear = new Date().getFullYear();

const newYearTime = new Date(`January 01 ${currentYear+1} 00:00:00`);

export const getDocumentElements = () => {
    days = document.getElementById("days");
    hours = document.getElementById("hours");
    minutes = document.getElementById("minutes");
    seconds = document.getElementById("seconds");
    countdown = document.getElementById("countdown");
    year = document.getElementById("year");
    loading = document.getElementById("loading");
    year.innerText = currentYear + 1;
};