var cells = document.querySelectorAll('.cell');

cells.forEach(function(cell) {
  cell.addEventListener('click', function() {
    // Code à exécuter lorsqu'une cellule est cliquée
  });
});
var gameState = [
    // Tableau représentant l'état du jeu (bombes, nombres, etc.)
  ];
  
  // Fonction pour mettre à jour l'affichage du jeu en fonction de l'état du gameState
  function updateGameDisplay() {
    // Code pour mettre à jour l'affichage en fonction de l'état du jeu
  }
  
  // Fonction pour gérer les actions lorsqu'une cellule est cliquée
  function handleCellClick(cell) {
    // Code pour gérer les actions lorsqu'une cellule est cliquée
  }
  
  cells.forEach(function(cell) {
    cell.addEventListener('click', function() {
      handleCellClick(cell);
    });
  });
  // Fonction pour vérifier les cellules voisines et compter les bombes voisines
function checkNeighboringCells(cell) {
    // Code pour vérifier les cellules voisines et compter les bombes voisines
  }
  
  // Fonction pour gérer les actions lorsqu'une cellule est cliquée
  function handleCellClick(cell) {
    // Vérifier si la cellule contient une bombe
    if (cell.classList.contains('bomb')) {
      // Gérer l'action lorsque la cellule contient une bombe (ex : game over)
    } else {
      // Vérifier les cellules voisines et compter les bombes voisines
      checkNeighboringCells(cell);
      // Mettre à jour l'affichage du jeu
      updateGameDisplay();
    }
  }
  // Fonction pour gérer les actions lorsqu'une cellule est cliquée avec le bouton droit de la souris
function handleCellRightClick(cell) {
    // Code pour gérer les actions lorsqu'une cellule est cliquée avec le bouton droit de la souris
  }
  
  cells.forEach(function(cell) {
    cell.addEventListener('click', function() {
      handleCellClick(cell);
    });
  
    cell.addEventListener('contextmenu', function(e) {
      e.preventDefault(); // Empêcher l'apparition du menu contextuel par défaut
      handleCellRightClick(cell);
    });
  });