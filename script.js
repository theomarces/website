// Sélectionner les boutons de catégorie
const buttons = document.querySelectorAll('button[data-category]');
const images = Array.from(document.querySelectorAll('figure')); // Convertir en tableau pour manipulation facile
const imageContainer = document.querySelector('.grid1'); // Conteneur des images

// Fonction pour mélanger un tableau
function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
}

// Fonction pour mettre à jour la grille avec un nouvel ordre
function updateGrid(images) {
    imageContainer.innerHTML = ''; // Vider le conteneur
    images.forEach(image => imageContainer.appendChild(image)); // Ajouter les images dans le nouvel ordre
}

// Mélanger les images uniquement dans "all"
document.addEventListener('DOMContentLoaded', () => {
    const shuffledImages = shuffleArray(images); // Mélanger les images au chargement initial
    updateGrid(shuffledImages);
});

// Ajouter un événement de clic sur chaque bouton
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const category = button.getAttribute('data-category'); // Catégorie choisie

        // Mettre à jour la classe active des boutons
        buttons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        // Filtrer les images en fonction des catégories sélectionnées
        let filteredImages;
        if (category === 'all') {
            // Mélanger toutes les images si la catégorie est "all"
            filteredImages = shuffleArray(images);
        } else {
            // Afficher les images dans leur ordre d'origine pour les autres catégories
            filteredImages = images.filter(image => {
                const imageCategories = image.getAttribute('data-category').split(' '); // Obtenir les catégories
                return imageCategories.includes(category); // Garder si au moins une correspond
            });
        }

        // Mettre à jour la grille avec les images filtrées
        updateGrid(filteredImages); // Affichage ordonné pour les catégories spécifiques
    });
});
