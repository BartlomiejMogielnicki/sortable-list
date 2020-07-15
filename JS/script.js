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
    [...biggestCountries].forEach((country, index) => {
        const item = document.createElement('li');

        item.setAttribute('data-index', index);

        item.innerHTML = `
        <span class="number">${index + 1}</span>
        <div class="item" draggable="true">
            <span class="country-name">${country}</p>
        </div>
        `;

        listItems.push(item);

        list.appendChild(item);
    });
};

createList();