const jsonUrl = 'assets/json/accommodation.json';
const dataUserTemplate = document.querySelector('[data-user-template]');
const dataUserCards = document.querySelector('[data-user-cards]');
const dataUserAccommodation = document.querySelectorAll('[data-user-accommodation]');
const searchInput = document.querySelector('[data-search]');

let accommodations = []; 


//! sökbaren

if(searchInput){
    // Fokus-lyssnare på input med id searchInput
    searchInput.addEventListener('focus', () => {
        console.log('Du står i input');
        searchInput.classList.toggle('focus-border');
    });

    // Blur-lyssnare på input med id searchInput
    searchInput.addEventListener('blur', () => {
        console.log('Du utanför i input');
        searchInput.classList.toggle('focus-border');
    });
    searchInput.addEventListener('input', (e) => {
        const valueInput = e.target.value.toLowerCase();
        
        accommodations.forEach( accommodation =>{
            //Kollar om något av villkoren stämmer och return en boolean (true/false)
            //!La till att man kan söka på pris på sista
            const isVisible =  accommodation.name.toLowerCase().includes(valueInput) ||  accommodation.category.toLowerCase().includes(valueInput) ||  accommodation.info.toLowerCase().includes(valueInput);
            //Gömmer korten som inte finns i sökningen 
             accommodation.element.classList.toggle('hide',!isVisible);
        });
    });
};
//fetchData innehåller data från fetch, hämtar data från json
let fetchedData = [];
console.log(fetchedData);
function getCard (){
    accommodations = fetchedData.map(  accommodation => {
        const card = dataUserTemplate.content.cloneNode(true).children[0];
        const header = card.querySelector('[data-header]');
        const img = card.querySelector('[data-image]');
        const cat = card.querySelector('[data-cat]');
        const link = card.querySelector('[data-link]');
       // const price = card.querySelector('[data-price]');
        const info = card.querySelector('[data-info]');
       // console.log(price);
        //! Här ska det länkas till enskild sidan sen, just nu står det att href="undefined"
        console.log(accommodation.htmlUrl);
        link.setAttribute('href',  accommodation.htmlUrl);
        // link.setAttribute('href', filterPage.html);

        header.textContent =  accommodation.name;
        cat.textContent =  accommodation.category;
        img.setAttribute('src', `assets/${accommodation.imageURL}`);
        info.textContent =  accommodation.info;
        dataUserCards.append(card);
        
       
        return{name:  accommodation.name,category:  accommodation.category,info:  accommodation.info, element:card}
    });
}
fetch(jsonUrl)
.then(response => response.json())
.then(data => {
    data.forEach(d => {
        fetchedData.push(d);
    });
    if(dataUserCards){
        getCard();
    }
    //!Hur många kort som ska visas på sidan i rad
    const maxCardsToShow = 4; // Antal kort att visa
    if(dataUserAccommodation){
        //Detta kan göras snyggare
        dataUserAccommodation.forEach(section => {
            accommodations = data.slice(0, maxCardsToShow).map( accommodation => { // Använd slice() för att begränsa antalet kort
                const card = dataUserTemplate.content.cloneNode(true).children[0];
                const header = card.querySelector('[data-header]');
                const img = card.querySelector('[data-image]');
                const cat = card.querySelector('[data-cat]');
                const link = card.querySelector('[data-link]');
                const info = card.querySelector('[data-info]');
               // console.log(price);
                link.setAttribute('href',  accommodation.html);
                // link.setAttribute('href',  filterPage.html);
                header.textContent =  accommodation.name;
                cat.textContent =  accommodation.category;
                img.setAttribute('src',  accommodation.imageURL);
                info.textContent =  accommodation.info;
                section.append(card);
                return{name:  accommodation.name,category:  accommodation.category,info:  accommodation.info, element:card}
            });
        }); 
    }  
})
.catch(errorMsg => console.log(errorMsg));


//! Chips filtreringen för att det ska visas eller försvinna
const allChips = document.querySelectorAll('.chip');
let activeChips = []; // Array för att lagra de aktiva chippen

if (allChips) {
    allChips.forEach(chip => {
        chip.addEventListener('click', (e) => {
            const chipValue = e.target.nextSibling.nextSibling.innerHTML.toLowerCase();
            // Kontrollera om chipet redan är aktivt
            const isActive = activeChips.includes(chipValue);
            
            if (isActive) {
                // Ta bort chipet från den aktiva listan
                activeChips = activeChips.filter(activeChip => activeChip !== chipValue);
            } else {
                // Lägg till chipet i den aktiva listan
                activeChips.push(chipValue);
            }

            // Iterera över boenden och visa/dölj baserat på de aktiva chippen
            accommodations.forEach(accommodation => {
                // Kontrollera om något av de aktiva chippen matchar kategorin eller priset på boendet
                 //! Chips kategori och under är chips price 
                const isVisible = activeChips.length === 0 || activeChips.includes(accommodation.category.toLowerCase()) || activeChips.includes(accommodation.info.toLowerCase());
                // Gömmer de kort som inte har kategorin eller priset
                accommodation.element.classList.toggle('hide', !isVisible);
            });
        });
    });
    
}

else{
    console.log('chips funkar ej');
    
}
    
