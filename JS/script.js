const list = document.getElementById('list');
const checkBtn = document.getElementById('checkBtn');

let counter = 0;

// Define biggest countries
const biggestCountries = [
  'Russia',
  'Canada',
  'China',
  'USA',
  'Brasil',
  'Australia',
  'India',
  'Argentina',
  'Kazakhstan',
  'Algeria'
];

// Create countries list
const listItems = [];

// Drag/drop functions
function dragStart() {
};

function dragOver(e) {
  e.preventDefault();
};

function dragEnter() {
  counter++;
  if (counter !== 0) {
    this.classList.add('over');
  }
};

function dragLeave(e) {
  counter--;
  if (counter === 0) {
    this.classList.remove('over');
  }
};

function dragDrop() {
  counter = 0;
  this.classList.remove('over');
};

// Add eventlisteners
const addEventListeners = () => {
  const listItems = document.querySelectorAll('.list-item');
  const draggables = document.querySelectorAll('.item');

  draggables.forEach(item => {
    item.addEventListener('dragstart', dragStart)
  });

  listItems.forEach(item => {
    item.addEventListener('dragover', dragOver)
    item.addEventListener('dragenter', dragEnter)
    item.addEventListener('dragleave', dragLeave)
    item.addEventListener('drop', dragDrop)
  });
};

// Insert list into DOM
const createList = () => {
  [...biggestCountries]
    .map(item => ({
      value: item,
      sort: Math.random()
    }))
    .sort((a, b) => a.sort - b.sort)
    .map(item => item.value)
    .forEach((country, index) => {
      // Create new li element
      const item = document.createElement('li');
      // Add class to new li element
      item.className = 'list-item';
      // Set attribute
      item.setAttribute('data-index', index);
      // Insert innerHTML
      item.innerHTML = `
        <span class="number">${index + 1}</span>
        <div class="item" draggable="true">
            <span class="country-name">${country}</span>
            <i class="fas fa-grip-lines"></i>
        </div>
        `;
      // Insert item to list array
      listItems.push(item);
      // Insert item into DOM
      list.appendChild(item);
    });

  addEventListeners();
};

createList();

