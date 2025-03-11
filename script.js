document.getElementById('searchButton').addEventListener('click', function() {
    const searchInput = document.getElementById('searchInput').value.trim();
    if (searchInput) {
        fetchCharacters(searchInput);
    } else {
        alert('Por favor, introduce el nombre de un personaje.');
    }
});

function fetchCharacters(query) {
    const url = `https://rickandmortyapi.com/api/character/?name=${query}`;
   
    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.results && data.results.length > 0) {
                displayResults(data.results);
            } else {
                displayMessage('No se encontraron personajes con ese nombre.');
            }
        })
        .catch(error => {
            console.error('Error al buscar personajes:', error);
            displayMessage('Hubo un error al obtener los datos.');
        });
}

function displayResults(characters) {
    const resultsContainer = document.getElementById('resultsContainer');
    resultsContainer.innerHTML = ''; // Limpiar resultados previos

    characters.forEach(character => {
        const characterCard = document.createElement('div');
        characterCard.classList.add('character-card');
       
        characterCard.innerHTML = `
            <img src="${character.image}" alt="${character.name}">
            <h3>${character.name}</h3>
            <p>Estado: ${character.status}</p>
            <p>Especie: ${character.species}</p>
        `;

        resultsContainer.appendChild(characterCard);
    });
}

function displayMessage(message) {
    const resultsContainer = document.getElementById('resultsContainer');
    resultsContainer.innerHTML = `<p>${message}</p>`;
}
