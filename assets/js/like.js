//! JavaScript för att försöka få hjärtat att gillas när man klickar på det
// const  likeIcons = document.querySelectorAll('.like-icon');
// console.log(likeIcons);
// likeIcons.forEach(icon => {
//     icon.addEventListener('click', () => {
//         const isLiked = icon.getAttribute('data-liked') === 'true';
//         console.log('klick');
//         if (isLiked) {
//             icon.src = '/assets/icons/heart-like-large-card.svg';
//             icon.setAttribute('data-liked', 'false');
//         } else {
//             icon.src = '/assets/icons/heartIconFilled.svg';
//             icon.setAttribute('data-liked', 'true');
//         }
//     });
// });


// document.addEventListener('DOMContentLoaded', function() {
//     const likeIcon = document.querySelector('.like-icon');
  
//     // Lägg till en händelselyssnare för klickhändelsen
//     likeIcon.addEventListener('click', function() {
//       // Byt klass från "material-symbols-outlined" till "material-symbols-filled"
//       likeIcon.classList.toggle('material-symbols-outlined');
//       likeIcon.classList.toggle('material-symbols-filled');
//     });
//   });
  






//   document.addEventListener('DOMContentLoaded', function() {
//     const likeIcon = document.querySelector('.like-icon');
  
//     // Lägg till en händelselyssnare för klickhändelsen
//     likeIcon.addEventListener('click', function() {
//         // Kontrollera om "material-symbols-filled" redan finns
//         if (likeIcon.classList.contains('material-symbols-filled')) {
//             // Om det finns, ta bort "material-symbols-filled" och lägg till "material-symbols-outlined"
//             likeIcon.classList.remove('material-symbols-filled');
//             likeIcon.classList.add('material-symbols-outlined');
//         } else {
//             // Om det inte finns, ta bort "material-symbols-outlined" och lägg till "material-symbols-filled"
//             likeIcon.classList.remove('material-symbols-outlined');
//             likeIcon.classList.add('material-symbols-filled');
//         }
//     });
// });

// const likeIcons = document.querySelectorAll('.like-icon');

// likeIcons.forEach(icon => {
//     icon.addEventListener('click', () => {
//         const isLiked = icon.classList.contains('liked');
        
//         if (isLiked) {
//             icon.classList.remove('liked');
//             icon.src = '/assets/icons/heartIconFilled.svg'; // Byt till önskad sökväg för outline-hjärta
//         } else {
//             icon.classList.add('liked');
//             icon.src = '/assets/icons/heartIconFilled.svg'; // Byt till önskad sökväg för fyllt hjärta
//         }
//     });
// });

// const likeIcons = document.querySelectorAll('.like-icon');

// likeIcons.forEach(icon => {
//     icon.addEventListener('click', () => {
//         const isLiked = icon.getAttribute('data-liked') === 'true';
        
//         if (isLiked) {
//             icon.textContent = 'favorite_border'; // ändra till oulined hjärta
//             icon.setAttribute('data-liked', 'false');
//         } else {
//             icon.textContent = 'favorite'; // ändra till fyllt hjärta
//             icon.setAttribute('data-liked', 'true');
//         }
//     });
// });

// const likeIcons = document.querySelectorAll('.like-icon');

// likeIcons.forEach(icon => {
//     icon.addEventListener('click', () => {
//         const isLiked = icon.getAttribute('data-liked') === 'true';
        
//         if (isLiked) {
//             icon.textContent = 'heart_plus'; // ändra till oulined hjärta
//             icon.setAttribute('data-liked', 'false');
//             icon.classList.remove('liked');
//         } else {
//             icon.textContent = 'favorite'; // ändra till fyllt hjärta
//             icon.setAttribute('data-liked', 'true');
//             icon.classList.add('liked');
//         }
//     });
// });
// document.addEventListener('DOMContentLoaded', () => {
//     const likeIcons = document.querySelectorAll('.like-icon');
//     console.log("JavaScript-kod körs!");
//     console.log(likeIcons);

//     likeIcons.forEach(icon => {
//         icon.addEventListener('click', () => {
//             console.log("Hjärtikon klickad!");
//             const isLiked = icon.getAttribute('data-liked') === 'true';
//             console.log("IsLiked: ", isLiked);
//             if (isLiked) {
//                 icon.textContent = 'favorite_border'; // ändra till oulined hjärta
//                 icon.setAttribute('data-liked', 'false');
//                 icon.classList.remove('liked');
//             } else {
//                 icon.textContent = 'favorite'; // ändra till fyllt hjärta
//                 icon.setAttribute('data-liked', 'true');
//                 icon.classList.add('liked');
//             }
//         });
//     });
// });



// document.addEventListener('DOMContentLoaded', () => {
//     const likeIcons = document.querySelectorAll('.like-icon');

//     likeIcons.forEach(icon => {
//         icon.addEventListener('click', () => {
//             const isLiked = icon.getAttribute('data-liked') === 'true';
            
//             if (isLiked) {
//                 icon.classList.remove('filled'); // Ta bort klassen om det är markerat som "gillat"
//                 icon.setAttribute('data-liked', 'false');
//             } else {
//                 icon.classList.add('filled'); // Lägg till klassen om det inte är markerat som "gillat"
//                 icon.setAttribute('data-liked', 'true');
//             }
//         });
//     });
// });

document.addEventListener('DOMContentLoaded', () => {
    const likeIcons = document.querySelectorAll('.like-icon');

    likeIcons.forEach(icon => {
        icon.addEventListener('click', () => {
            icon.classList.toggle('filled'); 
            icon.setAttribute('data-liked', icon.classList.contains('filled')); 
        });
    });
});
