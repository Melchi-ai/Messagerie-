// scripts.js

// Fonction pour envoyer un message
function sendMessage() {
    const messageInput = document.querySelector('.message-input input');
    const messageText = messageInput.value.trim();

    if (messageText === '') {
        return;
    }

    // Créer un nouvel élément pour le message
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', 'sent');
    messageElement.innerHTML = `<p>${messageText}</p>`;

    // Ajouter le message à la boîte de chat
    const chatBox = document.querySelector('.chat-box');
    chatBox.appendChild(messageElement);

    // Effacer le champ de saisie
    messageInput.value = '';

    // Faire défiler vers le bas pour afficher le dernier message
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Fonction pour afficher la section de chat après la connexion
function showChat() {
    document.querySelector('.login').style.display = 'none';
    document.querySelector('.chat').style.display = 'block';
}

// Gérer la connexion
document.querySelector('.login form').addEventListener('submit', (event) => {
    event.preventDefault();
    // Ici, tu pourrais ajouter la logique pour vérifier le numéro de téléphone et effectuer la connexion

    // Afficher la section de chat après la connexion
    showChat();
});

// Gérer l'envoi des messages
document.querySelector('.message-input button').addEventListener('click', () => {
    sendMessage();
});

// Gérer l'envoi des messages avec la touche Enter
document.querySelector('.message-input input').addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        sendMessage();
        event.preventDefault();
    }
});