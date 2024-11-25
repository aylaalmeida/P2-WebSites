function showDetails(character) {
    const details = {
        chihiro: {
            name: "Chihiro",
            description: "Chihiro é uma garota de dez anos que, ao se mudar para uma nova cidade, descobre um mundo mágico cheio de espíritos e criaturas estranhas."
        },
        haku: {
            name: "Haku",
            description: "Haku é um espírito que ajuda Chihiro em sua jornada pelo mundo mágico. Ele é gentil e protetor, embora tenha seus próprios segredos."
        },
        yubaba: {
            name: "Yubaba",
            description: "Yubaba é a poderosa e temível bruxa que controla o banho espiritual onde Chihiro trabalha. Ela é conhecida por sua ganância e astúcia."
        }
    };
    
    const characterDetails = details[character];
    document.getElementById('modal-details').innerHTML = `
        <h2>${characterDetails.name}</h2>
        <p>${characterDetails.description}</p>
    `;
    document.getElementById('modal').style.display = "block";
}

function closeModal() {
    const modal = document.getElementById('trailer-modal');
    const video = document.getElementById('trailer-video');
    video.src = "";
    modal.style.display = "none";
}

function toggleTheme() {
    document.body.classList.toggle('dark-theme');
    updateButtonText();
}

function updateButtonText() {
    const button = document.getElementById('theme-toggle');
    if (document.body.classList.contains('dark-theme')) {
        button.textContent = "Alternar para Tema Claro";
    } else {
        button.textContent = "Alternar para Tema Escuro";
    }
}

document.addEventListener('DOMContentLoaded', updateButtonText);

function showTrailer(url) {
    const modal = document.getElementById('trailer-modal');
    const video = document.getElementById('trailer-video');
    video.src = url;
    modal.style.display = "block";
}