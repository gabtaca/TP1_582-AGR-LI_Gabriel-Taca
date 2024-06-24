/** Tout ce fichier est inutile */

document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
      searchInput.addEventListener('input', function() {
        const inputValue = searchInput.value.toLowerCase();
        /** Console */
        console.log(inputValue);
      });
    } else {
      console.error('Aucun résultat');
    }
  });