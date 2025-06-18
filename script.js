const INVERT_PROBABILITY = 0.5

// Track if mouse is being pressed
let isMouseDown = false;

// Add mouse down/up listeners to document
document.addEventListener('mousedown', () => isMouseDown = true);
document.addEventListener('mouseup', () => isMouseDown = false);

// Add click handler to create the grid
document.addEventListener('DOMContentLoaded', () => {

   // Get references to our elements
const startButton = document.getElementById('start');
const grid = document.getElementById('grid');

  // Clear any existing grid first
  grid.innerHTML = '';

  // Create 100 cells (10x10)
  for (let i = 0; i < 100; i++) {
    const cell = document.createElement('div');
    cell.className = 'cell';


     
    // Handle both click and drag events
    cell.addEventListener('mousedown', () => {
      cell.classList.toggle('black');
    });

    cell.addEventListener('mouseenter', () => {
      if (isMouseDown) {
        cell.classList.toggle('black');
      }
    });

    grid.appendChild(cell);
  }

  // Hide the start button after grid is created
  startButton.style.display = 'none';
});

