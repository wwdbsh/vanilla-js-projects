export const updateSelectedCount = () => {
    const selectedSeats = document.querySelectorAll(".row .seat.selected");
    const seats = document.querySelectorAll(".row .seat:not(.occupied)");
    const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat));
    const selectedSeatsCount = selectedSeats.length;
    const count = document.querySelector("#count");
    const total = document.querySelector("#total");
    const ticketPrice = document.querySelector("#movie").value;
    
    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount*ticketPrice;

    localStorage.setItem("selectedSeats", JSON.stringify(seatsIndex));
};

export const populateUI = () => {
    const selectedSeats = JSON.parse(localStorage.getItem("selectedSeats"));
    const seats = document.querySelectorAll(".row .seat:not(.occupied)");
    
    if(selectedSeats !== null && selectedSeats.length > 0){
        seats.forEach((seat, index) => {
            if(selectedSeats.indexOf(index) > -1){
                seat.classList.add("selected");
            }
        });
    }

    const selectedMovieIndex = localStorage.getItem("selectedMovieIndex");
    const movieSelect = document.querySelector("#movie");
    if(selectedMovieIndex !== null){
        movieSelect.selectedIndex = selectedMovieIndex;
    }
};