
//!Till filter tabsen i saved destinations och mappar
document.addEventListener('DOMContentLoaded', function() {
    // Hämta sidans URL
    var currentPageUrl = window.location.href;
    
    // Kolla om "savedDestinations.html" finns i URL:en
    if (currentPageUrl.includes('savedDestinations.html')) {
      // Om "savedDestinations.html" finns, lägg till 'active' klassen på "Besöksmål" fliken
      document.querySelector('.saved-box').classList.add('active');
    } else {
      // Om "savedDestinations.html" inte finns, lägg till 'active' klassen på "Mappar" fliken
      document.querySelector('.maps-box').classList.add('active');
    }
  
    // Lägg till click-event lyssnare för att hantera flikval
    document.querySelector('.icon-mapp-box').addEventListener('click', function(event) {
      // Ta bort 'active' klassen från alla flikar
      document.querySelectorAll('.icon-mapp-box .active').forEach(tab => {
        tab.classList.remove('active');
      });
      // Lägg till 'active' klassen på den klickade fliken
      event.target.closest('div').classList.add('active');
    });
  });
  