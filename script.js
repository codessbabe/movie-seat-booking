// Selecting elements 
const container = document.querySelector('.container'); 
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count'); 
const total = document.getElementById('total'); 
const movieSelect = document.getElementById('movie'); 

let ticketPrice = +movieSelect.value;
console.log(typeof ticketPrice);


// Functions
// Save selected movie index and price 
function setMovieData(movieIndex, moviePrice) { 
  localStorage.setItem('selectedMovieIndex', movieIndex );
  localStorage.setItem('selectedMoviePrice', moviePrice);
}

// Update Total and Count 
function updateSelectedCount() { 
  const selectedSeats = document.querySelectorAll('.row .seat.selected');
  // Copy selected seats into an array 
  const seatsIndex = [...selectedSeats].map( (seat) => [...seats].indexOf(seat) );
  localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));
  
  const selectedSeatsCount = selectedSeats.length;
  count.innerText = selectedSeatsCount;
  total.innerText = '$' + selectedSeatsCount * ticketPrice; 
}


// Events 
// Movie select event 
movieSelect.addEventListener('change', e => { 
  ticketPrice = +e.target.value // add the binary operator '+' to coerce the string to a number
  setMovieData(e.target.selectedIndex, e.target.value);
  updateSelectedCount();
})

// Seat click event
container.addEventListener('click', (e) => { 
  if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {  
    e.target.classList.toggle('selected'); 
    updateSelectedCount();
  }
})