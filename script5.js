function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const successMessage = document.getElementById('success-message');
    
    // verifica campo preenchidos
    if (name && email && message) {
        // exibe a mensagem de sucesso
        successMessage.style.display = 'block';

        // limpa o formulário
        document.getElementById('form').reset();

        // impede o envio real do formulário
        return false;
    } else {
        successMessage.style.display = 'none';
        alert('Por favor, preencha todos os campos.');
        return false;
    }
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