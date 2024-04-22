//! JavaScript för att försöka få hjärtat att gillas när man klickar på det
const likeIcons = document.querySelectorAll('.like-icon');

likeIcons.forEach(icon => {
    icon.addEventListener('click', () => {
        const isLiked = icon.getAttribute('data-liked') === 'true';

        if (isLiked) {
            icon.src = '/assets/icons/heart-like-large-card.svg';
            icon.setAttribute('data-liked', 'false');
        } else {
            icon.src = '/assets/icons/heartIconFilled.svg';
            icon.setAttribute('data-liked', 'true');
        }
    });
});


