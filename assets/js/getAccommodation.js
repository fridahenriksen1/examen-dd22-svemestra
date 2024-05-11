//! Här ska fyllas på med sidorna för enskilda boende, om vi ska visa det, vilket jag tror :> La in kod från recept sidan sålänge för att kunna se hur man kan bygga upp det



const container = document.querySelector('.accommodation');
const destiantionTemplate = document.querySelector('[data-destination]');

// //Detta script hämtar och spottar ut data till ett enkillt recept
console.log('hej');

fetch('../json/accommodation.json')
.then(response => response.json())
.then(data => {
    console.log(data);
    data.forEach(item => {
        if(item.id == container.id){
            console.log(item);
            //destination är det ni vill söka i när ni kör queryselector
            const destination = destiantionTemplate.content.cloneNode(true).children[0];

            //Här skapar ni ref till era element i destiantions sidan
            const heading = destination.querySelector('[data-name]');
            heading.textContent = item.name;
            const info = destination.querySelector('[data-info]');
            info.textContent = item.info;
            const location = destination.querySelector('[data-location]');
            location.textContent = item.location;
            //Gör en ny variabel  för varje html som ska ha data
            const img = destination.querySelector('[data-img]');
            img.setAttribute('src', `../${item.imageURL}`);
            
            //Lägger vi till det vi skapat i .accomandation div
            container.append(destination);

        }
    })
})


