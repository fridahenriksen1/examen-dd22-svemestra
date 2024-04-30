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
  
  document.addEventListener('DOMContentLoaded', function() {
    const likeIcon = document.querySelector('.like-icon');
  
    // Lägg till en händelselyssnare för klickhändelsen
    likeIcon.addEventListener('click', function() {
        // Kontrollera om "material-symbols-filled" redan finns
        if (likeIcon.classList.contains('material-symbols-filled')) {
            // Om det finns, ta bort "material-symbols-filled" och lägg till "material-symbols-outlined"
            likeIcon.classList.remove('material-symbols-filled');
            likeIcon.classList.add('material-symbols-outlined');
        } else {
            // Om det inte finns, ta bort "material-symbols-outlined" och lägg till "material-symbols-filled"
            likeIcon.classList.remove('material-symbols-outlined');
            likeIcon.classList.add('material-symbols-filled');
        }
    });
});

