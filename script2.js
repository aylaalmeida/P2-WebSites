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
    document.getElementById('modal').style.display = "none";
}

function toggleTheme() {
    document.body.classList.toggle('dark-theme');
}
