// Selecting elements 
const container = document.querySelector('.container'); 
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count'); 
const total = document.getElementById('total'); 
const movieSelect = document.getElementById('movie'); 

let ticketPrice = +movieSelect.value;
console.log(typeof ticketPrice);

// Functions
// Update Selected Total and Count 
function updateSelectedCount() { 
  const selectedSeats = document.querySelectorAll('.row .seat.selected');
  const selectedSeatsCount = selectedSeats.length;
  count.innerText = selectedSeatsCount;
  total.innerText = '$' + selectedSeatsCount * ticketPrice; 
}


// Events 
// Movie select event 
movieSelect.addEventListener('change', e => { 
  ticketPrice = +e.target.value // add the binary operator '+' to coerce the string to a number
  updateSelectedCount();
})


// Seat click event
container.addEventListener('click', (e) => { 
  if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {  
    console.log(e.target); 
    e.target.classList.toggle('selected'); 

    updateSelectedCount();

  }
})