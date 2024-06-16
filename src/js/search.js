document.addEventListener('DOMContentLoaded', function() {
    var searchInput = document.getElementById('searchInput');
    if (searchInput) {
      searchInput.addEventListener('input', function() {
        var inputValue = searchInput.value.toLowerCase();
        console.log(inputValue);
      });
    } else {
      console.error('Aucun résultat');
    }
  });