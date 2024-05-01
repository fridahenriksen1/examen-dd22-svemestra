
let recipies = [];
const filters = {
    categories: [],
    seasons: [],
    search: ""
}
const dataUserTemplate = document.querySelector('[data-user-template]');
const dataUserCards = document.querySelector('.user-accomodation');
const catyChips = document.querySelectorAll('.chip.categoy');
const seasonChips = document.querySelectorAll('.chip.season');
const searchInput = document.querySelector('#header-search');

searchInput.addEventListener('input', (e) => {
    const valueInput = e.target.value.toLowerCase();
    filters.search = valueInput;
    render();
});
fetch('assets/json/accommodation.json')
    .then(response => response.json())
    .then(data => {
        data.forEach(recept => {
            //recipies.push({ filtered: false, domNode: null, ...recept });
            recipies.push(recept);
        });
        render();

    })
    .catch(error => console.log(error));
function createCard(destination) {
    console.log('create');
    const card = dataUserTemplate.content.cloneNode(true).children[0];
    const header = card.querySelector('[data-header]');
    const img = card.querySelector('[data-image]');
    const link = card.querySelector('[data-link]');
    const info = card.querySelector('[data-info]');
    const catContainer = card.querySelector('[data-categorys]');
    const  likeIcons = document.querySelectorAll('.like-icon');

    likeIcons.forEach(icon => {
    icon.addEventListener('click', () => {
        const isLiked = icon.getAttribute('data-liked') === 'true';
        console.log('klick');
        if (isLiked) {
            icon.src = '/assets/icons/heart-like-large-card.svg';
            icon.setAttribute('data-liked', 'false');
        } else {
            icon.src = '/assets/icons/heartIconFilled.svg';
            icon.setAttribute('data-liked', 'true');
        }
    });
});

    destination.categories.forEach(cat => {
        const newSpan = document.createElement('span');
        newSpan.textContent = cat;
        newSpan.classList.add('style-chips');
        catContainer.append(newSpan);
    });
    
    link.setAttribute('href', destination.htmlUrl);
    header.textContent = destination.name;
    img.setAttribute('src', `assets/${destination.imageURL}`);
    header.textContent =  destination.name;
    info.textContent = destination.info;
    
    dataUserCards.append(card);
}
function render() {
    let filteredRecipies = [...recipies];
    if (filters.search.length > 0) {
        const search = filters.search.toLowerCase();
        filteredRecipies = filteredRecipies.filter(r => r.name.toLowerCase().includes(search));
    }
    if (filters.categories.length > 0) {
        console.log(filteredRecipies);
        filteredRecipies = filteredRecipies.filter(r => filters.categories.every(f => r.categories.includes(f)));
      
    }
    // if (filters.seasons.length > 0) {
    //     filteredRecipies = filteredRecipies.filter(r => filters.seasons.every(f => r.seasons.includes(f)));
    // }
    dataUserCards.innerHTML = '';
    filteredRecipies.forEach(recept => createCard(recept));
}
catyChips.forEach(chip => {
    chip.addEventListener('change', (e) => {
        const currentCat = e.target.dataset.cat;
        toggleItemArray(currentCat, filters.categories);
        render();
    });
});
// seasonChips.forEach(chip => {
//     chip.addEventListener('change', (e) => {
//         const currentSeason = e.target.dataset.season;
//         toggleItemArray(currentSeason, filters.seasons);
//         render();
//     });
// });

function toggleItemArray(item, array) {
    //Om det finns i arrray ta bort
    //om det inte finns lägg till 
    array.includes(item);
    if (array.includes(item)) {
        console.log(array);
        const index = array.indexOf(item);
        array.splice(index, 1);
    } else {
        array.push(item);
    }
}