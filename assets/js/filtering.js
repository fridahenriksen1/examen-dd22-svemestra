let recipies = [];
const filters = {
  categories: [],
  seasons: [],
  search: "",
};
const dataUserTemplate = document.querySelector("[data-user-template]");
const dataUserCards = document.querySelector(".user-accomodation");
const catyChips = document.querySelectorAll(".chip.categoy");
const seasonChips = document.querySelectorAll(".chip.season");
const searchInput = document.querySelector("#header-search");

searchInput.addEventListener("input", (e) => {
  const valueInput = e.target.value.toLowerCase();
  filters.search = valueInput;
  render();
});
fetch("assets/json/accommodation.json")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((recept) => {
      //recipies.push({ filtered: false, domNode: null, ...recept });
      recipies.push(recept);
    });
    render();
  })
  .catch((error) => console.log(error));
function createCard(destination) {
  // console.log('create');
  const card = dataUserTemplate.content.cloneNode(true).children[0];
  const header = card.querySelector("[data-header]");
  const img = card.querySelector("[data-image]");
  const link = card.querySelector("[data-link]");
  const info = card.querySelector("[data-info]");
  const location = card.querySelector("[data-location]");
  const rating = card.querySelector("[data-rating]");
  const catContainer = card.querySelector("[data-categorys]");
  // destination.categories.forEach(cat => {
  //     const newSpan = document.createElement('span');
  //     newSpan.textContent = cat;

  //     switch (cat) {
  //         case 'Glashus':
  //             newSpan.innerHTML = '<img class="category-icon" src="/assets/icons/glashus.svg" alt="Glashus Icon">';
  //             newSpan.classList.add('glashus-category');
  //             break;
  //         case 'Trädhus':
  //             newSpan.innerHTML = '<img class="category-icon" src="/assets/icons/trahus.svg" alt="Trädhus Icon">';
  //             newSpan.classList.add('trädhus-category');
  //             break;
  //         case 'Glamping':
  //             newSpan.innerHTML = '<img class="category-icon" src="/assets/icons/trahus.svg" alt="Trädhus Icon">';
  //             newSpan.classList.add('trädhus-category');
  //             break;
  //         // Fortsätt med andra kategorier...
  //         default:
  //             newSpan.classList.add('default-category');
  //             break;
  //     }

  //     catContainer.append(newSpan);
  // });
  //!Här jag testar med chipsen
  // destination.categories.forEach(cat => {
  //     const categorySpan = document.createElement('span');
  //     categorySpan.textContent = cat;

  //     // // Lägg till klass baserat på kategorinamnet
  //     // categorySpan.classList.add('category-text', `${cat.toLowerCase()}-category`);

  //     const iconSpan = document.createElement('span');
  //    // iconSpan.classList.add('material-icons', 'category-icon');
  //     iconSpan.classList.add('material-symbols-outlined"');

  //     switch (cat) {
  //         case 'Glashus':
  //             iconSpan.textContent = 'home';
  //             break;
  //         case 'Trädhus':
  //             iconSpan.textContent = 'tree';
  //             break;
  //         case 'Glamping':
  //             iconSpan.textContent = 'camp';
  //             break;
  //         // Fortsätt med andra kategorier...
  //         default:
  //             iconSpan.textContent = 'category';
  //             break;
  //     }

  //     catContainer.appendChild(categorySpan);
  //     catContainer.appendChild(iconSpan);
  // });

  const likeButton = card.querySelector(".like-icon");
  likeButton.addEventListener("click", () => {
    const isLiked = likeButton.getAttribute("data-liked") === "true";
    const fillCon = document.querySelector(".links-container");
    const klarbtn = fillCon.querySelector("#okBtn");
    console.log(fillCon);
    console.log("klick");
    const popUp = document.querySelector(".overlay");
    fillCon.classList.toggle("show");
    klarbtn.addEventListener("click", () => {
      fillCon.classList.remove("show");
      setTimeout(() => {
        popUp.classList.add("show");
      }, 500);
      setTimeout(() => {
        popUp.classList.remove("show");
      }, 3000);
    });
    if (isLiked) {
      likeButton.src = "/assets/icons/heart-like-large-card.svg";
      likeButton.setAttribute("data-liked", "false");
    } else {
      likeButton.src = "/assets/icons/heartIconFilled.svg";
      likeButton.setAttribute("data-liked", "true");
    }
  });

  //!Här kommer chipsen med kategori och bilder/ikoner ut

  destination.categories.forEach((cat) => {
    const newSpan = document.createElement("span");

    // Skapa ett <img> element för ikonen från Google Material Icons
    const icon = document.createElement("img");
    // Skapa en variabel för att lagra sökvägen till ikonen baserat på kategorin
    let iconPath;
    // Använd en switch-sats för att välja ikonen baserat på kategorin
    switch (cat) {
      case "Glashus":
        iconPath = "/assets/icons/glashus_01.svg";
        newSpan.classList.add("glashus"); // Lägg till klassen för specifik färg
        break;
      case "Trädhus":
        iconPath = "/assets/icons/trahus_01.svg";
        newSpan.classList.add("tradhus"); // Lägg till klassen för specifik färg
        break;
      case "Glamping":
        iconPath = "/assets/icons/glamping_01.svg";
        newSpan.classList.add("glamping"); // Lägg till klassen för specifik färg
        break;
      case "Camping":
        iconPath = "/assets/icons/Camping_01.svg";
        newSpan.classList.add("camping"); // Lägg till klassen för specifik färg
        break;
      case "Nära vatten":
        iconPath = "/assets/icons/naravatten_01.svg";
        newSpan.classList.add("naravatten"); // Lägg till klassen för specifik färg
        break;
      case "Romatiskt":
        iconPath = "/assets/icons/romantiskt_01.svg";
        newSpan.classList.add("romantiskt"); // Lägg till klassen för specifik färg
        break;
      default:
        iconPath = ""; // Om ingen matchning hittas, lämna sökvägen tom
        break;
    }
    // Ange källan till ikonen
    icon.src = iconPath;

    // Skapa en textnod för kategorinamnet
    const categoryName = document.createTextNode(cat);

    // Lägg till både ikon och kategorinamn i det nya span-elementet
    newSpan.appendChild(icon);
    newSpan.appendChild(categoryName);

    // Lägg till klassen för stil på ditt span-element
    newSpan.classList.add("style-chips");

    // Lägg till det nya span-elementet till din container (antagligen catContainer i ditt fall)
    catContainer.append(newSpan);
  });

  //! Rating bollarna i kortet
  link.setAttribute("href", destination.htmlUrl);
  header.textContent = destination.name;
  img.setAttribute("src", `assets/${destination.imageURL}`);
  header.textContent = destination.name;
  info.textContent = destination.info;
  location.textContent = destination.location;
  rating.textContent = destination.rating;

  const circleBox = card.querySelector("div.circle-box");
  circleBox.innerHTML =
    `<div class="ellipse"></div>`.repeat(Math.floor(destination.rating)) +
    `<div class="ellipse border"></div>`.repeat(
      5 - Math.floor(destination.rating)
    );

  dataUserCards.append(card);
}
function render() {
  let filteredRecipies = [...recipies];
  if (filters.search.length > 0) {
    const search = filters.search.toLowerCase();
    filteredRecipies = filteredRecipies.filter((r) =>
      r.name.toLowerCase().includes(search)
    );
  }
  if (filters.categories.length > 0) {
    console.log(filteredRecipies);
    filteredRecipies = filteredRecipies.filter((r) =>
      filters.categories.every((f) => r.categories.includes(f))
    );
  }

  dataUserCards.innerHTML = "";
  filteredRecipies.forEach((recept) => createCard(recept));
}
catyChips.forEach((chip) => {
  chip.addEventListener("change", (e) => {
    const currentCat = e.target.dataset.cat;
    toggleItemArray(currentCat, filters.categories);
    render();
  });
});

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

