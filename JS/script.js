const list = document.getElementById('list');
const checkBtn = document.getElementById('checkBtn');

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
      item.className = 'list-item'
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
};

createList();