document.addEventListener("DOMContentLoaded", () => {
    const gridContainer = document.getElementById("grid-container");
    const modal = document.getElementById("modal");
    const modalImage = document.getElementById("modal-image");
    const modalName = document.getElementById("modal-name");
    const modalLocation = document.getElementById("modal-location");
    const modalOrigin = document.getElementById("modal-origin");
    const closeBtn = document.querySelector(".close");

    fetch("https://rickandmortyapi.com/api/character")
        .then(response => response.json())
        .then(data => {
            data.results.forEach(character => {
                const card = document.createElement("div");
                card.classList.add("card");
                card.innerHTML = `
                    <img src="${character.image}" alt="${character.name}">
                    <h2>${character.name}</h2>
                `;
                card.addEventListener("click", () => {
                    modalImage.src = character.image;
                    modalName.textContent = character.name;
                    modalLocation.textContent = character.location.name;
                    modalOrigin.textContent = character.origin.name;
                    modal.style.display = "block";
                });
                gridContainer.appendChild(card);
            });
        });

    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});
